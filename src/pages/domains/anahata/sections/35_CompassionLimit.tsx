import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CompassionLimitSection: React.FC = () => {
  const [careLevel, setCareLevel] = useState(50); // 0-33: Cold, 34-66: Care, 67-100: Self-Erasure

  const getPhase = () => {
    if (careLevel < 33) return 'WITHHELD';
    if (careLevel < 66) return 'BALANCED';
    return 'ERASURE';
  };

  const phase = getPhase();

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020504]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Limit</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Idiot Compassion</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          In Buddhist psychology, "idiot compassion" is when we avoid conflict by endlessly enabling someone else, masking our own fear as kindness.
        </p>
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center z-10 mb-16">
        
        {/* Visualizer */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-12">
          
          {/* The Other Person */}
          <motion.div
            className="absolute w-24 h-24 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center z-10"
            animate={{ 
              x: phase === 'WITHHELD' ? 60 : phase === 'BALANCED' ? 40 : 0,
              scale: phase === 'ERASURE' ? 1.5 : 1,
              borderColor: phase === 'ERASURE' ? 'rgba(16,185,129,0.5)' : 'rgba(51,65,85,1)'
            }}
            transition={{ duration: 0.5 }}
          />

          {/* You */}
          <motion.div
            className="absolute w-24 h-24 rounded-full border-2 border-emerald-500 bg-emerald-900/50 flex items-center justify-center mix-blend-screen"
            animate={{ 
              x: phase === 'WITHHELD' ? -60 : phase === 'BALANCED' ? -40 : 0,
              scale: phase === 'ERASURE' ? 0 : 1, // You disappear
              opacity: phase === 'ERASURE' ? 0 : 1
            }}
            transition={{ duration: 0.5 }}
          />

        </div>

        {/* Slider */}
        <div className="w-full max-w-md px-6 text-center">
          <input 
            type="range" 
            min="0" max="100" 
            value={careLevel}
            onChange={(e) => setCareLevel(Number(e.target.value))}
            className="w-full accent-emerald-500 mb-8"
          />
        </div>

        {/* Description */}
        <div className="h-24 text-center max-w-md w-full">
          {phase === 'WITHHELD' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="font-sans text-slate-400 tracking-widest text-xs uppercase mb-2">Withholding</h3>
              <p className="font-serif text-white/50 text-sm">Keeping completely separate. Safe, but devoid of connection.</p>
            </motion.div>
          )}
          
          {phase === 'BALANCED' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="font-sans text-emerald-400 tracking-widest text-xs uppercase mb-2">Balanced Care</h3>
              <p className="font-serif text-emerald-100/70 text-sm">Intersecting, supporting, but maintaining two distinct selves.</p>
            </motion.div>
          )}

          {phase === 'ERASURE' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="font-sans text-rose-400 tracking-widest text-xs uppercase mb-2">Self-Erasure</h3>
              <p className="font-serif text-rose-200/70 text-sm">You have completely lost your own outline to accommodate the other.</p>
            </motion.div>
          )}
        </div>

      </div>

    </section>
  );
};
