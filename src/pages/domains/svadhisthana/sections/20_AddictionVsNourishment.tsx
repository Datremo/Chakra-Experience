import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AddictionVsNourishmentSection: React.FC = () => {
  const [mode, setMode] = useState<'ADDICTION' | 'NOURISHMENT' | null>(null);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#050202]">
      
      <div className="relative z-10 text-center max-w-5xl px-6 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-red-500 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          The Trap of Desire
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-12"
        >
          Addiction vs. Nourishment
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto h-[350px]">
          
          {/* Addiction Card */}
          <div 
            onMouseEnter={() => setMode('ADDICTION')}
            onMouseLeave={() => setMode(null)}
            className={`relative p-8 md:p-10 rounded-[2rem] border transition-all duration-700 flex flex-col justify-center overflow-hidden cursor-crosshair
              ${mode === 'ADDICTION' ? 'border-red-500 bg-red-950/40 shadow-[0_0_50px_rgba(239,68,68,0.2)]' : 'border-red-900/30 bg-black/40'}`}
          >
            {mode === 'ADDICTION' && (
              <motion.div 
                className="absolute inset-0 border-[10px] border-red-500/20 rounded-[2rem]"
                animate={{ scale: [1, 0.95, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              />
            )}
            <h3 className={`text-3xl font-serif mb-4 transition-colors ${mode === 'ADDICTION' ? 'text-red-400' : 'text-red-900'}`}>The Loop</h3>
            <p className={`text-lg font-light transition-colors ${mode === 'ADDICTION' ? 'text-white' : 'text-white/30'}`}>
              Consumes energy. The more you eat, the hungrier you get. The pleasure is sharp, frantic, and leaves you feeling empty immediately after.
            </p>
          </div>

          {/* Nourishment Card */}
          <div 
            onMouseEnter={() => setMode('NOURISHMENT')}
            onMouseLeave={() => setMode(null)}
            className={`relative p-8 md:p-10 rounded-[2rem] border transition-all duration-700 flex flex-col justify-center overflow-hidden cursor-crosshair
              ${mode === 'NOURISHMENT' ? 'border-orange-500 bg-orange-950/40 shadow-[0_0_50px_rgba(249,115,22,0.2)]' : 'border-orange-900/30 bg-black/40'}`}
          >
            {mode === 'NOURISHMENT' && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent"
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            )}
            <h3 className={`text-3xl font-serif mb-4 transition-colors ${mode === 'NOURISHMENT' ? 'text-orange-400' : 'text-orange-900'}`}>The Feast</h3>
            <p className={`text-lg font-light transition-colors ${mode === 'NOURISHMENT' ? 'text-white' : 'text-white/30'}`}>
              Provides energy. It deeply satisfies. The pleasure is warm, grounding, and leaves you feeling full and contented long after the act is over.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
