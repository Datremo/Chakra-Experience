import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoveWithoutFixingSection: React.FC = () => {
  const [choice, setChoice] = useState<'FIX' | 'WITHDRAW' | 'WITNESS' | null>(null);

  const scenario = "Someone you care about comes to you in deep emotional pain. They are crying and overwhelmed by a situation they cannot change.";

  const options = [
    { id: 'FIX', label: 'Try to fix it', desc: '"Here is what you should do..." or "It will be fine, look on the bright side."' },
    { id: 'WITHDRAW', label: 'Withdraw', desc: 'Become uncomfortable, change the subject, or physically leave the room.' },
    { id: 'WITNESS', label: 'Witness', desc: 'Sit quietly. "I am so sorry you are going through this. I am here."' }
  ] as const;

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010302]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Test of Presence</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Love Without Fixing</h1>
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center z-10">
        
        <div className="bg-emerald-950/20 border border-emerald-900/30 p-8 rounded-3xl mb-12 backdrop-blur-sm text-center">
          <p className="text-xl md:text-2xl font-serif text-white/80 leading-relaxed italic">
            {scenario}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full justify-center mb-16">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setChoice(opt.id)}
              className={`flex-1 p-6 rounded-2xl border transition-all text-left group ${
                choice === opt.id 
                  ? 'bg-emerald-900/40 border-emerald-400 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-black/40 border-white/10 hover:border-emerald-700/50 hover:bg-emerald-950/30'
              }`}
            >
              <h3 className={`font-sans tracking-widest text-xs uppercase mb-3 ${choice === opt.id ? 'text-emerald-300' : 'text-emerald-500/60 group-hover:text-emerald-400'}`}>
                {opt.label}
              </h3>
              <p className="font-serif text-sm text-white/60">
                {opt.desc}
              </p>
            </button>
          ))}
        </div>

        <div className="h-40 text-center w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {choice === 'FIX' && (
              <motion.div key="fix" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <h4 className="text-xl font-serif text-rose-300 mb-3">You are managing your own anxiety.</h4>
                <p className="text-white/60 font-light leading-relaxed">
                  Trying to "fix" someone's unfixable pain is often a mechanism to soothe our own discomfort with their suffering. It subtly tells them their pain is unacceptable.
                </p>
              </motion.div>
            )}
            
            {choice === 'WITHDRAW' && (
              <motion.div key="withdraw" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <h4 className="text-xl font-serif text-slate-300 mb-3">You have closed the perimeter.</h4>
                <p className="text-white/60 font-light leading-relaxed">
                  Withdrawing protects you from feeling their pain, but it leaves them abandoned in their time of need.
                </p>
              </motion.div>
            )}

            {choice === 'WITNESS' && (
              <motion.div key="witness" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <h4 className="text-xl font-serif text-emerald-300 mb-3">The open heart.</h4>
                <p className="text-white/60 font-light leading-relaxed">
                  To sit with someone's pain without trying to change it, fix it, or run from it requires immense internal stability. This is true compassion.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
