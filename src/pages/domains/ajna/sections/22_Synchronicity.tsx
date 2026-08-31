import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SynchronicitySection: React.FC = () => {
  const [stage, setStage] = useState(0);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Meaning</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Synchronicity</h1>
      </div>

      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
              <p className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-12">
                You look at the clock. It is exactly 11:11. <br/>
                You think of an old friend, and they call you two minutes later.
              </p>
              <button 
                onClick={() => setStage(1)}
                className="px-8 py-3 rounded-full border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 font-sans text-xs tracking-widest uppercase transition-all"
              >
                What does it mean?
              </button>
            </motion.div>
          )}

          {stage === 1 && (
            <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                  <h3 className="font-sans text-xs tracking-widest text-amber-400 uppercase mb-4">The Skeptic</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    "It is pure statistical probability. You look at the clock dozens of times a day and forget when it says 10:42. You only remember 11:11 because it stands out."
                  </p>
                </div>
                <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                  <h3 className="font-sans text-xs tracking-widest text-indigo-400 uppercase mb-4">The Mystic</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    "It is a sign from the universe. You are aligned with the cosmos. It means you are on the right path and a breakthrough is coming."
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button 
                  onClick={() => setStage(2)}
                  className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 font-sans text-xs tracking-widest uppercase transition-all"
                >
                  The Middle Path
                </button>
              </div>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center max-w-lg">
              <div className="w-16 h-16 mx-auto border border-emerald-400/50 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                <div className="w-2 h-2 bg-emerald-300 rounded-full" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-6">The Mirror</h3>
              <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                Synchronicity doesn't need to be magic to be meaningful. The event itself is neutral. The <i>meaning</i> you assign to it reveals what your subconscious is currently processing. <br/><br/>
                It is not the universe telling you what to do; it is the universe providing a mirror for you to see your own mind.
              </p>
              <button 
                onClick={() => setStage(0)}
                className="text-[10px] uppercase font-sans tracking-widest text-white/30 hover:text-white transition-colors"
              >
                Reset
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
