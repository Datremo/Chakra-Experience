import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SpeakFirstSection: React.FC = () => {
  const [spoken, setSpoken] = useState(false);
  const [pulse, setPulse] = useState(0);
  
  // Simulate a microphone reaction for now. In a real app, this could use Web Audio API 
  // to get actual mic volume, but the prompt says it must work without mic access too.
  const handleSpeakClick = () => {
    setSpoken(true);
    // Create a random fluctuating pulse to simulate a voice waveform taking up space
    const interval = setInterval(() => {
      setPulse(Math.random());
    }, 150);
    
    setTimeout(() => {
      clearInterval(interval);
      setPulse(1); // Settles into a steady state
    }, 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-transparent px-6 py-20">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <AnimatePresence>
          {!spoken ? (
            <motion.div
              key="tiny-point"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
            />
          ) : (
            <motion.div
              key="expanded-structure"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1 + pulse * 0.5, 
                opacity: 0.8 + (pulse * 0.2),
                rotate: pulse * 5
              }}
              transition={{ type: "spring", damping: 10, stiffness: 50 }}
              className="relative w-96 h-96 flex items-center justify-center"
            >
              {/* Complex Luminous Spatial Structure */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/30 blur-[2px]" />
              <div className="absolute w-[120%] h-[120%] rounded-full border border-blue-500/10 blur-[4px]" style={{ transform: `scale(${1 + pulse * 0.2})`}} />
              <div className="absolute w-1/2 h-1/2 bg-cyan-600/10 rounded-full blur-xl" />
              
              {/* Abstract Cymatic-like concentric lines */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full border border-cyan-400/20"
                  style={{
                    width: `${20 + i * 15}%`,
                    height: `${20 + i * 15}%`,
                    opacity: 1 - (i * 0.1),
                    transform: `rotate(${pulse * i * 10}deg) scale(${1 + pulse * (0.05 * i)})`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {!spoken ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="font-sans tracking-[0.4em] text-white/50 uppercase text-xs mb-12">
              Speak one word.
            </p>
            <button
              onClick={handleSpeakClick}
              className="px-8 py-3 rounded-full border border-cyan-500/30 text-cyan-400 font-sans tracking-[0.2em] text-sm uppercase hover:bg-cyan-900/40 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              [ Speak ]
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="text-center mt-64"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-white/90 mb-6">
              Did the world change?
            </h2>
            <p className="text-lg md:text-xl font-light text-cyan-100/60 max-w-xl mx-auto leading-relaxed">
              Not literally. But your expression altered the space around you. 
              Sound requires a medium. Expression requires space.
            </p>
          </motion.div>
        )}
      </div>

    </section>
  );
};
