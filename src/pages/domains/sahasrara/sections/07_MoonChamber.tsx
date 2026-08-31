import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MoonChamberSection: React.FC = () => {
  const [showExplore, setShowExplore] = useState(false);

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center bg-[#0f0026] overflow-hidden">
      
      {/* Subtle Moon Visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-500/10 blur-md" />
        <div className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-white/10 to-white/40 shadow-[0_0_100px_rgba(255,255,255,0.1)]" />
        <div className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full border border-purple-400/30" />
      </div>

      <div className="relative z-20 max-w-2xl text-center flex flex-col items-center">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/30 mb-24 opacity-0 animate-[fadeIn_2s_ease-in_forwards]">World 07</h2>
        
        <p className="text-xl md:text-3xl font-serif text-white/80 leading-relaxed italic mb-16 opacity-0 animate-[fadeIn_4s_ease-in_forwards_1s]">
          "Some traditional descriptions place a moon region within the highest crown imagery."
        </p>

        <button 
          onClick={() => setShowExplore(!showExplore)}
          className="px-6 py-2 border border-purple-500/20 rounded-full text-xs font-sans tracking-[0.3em] uppercase text-white/40 hover:text-white hover:border-white/30 transition-colors opacity-0 animate-[fadeIn_2s_ease-in_forwards_3s]"
        >
          {showExplore ? '[ CLOSE ]' : '[ EXPLORE ]'}
        </button>

        <AnimatePresence>
          {showExplore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 overflow-hidden"
            >
              <div className="p-8 bg-purple-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm text-left">
                <h4 className="font-sans text-xs tracking-widest text-white/50 uppercase mb-4">Candramaṇḍala</h4>
                <p className="text-white/80 font-light mb-6">
                  In many Tantric and Haṭha texts, the crown is not just an energetic point but the source of immortal nectar (Amṛta). It drips from the "moon" in the head, and is normally consumed by the "sun" at the navel. Yogic practices aim to reverse or stop this flow.
                </p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-sans tracking-widest text-emerald-400 uppercase px-3 py-1 border border-emerald-400/30 rounded-full">
                    Haṭha Yoga Pradīpikā
                  </span>
                  <span className="text-[10px] font-sans tracking-widest text-white/30 uppercase px-3 py-1 border border-purple-500/20 rounded-full">
                    Note: Not universal to all chakra models
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
