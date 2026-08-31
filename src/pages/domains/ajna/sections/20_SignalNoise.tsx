import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const SignalNoiseSection: React.FC = () => {
  const [noiseLevel, setNoiseLevel] = useState(100);

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000] overflow-hidden">
      
      <div className="text-center z-20 mb-12">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Clarity</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Signal vs. Noise</h1>
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center z-10">
        
        <div className="relative w-full aspect-square md:aspect-video bg-black border border-white/10 rounded-2xl overflow-hidden mb-8 flex items-center justify-center">
          
          {/* The Signal (Hidden beneath the noise) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-80">
            <svg width="100" height="100" viewBox="0 0 100 100" className="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="65" r="5" fill="currentColor" />
            </svg>
          </div>

          {/* The Noise (Static overlay controlled by slider) */}
          <motion.div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              opacity: noiseLevel / 100,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.5%22/%3E%3C/svg%3E")',
              mixBlendMode: 'screen'
            }}
          />
          
          {/* Distracting Text overlay controlled by slider */}
          <motion.div 
            className="absolute inset-0 z-10 flex flex-wrap content-start p-4 gap-2 opacity-50 overflow-hidden pointer-events-none"
            style={{ opacity: noiseLevel / 100 }}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <span key={i} className="text-white/30 font-serif text-xs italic" style={{ fontSize: `${Math.random() * 10 + 10}px` }}>
                {['Did I say the wrong thing?', 'What if I fail?', 'They are judging me', 'I need more money', 'Am I sick?', 'I should check my phone'][Math.floor(Math.random() * 6)]}
              </span>
            ))}
          </motion.div>

        </div>

        {/* Controls */}
        <div className="w-full max-w-sm flex flex-col items-center gap-4 mb-12">
          <div className="flex justify-between w-full text-[10px] font-sans tracking-widest text-white/50 uppercase">
            <span>Silence</span>
            <span>Static</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={noiseLevel} 
            onChange={(e) => setNoiseLevel(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none accent-indigo-400"
          />
        </div>

        {/* Text */}
        <div className="text-center max-w-md px-6">
          <p className="text-white/60 font-light text-sm leading-relaxed">
            The truth is rarely hidden; it is simply drowned out. If you cannot hear your intuition, you do not need to "search" harder. You just need to turn down the volume of your own anxieties.
          </p>
        </div>

      </div>

    </section>
  );
};
