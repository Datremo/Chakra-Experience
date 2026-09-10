import React, { useEffect, useRef, useState } from 'react';

export type ManipuraImageKey =
  | 'spark'
  | 'jewel'
  | 'navel'
  | 'forge'
  | 'agency'
  | 'ram'
  | 'sun'
  | 'horizon';

const imagePaths: Record<ManipuraImageKey, string> = {
  spark: '/assets/manipura/01-spark-dawn.webp',
  jewel: '/assets/manipura/02-jewel-city.webp',
  navel: '/assets/manipura/03-navel-fire.webp',
  forge: '/assets/manipura/04-inner-forge.webp',
  agency: '/assets/manipura/05-human-agency.webp',
  ram: '/assets/manipura/06-ram-chamber.webp',
  sun: '/assets/manipura/07-inner-sun.webp',
  horizon: '/assets/manipura/08-fire-to-air.webp',
};

interface CinematicBackdropProps {
  image?: ManipuraImageKey;
  tone?: 'ember' | 'gold' | 'crimson' | 'neutral';
  vignette?: number;
  grid?: boolean;
}

export const CinematicBackdrop: React.FC<CinematicBackdropProps> = ({
  image,
  tone = 'ember',
  vignette = 0.9,
  grid = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const sparks = Array.from({ length: 52 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.0007 + Math.random() * 0.0018,
      drift: (Math.random() - 0.5) * 0.0007,
      size: 0.5 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.08 + Math.random() * 0.28,
      seed: i,
    }));

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      const g = ctx.createRadialGradient(
        width * 0.5,
        height * (tone === 'crimson' ? 0.58 : 0.62),
        0,
        width * 0.5,
        height * 0.55,
        Math.max(width, height) * 0.72,
      );
      if (tone === 'gold') {
        g.addColorStop(0, 'rgba(255,190,64,0.11)');
        g.addColorStop(0.48, 'rgba(180,82,12,0.08)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
      } else if (tone === 'crimson') {
        g.addColorStop(0, 'rgba(255,84,40,0.14)');
        g.addColorStop(0.5, 'rgba(135,24,9,0.10)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
      } else if (tone === 'neutral') {
        g.addColorStop(0, 'rgba(255,198,100,0.08)');
        g.addColorStop(0.5, 'rgba(104,64,27,0.08)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
      } else {
        g.addColorStop(0, 'rgba(255,126,26,0.13)');
        g.addColorStop(0.5, 'rgba(171,60,10,0.08)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      sparks.forEach((s) => {
        s.y -= s.speed;
        s.x += s.drift + Math.sin(t * 0.01 + s.phase) * 0.00012;
        if (s.y < -0.02) { s.y = 1.02; s.x = Math.random(); }
        if (s.x < -0.03) s.x = 1.03;
        if (s.x > 1.03) s.x = -0.03;

        const pulse = 0.55 + 0.45 * Math.sin(t * 0.04 + s.phase);
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.size * (0.7 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${150 + Math.round(60 * pulse)}, 65, ${s.alpha * pulse})`;
        ctx.fill();
      });

      if (grid) {
        ctx.save();
        ctx.globalAlpha = 0.06;
        ctx.strokeStyle = 'rgba(255, 210, 140, 0.35)';
        ctx.lineWidth = 1;
        const step = 72;
        for (let x = 0; x < width; x += step) {
          ctx.beginPath();
          ctx.moveTo(x + (t % step) * 0.03, 0);
          ctx.lineTo(x + (t % step) * 0.03, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, [tone, grid]);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {image && !failed && (
        <img
          src={imagePaths[image]}
          alt=""
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30 scale-[1.06]"
          style={{ filter: 'saturate(0.9) contrast(1.05) brightness(0.72)' }}
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,149,42,.08),transparent_44%),linear-gradient(180deg,rgba(5,2,0,.28),rgba(5,2,0,.9))]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full mix-blend-screen opacity-80" />
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 50%, transparent 18%, rgba(0,0,0,${vignette}) 100%)` }} />
    </div>
  );
};
