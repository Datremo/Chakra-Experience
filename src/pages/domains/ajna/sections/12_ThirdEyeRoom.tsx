import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThirdEyeRoomSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'outer' | 'inner' | 'memory' | 'imagination' | 'intuition' | 'discernment'>('outer');

  const modes = [
    { id: 'outer', label: 'Outer Vision', color: 'border-white', glow: 'shadow-[0_0_20px_rgba(255,255,255,0.2)]', inner: 'bg-white' },
    { id: 'inner', label: 'Inner Imagery', color: 'border-indigo-400', glow: 'shadow-[0_0_30px_rgba(99,102,241,0.4)]', inner: 'bg-indigo-300' },
    { id: 'memory', label: 'Memory', color: 'border-amber-400/50', glow: 'shadow-[0_0_20px_rgba(251,191,36,0.2)]', inner: 'bg-amber-100/50' },
    { id: 'imagination', label: 'Imagination', color: 'border-fuchsia-400', glow: 'shadow-[0_0_40px_rgba(232,121,249,0.5)]', inner: 'bg-fuchsia-300' },
    { id: 'intuition', label: 'Intuition', color: 'border-cyan-400', glow: 'shadow-[0_0_30px_rgba(34,211,238,0.4)]', inner: 'bg-cyan-200' },
    { id: 'discernment', label: 'Discernment', color: 'border-emerald-400', glow: 'shadow-[0_0_10px_rgba(52,211,153,0.5)]', inner: 'bg-emerald-300' }
  ] as const;

  const currentMode = modes.find(m => m.id === activeMode)!;

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Room</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Eye in the Center</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          The "Third Eye" is not one single faculty. It is the center where multiple streams of perception meet.
        </p>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Navigation / Modes */}
        <div className="flex flex-col gap-4">
          {modes.map(mode => (
            <button
              key={mode.id}
              onMouseEnter={() => setActiveMode(mode.id)}
              onClick={() => setActiveMode(mode.id)}
              className={`text-left px-6 py-3 rounded-full border text-xs font-sans tracking-widest uppercase transition-all duration-300 ${
                activeMode === mode.id ? 'bg-white/10 border-white text-white' : 'bg-transparent border-white/20 text-white/40 hover:border-white/50'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* The Eye Visual */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`w-full h-1/2 border-t border-b rounded-[100%] absolute flex items-center justify-center bg-black/50 backdrop-blur-sm ${currentMode.color} ${currentMode.glow}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-1000 ${currentMode.color} border-2`}>
                <div className={`w-4 h-4 rounded-full transition-colors duration-1000 ${currentMode.inner}`} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Environmental Particles based on mode */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
            <AnimatePresence>
              {activeMode === 'imagination' && (
                <motion.div key="imagination-stars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-fuchsia-300 rounded-full"
                      style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                      animate={{ y: [0, -50], opacity: [0, 1, 0], scale: [1, 2, 1] }}
                      transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                  ))}
                </motion.div>
              )}

              {activeMode === 'memory' && (
                <motion.div key="memory-waves" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="w-full h-full border border-amber-500/20 rounded-full"
                    animate={{ scale: [0.5, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute w-full h-full border border-amber-500/20 rounded-full"
                    animate={{ scale: [0.5, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

    </section>
  );
};
