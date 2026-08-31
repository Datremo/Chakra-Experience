import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const OpenAwarenessSection: React.FC = () => {
  const [mouseVelocity, setMouseVelocity] = useState(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [isStill, setIsStill] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const dx = clientX - lastMousePos.current.x;
      const dy = clientY - lastMousePos.current.y;
      const velocity = Math.sqrt(dx * dx + dy * dy);
      
      setMouseVelocity(velocity);
      setIsStill(false);
      lastMousePos.current = { x: clientX, y: clientY };

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setIsStill(true);
        setMouseVelocity(0);
      }, 500);
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-black overflow-hidden flex flex-col items-center justify-center">
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 33</h2>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = (i / 30) * Math.PI * 2;
          const radius = isStill ? 150 : 150 + Math.random() * mouseVelocity * 5;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              animate={{
                x: isStill ? x : x + (Math.random() - 0.5) * 200,
                y: isStill ? y : y + (Math.random() - 0.5) * 200,
                opacity: isStill ? 1 : 0.2,
                scale: isStill ? 1 : Math.random() * 2,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className={`absolute w-4 h-4 rounded-full ${isStill ? 'bg-white shadow-[0_0_20px_white]' : 'bg-purple-500'}`}
            />
          );
        })}
        {/* Core */}
        <motion.div
          animate={{
            scale: isStill ? 1 : 0,
            opacity: isStill ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className="absolute w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)] blur-md mix-blend-screen"
        />
      </div>

      <div className="absolute bottom-32 z-20 flex flex-col items-center text-center pointer-events-none px-6 w-full">
        <motion.h1 
          animate={{ opacity: isStill ? 1 : 0.2 }}
          className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_white] mb-4"
        >
          OPEN AWARENESS
        </motion.h1>
        <motion.p 
          animate={{ opacity: isStill ? 1 : 0 }}
          className="font-serif italic text-xl md:text-2xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_10px_black]"
        >
          When the mind's frantic motion ceases, the natural architecture of the soul reveals itself.
        </motion.p>
      </div>
      
    </section>
  );
};
