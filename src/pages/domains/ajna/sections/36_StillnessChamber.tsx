import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const StillnessChamberSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <AnimatePresence>
        {!isActive && timeLeft > 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="text-center z-10"
          >
            <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Discipline</h2>
            <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-8">The Stillness Chamber</h1>
            <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto mb-12">
              The modern mind is terrified of a void. Can you sit with a single point of light for 60 seconds without clicking away, checking another tab, or giving up?
            </p>
            <button 
              onClick={() => setIsActive(true)}
              className="px-8 py-3 rounded-full border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 font-sans text-xs tracking-widest uppercase transition-all"
            >
              Enter the Void
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black flex flex-col items-center justify-center z-50"
          >
            <motion.div 
              className="w-4 h-4 bg-indigo-400 rounded-full"
              animate={{ boxShadow: ['0 0 20px rgba(129,140,248,0.3)', '0 0 40px rgba(129,140,248,0.8)', '0 0 20px rgba(129,140,248,0.3)'] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="absolute bottom-12 font-sans tracking-[0.5em] text-white/20 text-sm">
              {timeLeft}
            </div>

            <button 
              onClick={() => { setIsActive(false); setTimeLeft(60); }}
              className="absolute top-12 left-12 text-white/20 hover:text-white/50 uppercase tracking-widest text-xs font-sans transition-colors"
            >
              Abort
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {timeLeft === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center z-10 px-6"
          >
            <h1 className="text-3xl sm:text-4xl font-serif text-indigo-300 mb-6 drop-shadow-[0_0_20px_rgba(129,140,248,0.5)]">Space Created.</h1>
            <p className="text-white/80 font-light max-w-md mx-auto leading-relaxed mb-8">
              In that minute, the world did not end. You do not need to constantly consume information to exist. True sight happens in the gaps between stimuli.
            </p>
            <button
              onClick={() => { setTimeLeft(60); setIsActive(true); }}
              className="px-8 py-3 rounded-full border border-indigo-400/50 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 font-sans text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-105 transition-all"
            >
              Re-enter Stillness
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
