import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const LoveVsAttachmentSection: React.FC = () => {
  const [mode, setMode] = useState<'LOVE' | 'ATTACHMENT'>('LOVE');

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#030806] overflow-hidden">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Crucial Distinction</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-8">Love vs. Attachment</h1>
      </div>

      {/* Interactive Visualizer */}
      <div className="relative w-full max-w-2xl h-[400px] flex items-center justify-center z-10 mb-16">
        
        {/* Toggle Controls */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-4 bg-black/40 p-2 rounded-full border border-emerald-900/30 backdrop-blur-sm z-30">
          <button
            onClick={() => setMode('LOVE')}
            className={`px-6 py-2 rounded-full font-sans tracking-[0.2em] text-xs uppercase transition-all ${
              mode === 'LOVE' 
                ? 'bg-emerald-900/50 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            Love
          </button>
          <button
            onClick={() => setMode('ATTACHMENT')}
            className={`px-6 py-2 rounded-full font-sans tracking-[0.2em] text-xs uppercase transition-all ${
              mode === 'ATTACHMENT' 
                ? 'bg-rose-900/50 text-rose-100 shadow-[0_0_15px_rgba(244,63,94,0.3)]' 
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            Attachment
          </button>
        </div>

        {/* The Spheres */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Sphere 1 (Self) */}
          <motion.div
            className={`absolute w-32 h-32 rounded-full blur-sm mix-blend-screen transition-colors duration-1000 ${
              mode === 'LOVE' ? 'bg-emerald-400/80' : 'bg-amber-600/80'
            }`}
            animate={
              mode === 'LOVE' 
                ? { x: -80, scale: [1, 1.1, 1], opacity: 0.8 } 
                : { x: -30, scale: 0.8, opacity: 0.9 }
            }
            transition={{ 
              x: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Sphere 2 (Other) */}
          <motion.div
            className={`absolute w-32 h-32 rounded-full blur-sm mix-blend-screen transition-colors duration-1000 ${
              mode === 'LOVE' ? 'bg-teal-400/80' : 'bg-rose-600/80'
            }`}
            animate={
              mode === 'LOVE' 
                ? { x: 80, scale: [1, 1.1, 1], opacity: 0.8 } 
                : { x: 30, scale: 0.8, opacity: 0.9 }
            }
            transition={{ 
              x: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />

          {/* Connective Tissue */}
          <motion.div
            className="absolute h-1 blur-md mix-blend-screen"
            animate={
              mode === 'LOVE'
                ? { width: 160, backgroundColor: 'rgba(52, 211, 153, 0.4)', opacity: 0.5 }
                : { width: 60, backgroundColor: 'rgba(244, 63, 94, 0.8)', opacity: 1 }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

        </div>
      </div>

      {/* Descriptive Text */}
      <div className="text-center max-w-2xl z-10 h-[100px]">
        {mode === 'LOVE' ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-serif text-emerald-300 mb-4">Expansive & Free</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Love desires the wellbeing and freedom of the other. It maintains a healthy space between two distinct individuals, allowing both to breathe and grow.
            </p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-serif text-rose-300 mb-4">Restrictive & Clinging</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Attachment is driven by the fear of loss. It collapses the space between individuals, attempting to possess and control, resulting in suffocation and heaviness.
            </p>
          </motion.div>
        )}
      </div>

    </section>
  );
};
