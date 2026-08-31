import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SeeingExperimentSection: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Experiment</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">What do you see?</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* The Ambiguous Image (Duck / Rabbit classic illusion abstracted) */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden mb-12">
          
          {/* Abstract geometric shape that could be two things */}
          <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            {/* Base shape */}
            <path d="M 20 60 C 20 40, 40 20, 60 20 C 80 20, 90 40, 80 60 C 60 80, 20 80, 20 60 Z" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="40" r="5" fill="white" />
            <path d="M 10 50 L 30 50" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M 80 50 L 100 50" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>

          {/* Contextual cues added later */}
          <AnimatePresence>
            {step === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                {/* Visual cue for interpretation A */}
                <span className="absolute bottom-10 left-10 text-xs font-sans text-indigo-400 uppercase tracking-widest">Beak</span>
                <span className="absolute top-10 right-10 text-xs font-sans text-indigo-400 uppercase tracking-widest">Feathers</span>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                {/* Visual cue for interpretation B */}
                <span className="absolute bottom-10 right-10 text-xs font-sans text-amber-400 uppercase tracking-widest">Ears</span>
                <span className="absolute top-10 left-10 text-xs font-sans text-amber-400 uppercase tracking-widest">Nose</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Interaction */}
        <div className="h-40 text-center">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="flex gap-6 justify-center">
                  <button onClick={() => setStep(1)} className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 font-sans text-xs tracking-widest uppercase transition-all">
                    A Bird
                  </button>
                  <button onClick={() => setStep(2)} className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 font-sans text-xs tracking-widest uppercase transition-all">
                    A Rabbit
                  </button>
                </div>
              </motion.div>
            )}

            {(step === 1 || step === 2) && (
              <motion.div key="context" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <p className="text-white/60 font-light text-lg mb-6">Now look at it again.</p>
                <button onClick={() => setStep(3)} className="px-8 py-3 rounded-full border border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/30 font-sans text-xs tracking-widest uppercase transition-all">
                  Continue
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-md">
                <h3 className="text-2xl font-serif text-white mb-4">Did the image change?</h3>
                <p className="text-white/50 font-light text-sm leading-relaxed mb-6">
                  No. The lines on the screen remained exactly the same. <span className="text-white font-normal">Your interpretation changed.</span> 
                  <br/><br/>
                  What you "see" is not just incoming light; it is your brain actively constructing meaning based on context, expectations, and memory.
                </p>
                <button onClick={() => setStep(0)} className="text-[10px] uppercase font-sans tracking-widest text-white/30 hover:text-white transition-colors">
                  Restart Experiment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
