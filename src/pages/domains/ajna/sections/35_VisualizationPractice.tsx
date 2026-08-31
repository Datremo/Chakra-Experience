import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const VisualizationPracticeSection: React.FC = () => {
  const [step, setStep] = useState(0);

  const instructions = [
    "Close your physical eyes. Look upward slightly, as if staring at the center of your forehead.",
    "Imagine a small, unlit lantern sitting in the center of your skull.",
    "Breathe in. As you inhale, imagine a spark igniting the wick.",
    "With every breath, the indigo light grows stronger, burning away the fog of confusion.",
    "Rest in this light. You do not need to figure anything out right now."
  ];

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Practice</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Inner Lantern</h1>
      </div>

      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center">
        
        <div className="w-64 h-64 relative flex items-center justify-center mb-12">
          
          {/* Skull/Head outline abstract */}
          <div className="absolute inset-0 border-2 border-white/5 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] animate-[spin_20s_linear_infinite]" />
          
          {/* The Lantern Light */}
          <motion.div 
            className="w-12 h-12 rounded-full bg-indigo-500 mix-blend-screen"
            initial={{ filter: 'blur(2px)', opacity: 0, scale: 0.5 }}
            animate={{ 
              filter: `blur(${step * 10 + 2}px)`, 
              opacity: step >= 2 ? 0.8 : 0,
              scale: step >= 2 ? 1 + (step * 0.5) : 0.5,
              boxShadow: step >= 2 ? `0 0 ${step * 20}px rgba(99,102,241,${step * 0.2})` : 'none'
            }}
            transition={{ duration: 2 }}
          />

        </div>

        <div className="h-32 flex items-center justify-center text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="text-xl font-serif text-white/80 leading-relaxed">
                {instructions[step]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex gap-4">
          <button 
            onClick={() => setStep(prev => Math.max(0, prev - 1))}
            disabled={step === 0}
            className="px-6 py-2 border border-white/10 rounded-full text-white/40 uppercase tracking-widest text-xs disabled:opacity-30"
          >
            Prev
          </button>
          <button 
            onClick={() => setStep(prev => Math.min(instructions.length - 1, prev + 1))}
            disabled={step === instructions.length - 1}
            className="px-6 py-2 border border-indigo-500/50 bg-indigo-500/10 rounded-full text-indigo-300 uppercase tracking-widest text-xs disabled:opacity-30"
          >
            Next
          </button>
        </div>

      </div>

    </section>
  );
};
