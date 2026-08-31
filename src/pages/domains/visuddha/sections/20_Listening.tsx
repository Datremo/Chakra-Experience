import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ListeningSection: React.FC = () => {
  const [phase, setPhase] = useState<'idle' | 'speaking' | 'interrupted' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: number;
    if (phase === 'speaking') {
      interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            setPhase('completed');
            return 100;
          }
          return p + 1;
        });
      }, 50); // Takes 5 seconds to complete
    } else if (phase === 'idle') {
      setProgress(0);
    }
    
    return () => clearInterval(interval);
  }, [phase]);

  const handleInterrupt = () => {
    if (phase === 'speaking') {
      setPhase('interrupted');
    }
  };

  const handleStart = () => {
    setPhase('speaking');
    setProgress(0);
  };

  const reset = () => {
    setPhase('idle');
  };

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16 pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Other Half</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Art of Listening</h1>
        <p className="text-white/50 font-light mt-4 text-sm">
          Communication is a circuit. It requires a receiver.
        </p>
      </div>

      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center">
        
        {/* Interaction Area */}
        <div className="relative w-full h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center px-8 mb-12 overflow-hidden">
          
          {/* Progress Bar / Speaker Waveform */}
          <div 
            className={`absolute left-0 top-0 bottom-0 transition-all duration-75 ${
              phase === 'interrupted' ? 'bg-red-900/50 border-r border-red-500' : 
              phase === 'completed' ? 'bg-cyan-900/50 border-r-2 border-cyan-400' :
              'bg-blue-900/30 border-r border-blue-400/50'
            }`}
            style={{ width: `${progress}%` }}
          >
            {phase === 'speaking' && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full flex flex-col justify-center gap-1 opacity-50 px-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="h-1 bg-blue-300 w-full"
                    animate={{ scaleX: [1, Math.random() * 3 + 1, 1] }}
                    transition={{ duration: 0.2, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative z-10 w-full flex justify-between items-center font-sans text-xs tracking-widest uppercase">
            <span className={phase === 'speaking' ? 'text-blue-300' : 'text-white/30'}>
              {phase === 'idle' ? 'Ready' : 'Speaker'}
            </span>
            <span className={phase === 'completed' ? 'text-cyan-400' : phase === 'interrupted' ? 'text-red-400' : 'text-white/30'}>
              You
            </span>
          </div>

        </div>

        {/* Controls & Messages */}
        <div className="h-32 flex flex-col items-center justify-center w-full">
          <AnimatePresence mode="wait">
            
            {phase === 'idle' && (
              <motion.button
                key="start"
                onClick={handleStart}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-8 py-3 rounded-full border border-blue-500/30 text-blue-400 font-sans tracking-[0.2em] text-sm uppercase hover:bg-blue-900/40 hover:border-blue-400 transition-all"
              >
                Listen
              </motion.button>
            )}

            {phase === 'speaking' && (
              <motion.div
                key="speaking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <p className="text-white/60 font-light italic">Waiting for them to finish...</p>
                <button
                  onClick={handleInterrupt}
                  className="px-6 py-2 rounded-full border border-red-500/30 text-red-400 font-sans tracking-[0.2em] text-xs uppercase hover:bg-red-900/40 hover:border-red-400 transition-all"
                >
                  Interrupt
                </button>
              </motion.div>
            )}

            {phase === 'interrupted' && (
              <motion.div
                key="interrupted"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-red-400 font-serif text-2xl mb-2">The circuit is broken.</p>
                <p className="text-white/50 text-sm font-light mb-6">You spoke before the thought was complete. True listening requires the patience of space.</p>
                <button onClick={reset} className="text-xs font-sans uppercase tracking-widest text-white/40 hover:text-white transition-colors">Try Again</button>
              </motion.div>
            )}

            {phase === 'completed' && (
              <motion.div
                key="completed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-cyan-400 font-serif text-2xl mb-2">Space received.</p>
                <p className="text-white/50 text-sm font-light mb-6">By waiting until the end, you allow the speaker to fully empty their thought into the space.</p>
                <button onClick={reset} className="text-xs font-sans uppercase tracking-widest text-white/40 hover:text-white transition-colors">Reset</button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
