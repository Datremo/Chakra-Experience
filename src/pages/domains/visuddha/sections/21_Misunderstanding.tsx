import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const MisunderstandingSection: React.FC = () => {
  const [revealed, setRevealed] = useState(0);

  const chain = [
    { label: "1. Speaker's Intention", text: "I want to help.", color: "text-cyan-400" },
    { label: "2. Words Chosen", text: "\"You should do it this way.\"", color: "text-blue-400" },
    { label: "3. Tone / Emotion", text: "Rushed, slightly frustrated.", color: "text-indigo-400" },
    { label: "4. Listener's Context", text: "Already feeling incompetent.", color: "text-purple-400" },
    { label: "5. Interpretation", text: "\"They think I'm stupid.\"", color: "text-red-400" }
  ];

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#010308]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Gap</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Anatomy of a Misunderstanding</h1>
        <p className="text-white/50 font-light mt-4 text-sm">
          Click to trace the journey of a single sentence.
        </p>
      </div>

      <div className="w-full max-w-3xl relative z-10 flex flex-col items-center">
        
        <div className="flex flex-col gap-6 w-full max-w-md cursor-pointer" onClick={() => setRevealed(r => Math.min(r + 1, chain.length))}>
          {chain.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: revealed > index ? 1 : 0, x: revealed > index ? 0 : -20 }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-xl border ${revealed > index ? 'border-white/10 bg-white/5' : 'border-transparent'} flex flex-col items-center text-center`}
            >
              <h3 className="font-sans text-[10px] tracking-widest text-white/40 uppercase mb-2">{link.label}</h3>
              <p className={`font-serif text-xl ${link.color}`}>{link.text}</p>
            </motion.div>
          ))}
        </div>

        {revealed >= chain.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-white/60 font-light max-w-lg leading-relaxed">
              The words spoken are rarely the words heard. Viśuddha is not just the act of speaking; it is taking responsibility for how your expression lands in the space between you and another.
            </p>
            <button 
              onClick={(e) => { e.stopPropagation(); setRevealed(0); }}
              className="mt-8 px-6 py-2 border border-white/10 rounded-full text-[10px] font-sans tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
            >
              Reset
            </button>
          </motion.div>
        )}

      </div>

    </section>
  );
};
