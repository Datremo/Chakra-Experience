import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroSection: React.FC = () => {
  const [stage, setStage] = useState<'ember' | 'mandala' | 'text'>('ember');

  useEffect(() => {
    // Stage 1: Ember holds for 1s
    const timer1 = setTimeout(() => setStage('mandala'), 1000);
    // Stage 2: Mandala expands for 2s
    const timer2 = setTimeout(() => setStage('text'), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#050101]" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-6 text-center">
        
        {/* The Ember -> Mandala Animation */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12 flex items-center justify-center">
          
          <AnimatePresence>
            {stage === 'ember' && (
              <motion.div
                key="ember"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-4 h-4 bg-red-600 rounded-full shadow-[0_0_40px_10px_rgba(220,38,38,0.8)]"
              />
            )}
            
            {(stage === 'mandala' || stage === 'text') && (
              <motion.div
                key="mandala"
                initial={{ scale: 0.1, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 0.15, rotate: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 border-[1px] border-red-500 rounded-full flex items-center justify-center"
              >
                {/* Simplified Mandala Placeholder for Intro - We build the detailed one in MandalaExplorer */}
                <div className="w-[80%] h-[80%] border-[1px] border-red-500 rotate-45" />
                <div className="absolute w-[80%] h-[80%] border-[1px] border-red-500 rotate-0" />
                <div className="absolute w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)]" />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* The Text Reveal */}
        <AnimatePresence>
          {stage === 'text' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <h2 className="font-sans tracking-[1em] text-red-500/50 uppercase text-sm md:text-lg mb-4">
                Mūlādhāra
              </h2>
              <h1 className="text-7xl md:text-9xl text-red-50 mb-2">मूलाधार</h1>
              <h3 className="text-2xl md:text-4xl text-red-200/80 uppercase tracking-widest font-sans font-light mb-12">
                The Root
              </h3>

              <p className="text-xl md:text-3xl italic text-white/70 mb-16 max-w-2xl leading-relaxed">
                "Before you rise, learn what supports you."
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-red-900/30 border border-red-500/50 hover:bg-red-900/50 hover:border-red-500 text-white font-sans tracking-[0.2em] uppercase text-sm transition-all rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                >
                  Begin the Deep Dive
                </button>
                <button 
                  onClick={() => document.getElementById('symbol')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white/50 hover:text-white font-sans tracking-[0.2em] uppercase text-sm transition-all rounded-sm"
                >
                  Explore Freely
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
