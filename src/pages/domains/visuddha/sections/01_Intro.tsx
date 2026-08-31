import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const IntroSection: React.FC = () => {
  const data = useVisuddhaData();
  const [phase, setPhase] = useState<'heartbeat' | 'rise' | 'expand' | 'revealed'>('heartbeat');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('rise'), 3000); // 3 seconds of green heartbeat
    const t2 = setTimeout(() => setPhase('expand'), 7000); // Rises and turns blue
    const t3 = setTimeout(() => setPhase('revealed'), 10000); // Space opens, text appears
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* 
        Phase 1: The lingering green heartbeat from Anahata
        Phase 2: Rises up (to the throat) and transitions to Blue wave
        Phase 3: Expands outward into space
      */}
      <AnimatePresence>
        {(phase === 'heartbeat' || phase === 'rise' || phase === 'expand') && (
          <motion.div
            key="transition-wave"
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 3 } }}
          >
            <motion.div
              className="w-32 h-32 rounded-full blur-[40px]"
              initial={{ 
                y: '30vh', // Chest level
                backgroundColor: '#10b981', // Emerald green
                scale: 1,
                opacity: 0.5
              }}
              animate={
                phase === 'heartbeat' 
                  ? { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] } 
                  : phase === 'rise'
                  ? { y: 0, backgroundColor: '#0ea5e9', scale: [1, 2], opacity: 0.8 } // Rises to throat, turns blue
                  : { y: 0, backgroundColor: '#0ea5e9', scale: [2, 10], opacity: [0.8, 0] } // Expands and fades
              }
              transition={
                phase === 'heartbeat' 
                  ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  : phase === 'rise'
                  ? { duration: 4, ease: "easeInOut" }
                  : { duration: 3, ease: "easeOut" }
              }
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 4: Revealed Intro Content */}
      <AnimatePresence>
        {phase === 'revealed' && (
          <motion.div
            className="relative z-10 flex flex-col items-center text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <motion.h2 
              className="font-serif text-8xl md:text-9xl text-cyan-400/90 mb-4 tracking-wider"
              initial={{ filter: 'blur(15px)', opacity: 0, scale: 0.9 }}
              animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
            >
              {data.header.sanskritName}
            </motion.h2>
            
            <motion.h1 
              className="font-sans text-xl md:text-3xl tracking-[0.5em] text-white/90 uppercase mb-4"
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.5em' }}
              transition={{ duration: 2.5, delay: 1.5 }}
            >
              {data.header.transliteration}
            </motion.h1>

            <motion.div 
              className="font-sans text-sm md:text-base tracking-[0.3em] text-cyan-300/50 uppercase mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2.5 }}
            >
              {data.header.subtitle}
            </motion.div>

            <motion.p 
              className="font-serif italic text-2xl md:text-4xl text-white/80 max-w-2xl leading-relaxed mb-24"
              initial={{ opacity: 0, filter: 'blur(5px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 3, delay: 3.5 }}
            >
              {data.header.hook}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 4.5 }}
            >
              <button 
                onClick={() => document.getElementById('visuddha-scroll-container')?.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                className="px-8 py-3 rounded-full bg-cyan-900/40 border border-cyan-500/50 text-cyan-100 font-sans tracking-[0.2em] text-sm uppercase hover:bg-cyan-800/60 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Enter The Sound
              </button>
              <button 
                onClick={() => document.getElementById('visuddha-scroll-container')?.scrollBy({ top: window.innerHeight * 2, behavior: 'smooth' })}
                className="px-8 py-3 text-cyan-200/50 hover:text-cyan-200 font-sans tracking-[0.2em] text-sm uppercase transition-colors"
              >
                Explore Freely
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
