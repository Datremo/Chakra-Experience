import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SilenceInteractionSection: React.FC = () => {
  const [isBroken, setIsBroken] = useState(false);

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative bg-black cursor-pointer overflow-hidden" onClick={() => setIsBroken(true)}>
      
      {/* Background that reacts once silence is broken */}
      <AnimatePresence>
        {isBroken && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.2, 0], scale: [0, 2, 4] }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-96 h-96 rounded-full border-[10px] border-cyan-500/30 blur-md" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-white/30 uppercase mb-8">Before Expression</h2>
        
        <AnimatePresence mode="wait">
          {!isBroken ? (
            <motion.div
              key="silence"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-white/50 mb-16 tracking-widest">
                SILENCE
              </h1>
              
              {/* Very subtle breathing dot */}
              <motion.div 
                className="w-1 h-1 bg-white/20 rounded-full"
                animate={{ scale: [1, 2, 1], opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <p className="mt-32 font-sans text-[10px] tracking-widest text-white/10 uppercase">
                Click anywhere to break it.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="broken"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-5xl font-serif text-cyan-200 mb-6">
                A single sound alters the space.
              </h1>
              <p className="text-lg text-cyan-100/60 font-light max-w-xl mx-auto leading-relaxed">
                Before you speak, everything is potential. Once you speak, it is reality. 
                Silence is not just the absence of noise; it is the canvas upon which expression is painted.
              </p>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBroken(false);
                }}
                className="mt-16 px-6 py-2 border border-cyan-500/30 rounded-full text-xs font-sans tracking-[0.2em] text-cyan-400/50 hover:text-cyan-400 hover:border-cyan-400 transition-colors uppercase"
              >
                Return to Silence
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
