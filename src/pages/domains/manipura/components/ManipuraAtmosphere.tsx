import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { usePointerHeat } from '../hooks/usePointerHeat';

type Props = {
  scene?: 'spark' | 'temple' | 'forge' | 'human' | 'sun';
  intensity?: number;
  image?: string;
  className?: string;
};

const sceneImage: Record<NonNullable<Props['scene']>, string> = {
  spark: '/assets/manipura/01-spark-dawn.webp',
  temple: '/assets/manipura/02-jewel-city.webp',
  forge: '/assets/manipura/04-inner-forge.webp',
  human: '/assets/manipura/05-human-agency.webp',
  sun: '/assets/manipura/07-inner-sun.webp',
};

export const ManipuraAtmosphere: React.FC<Props> = ({ scene = 'forge', intensity = 0.8, image, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const { ref } = usePointerHeat(!reduced);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let width = 1;
    let height = 1;
    const particles = Array.from({ length: 90 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.00025 + Math.random() * 0.0007,
      size: 0.7 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
      drift: (Math.random() - 0.5) * 0.0002,
      life: Math.random(),
      id: i,
    }));

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const tick = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y -= p.speed * 16;
        p.x += p.drift * 16;
        if (p.y < -0.03) { p.y = 1.03; p.x = Math.random(); }
        if (p.x < -0.02) p.x = 1.02;
        if (p.x > 1.02) p.x = -0.02;
        const pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(time * 0.0012 + p.phase));
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 185, 60, ${0.06 + pulse * 0.16 * intensity})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [intensity, reduced]);

  return (
    <div ref={ref} aria-hidden="true" className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${image || sceneImage[scene]})`, opacity: 0.22 }}
        animate={reduced ? { scale: 1 } : { scale: [1.03, 1.07, 1.03], x: ['-1%', '1%', '-1%'], y: ['0%', '-0.5%', '0%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Light atmospheric glows (no dark gradients) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,42%),rgba(255,194,92,0.16),transparent_22%),radial-gradient(circle_at_50%_85%,rgba(255,93,24,0.18),transparent_38%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80 mix-blend-screen" />
    </div>
  );
};
