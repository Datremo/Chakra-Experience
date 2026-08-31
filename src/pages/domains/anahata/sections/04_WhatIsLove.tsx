import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatIsLoveSection: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const concepts = [
    { id: 'ATTACHMENT', label: 'ATTACHMENT', desc: 'The fear of loss and the need to hold tightly.' },
    { id: 'CARE', label: 'CARE', desc: 'The active effort to nurture and protect another.' },
    { id: 'DESIRE', label: 'DESIRE', desc: 'The gravitational pull toward what we lack.' },
    { id: 'COMPASSION', label: 'COMPASSION', desc: 'The willingness to witness suffering without turning away.' },
    { id: 'DEVOTION', label: 'DEVOTION', desc: 'The surrender of the ego to something greater.' }
  ];

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-24 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500 uppercase mb-4">The First Question</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">What do you mean by love?</h1>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] z-10 flex items-center justify-center">
        
        {/* Floating choices */}
        <AnimatePresence>
          {!selected && concepts.map((concept, i) => {
            const angle = (i / concepts.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 150;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.button
                key={concept.id}
                onClick={() => setSelected(concept.id)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x, 
                  y,
                }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                transition={{ 
                  duration: 0.8,
                  delay: i * 0.1,
                  type: "spring"
                }}
                className="absolute px-6 py-4 rounded-full border border-emerald-500/30 text-emerald-100/70 font-sans tracking-[0.2em] uppercase text-sm backdrop-blur-md bg-black/40"
              >
                {concept.label}
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* Selected Concept Explanation */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
            >
              <h3 className="text-2xl font-sans tracking-[0.3em] text-emerald-400 mb-6 uppercase">
                {concepts.find(c => c.id === selected)?.label}
              </h3>
              <p className="text-xl font-serif text-white/80 italic max-w-lg leading-relaxed mb-12">
                {concepts.find(c => c.id === selected)?.desc}
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
              >
                <h4 className="text-3xl md:text-5xl font-serif text-white/90 mb-8">Love is not one thing.</h4>
                <button
                  onClick={() => setSelected(null)}
                  className="text-xs font-sans tracking-[0.2em] text-emerald-500/50 hover:text-emerald-400 uppercase transition-colors"
                >
                  Explore Another
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
