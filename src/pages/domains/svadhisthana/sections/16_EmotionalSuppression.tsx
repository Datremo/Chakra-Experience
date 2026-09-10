import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EmotionalSuppressionSection: React.FC = () => {
  const [pressure, setPressure] = useState(0); // 0 to 5
  const broken = pressure >= 5;

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#010408]">
      
      {/* Cinematic Background Image - The Dam */}
      <AnimatePresence>
        {broken && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/assets/svadhisthana/svadhisthana_emotional_dam_1788973111484.jpg" 
              alt="Dam Breaking" 
              className="w-full h-full object-cover mix-blend-screen opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010408] via-transparent to-[#010408]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 text-center max-w-4xl px-4 pt-12 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-teal-500 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Suppression
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-12 drop-shadow-xl"
        >
          The Dam
        </motion.h2>

        {!broken ? (
          <motion.div className="max-w-2xl mx-auto flex flex-col items-center">
            <p className="text-xl text-white/60 font-light mb-12">
              When we refuse to feel an emotion, it doesn't disappear. It builds up behind the wall, creating immense pressure.
            </p>
            
            <div className="relative w-64 h-24 flex items-center justify-center">
              {/* Shaking wall */}
              <motion.button
                onClick={() => setPressure(p => p + 1)}
                animate={{ x: pressure > 0 ? [0, -pressure*2, pressure*2, 0] : 0 }}
                transition={{ repeat: Infinity, duration: 0.1 }}
                className="w-full h-full border-2 border-teal-500/50 bg-black/80 backdrop-blur-md rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.2)] flex items-center justify-center group"
                style={{ filter: `brightness(${1 + pressure * 0.2})` }}
              >
                <span className="font-sans text-teal-300 tracking-widest uppercase text-sm group-hover:text-teal-100 transition-colors">
                  Suppress Emotion
                </span>
              </motion.button>
              
              {/* Water pressure visuals */}
              <div 
                className="absolute left-0 bottom-0 top-0 bg-teal-500/20 rounded-l-xl transition-all duration-300 -z-10"
                style={{ width: `${(pressure / 5) * 100}%` }}
              />
            </div>
            
            <p className="mt-8 text-sm text-teal-500/40 uppercase tracking-widest animate-pulse">
              Keep pushing...
            </p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-teal-400/30 max-w-3xl mx-auto shadow-2xl"
          >
            <h3 className="text-3xl font-serif text-teal-300 mb-6 drop-shadow-md">The Flood</h3>
            <p className="text-lg md:text-xl text-white/90 font-sans font-light leading-relaxed">
              When the dam breaks, it manifests as a sudden outburst, an anxiety attack, or deep fatigue. The goal of Svādhiṣṭhāna is not to build stronger walls, but to stop building walls entirely. Let the water flow.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};
