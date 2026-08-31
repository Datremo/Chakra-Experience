import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BlockedThirdEyeSection: React.FC = () => {
  const [activeBlock, setActiveBlock] = useState<'logic' | 'fantasy' | null>(null);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Obstructions</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Two Extremes</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          An unbalanced third eye does not mean you have lost your magic. It usually means you have fallen into one of two traps.
        </p>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Logic Obsession */}
        <div 
          className="w-full md:w-1/2 flex flex-col items-center cursor-pointer group"
          onClick={() => setActiveBlock('logic')}
        >
          <div className={`w-48 h-48 rounded-full border-4 flex items-center justify-center transition-all duration-500 mb-8 ${activeBlock === 'logic' ? 'border-amber-500 bg-amber-500/10' : 'border-white/10 group-hover:border-amber-500/50'}`}>
            <div className={`w-32 h-32 bg-[#111] grid grid-cols-4 grid-rows-4 gap-1 p-2 transition-transform duration-500 ${activeBlock === 'logic' ? 'rotate-90 scale-90' : ''}`}>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={`bg-amber-500/20 ${activeBlock === 'logic' ? 'opacity-100' : 'opacity-30'}`} />
              ))}
            </div>
          </div>
          <h3 className={`text-2xl font-serif transition-colors ${activeBlock === 'logic' ? 'text-amber-400' : 'text-white/50'}`}>Logic Obsession</h3>
        </div>

        {/* Ungrounded Fantasy */}
        <div 
          className="w-full md:w-1/2 flex flex-col items-center cursor-pointer group"
          onClick={() => setActiveBlock('fantasy')}
        >
          <div className={`w-48 h-48 rounded-full border-4 flex items-center justify-center transition-all duration-500 mb-8 overflow-hidden relative ${activeBlock === 'fantasy' ? 'border-fuchsia-500 bg-fuchsia-500/10' : 'border-white/10 group-hover:border-fuchsia-500/50'}`}>
            <motion.div 
              className="absolute inset-0 opacity-50"
              animate={{ 
                background: activeBlock === 'fantasy' 
                  ? ['radial-gradient(circle, rgba(217,70,239,0.8) 0%, transparent 60%)', 'radial-gradient(circle, rgba(217,70,239,0.2) 0%, transparent 60%)']
                  : 'none'
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            />
            <div className={`text-6xl filter blur-sm transition-all duration-500 ${activeBlock === 'fantasy' ? 'scale-150 rotate-45' : 'scale-100'}`}>
              ✨
            </div>
          </div>
          <h3 className={`text-2xl font-serif transition-colors ${activeBlock === 'fantasy' ? 'text-fuchsia-400' : 'text-white/50'}`}>Ungrounded Fantasy</h3>
        </div>

      </div>

      <div className="w-full max-w-2xl mt-16 h-48 text-center">
        <AnimatePresence mode="wait">
          {activeBlock === 'logic' && (
            <motion.div key="logic" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h4 className="font-sans text-xs tracking-widest text-amber-400 uppercase mb-4">Underactive</h4>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                You require hard, measurable proof for everything. You are deeply cynical, dismiss intuition entirely, and feel cut off from imagination. Life is nothing but spreadsheets, routines, and physical matter.
              </p>
              <div className="inline-block px-4 py-1 border border-amber-500/30 rounded-full text-[10px] text-amber-300 uppercase tracking-widest bg-amber-500/10">
                Antidote: Free creative expression. Fiction reading. Dreaming.
              </div>
            </motion.div>
          )}

          {activeBlock === 'fantasy' && (
            <motion.div key="fantasy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h4 className="font-sans text-xs tracking-widest text-fuchsia-400 uppercase mb-4">Overactive</h4>
              <p className="text-white/70 font-light leading-relaxed mb-4">
                You are completely unanchored. You see "signs" in everything, struggle to deal with physical reality, suffer from paranoid delusions, or use spirituality as an excuse to avoid paying bills or maintaining relationships.
              </p>
              <div className="inline-block px-4 py-1 border border-fuchsia-500/30 rounded-full text-[10px] text-fuchsia-300 uppercase tracking-widest bg-fuchsia-500/10">
                Antidote: Root chakra grounding. Physical exercise. Logic puzzles.
              </div>
            </motion.div>
          )}

          {!activeBlock && (
            <motion.div key="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex h-full items-center justify-center">
              <span className="text-white/30 font-light italic">Select an obstruction to examine it.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
