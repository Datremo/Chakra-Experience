import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AuthenticitySection: React.FC = () => {
  const [alignment, setAlignment] = useState(50); // 0 = misaligned, 100 = aligned

  // We have two waveforms: Inner truth and Outer expression.
  // When alignment is 100, they overlap perfectly (constructive interference).
  // When alignment is 0, they are out of phase.

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#01040a]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Resonance</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Authenticity</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* Waveform Visualization */}
        <div className="relative w-full h-64 border border-white/5 rounded-3xl bg-black/40 overflow-hidden mb-12 flex items-center justify-center">
          
          <div className="absolute top-4 left-6 text-[10px] font-sans tracking-widest text-emerald-500/50 uppercase">Inner Truth</div>
          <div className="absolute bottom-4 right-6 text-[10px] font-sans tracking-widest text-blue-500/50 uppercase">Outer Expression</div>

          <div className="flex w-full h-full items-center justify-center mix-blend-screen opacity-80">
            {Array.from({ length: 40 }).map((_, i) => {
              // Inner wave is fixed
              const innerH = 20 + Math.sin(i * 0.5) * 80;
              
              // Outer wave phase shifts based on alignment (100 = 0 shift, 0 = PI shift)
              const shift = ((100 - alignment) / 100) * Math.PI;
              const outerH = 20 + Math.sin(i * 0.5 + shift) * 80;

              // Combined height for the glowing overlap
              const combinedH = Math.max(0, innerH + outerH - 100);

              return (
                <div key={i} className="relative w-2 mx-1 h-full flex items-center justify-center">
                  <motion.div 
                    className="absolute w-full bg-emerald-500/40 rounded-full"
                    style={{ height: `${Math.abs(innerH)}px` }}
                  />
                  <motion.div 
                    className="absolute w-full bg-blue-500/40 rounded-full"
                    style={{ height: `${Math.abs(outerH)}px` }}
                  />
                  {/* Constructive resonance glow when perfectly aligned */}
                  {alignment > 90 && (
                    <motion.div 
                      className="absolute w-full bg-white rounded-full shadow-[0_0_10px_#fff]"
                      style={{ height: `${Math.abs(combinedH)}px` }}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Alignment Slider */}
        <div className="w-full max-w-md mb-12">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={alignment}
            onChange={(e) => setAlignment(parseInt(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none accent-cyan-400 hover:accent-cyan-300"
          />
          <div className="text-center mt-4 text-[10px] font-sans tracking-widest text-cyan-500/70 uppercase">
            Drag to align your expression with your truth
          </div>
        </div>

        <div className="text-center h-24">
          {alignment > 90 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="font-serif text-2xl text-cyan-300 mb-2">Resonance</h3>
              <p className="text-white/60 font-light text-sm max-w-sm mx-auto">What you say perfectly matches what you feel. This takes immense courage.</p>
            </motion.div>
          ) : alignment < 20 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="font-serif text-2xl text-red-400 mb-2">Dissonance</h3>
              <p className="text-white/60 font-light text-sm max-w-sm mx-auto">Saying one thing while feeling another. Exhausting to maintain.</p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="font-serif text-2xl text-white/50 mb-2">Adjustment</h3>
              <p className="text-white/40 font-light text-sm max-w-sm mx-auto">Trying to find the right words to match the inner state.</p>
            </motion.div>
          )}
        </div>

      </div>

    </section>
  );
};
