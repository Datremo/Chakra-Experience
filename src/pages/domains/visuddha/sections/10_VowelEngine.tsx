import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const VowelEngineSection: React.FC = () => {
  const data = useVisuddhaData();
  const vowels = data.mandala.petalLetters;
  const [activeVowelIndex, setActiveVowelIndex] = useState<number | 'bija' | null>(null);

  // Generate highly varied, colorful geometric patterns
  const getCymaticPattern = (index: number | 'bija') => {
    if (index === 'bija') {
      return { 
        points: 24, 
        size: 300, 
        color: 'border-blue-400', 
        bg: 'bg-blue-500/30',
        speed: 2,
        scale: 1.5,
        type: 'star'
      };
    }
    
    // Varied properties based on index
    const points = 4 + (index % 12); 
    const size = 100 + (index * 10);
    const speed = 10 - (index % 5);
    const types = ['circle', 'square', 'hexagon'];
    const colors = ['border-cyan-400', 'border-blue-500', 'border-indigo-400', 'border-teal-300'];
    const bgs = ['bg-cyan-500/10', 'bg-blue-600/10', 'bg-indigo-500/10', 'bg-teal-400/10'];
    
    return { 
      points, 
      size, 
      speed,
      color: colors[index % colors.length], 
      bg: bgs[index % bgs.length],
      type: types[index % types.length],
      scale: 1 + (index % 3) * 0.1
    };
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#01040a]">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Laboratory</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-4">The Sound Engine</h1>
        <p className="text-white/50 font-light max-w-xl mx-auto italic text-sm">
          Activate the petals, or awaken the core.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 w-full max-w-6xl z-10 items-center justify-center">
        
        {/* Left: Vowel Selection Grid + Bija */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="grid grid-cols-4 gap-3 w-full max-w-md">
            {vowels.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveVowelIndex(i)}
                className={`aspect-square rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                  activeVowelIndex === i
                    ? 'bg-cyan-900/60 border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-110 z-10'
                    : 'bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/40 hover:scale-105'
                }`}
              >
                <span className={`font-serif text-xl md:text-2xl mb-1 ${activeVowelIndex === i ? 'text-white' : 'text-cyan-200/70'}`}>
                  {v.devanagari}
                </span>
                <span className="font-sans text-[9px] tracking-[0.2em] text-white/40 uppercase">
                  {v.iast}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setActiveVowelIndex('bija')}
            className={`mt-8 w-full max-w-md py-4 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ${
              activeVowelIndex === 'bija'
                ? 'bg-blue-900/80 border-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.6)] scale-105'
                : 'bg-blue-950/20 border-blue-900/50 hover:border-blue-500/80 hover:bg-blue-900/40'
            }`}
          >
            <span className="font-serif text-4xl text-white mb-2">{data.mandala.bija.sanskrit}</span>
            <span className="font-sans text-xs tracking-[0.4em] text-blue-300 uppercase">Unleash the Bīja ({data.mandala.bija.transliteration})</span>
          </button>
        </div>

        {/* Right: The Cymatic Display */}
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[500px]">
          <div className={`relative w-full max-w-lg aspect-square rounded-full border transition-all duration-1000 flex flex-col items-center justify-center overflow-hidden ${
            activeVowelIndex === 'bija' ? 'border-blue-500/50 bg-blue-950/30 shadow-[0_0_80px_rgba(30,58,138,0.5)]' : 'border-white/10 bg-black/40'
          }`}>
            
            <AnimatePresence mode="wait">
              {activeVowelIndex !== null ? (
                <motion.div
                  key={activeVowelIndex}
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.5, rotate: 90 }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className="absolute inset-0 flex items-center justify-center mix-blend-screen"
                >
                  {/* Dynamic Geometry */}
                  {(() => {
                    const pattern = getCymaticPattern(activeVowelIndex);
                    return Array.from({ length: pattern.points }).map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute border ${pattern.color} ${pattern.bg}`}
                        style={{
                          width: `${pattern.size}px`,
                          height: `${pattern.size}px`,
                          borderRadius: pattern.type === 'circle' ? '50%' : pattern.type === 'hexagon' ? '20%' : pattern.type === 'star' ? '10%' : '0%',
                          transformOrigin: 'center center',
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, pattern.scale, 1],
                        }}
                        transition={{
                          duration: pattern.speed + (i % 3),
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * (pattern.speed / pattern.points)
                        }}
                      />
                    ));
                  })()}
                  
                  {/* Center glowing core */}
                  <motion.div 
                    className={`absolute rounded-full blur-2xl ${activeVowelIndex === 'bija' ? 'w-48 h-48 bg-blue-500/50' : 'w-24 h-24 bg-cyan-400/30'}`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* The letter itself in the center */}
                  <div className="absolute z-10 text-6xl font-serif text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]">
                    {activeVowelIndex === 'bija' ? data.mandala.bija.sanskrit : vowels[activeVowelIndex].devanagari}
                  </div>
                  
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white/20 font-sans text-xs tracking-widest uppercase text-center"
                >
                  Silence
                </motion.div>
              )}
            </AnimatePresence>

            {/* Static outer rings */}
            <div className="absolute inset-4 border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute inset-8 border border-dashed border-white/10 rounded-full pointer-events-none" />
            <div className="absolute inset-12 border border-white/5 rounded-full pointer-events-none" />
          </div>
        </div>

      </div>

    </section>
  );
};
