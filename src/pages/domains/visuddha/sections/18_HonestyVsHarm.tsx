import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HonestyVsHarmSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const scenarios = [
    {
      context: 'A friend asks if you like their new creative project. You think it is fundamentally flawed.',
      blunt: 'It is terrible and you should start over.',
      silent: 'I love it. It is perfect.',
      balanced: 'I see a lot of potential here. Do you want honest feedback on where I think it could be stronger?'
    },
    {
      context: 'Your partner is exhausted and stressed, and they just made a minor mistake.',
      blunt: 'You did that wrong again.',
      silent: '(Saying nothing, but harboring resentment)',
      balanced: '(Wait until they are rested). Hey, about yesterday, could we try doing it this way next time?'
    },
    {
      context: 'You are overwhelmed and cannot take on another task at work.',
      blunt: 'I am not doing this. You always dump work on me.',
      silent: 'Sure, I can handle it. (Burns out)',
      balanced: 'I want to help, but my plate is full right now. Let us prioritize what needs to be dropped so I can take this on.'
    }
  ];

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Skillful Means</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Honesty vs. Harm</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        
        {/* Scenario Selection */}
        <div className="flex gap-4 justify-center mb-12">
          {scenarios.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              className={`w-12 h-2 transition-all duration-300 rounded-full ${
                activeCard === i ? 'bg-cyan-400 w-24' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center mb-8">
              <h3 className="font-sans text-xs tracking-widest text-white/40 uppercase mb-4">Context</h3>
              <p className="text-xl font-serif text-white/90">{scenarios[activeCard].context}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* The Blunt Truth */}
              <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30">
                <h3 className="font-sans text-[10px] tracking-widest text-red-500/70 uppercase mb-3">Blunt Truth</h3>
                <p className="text-white/60 font-light italic">"{scenarios[activeCard].blunt}"</p>
                <div className="mt-4 text-[10px] text-red-400/50 uppercase tracking-wider">High friction, low care</div>
              </div>

              {/* The Silence / Lie */}
              <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-700/30">
                <h3 className="font-sans text-[10px] tracking-widest text-slate-500/70 uppercase mb-3">Suppression</h3>
                <p className="text-white/60 font-light italic">"{scenarios[activeCard].silent}"</p>
                <div className="mt-4 text-[10px] text-slate-400/50 uppercase tracking-wider">Low friction, high internal cost</div>
              </div>

              {/* The Skillful Truth */}
              <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <h3 className="font-sans text-[10px] tracking-widest text-cyan-400 uppercase mb-3">Skillful Expression</h3>
                <p className="text-cyan-100/90 font-light italic">"{scenarios[activeCard].balanced}"</p>
                <div className="mt-4 text-[10px] text-cyan-500/70 uppercase tracking-wider">Truth delivered with care</div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};
