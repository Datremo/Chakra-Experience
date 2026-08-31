import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';

export const BalanceEcosystemSection: React.FC = () => {
  const data = useAnahataData();
  const [activeState, setActiveState] = useState<'closed' | 'protected' | 'open' | 'overextended'>('open');

  const states = [
    { id: 'closed', data: data.balanceStates.closed, color: 'text-slate-400', border: 'border-slate-700/50', bg: 'bg-slate-900/40' },
    { id: 'protected', data: data.balanceStates.protected, color: 'text-teal-400', border: 'border-teal-700/50', bg: 'bg-teal-900/20' },
    { id: 'open', data: data.balanceStates.open, color: 'text-emerald-400', border: 'border-emerald-500/50', bg: 'bg-emerald-900/30' },
    { id: 'overextended', data: data.balanceStates.overextended, color: 'text-rose-400', border: 'border-rose-700/50', bg: 'bg-rose-900/20' }
  ] as const;

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010302]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Spectrum</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">States of the Heart</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16 z-10">
        {states.map((state) => (
          <button
            key={state.id}
            onClick={() => setActiveState(state.id)}
            className={`px-6 py-3 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 border ${
              activeState === state.id
                ? `${state.bg} ${state.border} ${state.color} shadow-lg`
                : 'bg-black/30 border-white/5 text-white/40 hover:border-white/20'
            }`}
          >
            {state.data.title}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl min-h-[250px] relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {states.map((state) => {
            if (state.id !== activeState) return null;
            return (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={`w-full p-8 rounded-3xl border ${state.border} ${state.bg} backdrop-blur-md flex flex-col items-center text-center`}
              >
                <h3 className={`text-2xl font-serif mb-2 ${state.color}`}>
                  {state.data.title}
                </h3>
                <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50 mb-8">
                  {state.data.subtitle}
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full max-w-md">
                  {state.data.traits.map((trait, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-white/70 font-light">
                      <div className={`w-1.5 h-1.5 rounded-full ${state.color.replace('text-', 'bg-')}`} />
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

    </section>
  );
};
