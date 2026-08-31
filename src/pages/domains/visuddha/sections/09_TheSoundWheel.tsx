import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const TheSoundWheelSection: React.FC = () => {
  const data = useVisuddhaData();
  const petals = data.mandala.petalLetters;
  const [activePetal, setActivePetal] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative">
      
      <div className="text-center mb-24 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Perimeter</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Sixteen Petals, Sixteen Sounds</h1>
      </div>

      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center z-10">
        
        {/* The Wheel */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5">
          {petals.map((petal, i) => {
            const angle = (i * 360) / 16;
            const isActive = activePetal === i;
            
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-8 md:w-12 flex justify-center -translate-x-1/2 origin-top"
                style={{
                  height: '50%',
                  transform: `rotate(${angle + 180}deg)`
                }}
              >
                {/* The Petal Shape & Click Target */}
                <button
                  onClick={() => setActivePetal(isActive ? null : i)}
                  className="relative group w-full h-full flex flex-col items-center justify-end pb-2"
                >
                  <div className={`absolute inset-x-0 bottom-0 h-16 md:h-24 rounded-b-full transition-all duration-300 border ${
                    isActive ? 'bg-cyan-900/40 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]' : 'bg-white/5 border-white/10 group-hover:border-cyan-500/50'
                  }`} />
                  
                  {/* The Sanskrit Letter oriented upright to the viewer regardless of rotation */}
                  <div className="absolute bottom-4 md:bottom-6 z-10" style={{ transform: `rotate(${-(angle + 180)}deg)` }}>
                    <span className={`font-serif text-sm md:text-xl transition-colors ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-cyan-500/50 group-hover:text-cyan-400'}`}>
                      {petal.devanagari}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Center Info Panel */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {activePetal !== null ? (
              <motion.div
                key={activePetal}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.3)] pointer-events-auto"
              >
                <div className="text-4xl md:text-6xl font-serif text-white mb-2">{petals[activePetal].devanagari}</div>
                <div className="text-xs md:text-sm font-sans tracking-[0.3em] text-cyan-300 uppercase">{petals[activePetal].iast}</div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-dashed border-white/20 flex items-center justify-center pointer-events-auto"
              >
                <span className="text-white/30 font-sans tracking-[0.2em] text-[10px] uppercase text-center px-4">
                  Select a petal<br/>to isolate the sound
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <div className="mt-16 max-w-2xl text-center z-10">
        <p className="text-white/60 font-light leading-relaxed">
          The classical text attributes one of the sixteen Sanskrit vowels to each of the sixteen petals. In the tantric view, these are not merely letters, but the fundamental phonetic vibrations that compose reality.
        </p>
      </div>

    </section>
  );
};
