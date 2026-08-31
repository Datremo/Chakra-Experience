import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WordLabSection: React.FC = () => {
  const [step, setStep] = useState(0);

  const stages = [
    {
      title: 'THOUGHT',
      desc: 'Abstract, rapid, formless.',
      color: 'text-slate-400',
      bg: 'bg-slate-400',
      shape: 'rounded-sm'
    },
    {
      title: 'FEELING',
      desc: 'The emotional charge attaching to the thought.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400',
      shape: 'rounded-xl'
    },
    {
      title: 'INTENTION',
      desc: 'The decision to communicate this outward.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-400',
      shape: 'rounded-2xl'
    },
    {
      title: 'WORDS',
      desc: 'The complex process of translating feeling into language.',
      color: 'text-blue-400',
      bg: 'bg-blue-400',
      shape: 'rounded-3xl'
    },
    {
      title: 'VOICE',
      desc: 'The physical act of vibrating the vocal cords into space.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400',
      shape: 'rounded-full'
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Assembly Line</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">How a Word is Made</h1>
      </div>

      <div className="w-full max-w-4xl relative min-h-[250px] flex flex-col md:flex-row items-center justify-between z-10 px-12">
        
        {/* Connection Line */}
        <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-px bg-white/10 hidden md:block" />

        {stages.map((stage, index) => {
          const isActive = step >= index;
          const isCurrent = step === index;

          return (
            <div key={index} className="relative flex flex-col items-center group cursor-pointer" onClick={() => setStep(index)}>
              
              <motion.div 
                className={`w-8 h-8 flex items-center justify-center mb-6 transition-all duration-500 z-10 ${
                  isActive ? `${stage.bg} shadow-[0_0_15px_rgba(255,255,255,0.3)] ${stage.shape}` : 'bg-white/5 rounded-full border border-white/10'
                } ${isCurrent ? 'scale-150' : 'scale-100'}`}
              >
                {isActive && <div className="w-2 h-2 bg-white rounded-full mix-blend-overlay" />}
              </motion.div>

              <div className={`absolute top-16 w-32 text-center transition-opacity duration-300 ${isCurrent ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                <h3 className={`font-sans text-xs tracking-widest uppercase mb-2 ${stage.color}`}>{stage.title}</h3>
                <p className="text-[10px] text-white/50 leading-relaxed font-sans">{stage.desc}</p>
              </div>

            </div>
          );
        })}

      </div>

      <div className="mt-16 text-center z-10 flex flex-col items-center">
        <p className="text-white/60 font-light max-w-lg mb-8">
          The journey from inner experience to outer expression is perilous. Misunderstandings happen when the final voice does not match the original feeling.
        </p>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-6 py-2 rounded-full border border-white/10 text-white/50 text-xs tracking-widest uppercase hover:bg-white/5 disabled:opacity-30"
          >
            Prev
          </button>
          <button 
            onClick={() => setStep(Math.min(stages.length - 1, step + 1))}
            disabled={step === stages.length - 1}
            className="px-6 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-xs tracking-widest uppercase hover:bg-cyan-950/50 disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>

    </section>
  );
};
