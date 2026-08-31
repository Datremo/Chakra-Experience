import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge, type SourceType } from '../components/SourceBadge';

export const EvidenceAndMythsSection: React.FC = () => {
  const [activeMyth, setActiveMyth] = useState<number | null>(null);

  const myths: { myth: string; truth: string; type: SourceType }[] = [
    {
      myth: "The Solar Plexus Chakra is yellow.",
      truth: "In the primary foundational texts (like the Ṣaṭ-Cakra-Nirūpaṇa), the lotus itself is described as the color of 'heavy rain-clouds' (dark), while the fire triangle inside is red like the rising sun. The solid yellow association is largely a 20th-century Western addition.",
      type: "TRADITION"
    },
    {
      myth: "A 'blocked' Manipura causes weak willpower.",
      truth: "Tantric chakras don't get 'blocked' in the psychological sense; they are subtle focal points used for meditation and installing mantras. The mapping of willpower and self-esteem to this specific center was popularized by Carl Jung and later New Age authors.",
      type: "MODERN"
    },
    {
      myth: "You should constantly try to 'stimulate' this chakra.",
      truth: "In Ayurveda, excess fire (Tīkṣṇa Agni) is just as problematic as weak fire (Manda Agni), leading to inflammation, anger, and burnout. The goal is Sama Agni—a steady, balanced, manageable heat.",
      type: "SCIENCE" as any as any
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 bg-[#020100] relative flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Discernment</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-6">Clarifying the Fire</h1>
          <p className="text-xl text-amber-100/60 font-light max-w-2xl mx-auto leading-relaxed italic">
            Much of what is commonly taught about Maṇipūra is a modern psychological overlay. Discerning tradition from modern synthesis helps us use the tools more effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full max-w-3xl">
          {myths.map((item, i) => (
            <div key={i} className="relative">
              <button
                onClick={() => setActiveMyth(activeMyth === i ? null : i)}
                className={`w-full p-6 text-left border rounded-2xl transition-all duration-300 flex justify-between items-center
                  ${activeMyth === i 
                    ? 'bg-amber-900/40 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] rounded-b-none border-b-0' 
                    : 'bg-black/50 border-amber-900/30 hover:border-amber-700 hover:bg-black/80'}
                `}
              >
                <h3 className={`text-xl font-serif ${activeMyth === i ? 'text-amber-300' : 'text-amber-100/80'}`}>
                  Myth: "{item.myth}"
                </h3>
                <span className={`text-2xl transition-transform duration-300 ${activeMyth === i ? 'rotate-180 text-amber-500' : 'text-amber-500/50'}`}>
                  ↓
                </span>
              </button>

              <AnimatePresence>
                {activeMyth === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 bg-amber-900/40 border-x border-b border-amber-500 rounded-b-2xl">
                      <div className="flex items-center gap-3 mb-4 border-t border-amber-500/30 pt-4">
                        <span className="font-sans text-xs tracking-widest uppercase text-amber-500">Perspective</span>
                        <SourceBadge type={item.type} />
                      </div>
                      <p className="text-amber-100/90 font-light leading-relaxed">
                        {item.truth}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
