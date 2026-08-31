import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ENVIRONMENTS = [
  { id: 'HOME', title: 'The Physical Space', prompt: 'Does your environment support a sense of order and rest?' },
  { id: 'BODY', title: 'The Vessel', prompt: 'Are you treating your body as a temple, or as a machine you expect to run on empty?' },
  { id: 'ROUTINE', title: 'The Scaffolding', prompt: 'What daily structure keeps you steady when the world is chaotic?' },
  { id: 'MONEY', title: 'The Currency of Survival', prompt: 'What does financial security actually mean to you beyond a number?' },
  { id: 'BELONGING', title: 'The Tribe', prompt: 'Where, or with whom, do you feel you can genuinely exhale?' },
  { id: 'NATURE', title: 'The Ultimate Ground', prompt: 'How often do your bare feet touch the soil?' }
];

export const RealLifeSection: React.FC = () => {
  const [activeEnv, setActiveEnv] = useState<string | null>(null);

  return (
    <section id="integration" className="min-h-screen py-32 px-6 flex items-center justify-center relative bg-[#050202]">
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-24">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">Real Life</h2>
          <h1 className="text-5xl md:text-7xl mb-8 text-white">The Root in Everyday Life</h1>
          <p className="text-xl text-white/50 mb-12 italic">
            Chakras are not escaped into; they are lived through. Select an environment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {ENVIRONMENTS.map(env => (
            <div 
              key={env.id}
              onClick={() => setActiveEnv(activeEnv === env.id ? null : env.id)}
              className={`cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 border
                ${activeEnv === env.id 
                  ? 'bg-red-900/30 border-red-500 col-span-2 md:col-span-3 min-h-[300px]' 
                  : 'bg-black border-white/5 hover:border-red-500/30 aspect-square flex items-center justify-center'
                }`}
            >
              <AnimatePresence mode="wait">
                {activeEnv !== env.id ? (
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center p-6"
                  >
                    <h3 className="text-white/60 font-sans tracking-[0.2em] uppercase text-sm md:text-lg">{env.id}</h3>
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-12 md:p-16 flex flex-col justify-center h-full text-center"
                  >
                    <h3 className="text-red-400 font-sans tracking-[0.3em] uppercase text-sm mb-4">{env.id}</h3>
                    <h2 className="text-4xl md:text-5xl text-white mb-8">{env.title}</h2>
                    <p className="text-2xl font-serif text-white/80 italic leading-relaxed max-w-3xl mx-auto">
                      "{env.prompt}"
                    </p>
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
