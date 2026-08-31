import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const UnityVsIndividualitySection: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0); // 0 (Duality) to 100 (Non-Duality)
  const [particles, setParticles] = useState<{ id: number; rx: number; ry: number }[]>([]);

  useEffect(() => {
    // Generate static random positions for particles
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push({
        id: i,
        rx: (Math.random() - 0.5) * 100, // random x offset %
        ry: (Math.random() - 0.5) * 100, // random y offset %
      });
    }
    setParticles(arr);
  }, []);

  // Compute how clustered they are based on slider (0 = scattered, 100 = single point)
  const scatterFactor = 1 - (sliderValue / 100);

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center bg-[#07001c] overflow-hidden">
      
      <div className="absolute top-32 text-center w-full z-20 pointer-events-none">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-purple-300/40 mb-4 mix-blend-difference">World 14</h2>
      </div>

      {/* Particle Field */}
      <div className="relative w-full max-w-3xl h-[60vh] flex items-center justify-center z-10 pointer-events-none">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"
            animate={{
              x: `${p.rx * scatterFactor}vw`,
              y: `${p.ry * scatterFactor}vh`,
              scale: sliderValue > 95 ? 2 : 1,
              opacity: sliderValue > 95 ? 1 : 0.6
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          />
        ))}
        
        {/* Core light when fully merged */}
        <motion.div 
          className="absolute w-32 h-32 bg-white rounded-full blur-3xl"
          animate={{ opacity: sliderValue / 100 }}
        />
      </div>

      {/* Controls & Text */}
      <div className="w-full max-w-xl z-20 mt-12 flex flex-col items-center">
        
        <div className="w-full flex justify-between text-xs font-sans tracking-widest uppercase text-purple-300/60 mb-4">
          <span>Duality (Sāṃkhya)</span>
          <span>Non-Duality (Advaita)</span>
        </div>

        <input 
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="w-full h-1 bg-purple-900/50 rounded-lg appearance-none cursor-pointer mb-12 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
        />

        <div className="h-32 text-center">
          {sliderValue < 50 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-purple-200/80 font-light">
              <p className="font-serif text-2xl mb-2 text-white">Purusha & Prakriti</p>
              <p>Consciousness and Nature remain eternally distinct. You are an individual soul, observing the dance of creation.</p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-purple-200/80 font-light">
              <p className="font-serif text-2xl mb-2 text-white">Advaita Vedānta</p>
              <p>All separation is an illusion. The many are the One. There is no individual soul; there is only Brahman.</p>
            </motion.div>
          )}
        </div>

      </div>

    </section>
  );
};
