import React, { useEffect, useRef } from 'react';

export const AdvancedWaterCanvas: React.FC<{ stage: number }> = ({ stage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let animationFrame: number;
    let ripples: {x: number, y: number, life: number, maxLife: number}[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.02;
      
      // Clear with dark teal background
      ctx.fillStyle = stage === 5 ? '#000000' : 'rgba(0, 10, 15, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (stage === 5) {
        // Complete stillness
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      ctx.save();
      ctx.translate(0, canvas.height / 2);

      // Waves (Stage 1 to 4)
      const numWaves = stage >= 3 ? 5 : 2;
      for (let i = 0; i < numWaves; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          let amplitude = 20;
          let frequency = 0.002;
          
          if (stage >= 2) amplitude = 40;
          if (stage >= 3) { amplitude = 80 + i * 20; frequency = 0.003; }
          if (stage === 4) { amplitude = 120 + i * 30; frequency = 0.004; }

          const y = Math.sin(x * frequency + time * (1 + i * 0.2) + i) * amplitude * Math.sin(time * 0.5 + x * 0.001);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.lineTo(0, canvas.height / 2);
        
        const gradient = ctx.createLinearGradient(0, -100, 0, canvas.height / 2);
        if (stage === 1) {
          gradient.addColorStop(0, 'rgba(20, 184, 166, 0.1)');
          gradient.addColorStop(1, 'rgba(8, 145, 178, 0.3)');
        } else if (stage === 2) {
          gradient.addColorStop(0, 'rgba(8, 145, 178, 0.15)');
          gradient.addColorStop(1, 'rgba(30, 64, 175, 0.4)');
        } else if (stage === 3) {
          gradient.addColorStop(0, 'rgba(30, 64, 175, 0.2)');
          gradient.addColorStop(1, 'rgba(49, 46, 129, 0.6)');
        } else {
          gradient.addColorStop(0, 'rgba(49, 46, 129, 0.3)');
          gradient.addColorStop(1, 'rgba(88, 28, 135, 0.8)');
        }

        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Highlights
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.stroke();
      }
      ctx.restore();

      // Ripples (Stage 2 and 4)
      if ((stage === 2 || stage === 4) && Math.random() < 0.03) {
        ripples.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          life: 0,
          maxLife: 150
        });
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.life++;
        if (r.life > r.maxLife) {
          ripples.splice(i, 1);
          continue;
        }

        const radius = (r.life / r.maxLife) * 200;
        const opacity = 1 - (r.life / r.maxLife);
        
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(45, 212, 191, ${opacity * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Deep Current Particles (Stage 4)
      if (stage === 4) {
        for (let i = 0; i < 20; i++) {
          const x = (time * 100 + i * 50) % canvas.width;
          const y = canvas.height * 0.8 + Math.sin(time * 2 + i) * 100;
          
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(249, 115, 22, 0.4)'; // Orange hints
          ctx.fill();
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [stage]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-70">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
