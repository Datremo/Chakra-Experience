import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheAscentSection: React.FC = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Indigo point rising (2s)
    // Phase 1: Silence (1s)
    // Phase 2: Six chakra threads rise (2s)
    // Phase 3: Threads weave into white-gold light (2s)
    // Phase 4: Separate and converge to single point (2s)
    // Phase 5: Point opens/expands (1.5s)
    // Phase 6: Reveal Text
    const sequence = [
      { delay: 1500, next: 1 }, // 0 -> 1
      { delay: 500, next: 2 }, // 1 -> 2
      { delay: 1500, next: 3 }, // 2 -> 3
      { delay: 1500, next: 4 }, // 3 -> 4
      { delay: 1500, next: 5 }, // 4 -> 5
      { delay: 1000, next: 6 }, // 5 -> 6
    ];

    let timeout: ReturnType<typeof setTimeout>;
    if (phase < sequence.length) {
      timeout = setTimeout(() => {
        setPhase(sequence[phase].next);
      }, sequence[phase].delay);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [phase]);

  const threadColors = [
    '#ef4444', // Red
    '#f97316', // Orange
    '#eab308', // Gold
    '#22c55e', // Green
    '#3b82f6', // Blue
    '#6366f1', // Indigo
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-transparent px-6">
      
      {/* Radiant Background Glow just for the ascent */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 6 ? 0.6 : 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.4) 0%, rgba(88, 28, 135, 0.1) 40%, transparent 70%)',
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          
          {phase === 0 && (
            <motion.div
              key="indigo-point"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, scale: [1, 1.5, 1] }}
              exit={{ y: -100, opacity: 0, scale: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_40px_#6366f1,0_0_80px_#818cf8]" />
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 0.5 }} 
                transition={{ delay: 1 }}
                className="absolute top-12 font-sans tracking-[0.4em] uppercase text-[10px] text-indigo-200"
              >
                Ascending
              </motion.div>
            </motion.div>
          )}

          {/* Phase 1 is pure silence/black */}

          {(phase >= 2 && phase <= 4) && (
            <motion.div
              key="threads"
              className="relative w-32 h-64 flex justify-between"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, filter: 'blur(10px)' }}
              transition={{ duration: 1 }}
            >
              {threadColors.map((color, i) => {
                // Phase 3 weaving logic
                let xOffset = 0;
                let isWhiteGold = false;
                
                if (phase >= 3) {
                  // Weave to center
                  xOffset = (2.5 - i) * -12; 
                  if (phase === 3) isWhiteGold = true;
                }

                if (phase === 4) {
                  // Separate then converge
                  xOffset = 0;
                }

                return (
                  <motion.div
                    key={color}
                    className="w-[1px] h-full"
                    animate={{
                      backgroundColor: isWhiteGold ? '#fef08a' : color,
                      boxShadow: isWhiteGold ? '0 0 20px #fef08a' : `0 0 10px ${color}`,
                      x: phase === 4 ? [(2.5 - i) * 20, (2.5 - i) * -20, (2.5 - i) * -12] : xOffset,
                      opacity: phase === 4 ? 0 : 1
                    }}
                    transition={{
                      duration: phase === 4 ? 2 : 1.5,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}

              {phase === 4 && (
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_40px_white]"
                  initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                />
              )}
            </motion.div>
          )}

          {phase === 5 && (
            <motion.div
              key="explosion"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 50, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_100px_white]"
            />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {phase === 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="z-20 text-center flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-8xl font-serif text-white tracking-widest mb-6">सहस्रार</h1>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-[0.2em] mb-4">SAHASRĀRA</h2>
            <h3 className="text-sm font-sans tracking-[0.4em] text-white/50 uppercase mb-16">The Thousand-Petalled Lotus</h3>

            <p className="text-lg md:text-xl text-white/70 font-serif italic max-w-xl mx-auto leading-relaxed mb-16">
              "You have reached the highest image in this journey. Now go beyond the image."
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <p className="text-xs font-sans tracking-[0.3em] text-white/30 uppercase mb-4">
                Scroll to Enter
              </p>
              <div className="w-[1px] h-24 bg-gradient-to-b from-white/30 to-transparent mx-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
