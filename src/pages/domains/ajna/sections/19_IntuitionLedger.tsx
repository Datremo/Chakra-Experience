import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntuitionLedgerSection: React.FC = () => {
  const [entries, setEntries] = useState([
    { id: 1, feeling: "I felt like I shouldn't go to the party.", outcome: "I went anyway and had a terrible time.", isHit: true },
    { id: 2, feeling: "I was sure they were going to fire me today.", outcome: "They promoted me instead.", isHit: false },
    { id: 3, text: "I had a weird feeling about taking that flight.", outcome: "The flight was completely fine.", isHit: false }
  ]);

  const [showForm, setShowForm] = useState(false);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-12">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Ledger</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Confirmation Bias</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          We remember the one time our "intuition" was right and forget the ninety-nine times it was wrong. True seers track their accuracy.
        </p>
      </div>

      <div className="w-full max-w-3xl relative z-10">
        
        <div className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-white/5 font-sans text-[10px] tracking-widest text-white/40 uppercase">
            <div className="col-span-5">The Feeling / Prediction</div>
            <div className="col-span-5">The Actual Outcome</div>
            <div className="col-span-2 text-center">Result</div>
          </div>

          {/* Entries */}
          <div className="divide-y divide-white/5">
            {entries.map((entry, i) => (
              <motion.div 
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-5 text-white/70 font-light text-sm italic">"{entry.feeling || entry.text}"</div>
                <div className="col-span-5 text-white/50 font-light text-sm">{entry.outcome}</div>
                <div className="col-span-2 flex justify-center">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase border ${
                    entry.isHit 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                  }`}>
                    {entry.isHit ? 'Hit' : 'Miss'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="p-4 border-t border-white/10 bg-white/[0.02] flex justify-center">
            <button 
              onClick={() => setShowForm(!showForm)}
              className="text-xs font-sans tracking-widest uppercase text-indigo-400 hover:text-white transition-colors"
            >
              {showForm ? 'Cancel' : '+ Add to Ledger'}
            </button>
          </div>

          <AnimatePresence>
            {showForm && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-white/10 bg-[#050505] p-6 overflow-hidden"
              >
                <p className="text-white/40 font-light text-sm text-center italic">
                  (In a real practice, you would record your predictions here and check them later. Only through honest tracking can you separate true intuition from fear and fantasy.)
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
