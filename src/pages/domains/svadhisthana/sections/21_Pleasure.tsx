import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SENSES = [
  { sense: 'Touch', example: 'The warmth of sunlight on skin. A hug held one second longer.', icon: '✋' },
  { sense: 'Taste', example: 'Biting into a ripe mango. The first sip of cold water on a hot day.', icon: '🍋' },
  { sense: 'Sound', example: 'Rain on a window. Music that makes you cry without knowing why.', icon: '🎶' },
  { sense: 'Scent', example: 'Petrichor. The smell of someone you love.', icon: '🌼' },
  { sense: 'Sight', example: 'A sunset that stops you mid-sentence. Colors that feel like feelings.', icon: '🌟' },
];

export const PleasureSection: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#050202]">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/svadhisthana/svadhisthana_pleasure_senses.jpg"
          alt="Sensory pleasure"
          className="w-full h-full object-cover opacity-48"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050202]/80 via-transparent to-[#050202]/85" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center gap-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs"
        >
          The Doorways of Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white text-center"
        >
          Pleasure is Sacred
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-base md:text-lg text-center max-w-2xl leading-relaxed"
        >
          Svādhiṣṭhāna governs our relationship with pleasure. Not the compulsive chasing of it — but the capacity to be present <em>within</em> it. Tap a sense to explore.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {SENSES.map((item, i) => (
            <motion.button
              key={item.sense}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(active === i ? null : i)}
              className={`px-6 py-3 rounded-full border text-sm font-sans transition-all duration-300 ${
                active === i
                  ? 'bg-orange-900/60 border-orange-400 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                  : 'bg-black/50 border-orange-900/30 text-orange-200/60 hover:border-orange-500/50'
              }`}
            >
              {item.icon} {item.sense}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="bg-black/60 backdrop-blur-md border border-orange-800/40 rounded-2xl p-7 max-w-xl w-full text-center"
            >
              <p className="text-4xl mb-3">{SENSES[active].icon}</p>
              <p className="text-orange-300 tracking-widest uppercase text-xs mb-3 font-sans">{SENSES[active].sense}</p>
              <p className="text-white/80 text-base leading-relaxed italic">{SENSES[active].example}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/30 text-sm font-sans italic text-center"
        >
          The body is not a prison. It is the instrument through which the soul experiences.
        </motion.p>

      </div>
    </section>
  );
};
