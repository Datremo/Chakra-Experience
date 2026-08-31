import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MemoryMirrorSection: React.FC = () => {
  const [lens, setLens] = useState<'raw' | 'feeling' | 'interpretation'>('raw');

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Deconstruction</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Memory Mirror</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          Every memory is stored in three layers. To heal a memory, you must separate the raw data from the emotion and the story you attached to it.
        </p>
      </div>

      <div className="w-full max-w-3xl relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        
        <button 
          onClick={() => setLens('raw')}
          className={`p-6 rounded-2xl border transition-all ${lens === 'raw' ? 'border-white bg-white text-black' : 'border-white/20 text-white/50 hover:border-white/50'}`}
        >
          <h3 className="font-sans text-xs tracking-widest uppercase mb-2">Layer 1</h3>
          <span className="font-serif text-lg">Raw Data</span>
        </button>

        <button 
          onClick={() => setLens('feeling')}
          className={`p-6 rounded-2xl border transition-all ${lens === 'feeling' ? 'border-rose-500 bg-rose-500 text-white' : 'border-rose-500/20 text-rose-500/50 hover:border-rose-500/50'}`}
        >
          <h3 className="font-sans text-xs tracking-widest uppercase mb-2">Layer 2</h3>
          <span className="font-serif text-lg">Emotion</span>
        </button>

        <button 
          onClick={() => setLens('interpretation')}
          className={`p-6 rounded-2xl border transition-all ${lens === 'interpretation' ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-indigo-500/20 text-indigo-500/50 hover:border-indigo-500/50'}`}
        >
          <h3 className="font-sans text-xs tracking-widest uppercase mb-2">Layer 3</h3>
          <span className="font-serif text-lg">The Story</span>
        </button>

      </div>

      <div className="w-full max-w-2xl h-64 relative flex items-center justify-center p-8 border border-white/10 bg-white/5 rounded-3xl">
        <AnimatePresence mode="wait">
          
          {lens === 'raw' && (
            <motion.div key="raw" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
              <p className="text-2xl font-serif text-white/90 leading-relaxed">
                "We sat in the car. They said it was over. I opened the door and walked inside."
              </p>
              <p className="text-white/40 font-light text-sm mt-6 uppercase tracking-widest">
                Just the facts. A camera's perspective.
              </p>
            </motion.div>
          )}

          {lens === 'feeling' && (
            <motion.div key="feeling" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
              <p className="text-2xl font-serif text-rose-300 leading-relaxed italic">
                "I felt a sudden drop in my stomach. My chest tightened. I felt completely breathless and panicked."
              </p>
              <p className="text-rose-400/50 font-light text-sm mt-6 uppercase tracking-widest">
                The somatic response. Valid, but purely physical.
              </p>
            </motion.div>
          )}

          {lens === 'interpretation' && (
            <motion.div key="interpretation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
              <p className="text-2xl font-serif text-indigo-300 leading-relaxed font-bold">
                "I am unlovable. Everyone always leaves me. I will be alone forever."
              </p>
              <p className="text-indigo-400/50 font-light text-sm mt-6 uppercase tracking-widest">
                The constructed meaning. The source of suffering.
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
};
