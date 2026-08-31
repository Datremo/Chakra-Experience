import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const JourneyAndExperimentSection: React.FC = () => {
  const [committed, setCommitted] = useState(false);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020504]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Commitment</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">The 7-Day Experiment</h1>
      </div>

      <div className="w-full max-w-3xl bg-emerald-950/20 border border-emerald-900/30 rounded-3xl p-8 md:p-12 z-10 backdrop-blur-md relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[50px] pointer-events-none" />

        <div className="mb-12 relative z-10">
          <h3 className="text-2xl font-serif text-emerald-300 mb-6">The Parameters:</h3>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <span className="font-sans text-emerald-500 text-xs mt-1 shrink-0">1.</span>
              <span className="font-serif text-white/80 leading-relaxed">For the next 7 days, before you reply to an email, answer a text, or walk into a room, take one conscious breath into the center of your chest.</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-sans text-emerald-500 text-xs mt-1 shrink-0">2.</span>
              <span className="font-serif text-white/80 leading-relaxed">When someone annoys you, silently say to yourself: "They wish to be happy and free from suffering, just like me."</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-sans text-emerald-500 text-xs mt-1 shrink-0">3.</span>
              <span className="font-serif text-white/80 leading-relaxed">Say "no" to one thing you do not have the genuine capacity to do. Notice the guilt. Let the guilt exist without changing your "no."</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center relative z-10 h-32 border-t border-emerald-900/30 pt-8">
          <AnimatePresence mode="wait">
            {!committed ? (
              <motion.button
                key="commit"
                onClick={() => setCommitted(true)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="px-8 py-4 rounded-full bg-emerald-900/40 border border-emerald-400 text-emerald-100 font-sans text-xs tracking-[0.2em] uppercase hover:bg-emerald-800/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
              >
                I Accept The Challenge
              </motion.button>
            ) : (
              <motion.div
                key="accepted"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <h3 className="text-xl font-serif text-emerald-300 mb-2">Commitment Registered</h3>
                <p className="text-white/50 font-light text-sm">The heart opens through action, not just intention.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
