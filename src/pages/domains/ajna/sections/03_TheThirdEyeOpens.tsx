import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheThirdEyeOpensSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(100); // 0 to 100, where 0 is dead center
  const [speed, setSpeed] = useState(0);
  const lastTimeRef = useRef(Date.now());
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center (0 to 100 max)
      const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
      const normalizedDist = Math.min(100, (dist / (rect.width / 2)) * 100);
      setDistance(normalizedDist);

      // Calculate speed
      const now = Date.now();
      const dt = now - lastTimeRef.current;
      if (dt > 50) {
        const dx = e.clientX - lastPosRef.current.x;
        const dy = e.clientY - lastPosRef.current.y;
        const v = Math.sqrt(dx * dx + dy * dy) / dt; // pixels per ms
        
        // Smooth out the speed reading
        setSpeed(prev => prev * 0.5 + v * 10 * 0.5);
        
        lastTimeRef.current = now;
        lastPosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Decrease speed naturally over time
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(s => Math.max(0, s - 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Eye states
  const isOpen = distance < 30;
  const isDistorted = isOpen && speed > 15; // Moving too fast while trying to look closely

  return (
    <section ref={containerRef} className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-transparent cursor-crosshair">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-8 md:mb-16 pointer-events-none"
      >
        <h2 className="font-sans text-xs md:text-sm tracking-[0.4em] text-indigo-400/80 uppercase mb-4 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">The Mechanism</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-4">Focus vs. Force</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Move your cursor slowly toward the center.
        </p>
      </motion.div>

      <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center mb-8">
        
        {/* Ambient Glow */}
        <motion.div
          animate={{
            scale: isOpen ? [1, 1.05, 1] : 0.8,
            opacity: isOpen ? [0.5, 0.8, 0.5] : 0,
            backgroundColor: isDistorted ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)'
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-full h-full rounded-full blur-[60px] pointer-events-none"
        />

        {/* The Eye Shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-full h-1/2 border-t-[3px] border-b-[3px] border-indigo-400/60 rounded-[100%] absolute flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.3)]"
            animate={{
              height: distance < 50 ? `${100 - distance}%` : '8px',
              filter: isDistorted ? `blur(${speed / 2}px) hue-rotate(${speed * 5}deg)` : 'blur(0px)',
              borderColor: isDistorted ? 'rgba(239, 68, 68, 0.8)' : 'rgba(129, 140, 248, 0.6)',
              boxShadow: isOpen && !isDistorted ? '0 0 50px rgba(129,140,248,0.5)' : 'none'
            }}
            transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
          >
            {/* The Pupil / Iris */}
            <motion.div
              className="w-20 h-20 md:w-28 md:h-28 rounded-full border-[2px] md:border-[4px] flex items-center justify-center relative"
              animate={{
                scale: distance < 20 ? 1 : (distance < 50 ? 0.8 : 0.4),
                opacity: distance < 50 ? 1 : 0,
                borderColor: isDistorted ? 'rgba(239, 68, 68, 0.9)' : 'rgba(129, 140, 248, 0.9)',
                boxShadow: isDistorted ? '0 0 60px rgba(239, 68, 68, 0.8), inset 0 0 20px rgba(239, 68, 68, 0.5)' : '0 0 50px rgba(129, 140, 248, 0.8), inset 0 0 30px rgba(129, 140, 248, 0.5)'
              }}
            >
              {/* Inner details of the Iris */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-white/20"
              />
              <div className={`w-3 h-3 md:w-5 md:h-5 rounded-full ${isDistorted ? 'bg-red-400 shadow-[0_0_15px_red]' : 'bg-white shadow-[0_0_15px_white]'}`} />
            </motion.div>

            {/* Interference patterns if distorted */}
            {isDistorted && (
              <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-1 bg-red-500 shadow-[0_0_10px_red]"
                    style={{ top: `${Math.random() * 100}%` }}
                    animate={{ y: [-15, 15] }}
                    transition={{ duration: Math.random() * 0.2 + 0.1, repeat: Infinity, repeatType: 'reverse' }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>

      </div>

      <div className="h-32 mt-8 md:mt-16 text-center z-10 w-full max-w-lg mx-auto flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {isDistorted ? (
            <motion.div
              key="distorted"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="bg-red-950/40 border border-red-900/50 p-6 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-xl md:text-2xl font-serif text-red-400 mb-2 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]">Force Distorts.</h3>
              <p className="text-red-200/70 text-sm md:text-base font-light max-w-sm mx-auto">
                When you try too hard to "see," the mind fabricates noise. Spiritual materialism creates hallucinations, not insight.
              </p>
            </motion.div>
          ) : isOpen ? (
            <motion.div
              key="clear"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="bg-indigo-950/40 border border-indigo-900/50 p-6 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-xl md:text-2xl font-serif text-indigo-300 mb-2 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">Focus Reveals.</h3>
              <p className="text-indigo-200/70 text-sm md:text-base font-light max-w-sm mx-auto">
                True clarity requires gentleness. You cannot force the eye open; you can only provide the stillness it requires.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="text-white/30 text-sm md:text-base font-light italic tracking-wider">
                Approach slowly...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
