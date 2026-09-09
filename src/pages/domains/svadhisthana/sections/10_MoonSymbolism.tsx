import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHASES = [
  { name: 'New Moon', emoji: '\U0001f311', meaning: 'Plant intentions. Begin new creative projects. A time to seed desires.' },
  { name: 'Waxing Moon', emoji: '\U0001f312', meaning: 'Build momentum. Let creative energy accumulate. Pursue pleasure actively.' },
  { name: 'Full Moon', emoji: '\U0001f315', meaning: 'Peak emotional intensity. Svadhisthana is at full charge. Express fully.' },
  { name: 'Waning Moon', emoji: '\U0001f317', meaning: 'Release and let flow. Shed what no longer serves. Surrender to the river.' },
];

export const MoonSymbolismSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#02050a]">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/svadhisthana/svadhisthana_moon_water.jpg"
          alt="Moon over water"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050a]/70 via-transparent to-[#02050a]/80" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center gap-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-teal-300 font-sans uppercase tracking-[0.4em] text-xs"
        >
          Lunar Symbolism
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white text-center leading-tight"
        >
          The Crescent Moon
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-base md:text-lg text-center max-w-2xl leading-relaxed"
        >
          The crescent moon at the center of the Svadhisthana mandala represents the tidal, cyclical nature of emotion. Like the ocean, our feelings rise and fall with lunar rhythms.
        </motion.p>

        {/* Moon phase selector */}
        <div className="flex gap-3 flex-wrap justify-center">
          {PHASES.map((phase, i) => (
            <button
              key={phase.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-sans transition-all duration-300 border ${
                active === i
                  ? 'bg-teal-900/60 border-teal-400 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]'
                  : 'bg-black/40 border-teal-900/30 text-teal-200/50 hover:border-teal-600/50'
              }`}
            >
              {phase.emoji} {phase.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="bg-black/50 backdrop-blur-md border border-teal-800/40 rounded-2xl p-8 max-w-xl w-full text-center"
          >
            <p className="text-3xl mb-4">{PHASES[active].emoji}</p>
            <p className="text-teal-300 font-sans tracking-widest uppercase text-xs mb-3">{PHASES[active].name}</p>
            <p className="text-white/80 text-base leading-relaxed">{PHASES[active].meaning}</p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
