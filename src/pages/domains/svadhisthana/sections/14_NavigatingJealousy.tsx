import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NavigatingJealousySection: React.FC = () => {
  const [decoded, setDecoded] = useState(false);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#0a1519]">
      <div className="relative z-10 text-center max-w-3xl px-6 pt-10 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-teal-500 font-sans uppercase tracking-[0.3em] text-xs md:text-sm mb-6"
        >
          Decoding the Current
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-teal-50 mb-12"
        >
          Navigating Jealousy
        </motion.h2>

        <div 
          className="relative group cursor-pointer"
          onClick={() => setDecoded(!decoded)}
        >
          {/* Surface View */}
          <motion.div 
            animate={{ opacity: decoded ? 0 : 1, y: decoded ? -20 : 0 }}
            className={`bg-black/60 backdrop-blur-xl p-8 rounded-[2rem] border border-teal-900 shadow-2xl transition-all duration-700 ${decoded ? 'pointer-events-none' : ''}`}
          >
            <p className="text-xl md:text-2xl text-white/80 font-serif italic mb-4">
              "They have what I want. I resent them."
            </p>
            <p className="text-sm text-teal-500/50 uppercase tracking-widest animate-pulse">
              Tap to plunge deeper
            </p>
          </motion.div>

          {/* Deep View */}
          <AnimatePresence>
            {decoded && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: -40 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute inset-0 bg-teal-900/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-teal-400/50 shadow-[0_0_50px_rgba(20,184,166,0.3)] flex flex-col justify-center"
              >
                <p className="text-lg md:text-xl text-teal-50 font-sans font-light leading-relaxed mb-6">
                  Jealousy is not a toxic poison; it is a profound <strong className="text-white">compass</strong>. It simply points to a desire you have not allowed yourself to acknowledge. 
                </p>
                <p className="text-xl md:text-2xl text-teal-300 font-serif italic">
                  "I am inspired. They showed me what I actually want."
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
