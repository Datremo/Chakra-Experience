import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';

export const IntroSection: React.FC = () => {
  const data = useAnahataData();
  const [phase, setPhase] = useState<'flame' | 'transition' | 'breathe' | 'revealed'>('flame');

  React.useEffect(() => {
    // Start animation automatically after a brief delay
    const t1 = setTimeout(() => setPhase('transition'), 500);
    const t2 = setTimeout(() => setPhase('breathe'), 4500);
    const t3 = setTimeout(() => setPhase('revealed'), 7500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* 
        Phase 1 & 2: The Rising Flame from Manipura 
        It starts golden/fiery, then rises and softens into light green.
      */}
      <AnimatePresence>
        {(phase === 'flame' || phase === 'transition') && (
          <motion.div
            key="manipura-flame"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 3 } }}
          >
            <motion.div
              className="w-32 h-32 rounded-full blur-3xl"
              initial={{ 
                y: '30vh', 
                backgroundColor: '#fbbf24', // Amber/Gold from Manipura
                scale: 1
              }}
              animate={phase === 'transition' ? {
                y: 0, // Rises to chest
                backgroundColor: '#34d399', // Soft emerald green
                scale: [1, 2, 4], // Expands
                opacity: [1, 0.8, 0] // Fades as it spreads
              } : {
                y: '30vh',
                backgroundColor: '#fbbf24',
                scale: [1, 1.1, 1]
              }}
              transition={phase === 'transition' ? { duration: 4, ease: "easeInOut" } : { repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>



      {/* 
        Phase 4: Revealed Intro Content 
        Takes its first large breath and reveals text.
      */}
      <AnimatePresence>
        {phase === 'revealed' && (
          <motion.div
            className="relative z-10 flex flex-col items-center text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <motion.h2 
              className="font-serif text-8xl md:text-9xl text-emerald-400/90 mb-4 tracking-wider"
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
            >
              {data.header.sanskritName}
            </motion.h2>
            
            <motion.h1 
              className="font-sans text-xl md:text-3xl tracking-[0.5em] text-white/90 uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              {data.header.transliteration}
            </motion.h1>

            <motion.div 
              className="font-sans text-sm md:text-base tracking-[0.3em] text-emerald-300/50 uppercase mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2.5 }}
            >
              {data.header.subtitle}
            </motion.div>

            <motion.p 
              className="font-serif italic text-2xl md:text-4xl text-white/80 max-w-2xl leading-relaxed mb-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
                onClick={() => document.getElementById('anahata-scroll-container')?.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                className="px-8 py-3 rounded-full bg-emerald-900/40 border border-emerald-500/50 text-emerald-100 font-sans tracking-[0.2em] text-sm uppercase hover:bg-emerald-800/60 hover:border-emerald-400 transition-all"
              >
                Enter The Heart
              </button>
              <button 
                onClick={() => document.getElementById('anahata-scroll-container')?.scrollBy({ top: window.innerHeight * 2, behavior: 'smooth' })}
                className="px-8 py-3 text-emerald-200/50 hover:text-emerald-200 font-sans tracking-[0.2em] text-sm uppercase transition-colors"
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
