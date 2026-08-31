import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheTwoPetalsSection: React.FC = () => {
  const [activeLens, setActiveLens] = useState<'ha' | 'ksa' | 'both' | null>(null);

  // Background shifts based on lens
  const getBgClass = () => {
    if (activeLens === 'ha') return 'bg-amber-950/20'; // Sun
    if (activeLens === 'ksa') return 'bg-blue-950/20'; // Moon
    if (activeLens === 'both') return 'bg-indigo-950/20'; // Synthesis
    return 'bg-[#000000]';
  };

  return (
    <section className={`min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 transition-colors duration-1000 ${getBgClass()}`}>
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Duality</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Ha & Kṣa</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Look through the lenses.
        </p>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 mb-16">
        
        {/* Left Lens (Kṣa) */}
        <button 
          onClick={() => setActiveLens(activeLens === 'ksa' ? null : activeLens === 'ha' ? 'both' : 'ksa')}
          className={`relative w-48 h-48 rounded-[100%_0_100%_0] border flex items-center justify-center transform rotate-45 transition-all duration-500 ${
            activeLens === 'ksa' || activeLens === 'both' ? 'bg-blue-900/30 border-blue-400 shadow-[0_0_30px_rgba(96,165,250,0.3)] scale-110 z-20' : 'bg-white/5 border-white/20 hover:border-blue-500/50 hover:bg-white/10 z-10'
          }`}
        >
          <div className="-rotate-45 text-center">
            <span className="text-5xl font-serif text-white block mb-2">क्ष</span>
            <span className="text-xs font-sans tracking-widest text-blue-300 uppercase">Moon / Iḍā</span>
          </div>
        </button>

        {/* Right Lens (Ha) */}
        <button 
          onClick={() => setActiveLens(activeLens === 'ha' ? null : activeLens === 'ksa' ? 'both' : 'ha')}
          className={`relative w-48 h-48 rounded-[100%_0_100%_0] border flex items-center justify-center transform rotate-45 transition-all duration-500 ${
            activeLens === 'ha' || activeLens === 'both' ? 'bg-amber-900/30 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.3)] scale-110 z-20' : 'bg-white/5 border-white/20 hover:border-amber-500/50 hover:bg-white/10 z-10'
          }`}
        >
          <div className="-rotate-45 text-center">
            <span className="text-5xl font-serif text-white block mb-2">ह</span>
            <span className="text-xs font-sans tracking-widest text-amber-300 uppercase">Sun / Piṅgalā</span>
          </div>
        </button>

      </div>

      <div className="h-48 text-center max-w-2xl px-6 z-10">
        <AnimatePresence mode="wait">
          {!activeLens && (
            <motion.div key="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-white/40 font-light text-sm italic">The final two petals before the thousand-petaled lotus of the crown.</p>
            </motion.div>
          )}

          {activeLens === 'ksa' && (
            <motion.div key="ksa" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h3 className="text-2xl font-serif text-blue-300 mb-4">The Left Channel</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                The moon, the feminine, the cooling energy of Iḍā Nādī. The intuitive, receptive, and cooling aspect of consciousness. Looking only through this lens creates passivity.
              </p>
            </motion.div>
          )}

          {activeLens === 'ha' && (
            <motion.div key="ha" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h3 className="text-2xl font-serif text-amber-300 mb-4">The Right Channel</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                The sun, the masculine, the heating energy of Piṅgalā Nādī. The active, logical, and burning aspect of consciousness. Looking only through this lens creates rigidity.
              </p>
            </motion.div>
          )}

          {activeLens === 'both' && (
            <motion.div key="both" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h3 className="text-2xl font-serif text-indigo-300 mb-4">Synthesis</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed mb-4">
                When Sun and Moon are balanced, the dual currents merge into the central channel (Suṣumṇā). The two petals represent the final dissolution of all dualities (good/bad, I/Other, logic/intuition) before the mind enters the crown.
              </p>
              <button 
                onClick={() => setActiveLens(null)}
                className="text-[10px] uppercase font-sans tracking-widest text-indigo-400/50 hover:text-indigo-400 transition-colors"
              >
                Clear Lenses
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
