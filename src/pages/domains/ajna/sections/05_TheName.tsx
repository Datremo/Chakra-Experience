import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheNameSection: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const voices = [
    { label: 'Fear', desc: 'Commanding you to avoid, hide, and protect.', isNoise: true, delay: 0 },
    { label: 'Desire', desc: 'Commanding you to acquire, consume, and chase.', isNoise: true, delay: 0.2 },
    { label: 'Habit', desc: 'Commanding you to repeat the past.', isNoise: true, delay: 0.4 },
    { label: 'Evidence', desc: 'Commanding you to trust only what can be measured.', isNoise: true, delay: 0.6 },
    { label: 'Others', desc: 'Commanding you to conform to expectations.', isNoise: true, delay: 0.8 },
    { label: 'Intuition', desc: 'Commanding you based on subtle, rapid pattern recognition.', isNoise: false, delay: 1.0 }
  ];

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-transparent overflow-hidden">
      
      <div className="text-center z-20 mb-8">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-400/80 uppercase mb-4 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">The Name</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-4 tracking-wide">आज्ञा</h1>
        <h3 className="text-xl md:text-2xl font-serif text-indigo-300">Command / Authority</h3>
      </div>

      <div className="w-full max-w-4xl relative z-20 text-center mb-8 md:mb-16">
        <p className="text-white/60 font-light max-w-lg mx-auto leading-relaxed text-sm md:text-base">
          Ājñā is often translated as "command." In a traditional yogic context, it is the center where the guru's command is received in deep meditation. 
          <br/><br/>
          But practically, in everyday perception:
        </p>
        <h3 className="mt-8 text-2xl md:text-3xl font-serif text-white/90">Who is giving the command?</h3>
        <p className="text-white/40 text-xs uppercase tracking-widest mt-4 animate-pulse">Find the true voice</p>
      </div>

      <div className="relative w-full max-w-3xl h-[400px] flex items-center justify-center z-10 border border-white/5 rounded-3xl bg-black/20 backdrop-blur-sm">
        
        {/* Core Glow for Intuition */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        {voices.map((voice, i) => {
          // Generate random drifting for noise
          const isSelected = selectedVoice === voice.label;
          const randomX = mounted && voice.isNoise ? [0, Math.random() * 60 - 30, Math.random() * -60 + 30, 0] : 0;
          const randomY = mounted && voice.isNoise ? [0, Math.random() * 60 - 30, Math.random() * -60 + 30, 0] : 0;
          
          return (
            <motion.button
              key={voice.label}
              onClick={() => setSelectedVoice(voice.label)}
              className={`absolute px-4 md:px-6 py-2 md:py-3 rounded-full border text-xs font-sans tracking-widest uppercase transition-all duration-300 backdrop-blur-md ${
                isSelected
                  ? 'bg-indigo-900/60 border-indigo-400 text-indigo-200 shadow-[0_0_30px_rgba(99,102,241,0.5)] z-50 scale-110'
                  : voice.isNoise 
                    ? 'bg-black/40 border-white/10 text-white/40 hover:bg-white/10 hover:border-white/30 hover:text-white z-30'
                    : 'bg-indigo-950/40 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/60 hover:border-indigo-400 z-40'
              }`}
              initial={{ 
                opacity: 0, 
                scale: 0,
                // Distribute them in a circle if noise, keep intuition center
                x: voice.isNoise ? Math.cos((i / 5) * Math.PI * 2) * 120 : 0,
                y: voice.isNoise ? Math.sin((i / 5) * Math.PI * 2) * 120 : 0
              }}
              animate={{ 
                opacity: 1,
                scale: isSelected ? 1.1 : 1,
                x: isSelected ? 0 : (voice.isNoise ? Math.cos((i / 5) * Math.PI * 2) * 120 : 0),
                y: isSelected ? -80 : (voice.isNoise ? Math.sin((i / 5) * Math.PI * 2) * 120 : 0)
              }}
              transition={{ 
                opacity: { delay: voice.delay, duration: 0.8 },
                scale: { duration: 0.3 }
              }}
            >
              {/* Add drift animation wrapper for noise */}
              <motion.div
                animate={{ x: randomX, y: randomY }}
                transition={{ duration: Math.random() * 4 + 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                {voice.label}
              </motion.div>
            </motion.button>
          )
        })}

        {/* Display selected description */}
        <AnimatePresence>
          {selectedVoice && (
            <motion.div
              key={selectedVoice}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 20, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute top-1/2 w-3/4 max-w-sm text-center z-40"
            >
              <div className="bg-black/60 border border-indigo-500/20 p-6 rounded-2xl backdrop-blur-xl shadow-2xl">
                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed">
                  {voices.find(v => v.label === selectedVoice)?.desc}
                </p>
                {selectedVoice === 'Intuition' && (
                  <p className="text-indigo-400 text-xs mt-4 uppercase tracking-widest font-sans">
                    The True Command
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
