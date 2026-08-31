import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FREQUENCIES = [
  { id: 'beta', name: 'BETA (14-30 Hz)', state: 'Waking / Active / Anxious', color: 'from-red-500 to-orange-500' },
  { id: 'alpha', name: 'ALPHA (8-13 Hz)', state: 'Relaxed / Reflective', color: 'from-yellow-400 to-green-500' },
  { id: 'theta', name: 'THETA (4-7 Hz)', state: 'Deep Meditation / Dreams', color: 'from-blue-400 to-indigo-600' },
  { id: 'delta', name: 'DELTA (0.5-3 Hz)', state: 'Dreamless Sleep', color: 'from-purple-900 to-black' },
  { id: 'gamma', name: 'GAMMA (30-100+ Hz)', state: 'Hyper-Awareness / Insight (Sahasrāra)', color: 'from-white to-purple-300' }
];

export const BrainwaveTuningSection: React.FC = () => {
  const [level, setLevel] = useState(0); // 0 to 4

  const currentFreq = FREQUENCIES[level];

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000 bg-black">
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 27</h2>
      </div>

      {/* Visualizer Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-60 mix-blend-screen">
        <AnimatePresence mode="wait">
          {level === 0 && ( // Beta
            <motion.div key="beta" className="w-full h-full flex gap-2 items-center justify-center">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: ['10%', '100%', '10%'] }}
                  transition={{ duration: Math.random() * 0.5 + 0.1, repeat: Infinity }}
                  className="w-1 md:w-2 bg-red-500 rounded-full"
                />
              ))}
            </motion.div>
          )}
          
          {level === 1 && ( // Alpha
            <motion.div key="alpha" className="w-full h-full flex gap-4 items-center justify-center">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: ['20%', '60%', '20%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                  className="w-2 md:w-4 bg-yellow-400 rounded-full"
                />
              ))}
            </motion.div>
          )}

          {level === 2 && ( // Theta
            <motion.div key="theta" className="w-full h-full flex items-center justify-center relative">
              <motion.div 
                animate={{ scale: [1, 2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[50vw] h-[50vw] rounded-full border-4 border-blue-400"
              />
              <motion.div 
                animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-[40vw] h-[40vw] rounded-full border-4 border-indigo-400"
              />
            </motion.div>
          )}

          {level === 3 && ( // Delta
            <motion.div key="delta" className="w-full h-full flex items-center justify-center relative bg-black">
              <motion.div 
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-purple-900"
              />
            </motion.div>
          )}

          {level === 4 && ( // Gamma
            <motion.div key="gamma" className="w-full h-full flex items-center justify-center relative">
              <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_100%)] blur-2xl" />
              {Array.from({ length: 36 }).map((_, i) => (
                <motion.div 
                  key={i}
                  style={{ rotate: i * 10 }}
                  className="absolute origin-center w-[200vw] h-1"
                >
                  <motion.div 
                    animate={{ x: ['-50%', '50%'], opacity: [1, 0, 1] }}
                    transition={{ duration: 0.2, repeat: Infinity }}
                    className="w-1/2 h-full bg-white shadow-[0_0_20px_white]"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interface */}
      <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center">
        
        <h3 className="text-4xl md:text-6xl font-serif text-white tracking-widest text-center mb-2 drop-shadow-md">
          {currentFreq.name}
        </h3>
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-16 h-8">
          {currentFreq.state}
        </p>

        <input 
          type="range" 
          min="0" 
          max="4" 
          step="1" 
          value={level} 
          onChange={(e) => setLevel(Number(e.target.value))}
          className="w-full appearance-none h-2 bg-white/20 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_15px_white] cursor-pointer"
        />
        
        <div className="w-full flex justify-between mt-4 font-sans text-[10px] tracking-widest uppercase text-white/50">
          <span>Active</span>
          <span>Sahasrāra</span>
        </div>

      </div>
    </section>
  );
};
