import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';

type AgniState = 'MANDA' | 'SAMA' | 'TIKSHNA';

export const ThreeFireModelSection: React.FC = () => {
  const [activeState, setActiveState] = useState<AgniState>('SAMA');

  const states = {
    MANDA: {
      name: 'Manda Agni',
      translation: 'Slow, Dull Fire',
      symptoms: 'Lethargy, slow digestion, brain fog, lack of motivation, heaviness.',
      color: 'from-amber-900 via-gray-800 to-black',
      particleColor: 'bg-amber-900',
      particleCount: 10,
      particleSpeed: 10, // slower is higher number in framer duration
      glow: 'shadow-[0_0_10px_rgba(120,53,15,0.5)]'
    },
    SAMA: {
      name: 'Sama Agni',
      translation: 'Balanced, Steady Fire',
      symptoms: 'Clear mind, steady energy, strong but calm digestion, decisive action.',
      color: 'from-amber-500 via-orange-600 to-amber-900',
      particleColor: 'bg-amber-400',
      particleCount: 30,
      particleSpeed: 3,
      glow: 'shadow-[0_0_40px_rgba(245,158,11,0.6)]'
    },
    TIKSHNA: {
      name: 'Tīkṣṇa Agni',
      translation: 'Sharp, Intense Fire',
      symptoms: 'Acid reflux, irritability, burnout, hyper-acidity, short temper.',
      color: 'from-yellow-200 via-red-600 to-red-900',
      particleColor: 'bg-yellow-300',
      particleCount: 80,
      particleSpeed: 0.5,
      glow: 'shadow-[0_0_80px_rgba(239,68,68,0.8)]'
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#030100] relative flex items-center justify-center overflow-hidden">
      
      {/* Background Aura based on state */}
      <div className={`absolute inset-0 transition-colors duration-1000 opacity-20 bg-gradient-to-t ${states[activeState].color}`} />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            {/* @ts-ignore */}
            <SourceBadge type="SCIENCE" content="Ayurvedic medicine maps these states to metabolic function, digestion, and systemic inflammation." />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-4">The States of Metabolism</h1>
          <p className="text-amber-200/50 font-light italic text-lg">
            How the fire burns determines what it creates.
          </p>
        </div>

        {/* Interactive Visualizer */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Fire Visualizer */}
          <div className="relative w-64 h-80 flex items-end justify-center shrink-0">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeState}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-end justify-center overflow-hidden"
              >
                {/* Core */}
                <div className={`w-32 h-32 rounded-full blur-xl mb-4 transition-all duration-1000 bg-gradient-to-t ${states[activeState].color} ${states[activeState].glow}`} />
                
                {/* Particles */}
                {Array.from({ length: states[activeState].particleCount }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -200 - Math.random() * 100],
                      x: (Math.random() - 0.5) * 150,
                      opacity: [0, 1, 0],
                      scale: [0, Math.random() * 1.5 + 0.5, 0]
                    }}
                    transition={{
                      duration: states[activeState].particleSpeed + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                    className={`absolute bottom-10 w-2 h-2 rounded-full ${states[activeState].particleColor} blur-[1px]`}
                    style={{ left: `calc(50% + ${(Math.random() - 0.5) * 40}px)` }}
                  />
                ))}

              </motion.div>
            </AnimatePresence>
            
            {/* Base platform */}
            <div className="w-48 h-4 border-b border-white/10 rounded-[100%] absolute bottom-0 shadow-[0_4px_20px_black]" />
          </div>

          {/* Right: Controls & Info */}
          <div className="flex-1 w-full">
            
            <div className="flex flex-col gap-4 mb-12">
              {(['MANDA', 'SAMA', 'TIKSHNA'] as AgniState[]).map(state => (
                <button
                  key={state}
                  onClick={() => setActiveState(state)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-500 flex justify-between items-center group
                    ${activeState === state 
                      ? 'bg-amber-900/30 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]' 
                      : 'bg-black/40 border-white/5 hover:border-white/20'
                    }
                  `}
                >
                  <div>
                    <h3 className={`text-xl font-serif transition-colors ${activeState === state ? 'text-amber-400' : 'text-white/60 group-hover:text-white/80'}`}>
                      {states[state].name}
                    </h3>
                    <p className={`text-sm font-sans tracking-widest uppercase transition-colors ${activeState === state ? 'text-amber-200/50' : 'text-white/30'}`}>
                      {states[state].translation}
                    </p>
                  </div>
                  
                  {activeState === state && (
                    <motion.div layoutId="indicator" className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]" />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeState}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-amber-900/30"
              >
                <h4 className="font-sans text-xs tracking-widest text-amber-500/60 uppercase mb-3">Manifestation</h4>
                <p className="text-amber-100/80 font-light leading-relaxed">
                  {states[activeState].symptoms}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};
