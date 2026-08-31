import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BoundariesSection: React.FC = () => {
  const [openness, setOpenness] = useState(50); // 0 = Closed, 50 = Protected, 100 = Overexposed

  const getMembraneStyle = () => {
    if (openness < 25) {
      // Closed: Thick, opaque, tight
      return {
        borderWidth: '8px',
        borderColor: 'rgba(20, 83, 45, 0.9)', // Deep emerald
        backgroundColor: 'rgba(2, 44, 34, 0.8)',
        scale: 0.8
      };
    } else if (openness > 75) {
      // Overexposed: Thin, dashed, widely expanded, barely there
      return {
        borderWidth: '1px',
        borderColor: 'rgba(52, 211, 153, 0.2)',
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
        scale: 1.5
      };
    } else {
      // Protected/Permeable: Soft, glowing, defined but flexible
      return {
        borderWidth: '3px',
        borderColor: 'rgba(52, 211, 153, 0.6)', // Bright emerald
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        boxShadow: '0 0 20px rgba(16,185,129,0.2), inset 0 0 20px rgba(16,185,129,0.1)',
        scale: 1.1
      };
    }
  };

  const getStatusText = () => {
    if (openness < 25) return { title: 'CLOSED', desc: 'Guarded. Nothing gets out, nothing gets in. Safe, but suffocating.' };
    if (openness > 75) return { title: 'OVEREXPOSED', desc: 'No boundaries. Everything gets in. Exhausting and unprotected.' };
    return { title: 'PROTECTED', desc: 'Permeable. A semi-permeable membrane that lets love in and keeps harm out.' };
  };

  const status = getStatusText();
  const membraneStyle = getMembraneStyle();

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403] overflow-hidden">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Perimeter</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Open ≠ Unprotected</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          A healthy heart has a centre and a perimeter. Being loving does not mean destroying your boundaries.
        </p>
      </div>

      <div className="relative w-full max-w-2xl h-[400px] flex flex-col items-center justify-center z-10 mb-12">
        
        <div className="relative w-64 h-64 flex items-center justify-center mb-12">
          
          {/* The Membrane */}
          <motion.div
            className="absolute inset-0 rounded-full transition-all duration-500 flex items-center justify-center"
            animate={membraneStyle}
          />

          {/* The Core */}
          <motion.div 
            className="w-16 h-16 rounded-full bg-emerald-300 shadow-[0_0_30px_#34d399] z-10"
            animate={{ 
              scale: openness < 25 ? 0.9 : openness > 75 ? 0.7 : 1,
              opacity: openness > 75 ? 0.5 : 1
            }}
          />

          {/* External 'Threats/Information' trying to enter */}
          <motion.div 
            className="absolute w-3 h-3 bg-rose-500 rounded-full"
            animate={{ x: [-150, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ 
              opacity: openness < 25 ? 1 : openness > 75 ? 1 : 0, // Gets stopped or enters
              display: openness > 25 && openness < 75 ? 'none' : 'block' // Gets blocked nicely in middle state
            }}
          />

        </div>

        <div className="w-full max-w-md px-6 text-center">
          <input 
            type="range" 
            min="0" max="100" 
            value={openness}
            onChange={(e) => setOpenness(Number(e.target.value))}
            className="w-full accent-emerald-500 mb-8"
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={status.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-sans tracking-[0.2em] text-emerald-400 uppercase mb-4">{status.title}</h3>
              <p className="text-white/60 font-serif leading-relaxed h-16">{status.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
