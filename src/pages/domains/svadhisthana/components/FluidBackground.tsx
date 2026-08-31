import React, { useEffect, useRef } from 'react';

export const FluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Vibrant, magical orbs
    const orbs = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 250 + 100,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5 - 0.5,
      color: Math.random() > 0.4 ? 'rgba(249, 115, 22, ' : 'rgba(20, 184, 166, ',
      opacity: Math.random() * 0.4 + 0.1
    }));

    // Mandala properties
    const mandalas = [
      { x: 0.2, y: 0.3, radius: 400, speed: 0.001, petals: 12, color: 'rgba(249, 115, 22, 0.08)' },
      { x: 0.8, y: 0.7, radius: 600, speed: -0.0008, petals: 6, color: 'rgba(20, 184, 166, 0.1)' },
      { x: 0.5, y: 0.5, radius: 800, speed: 0.0005, petals: 24, color: 'rgba(253, 186, 116, 0.05)' }
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const drawMandala = (ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number, petals: number, rotation: number, color: string) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < petals; i++) {
        ctx.rotate((Math.PI * 2) / petals);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(radius / 2, radius / 2, radius, 0);
        ctx.quadraticCurveTo(radius / 2, -radius / 2, 0, 0);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(radius * 0.75, 0, radius * 0.1, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    };

    const draw = () => {
      time += 0.005;
      
      // Base vibrant background
      const baseGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      baseGradient.addColorStop(0, '#0c242e'); 
      baseGradient.addColorStop(0.5, '#3b1803'); 
      baseGradient.addColorStop(1, '#061720'); 
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw moving mandalas
      mandalas.forEach(m => {
        drawMandala(ctx, canvas.width * m.x, canvas.height * m.y, m.radius, m.petals, time * m.speed * 100, m.color);
      });

      // Draw glowing orbs
      orbs.forEach(orb => {
        orb.x += orb.vx + Math.sin(time + orb.y * 0.01) * 0.5;
        orb.y += orb.vy;

        // Wrap around
        if (orb.y + orb.radius < 0) orb.y = canvas.height + orb.radius;
        if (orb.y - orb.radius > canvas.height) orb.y = -orb.radius;
        if (orb.x + orb.radius < 0) orb.x = canvas.width + orb.radius;
        if (orb.x - orb.radius > canvas.width) orb.x = -orb.radius;

        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        g.addColorStop(0, `${orb.color}${orb.opacity})`);
        g.addColorStop(1, `${orb.color}0)`);
        
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Flowing bright caustics
      ctx.strokeStyle = 'rgba(253, 186, 116, 0.08)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width + 50; x += 50) {
          const y = Math.sin(x * 0.002 + time + i) * (150 + i * 30) + (canvas.height * 0.5);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-100 mix-blend-screen"
      />
    </div>
  );
};
