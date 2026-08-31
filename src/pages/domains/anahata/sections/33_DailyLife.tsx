import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';

export const DailyLifeSection: React.FC = () => {
  const data = useAnahataData();
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleTask = (index: number) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter(i => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  const isAllComplete = completed.length === data.realLifeExperiment.length;

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020604]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">Off the Mat</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Real Life Experiments</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          The true test of an open heart is not how you feel during meditation, but how you interact with the world when you stand up.
        </p>
      </div>

      <div className="w-full max-w-2xl z-10">
        <div className="grid grid-cols-1 gap-4">
          {data.realLifeExperiment.map((experiment, index) => {
            const isDone = completed.includes(index);
            return (
              <motion.button
                key={index}
                onClick={() => toggleTask(index)}
                className={`flex items-center text-left p-6 rounded-2xl border transition-all duration-300 ${
                  isDone
                    ? 'bg-emerald-900/10 border-emerald-900/50 opacity-50'
                    : 'bg-emerald-950/20 border-emerald-800/30 hover:border-emerald-500/50'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-6 shrink-0 transition-colors ${
                  isDone ? 'border-emerald-500 bg-emerald-500' : 'border-emerald-800/50 bg-transparent'
                }`}>
                  {isDone && (
                    <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="w-4 h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </motion.svg>
                  )}
                </div>
                <span className={`font-serif text-lg md:text-xl transition-colors ${
                  isDone ? 'text-white/30 line-through' : 'text-white/80'
                }`}>
                  {experiment}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {isAllComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-center z-10"
          >
            <p className="font-sans tracking-widest text-emerald-400 uppercase text-sm">
              The heart is active.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
