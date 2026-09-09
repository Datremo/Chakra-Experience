import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChangeAndImpermanenceSection: React.FC = () => {
  const [melted, setMelted] = useState(false);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black">
      
      <div className="relative z-10 text-center max-w-4xl px-4 pt-12 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-500 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          The Nature of Time
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-16 drop-shadow-xl"
        >
          Impermanence
        </motion.h2>

        <div 
          className="relative max-w-md mx-auto h-[300px] flex items-center justify-center cursor-pointer"
          onClick={() => setMelted(true)}
        >
          <AnimatePresence mode="wait">
            {!melted ? (
              <motion.div
                key="ice"
                exit={{ opacity: 0, filter: 'blur(20px)', y: 50, scale: 0.8 }}
                transition={{ duration: 2 }}
                className="w-48 h-48 bg-white/90 backdrop-blur-md rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.5)] flex items-center justify-center"
              >
                <p className="text-black font-sans font-bold tracking-widest uppercase">The Ice</p>
                <div className="absolute -bottom-10 text-xs text-white/50 tracking-widest uppercase animate-pulse w-full text-center">Tap to Melt</div>
              </motion.div>
            ) : (
              <motion.div
                key="water"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-center"
              >
                <p className="text-2xl text-orange-200 font-serif italic mb-6">
                  "You cannot step into the same river twice."
                </p>
                <p className="text-lg text-white/70 font-light leading-relaxed">
                  Suffering comes from expecting the ice to never melt. Everything changes. Relationships end, bodies age, seasons turn. To master SvÄdhiá¹£á¹­hÄna is to find deep peace in the transition itself.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
