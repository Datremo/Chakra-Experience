import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAjnaData } from '../../../../data/ajnaData';

export const HistoricalObservatorySection: React.FC = () => {
  const data = useAjnaData();
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(data.history.length - 1, i + 1));

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#010204]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Evolution</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Celestial Observatory</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        
        {/* Telescope Viewfinder */}
        <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-black/50 border border-white/10 rounded-full overflow-hidden flex items-center justify-center shadow-[inset_0_0_50px_rgba(0,0,0,1)]">
          
          {/* Constellation lines moving in background to simulate panning */}
          <motion.div
            className="absolute inset-0 opacity-20 pointer-events-none"
            animate={{ x: `-${index * 20}%` }}
            transition={{ type: "spring", bounce: 0 }}
          >
            <svg width="200%" height="100%">
              {Array.from({ length: 50 }).map((_, i) => (
                <circle key={i} cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r="1" fill="white" />
              ))}
            </svg>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 max-w-lg"
            >
              <h3 className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-indigo-400 uppercase mb-4">
                {data.history[index].era}
              </h3>
              <p className="font-serif text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                {data.history[index].description}
              </p>
              
              <div className={`inline-block px-4 py-1 rounded-full text-[9px] font-sans tracking-widest uppercase border ${
                data.history[index].status === 'Documented' ? 'border-emerald-500/50 text-emerald-400 bg-emerald-950/20' :
                data.history[index].status === 'Interpreted' ? 'border-amber-500/50 text-amber-400 bg-amber-950/20' :
                'border-indigo-500/50 text-indigo-400 bg-indigo-950/20'
              }`}>
                {data.history[index].status}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Crosshairs */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
            <div className="w-full h-px bg-white" />
            <div className="absolute h-full w-px bg-white" />
            <div className="absolute w-32 h-32 border border-white rounded-full" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-12">
          <button 
            onClick={prev}
            disabled={index === 0}
            className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white/50 hover:text-white hover:border-white/50 disabled:opacity-20 transition-all"
          >
            Pan Left
          </button>
          
          <div className="flex gap-2">
            {data.history.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-colors ${i === index ? 'bg-indigo-400' : 'bg-white/20'}`} />
            ))}
          </div>

          <button 
            onClick={next}
            disabled={index === data.history.length - 1}
            className="px-6 py-2 border border-indigo-500/50 rounded-full text-[10px] uppercase tracking-widest text-indigo-400 hover:bg-indigo-900/30 transition-all disabled:opacity-20 disabled:border-white/20 disabled:text-white/50"
          >
            Pan Right
          </button>
        </div>

      </div>

    </section>
  );
};
