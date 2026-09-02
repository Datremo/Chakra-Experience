import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export const TheLensSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isZoomedTooFar, setIsZoomedTooFar] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.5);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.touches[0].clientX - rect.left);
      mouseY.set(e.touches[0].clientY - rect.top);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
      container.addEventListener('touchstart', handleTouchMove, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchstart', handleTouchMove);
      }
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    setIsZoomedTooFar(zoomLevel > 3);
  }, [zoomLevel]);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103] overflow-hidden">
      
      <div className="text-center z-20 mb-12 pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Focus</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Lens</h1>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center z-10">
        
        <div 
          ref={containerRef}
          className="relative w-full max-w-2xl aspect-[4/3] bg-black border border-white/10 rounded-2xl overflow-hidden cursor-crosshair mb-8"
        >
          {/* Base blurry image (abstract pattern) */}
          <div className="absolute inset-0 opacity-50 blur-sm flex items-center justify-center overflow-hidden">
            <svg width="200%" height="200%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                </pattern>
                <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(99,102,241,0.5)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="50" cy="50" r="40" fill="url(#grad)" />
              <path d="M 20 50 Q 50 20 80 50 T 20 50" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            </svg>
          </div>

          {/* The Magnifying Glass/Lens */}
          <motion.div
            className="absolute top-0 left-0 w-48 h-48 rounded-full border-2 border-indigo-400/50 shadow-[0_0_30px_rgba(99,102,241,0.4),inset_0_0_20px_rgba(99,102,241,0.4)] pointer-events-none overflow-hidden"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            {/* The sharp inner image, translated opposite to mouse movement to simulate a mask, and scaled */}
            <motion.div 
              className="absolute w-[800px] h-[600px]"
              style={{
                x: -mouseX.get() * zoomLevel + 96, // 96 is half of 48 (radius)
                y: -mouseY.get() * zoomLevel + 96,
                transformOrigin: '0 0',
                scale: zoomLevel,
                filter: isZoomedTooFar ? 'blur(4px) contrast(200%) hue-rotate(90deg)' : 'blur(0px) contrast(120%)'
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="url(#grid)" />
                <circle cx="50" cy="50" r="40" fill="url(#grad)" />
                <path d="M 20 50 Q 50 20 80 50 T 20 50" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5" />
                {/* Micro details only visible when zoomed */}
                <circle cx="50" cy="35" r="2" fill="white" />
                <circle cx="40" cy="50" r="1" fill="white" />
                <circle cx="60" cy="50" r="1" fill="white" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="w-full max-w-sm flex flex-col items-center gap-4 mb-8">
          <div className="flex justify-between w-full text-[10px] font-sans tracking-widest text-white/50 uppercase">
            <span>Macro</span>
            <span>Micro</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="4" 
            step="0.1" 
            value={zoomLevel} 
            onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none accent-indigo-400"
          />
        </div>

        {/* Text */}
        <div className="h-24 text-center max-w-md px-6">
          <h3 className={`text-2xl font-serif mb-2 transition-colors duration-500 ${isZoomedTooFar ? 'text-red-400' : 'text-indigo-300'}`}>
            {isZoomedTooFar ? 'Focus Can Distort' : 'Focus Can Reveal'}
          </h3>
          <p className="text-white/60 font-light text-sm leading-relaxed">
            {isZoomedTooFar 
              ? 'Zooming in too deeply strips away context. What was once a clear detail becomes an unrecognizable abstraction. Over-analyzing destroys meaning.' 
              : 'The lens sharpens what is directly beneath it, but it inherently excludes the periphery. To see one thing clearly is to ignore everything else.'}
          </p>
        </div>

      </div>

    </section>
  );
};
