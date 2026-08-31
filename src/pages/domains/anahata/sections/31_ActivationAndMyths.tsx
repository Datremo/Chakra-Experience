import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';
import { SourceBadge } from '../../manipura/components/SourceBadge';

export const ActivationAndMythsSection: React.FC = () => {
  const data = useAnahataData();
  const [activeMyth, setActiveMyth] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">Evidence & Clarity</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Demystifying the Heart</h1>
        <div className="flex justify-center mb-6">
          <SourceBadge type="EVIDENCE" />
        </div>
        <p className="text-white/50 italic font-light leading-relaxed">
          The heart centre is a powerful psychological and contemplative metaphor. It is not a biological organ that can be "cleared" with crystals or green juice.
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
        {data.myths.map((myth, index) => {
          const isActive = activeMyth === index;
          return (
            <motion.div
              key={index}
              layout
              onClick={() => setActiveMyth(isActive ? null : index)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                isActive
                  ? 'bg-emerald-900/40 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-black/40 border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20'
              }`}
            >
              <h3 className={`font-sans tracking-widest text-xs uppercase mb-2 ${isActive ? 'text-emerald-300' : 'text-emerald-500/60'}`}>
                Claim
              </h3>
              <p className="font-serif text-white/80 mb-4">
                "{myth.claim}"
              </p>
              
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-emerald-500/30"
                  >
                    <h3 className="font-sans tracking-widest text-[10px] uppercase mb-2 text-rose-300">
                      Reality
                    </h3>
                    <p className="font-serif text-sm text-white/60 leading-relaxed">
                      {myth.nuance}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
