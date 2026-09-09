import React from 'react';
import { motion } from 'framer-motion';

const WISDOM = [
  {
    title: 'Cohesion',
    body: 'Water molecules cling to each other through hydrogen bonds \u2014 the same way we cling to relationships, memories, and identities. Svadhisthana teaches us that cohesion is natural, but rigidity is not.',
  },
  {
    title: 'Movement',
    body: 'Still water stagnates. Flowing water purifies. The sacral chakra requires movement \u2014 of emotion, of creativity, of the body itself. When we stop moving, we stop processing.',
  },
  {
    title: 'Dissolution',
    body: 'Water dissolves rigid boundaries. Salt, sugar, grief, old stories \u2014 water breaks them down. Svadhisthana teaches us that softness is the most powerful form of transformation.',
  },
];

export const WaterElementSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#02080f]">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/svadhisthana/svadhisthana_stormy_ocean_1788966683966.jpg"
          alt="Water element"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02080f]/80 via-transparent to-[#02080f]/90" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center gap-8">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-teal-400 font-sans uppercase tracking-[0.4em] text-xs"
        >
          Element
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 text-4xl md:text-6xl font-serif text-teal-50 drop-shadow-lg"
        >
          {['WATER', 'FLOW', 'ADAPTATION'].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-lg text-teal-100/70 max-w-2xl leading-relaxed"
        >
          Sv\u0101dhi\u1e63\u1e6dh\u0101na is traditionally associated with the element of water (\u0100pa\u1e25). In classical thought, water represents cohesion, movement, and the dissolution of rigid boundaries.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-2">
          {WISDOM.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="bg-teal-900/20 backdrop-blur-md border border-teal-700/30 rounded-2xl p-6"
            >
              <p className="text-teal-300 font-sans uppercase tracking-widest text-xs mb-3">{item.title}</p>
              <p className="text-white/70 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-base text-orange-300/70 italic"
        >
          \u201cWhy does this chakra use a six-petaled lotus?\u201d
        </motion.p>

      </div>
    </section>
  );
};
