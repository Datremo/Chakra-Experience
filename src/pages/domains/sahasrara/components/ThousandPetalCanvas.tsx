import React, { useRef, useEffect } from 'react';


interface ThousandPetalCanvasProps {
  scrollYProgress: any; // from framer-motion
}

export const ThousandPetalCanvas: React.FC<ThousandPetalCanvasProps> = ({ scrollYProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let currentScroll = 0;

    // We sync the framer motion scroll progress to a local variable
    const unsubscribe = scrollYProgress.on('change', (v: number) => {
      currentScroll = v;
    });

    const draw = () => {
      // Resize canvas to window if needed
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // scrollProgress goes 0 to 1 over this section
      // Map scroll to petal count
      // Start with 2 -> 8 -> 16 -> 32 -> 64 -> 128 -> 256 -> 512 -> 1000
      
      const targetPetalCount = Math.pow(2, 1 + currentScroll * 9); // from 2^1 to 2^9.96 (~1000)
      const count = Math.min(1000, Math.floor(targetPetalCount));
      
      // Zoom out as we get more petals
      const scale = 1 - (currentScroll * 0.8); // starts at 1, goes down to 0.2

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      // Rotate whole canvas slowly over time
      const time = Date.now() * 0.0001;
      ctx.rotate(time);

      // Draw petals
      const layers = Math.ceil(count / 64) + 1; // Arbitrary layering logic to distribute 1000 petals
      let drawn = 0;

      for (let layer = 1; layer <= layers; layer++) {
        const petalsInLayer = Math.min(count - drawn, layer * 16); 
        if (petalsInLayer <= 0) break;

        const radius = layer * 40;
        const petalLength = 100 + (layer * 20);
        const petalWidth = 40 + (layer * 5);

        for (let i = 0; i < petalsInLayer; i++) {
          const angle = (i * Math.PI * 2) / petalsInLayer;
          ctx.save();
          ctx.rotate(angle);
          ctx.translate(0, -radius);

          // Draw a single petal
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(petalWidth, -petalLength / 2, 0, -petalLength);
          ctx.quadraticCurveTo(-petalWidth, -petalLength / 2, 0, 0);
          
          // Vibrant Styling
          ctx.strokeStyle = `rgba(233, 213, 255, ${0.6 + (0.4 / layer)})`; // purple-200
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Fill with glowing gradient
          const grad = ctx.createLinearGradient(0, 0, 0, -petalLength);
          grad.addColorStop(0, `rgba(168, 85, 247, ${0.4 / layer})`); // purple-500
          grad.addColorStop(1, `rgba(216, 180, 254, 0)`); // fades out
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.restore();
          drawn++;
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full block"
    />
  );
};
