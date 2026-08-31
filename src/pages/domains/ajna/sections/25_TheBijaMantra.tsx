import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheBijaMantraSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isPlaying) {
      if (phase === 0) setPhase(1);
      
      if (phase === 1) {
        timeout = setTimeout(() => setPhase(2), 3000);
      } else if (phase === 2) {
        timeout = setTimeout(() => setPhase(3), 3000);
      } else if (phase === 3) {
        timeout = setTimeout(() => setPhase(4), 4000);
      } else if (phase === 4) {
        timeout = setTimeout(() => {
          setIsPlaying(false);
          setPhase(0);
        }, 5000);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isPlaying, phase]);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000] overflow-hidden">
      
      <div className={`text-center z-20 mb-16 transition-opacity duration-1000 ${phase > 1 ? 'opacity-0' : 'opacity-100'}`}>
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Seed Sound</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">OṂ</h1>
      </div>

      <div className="w-full max-w-3xl relative z-10 flex flex-col items-center justify-center h-96">
        
        {/* Visuals */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div
                key="static"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="text-8xl md:text-9xl text-indigo-500/50 drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"
              >
                ॐ
              </motion.div>
            )}

            {phase === 1 && (
              <motion.div
                key="a"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 border-4 border-indigo-500 rounded-full flex items-center justify-center">
                   <span className="text-4xl font-serif text-white uppercase tracking-[1em] ml-4">A</span>
                </div>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div
                key="u"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 bg-indigo-500/20 border-4 border-indigo-400 rounded-full flex items-center justify-center scale-125 backdrop-blur-sm">
                   <span className="text-4xl font-serif text-white uppercase tracking-[1em] ml-4">U</span>
                </div>
              </motion.div>
            )}

            {phase === 3 && (
              <motion.div
                key="m"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full h-full bg-indigo-500/50 flex items-center justify-center scale-150 backdrop-blur-md">
                   <span className="text-4xl font-serif text-white uppercase tracking-[1em] ml-4">M</span>
                </div>
              </motion.div>
            )}

            {phase === 4 && (
              <motion.div
                key="silence"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_50px_20px_rgba(255,255,255,1)]" />
                <span className="text-sm font-sans tracking-[1em] text-white/50 mt-12 ml-4">TURIYA</span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Play Button */}
        <div className={`absolute bottom-0 transition-opacity duration-1000 ${phase > 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button 
            onClick={() => setIsPlaying(true)}
            className="w-16 h-16 rounded-full border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 flex items-center justify-center hover:bg-indigo-500/20 hover:scale-110 transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

      </div>

      <div className={`mt-24 text-center max-w-lg transition-opacity duration-1000 ${phase > 0 && phase < 4 ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-white/70 font-light leading-relaxed text-lg italic">
          {phase === 1 && "A (Waking State) – The physical world of creation."}
          {phase === 2 && "U (Dream State) – The subtle world of the mind."}
          {phase === 3 && "M (Deep Sleep) – The dissolution of everything into unity."}
          {phase === 4 && "The silence that follows. The fourth state. The observer."}
        </p>
      </div>

    </section>
  );
};
