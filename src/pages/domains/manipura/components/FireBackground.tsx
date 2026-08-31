import React, { useEffect, useRef, useState } from 'react';

export const FireBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Glowing embers
    const orbs = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 8 + 2,
      vx: (Math.random() - 0.5) * 0.5,
      vy: Math.random() * -1 - 0.2, // always floating up
      opacity: Math.random() * 0.4 + 0.1,
      flickerSpeed: Math.random() * 0.05 + 0.01,
      flickerOffset: Math.random() * Math.PI * 2
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.005;
      
      // Base dark ember background
      const baseGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      baseGradient.addColorStop(0, '#0a0300'); // nearly black at top
      baseGradient.addColorStop(0.5, '#140500'); // dark ember
      baseGradient.addColorStop(1, '#050100'); // deep dark
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flowing heat waves (caustics)
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.03)';
      ctx.lineWidth = 4;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width + 100; x += 100) {
          const y = Math.sin(x * 0.003 + time * 2 + i) * 100 - (time * 50 % canvas.height) + canvas.height + (i * 200);
          // Wrapping the y coordinate to loop upward
          const wrappedY = (y % (canvas.height + 200)) - 100;
          if (x === 0) ctx.moveTo(x, wrappedY);
          else ctx.lineTo(x, wrappedY);
        }
        ctx.stroke();
      }

      // Draw embers
      orbs.forEach(orb => {
        orb.x += orb.vx + Math.sin(time * 10 + orb.y * 0.01) * 0.5;
        orb.y += orb.vy;

        // Wrap around
        if (orb.y + orb.radius < 0) orb.y = canvas.height + orb.radius;
        if (orb.x + orb.radius < 0) orb.x = canvas.width + orb.radius;
        if (orb.x - orb.radius > canvas.width) orb.x = -orb.radius;

        // Flicker effect
        const currentOpacity = orb.opacity * (0.5 + 0.5 * Math.sin(time * 100 * orb.flickerSpeed + orb.flickerOffset));

        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        g.addColorStop(0, `rgba(251, 191, 36, ${currentOpacity})`); // Amber
        g.addColorStop(0.4, `rgba(249, 115, 22, ${currentOpacity * 0.8})`); // Orange
        g.addColorStop(1, 'rgba(249, 115, 22, 0)');
        
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Mouse interaction glow
      const distToCenter = Math.hypot(mousePos.x - canvas.width / 2, mousePos.y - canvas.height / 2);
      const maxDist = Math.hypot(canvas.width / 2, canvas.height / 2);
      const intensity = 1 - Math.min(distToCenter / maxDist, 1); // Glows brighter when closer to center

      const mouseGlow = ctx.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, 400);
      mouseGlow.addColorStop(0, `rgba(249, 115, 22, ${0.05 + intensity * 0.05})`);
      mouseGlow.addColorStop(1, 'rgba(249, 115, 22, 0)');
      
      ctx.fillStyle = mouseGlow;
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 400, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0D0400]">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-100 mix-blend-screen"
      />
    </div>
  );
};
