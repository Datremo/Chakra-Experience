import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AttentionFlameSection: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [mouseMovement, setMouseMovement] = useState(0);
  
  const timerRef = useRef<number | null>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate speed/movement
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    const speed = Math.hypot(dx, dy);
    
    setMouseMovement(prev => Math.min(100, prev + speed * 0.5));
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    // Reset focus timer on movement
    setIsFocused(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      setIsFocused(true);
    }, 2000); // 2 seconds of stillness triggers focus
  };

  // Decay mouse movement over time
  useEffect(() => {
    const interval = setInterval(() => {
      setMouseMovement(prev => Math.max(0, prev - 5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Initial timer setup
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsFocused(true);
    }, 2000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section 
      className="min-h-screen py-32 px-6 bg-[#010000] relative flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center justify-center h-[600px]">
        
        {/* Status Text */}
        <div className="absolute top-0 w-full text-center h-32">
          <AnimatePresence mode="wait">
            {!isFocused ? (
              <motion.div
                key="scattered"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <h2 className="text-3xl font-serif text-amber-500/50 mb-2">Scattered Energy</h2>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-amber-100/30">
                  Constant motion dissipates heat.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="focused"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <h2 className="text-5xl font-serif text-amber-200 mb-2 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]">Trāṭaka</h2>
                <p className="font-sans text-sm tracking-[0.4em] uppercase text-amber-400">
                  The Focused Gaze
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* The Flame Visualizer */}
        <div className="relative w-64 h-96 flex items-end justify-center pb-12 mt-16">
          
          <AnimatePresence>
            {!isFocused ? (
              /* Scattered Fire */
              <motion.div
                key="scattered-fire"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute w-full h-full"
              >
                {/* Generate random flickering embers based on mouseMovement */}
                {Array.from({ length: Math.min(20, Math.floor(mouseMovement / 5) + 5) }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: (Math.random() - 0.5) * mouseMovement * 2,
                      y: -Math.random() * mouseMovement * 3 - 50,
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity }}
                    className="absolute bottom-0 left-1/2 w-4 h-4 rounded-full bg-orange-500/80 blur-[2px]"
                  />
                ))}
                
                {/* Base unruly flame */}
                <motion.div 
                  animate={{ 
                    scaleX: [1, 1.2, 0.9, 1.1],
                    scaleY: [1, 0.8, 1.1, 0.9],
                    x: (Math.random() - 0.5) * 20
                  }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-600/50 rounded-full blur-xl"
                />
              </motion.div>
            ) : (
              /* Focused Laser-like Beam */
              <motion.div
                key="focused-fire"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 flex flex-col items-center origin-bottom"
              >
                {/* Intense Core Beam */}
                <div className="w-1 h-[400px] bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_#f59e0b,0_0_80px_#f59e0b]" />
                
                {/* Base Anchor */}
                <div className="w-12 h-4 bg-amber-400 rounded-full blur-[2px] mt-2 shadow-[0_0_30px_#f59e0b]" />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        <div className="absolute bottom-10 w-full text-center">
          <p className="text-amber-500/40 text-xs tracking-[0.2em] uppercase font-sans">
            {isFocused ? "Move your cursor to break focus." : "Hold your cursor completely still."}
          </p>
        </div>

      </div>
    </section>
  );
};
