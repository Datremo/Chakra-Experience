import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AkasaSpaceSection: React.FC = () => {
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.x;
      const dy = e.clientY - lastPos.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      setMouseSpeed(Math.min(speed * 0.5, 100)); // Cap speed for visual effect
      setLastPos({ x: e.clientX, y: e.clientY });

      // If they stop moving, gradually decay speed to 0
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMouseSpeed(0);
      }, 100);
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      setMouseSpeed(0);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [lastPos, isHovering]);

  const isStill = mouseSpeed < 2;

  return (
    <section 
      className="min-h-screen py-32 flex flex-col items-center justify-center relative bg-[#000000] cursor-crosshair overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      <div className="text-center z-20 mb-32 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-serif text-white/90 tracking-widest mb-4">ĀKĀŚA</h1>
        <h2 className="font-sans text-sm tracking-[0.5em] text-cyan-500/70 uppercase">Space / Ether</h2>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          {!isStill ? (
            <motion.div
              key="moving"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              {/* Noise / Clutter when moving */}
              <div className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center relative">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full border border-cyan-400/30 rounded-full"
                    animate={{ rotate: mouseSpeed * i, scale: 1 + (mouseSpeed / 50) }}
                    transition={{ type: "spring", bounce: 0, duration: 0.1 }}
                  />
                ))}
              </div>
              <p className="mt-8 font-sans text-[10px] tracking-[0.3em] text-white/50 uppercase">
                Movement creates noise.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="still"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Expansion / Void when still */}
              <div className="w-64 h-64 flex items-center justify-center relative">
                <motion.div 
                  className="w-full h-full rounded-full border border-white/10"
                  animate={{ scale: [1, 2, 3], opacity: [1, 0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute w-full h-full rounded-full border border-cyan-500/10"
                  animate={{ scale: [1, 2, 3], opacity: [1, 0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
                />
              </div>
              <p className="mt-8 font-serif text-2xl text-cyan-100/70 italic text-center max-w-md">
                Space is also what you leave unfilled.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
