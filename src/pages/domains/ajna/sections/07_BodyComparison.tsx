import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BodyComparisonSection: React.FC = () => {
  const [view, setView] = useState<'physical' | 'traditional' | 'modern'>('physical');

  const content = {
    physical: {
      title: 'Physical Anatomy',
      body: 'The forehead, the brain, and the pineal gland.',
      alert: 'The physical body does not contain a literal third eye. The pineal gland regulates sleep cycles (melatonin). Equating a subtle-body energy center with a physical gland is a 20th-century invention.'
    },
    traditional: {
      title: 'Traditional Subtle Body',
      body: 'The Ājñā Chakra at Bhrūmadhya (Between the Eyebrows).',
      alert: 'In classical Tantra, this is a visualized, subtle center used for concentration and the dissolution of mind. It is not a physical organ.'
    },
    modern: {
      title: 'Modern Third Eye',
      body: 'The glowing indigo eye of psychic perception.',
      alert: 'Contemporary spirituality visualizes a literal "eye" that grants intuition or visions. This is a powerful metaphor, but it is a modernized reinterpretation, not the original teaching.'
    }
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Frameworks</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Different Maps</h1>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center z-10">
        
        {/* View Toggles */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(['physical', 'traditional', 'modern'] as const).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-6 py-2 rounded-full border text-[10px] md:text-xs font-sans tracking-widest uppercase transition-all ${
                view === v ? 'bg-indigo-900/50 border-indigo-400 text-indigo-300' : 'bg-transparent border-white/20 text-white/50 hover:border-white/50'
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Visual Map Area */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex justify-center items-center mb-12">
          
          {/* Base Head Outline */}
          <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100">
            <ellipse cx="50" cy="50" rx="30" ry="40" fill="none" stroke="white" strokeWidth="1" />
            <path d="M 35 45 Q 50 55 65 45" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M 50 20 L 50 80" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>

          <AnimatePresence mode="wait">
            {view === 'physical' && (
              <motion.div
                key="physical"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Brain / Pineal rough visual */}
                <div className="w-32 h-24 border border-slate-500/50 rounded-[40%] flex items-center justify-center absolute top-12">
                  <div className="w-3 h-3 bg-red-400/50 rounded-full absolute right-1/4 bottom-1/4 shadow-[0_0_10px_rgba(248,113,113,0.5)]" />
                  <span className="absolute -right-24 bottom-0 text-[9px] font-sans text-red-300/70 tracking-widest uppercase border-b border-red-900/50 pb-1">Pineal Gland</span>
                </div>
              </motion.div>
            )}

            {view === 'traditional' && (
              <motion.div
                key="traditional"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute top-16 w-16 h-16 border-2 border-indigo-200/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(199,210,254,0.3)] bg-white/5">
                  <div className="absolute -left-4 w-6 h-6 border border-indigo-200/50 rounded-full" />
                  <div className="absolute -right-4 w-6 h-6 border border-indigo-200/50 rounded-full" />
                  <span className="text-xl font-serif text-white">ॐ</span>
                </div>
              </motion.div>
            )}

            {view === 'modern' && (
              <motion.div
                key="modern"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute top-16 w-20 h-10 border-t-2 border-b-2 border-indigo-400 rounded-[100%] flex items-center justify-center bg-indigo-900/30 shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                  <div className="w-6 h-6 rounded-full border-2 border-indigo-300 bg-white shadow-[0_0_15px_#fff]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Text Area */}
        <div className="h-40 text-center max-w-2xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h3 className="text-2xl font-serif text-white/90 mb-4">{content[view].title}</h3>
              <p className="text-white/70 font-light mb-6">{content[view].body}</p>
              
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-left">
                <span className="text-[10px] font-sans tracking-widest text-indigo-400 uppercase mb-1 block">Context</span>
                <p className="text-xs text-white/60 font-light leading-relaxed">{content[view].alert}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
