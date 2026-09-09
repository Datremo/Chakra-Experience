import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const SacralSoundscapeSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rings, setRings] = useState<number[]>([]);

  useEffect(() => {
    if (!isPlaying) return;
    
    // Simulate frequency waves
    const interval = setInterval(() => {
      setRings(prev => [...prev.slice(-4), Date.now()]);
    }, 1000); // 1 beat per second

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#050200]">
      
      {/* Visualizer Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {rings.map((ringId) => (
          <motion.div
            key={ringId}
            initial={{ scale: 0.1, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute w-64 h-64 border-2 border-orange-500/40 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl px-6">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          288 Hz Frequency
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-12 drop-shadow-lg"
        >
          The Resonance of Water
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-32 h-32 md:w-40 md:h-40 rounded-full border flex items-center justify-center mx-auto transition-colors duration-500 ${
            isPlaying 
              ? 'bg-orange-500/20 border-orange-400 shadow-[0_0_50px_rgba(249,115,22,0.4)]' 
              : 'bg-black/50 border-orange-900/50 hover:border-orange-500/50'
          }`}
        >
          <span className="font-serif text-2xl md:text-4xl text-orange-100">VAM</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-lg text-white/60 font-light leading-relaxed"
        >
          {isPlaying 
            ? "Visualize the sound of 'VAM' moving through your pelvis, dissolving stagnant energy like ripples in a pond." 
            : "Tap the Bīja mantra to begin the resonance."}
        </motion.p>

      </div>
    </section>
  );
};
