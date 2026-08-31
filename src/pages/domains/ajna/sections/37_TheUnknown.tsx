import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheUnknownSection: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Humility</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Unknown</h1>
      </div>

      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center justify-center h-64 border border-white/10 rounded-3xl bg-white/5 p-8 text-center">
        
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div key="q" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-xl font-serif text-white/80 leading-relaxed mb-8">
                You receive a strange email with no subject line and an attachment. <br/> What is it?
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-2 border border-rose-500/50 text-rose-300 rounded-full text-xs uppercase tracking-widest hover:bg-rose-500/10 transition-colors">
                  It's a virus (Fear)
                </button>
                <button className="px-6 py-2 border border-emerald-500/50 text-emerald-300 rounded-full text-xs uppercase tracking-widest hover:bg-emerald-500/10 transition-colors">
                  It's the job offer (Desire)
                </button>
                <button 
                  onClick={() => setRevealed(true)}
                  className="px-6 py-2 border border-indigo-500/50 bg-indigo-500/20 text-indigo-200 rounded-full text-xs uppercase tracking-widest hover:bg-indigo-500/40 transition-colors"
                >
                  I Don't Know.
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="a" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md">
              <h3 className="text-2xl font-serif text-indigo-300 mb-4">The Ultimate Power</h3>
              <p className="text-white/60 font-light leading-relaxed">
                The ego hates a vacuum. It will invent a terrifying story or a beautiful fantasy just to avoid the discomfort of uncertainty. To say <i>"I don't know"</i> and sit comfortably in the not-knowing is the mark of an awakened third eye.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
