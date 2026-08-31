import React, { useEffect, useRef } from 'react';

export interface FireCanvasProps {
  intensity?: number; // 0.0 to 2.0+
  colorMode?: 'amber' | 'orange' | 'red' | 'blue';
  vortex?: boolean;
  className?: string;
}

export const FireCanvas: React.FC<FireCanvasProps> = ({ 
  intensity = 1.0, 
  colorMode = 'orange',
  vortex = false,
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: any[] = [];
    let time = 0;

    const resize = () => {
      // Use parent container size
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    // Configuration based on intensity and mode
    const count = Math.floor(150 * intensity);
    const speedBase = 3 * intensity;
    
    let baseR = 249, baseG = 115, baseB = 22; // orange-500
    if (colorMode === 'amber') { baseR = 251; baseG = 191; baseB = 36; }
    if (colorMode === 'red') { baseR = 239; baseG = 68; baseB = 68; }
    if (colorMode === 'blue') { baseR = 59; baseG = 130; baseB = 246; }

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * speedBase - 1,
        life: Math.random(),
        maxLife: Math.random() * 50 + 50,
        size: Math.random() * 8 * intensity + 2,
        offset: Math.random() * Math.PI * 2
      });
    }

    const draw = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach(p => {
        // Physics
        if (vortex) {
          // Vortex pull toward center + rotation
          const dx = centerX - p.x;
          const dy = centerY - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          
          p.vx += (dx / dist) * 0.1 * intensity;
          p.vy += (dy / dist) * 0.1 * intensity;
          
          // Tangential velocity (spiral)
          p.x += -dy * 0.02 * intensity;
          p.y += dx * 0.02 * intensity;
        } else {
          // Standard upward fire
          p.x += p.vx + Math.sin(time + p.offset) * 0.5 * intensity;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        // Reset particle
        if (p.life > p.maxLife || p.y < -50 || p.x < -50 || p.x > canvas.width + 50 || p.y > canvas.height + 50) {
          p.life = 0;
          p.maxLife = Math.random() * 50 + 50;
          if (vortex) {
            // Spawn around edges for vortex
            const angle = Math.random() * Math.PI * 2;
            const spawnRadius = Math.max(canvas.width, canvas.height) / 2;
            p.x = centerX + Math.cos(angle) * spawnRadius;
            p.y = centerY + Math.sin(angle) * spawnRadius;
            p.vx = (Math.random() - 0.5) * 2;
            p.vy = (Math.random() - 0.5) * 2;
          } else {
            // Spawn at bottom for standard fire
            p.x = Math.random() * canvas.width;
            p.y = canvas.height + 10;
            p.vy = -Math.random() * speedBase - 1;
            p.vx = (Math.random() - 0.5) * 2;
          }
          p.size = Math.random() * 8 * intensity + 2;
        }

        // Draw
        const progress = p.life / p.maxLife; // 0 to 1
        const opacity = Math.sin(progress * Math.PI); // fade in and out

        // Change color slightly based on life (warmer when young, darker/redder when old)
        const currentR = Math.min(255, baseR + (1 - progress) * 50);
        const currentG = Math.max(0, baseG - progress * 100);
        const currentB = Math.max(0, baseB - progress * 100);

        ctx.beginPath();
        
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        g.addColorStop(0, `rgba(${currentR}, ${currentG}, ${currentB}, ${opacity})`);
        g.addColorStop(1, `rgba(${currentR}, ${currentG}, ${currentB}, 0)`);
        
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [intensity, colorMode, vortex]);

  return (
    <canvas 
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-1000 ${className}`}
    />
  );
};
