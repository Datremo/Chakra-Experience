import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SensationAndTasteSection: React.FC = () => {
  const [activeTaste, setActiveTaste] = useState<'SWEET' | 'BITTER' | 'SALT' | null>(null);

  const tastes = {
    SWEET: "The flavor of nourishment and pleasure. To accept the sweet is to allow yourself to be nurtured without guilt.",
    BITTER: "The flavor of medicine and wakefulness. To accept the bitter is to digest the hard truths that help you grow.",
    SALT: "The flavor of the ocean and tears. To accept the salt is to honor your grief and the depths of your feeling."
  };

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/svadhisthana/svadhisthana_sensory_fruits_1788973141192.jpg" 
          alt="Sensory Fruits" 
          className="w-full h-full object-cover mix-blend-screen opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 pt-12 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6 drop-shadow-md"
        >
          The Sense Organ
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-white mb-10 drop-shadow-xl"
        >
          Taste
        </motion.h2>

        <p className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto drop-shadow-md">
          Muladhara connects to smell. Svādhiṣṭhāna connects to taste. It asks you not just to survive life, but to truly savor it.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.keys(tastes).map((taste) => (
            <button
              key={taste}
              onClick={() => setActiveTaste(taste as any)}
              className={`px-8 py-4 rounded-full border transition-all duration-500 font-sans tracking-widest text-sm uppercase backdrop-blur-md ${
                activeTaste === taste 
                  ? 'bg-orange-500/40 border-orange-400 text-white shadow-[0_0_30px_rgba(249,115,22,0.4)] scale-110' 
                  : 'bg-black/50 border-orange-900/50 text-orange-200/50 hover:border-orange-500/50 hover:text-orange-200'
              }`}
            >
              {taste}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTaste ? (
            <motion.div
              key={activeTaste}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-black/60 backdrop-blur-xl p-8 rounded-[2rem] border border-orange-500/30 max-w-2xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-orange-100 font-serif italic leading-relaxed">
                "{tastes[activeTaste]}"
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-24 flex items-center justify-center text-orange-400/50 uppercase tracking-widest font-sans text-sm animate-pulse"
            >
              Select a flavor
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
