import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ThoughtBeliefActionSection: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { label: "The Event", text: "Someone walks past you without saying hello.", color: "text-white/50" },
    { label: "The Thought", text: "\"They are ignoring me on purpose.\"", color: "text-indigo-300" },
    { label: "The Belief", text: "\"People don't actually like me.\"", color: "text-purple-400" },
    { label: "The Action", text: "You withdraw and act coldly toward them later.", color: "text-red-400" },
  ];

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Chain</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Interpretation</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Ājñā is the center of perception. To see clearly, you must see how quickly a neutral event becomes a false reality.
        </p>
      </div>

      <div className="w-full max-w-2xl relative z-10 flex flex-col space-y-6">
        
        {steps.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: step >= i ? 1 : 0.2, x: step >= i ? 0 : -20 }}
            className={`p-6 border rounded-2xl flex items-center gap-6 cursor-pointer transition-colors ${
              step >= i ? 'border-white/20 bg-white/5' : 'border-white/5 bg-transparent'
            }`}
            onClick={() => setStep(i)}
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex flex-shrink-0 items-center justify-center font-serif text-white/50">
              {i + 1}
            </div>
            <div>
              <h3 className="font-sans text-[10px] tracking-widest text-white/40 uppercase mb-1">{s.label}</h3>
              <p className={`text-lg font-light ${step >= i ? s.color : 'text-white/20'}`}>
                {s.text}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      <div className="mt-12 text-center">
        {step < 3 ? (
          <button 
            onClick={() => setStep(prev => Math.min(prev + 1, 3))}
            className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 font-sans text-xs tracking-widest uppercase transition-all"
          >
            Advance Time
          </button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto">
            <p className="text-white/60 font-light italic mb-4">
              The event was neutral. They simply didn't see you because they were distracted. By cutting the chain at "The Thought," you prevent the illusion from forming.
            </p>
            <button 
              onClick={() => setStep(0)}
              className="text-[10px] uppercase font-sans tracking-widest text-white/30 hover:text-white transition-colors"
            >
              Reset
            </button>
          </motion.div>
        )}
      </div>

    </section>
  );
};
