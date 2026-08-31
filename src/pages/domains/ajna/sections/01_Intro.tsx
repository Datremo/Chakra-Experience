import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroSection: React.FC = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Blue soundwave
    // Phase 1: Slowing down
    // Phase 2: Geometry
    // Phase 3: Geometry compresses
    // Phase 4: Single indigo point
    // Phase 5: Eye opens
    // Phase 6: Eye closes, text appears
    const sequence = [
      { delay: 3000, next: 1 },
      { delay: 3000, next: 2 },
      { delay: 3000, next: 3 },
      { delay: 2000, next: 4 },
      { delay: 2000, next: 5 },
      { delay: 4000, next: 6 },
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

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Background Ambience handled by ObservatoryField, but we can add specific layer here */}
      
      {/* The Central Visual */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          
          {phase === 0 && (
            <motion.div
              key="sound"
              className="w-full flex justify-center items-center gap-1 opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-blue-400 rounded-full"
                  animate={{ height: [10, 100 + Math.random() * 100, 10] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                />
              ))}
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div
              key="sound-slow"
              className="w-full flex justify-center items-center gap-2 opacity-50"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-4 bg-indigo-400 rounded-full"
                  animate={{ height: [20, 150, 20] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="geometry"
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8, rotate: 90 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="relative w-64 h-64 border border-indigo-400/50 flex items-center justify-center mix-blend-screen"
            >
              <div className="absolute w-full h-full border border-indigo-300/50 rotate-45" />
              <div className="absolute w-48 h-48 border border-indigo-200/50 rounded-full" />
            </motion.div>
          )}

          {phase === 3 && (
            <motion.div
              key="compress"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "anticipate" }}
              className="relative w-64 h-64 border-[4px] border-indigo-400 rounded-full bg-indigo-900"
            />
          )}

          {phase >= 4 && phase <= 5 && (
            <motion.div
              key="point"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-2 h-2 bg-indigo-300 rounded-full shadow-[0_0_20px_#818cf8]"
            >
              {phase === 5 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: '80px', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 2 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] border border-indigo-400/50 rounded-[100%] rotate-90 flex items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-950 border border-indigo-400 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-200 shadow-[0_0_10px_#c7d2fe]" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Final Text Reveal */}
      <AnimatePresence>
        {phase === 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="z-20 text-center flex flex-col items-center"
          >
            {/* The persistent point */}
            <div className="w-2 h-2 bg-indigo-300 rounded-full shadow-[0_0_20px_#818cf8] mb-12" />
            
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-4">आज्ञा</h1>
            <h2 className="text-2xl md:text-3xl font-serif text-indigo-200 tracking-[0.2em] mb-4">ĀJÑĀ</h2>
            <h3 className="text-sm font-sans tracking-[0.4em] text-white/50 uppercase mb-2">The Brow Centre</h3>
            <h3 className="text-sm font-sans tracking-[0.4em] text-white/50 uppercase mb-16">The Inner Eye</h3>

            <p className="text-lg md:text-xl text-white/70 font-light italic max-w-xl mx-auto leading-relaxed mb-16">
              "Before you trust what you see, learn how seeing works."
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex gap-6"
            >
              <button 
                onClick={() => {
                  document.getElementById('ajna-scroll-container')?.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }}
                className="px-8 py-3 rounded-full border border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/30 hover:border-indigo-400 font-sans text-xs tracking-widest uppercase transition-all"
              >
                Enter the Inner Observatory
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
