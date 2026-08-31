import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CompassionSection: React.FC = () => {
  const [target, setTarget] = useState<'SELF' | 'FRIEND' | 'STRANGER' | 'DIFFICULT' | null>(null);

  const targets = [
    { id: 'SELF', label: 'Self', desc: 'Often the hardest person to forgive. Compassion here requires dropping the inner critic and holding your own mistakes with warmth.' },
    { id: 'FRIEND', label: 'A Friend', desc: 'Usually the easiest. Compassion flows naturally when we see someone we love in pain.' },
    { id: 'STRANGER', label: 'A Stranger', desc: 'Requires recognizing shared humanity. They suffer and wish to be happy, just as you do.' },
    { id: 'DIFFICULT', label: 'Difficult Person', desc: 'The advanced practice. Not excusing their actions, but recognizing that their harmful behavior stems from their own deep suffering and ignorance.' }
  ] as const;

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403] overflow-hidden">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Practice</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Maitrī (Loving-Kindness)</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          Compassion is the ability to witness suffering and meet it with warmth. True compassion must eventually extend in all directions.
        </p>
      </div>

      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center z-10 mb-12">
        
        {/* The Target Selectors */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {targets.map((t) => (
            <button
              key={t.id}
              onClick={() => setTarget(t.id)}
              className={`px-6 py-3 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 border ${
                target === t.id
                  ? 'bg-emerald-900/40 border-emerald-400 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-black/30 border-emerald-900/30 text-emerald-100/40 hover:border-emerald-700/50 hover:text-emerald-100/80'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* The Mirror / Reflection Area */}
        <div className="relative w-full max-w-2xl h-[250px] flex items-center justify-center rounded-3xl border border-emerald-900/20 bg-emerald-950/5 backdrop-blur-sm overflow-hidden">
          
          <AnimatePresence mode="wait">
            {target ? (
              <motion.div
                key={target}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="absolute inset-0 bg-emerald-500/5 blur-[50px] pointer-events-none" />
                <h3 className="text-xl font-sans tracking-[0.2em] text-emerald-300 uppercase mb-4">
                  {targets.find(t => t.id === target)?.label}
                </h3>
                <p className="text-lg md:text-xl font-serif text-white/70 font-light leading-relaxed">
                  {targets.find(t => t.id === target)?.desc}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white/20 font-sans text-xs tracking-[0.2em] uppercase"
              >
                Direct your compassion
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};
