import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const HistoryWaveSection: React.FC = () => {
  const data = useVisuddhaData();
  const [activeIndex, setActiveIndex] = useState(0);

  // Map history index to a frequency multiplier for the waveform
  const frequency = 1 + activeIndex * 0.5;
  const activeEra = data.history[activeIndex];

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020813]">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Evolution</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-4">The Frequency of History</h1>
        <p className="text-white/50 font-light max-w-xl mx-auto">
          The concept of the subtle body has been repeatedly reformulated.
        </p>
      </div>

      {/* The Giant Waveform visualization */}
      <div className="w-full max-w-5xl h-64 relative flex items-center justify-center mb-16 z-10">
        
        {/* Abstract sine wave representation */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden mix-blend-screen opacity-50">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-cyan-400/50 rounded-full mx-1"
              animate={{
                height: [
                  10, 
                  100 + Math.sin(i * frequency) * 80, 
                  10
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05
              }}
            />
          ))}
        </div>

        {/* Timeline Scrubber */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-4">
          {data.history.map((_, i) => (
            <div 
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group cursor-pointer flex flex-col items-center gap-2"
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-cyan-400 scale-150 shadow-[0_0_10px_#22d3ee]' : 'bg-white/20 group-hover:bg-cyan-900'}`} />
              <div className={`text-[10px] font-sans tracking-widest uppercase transition-colors ${i === activeIndex ? 'text-cyan-400' : 'text-transparent group-hover:text-white/30'}`}>
                {data.history[i].year.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <div className="w-full max-w-2xl h-48 relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className={`inline-block px-3 py-1 mb-4 rounded-full border text-[10px] font-sans tracking-widest uppercase ${
              activeEra.sourceType === 'TRADITION' ? 'border-cyan-500/30 text-cyan-400 bg-cyan-950/30' : 'border-blue-500/30 text-blue-400 bg-blue-950/30'
            }`}>
              {activeEra.sourceType}
            </div>
            
            <h3 className="text-sm font-sans tracking-[0.2em] text-white/50 mb-2 uppercase">{activeEra.year}</h3>
            <h2 className="text-2xl font-serif text-white/90 mb-4">{activeEra.title}</h2>
            <p className="text-white/70 font-light leading-relaxed text-lg">
              {activeEra.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};
