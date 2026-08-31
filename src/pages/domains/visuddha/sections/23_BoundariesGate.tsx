import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BoundariesGateSection: React.FC = () => {
  const [style, setStyle] = useState<'passive' | 'assertive' | 'aggressive'>('assertive');

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Gate</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Setting Boundaries</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-12 z-10">
        
        {/* Left: Controls */}
        <div className="flex flex-col gap-4 md:w-1/3">
          {(['passive', 'assertive', 'aggressive'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 border ${
                style === s 
                  ? `bg-white/5 border-${s === 'passive' ? 'slate' : s === 'assertive' ? 'cyan' : 'red'}-500/50` 
                  : 'bg-transparent border-transparent hover:border-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              <h3 className={`font-sans text-xs tracking-widest uppercase ${
                s === 'passive' ? 'text-slate-400' : s === 'assertive' ? 'text-cyan-400' : 'text-red-400'
              }`}>
                {s}
              </h3>
            </button>
          ))}
        </div>

        {/* Right: Visualization */}
        <div className="md:w-2/3 relative h-[300px] flex items-center justify-center p-8 rounded-3xl border border-white/5 bg-black/20 overflow-hidden">
          
          <AnimatePresence mode="wait">
            {style === 'passive' && (
              <motion.div
                key="passive"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-48 h-1 bg-slate-500/30 mb-8 rounded-full border border-dashed border-slate-500" />
                <p className="text-slate-400 font-serif text-2xl mb-2">"It's fine. Don't worry about it."</p>
                <p className="text-slate-500 text-sm font-light">The gate is absent. Resentment enters freely.</p>
              </motion.div>
            )}

            {style === 'assertive' && (
              <motion.div
                key="assertive"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-64 h-2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] mb-8 rounded-full" />
                <p className="text-cyan-100 font-serif text-2xl mb-2">"I cannot do that right now."</p>
                <p className="text-cyan-500/70 text-sm font-light">The gate is clear and solid. Respect is maintained.</p>
              </motion.div>
            )}

            {style === 'aggressive' && (
              <motion.div
                key="aggressive"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full max-w-sm h-4 bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.8)] mb-8 rounded-none border border-red-400" />
                <p className="text-red-400 font-serif text-2xl mb-2">"You're always asking me for things!"</p>
                <p className="text-red-500/70 text-sm font-light">The gate is a weapon. Connection is destroyed.</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};
