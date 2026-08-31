import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useManipuraData } from '../../../../data/manipuraData';

export const IntroSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [phase, setPhase] = useState<'WATER' | 'STEAM' | 'EMBERS' | 'FLAME' | 'REVEAL' | 'QUESTION'>('WATER');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Sequence the intro animation
    const seq1 = setTimeout(() => setPhase('STEAM'), 1500);
    const seq2 = setTimeout(() => setPhase('EMBERS'), 3000);
    const seq3 = setTimeout(() => setPhase('FLAME'), 4500);
    const seq4 = setTimeout(() => setPhase('REVEAL'), 6000);

    return () => {
      clearTimeout(seq1);
      clearTimeout(seq2);
      clearTimeout(seq3);
      clearTimeout(seq4);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (phase === 'QUESTION') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // -1 to 1
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
      setMousePos({ x, y });
    }
  };

  const handleMouseLeave = () => {
    if (phase === 'QUESTION') {
      setMousePos({ x: 0, y: 0 });
    }
  };

  return (
    <section 
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-20 px-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Sequence 1: Water to Steam */}
      <AnimatePresence>
        {phase === 'WATER' && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-0 w-full h-[50vh] flex items-end justify-center overflow-hidden"
          >
            <div className="w-[150%] h-[200px] border-t border-orange-500/30 rounded-[100%] shadow-[0_-20px_40px_rgba(249,115,22,0.1)] animate-pulse" />
          </motion.div>
        )}

        {phase === 'STEAM' && (
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 0.6, y: -100, filter: 'blur(30px)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-0 w-64 h-64 bg-orange-100 rounded-full"
          />
        )}
      </AnimatePresence>

      {/* Sequence 2: Embers to Flame */}
      <AnimatePresence>
        {phase === 'EMBERS' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1.5 }}
            className="absolute w-full h-full flex items-center justify-center pointer-events-none"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: (Math.random() - 0.5) * 200, y: (Math.random() - 0.5) * 200, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: [0, 1, 0.5] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]"
              />
            ))}
          </motion.div>
        )}

        {(phase === 'FLAME' || phase === 'REVEAL' || phase === 'QUESTION') && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: phase === 'QUESTION' ? 1 + Math.abs(mousePos.x) * 0.2 + Math.abs(mousePos.y) * 0.2 : 1, 
              opacity: 1,
              x: mousePos.x * 20,
              y: phase === 'QUESTION' ? -120 + mousePos.y * 20 : 0
            }}
            transition={{ type: 'spring', damping: 15, stiffness: 100 }}
            className="absolute flex items-center justify-center pointer-events-none"
            style={{ filter: 'url(#fire-goo)' }}
          >
            <div className="w-8 h-8 bg-orange-200 rounded-full blur-[2px]" />
            <div className="absolute w-16 h-16 bg-orange-500 rounded-full blur-[8px] animate-pulse" />
            <div className="absolute w-24 h-24 bg-red-600 rounded-full blur-[15px] opacity-60" />
            
            {/* SVG Filter for gooey flame effect */}
            <svg width="0" height="0">
              <defs>
                <filter id="fire-goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sequence 3: Reveal */}
      <AnimatePresence>
        {(phase === 'REVEAL' || phase === 'QUESTION') && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-center transition-all duration-1000 mt-24"
          >
            <h1 className="text-[6rem] md:text-[10rem] font-serif leading-none text-orange-500/10 mb-[-5rem] md:mb-[-7rem] select-none pointer-events-none">
              {manipuraData.header.sanskritName}
            </h1>
            <h2 className="text-4xl md:text-7xl font-serif text-orange-50 tracking-wide mb-6">
              {manipuraData.header.transliteration}
            </h2>
            <h3 className="text-sm md:text-lg font-sans tracking-[0.5em] text-orange-400 uppercase mb-12">
              {manipuraData.header.subtitle}
            </h3>
            
            <AnimatePresence mode="wait">
              {phase === 'REVEAL' && (
                <motion.div
                  key="hook"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <p className="text-xl md:text-2xl italic text-orange-200/80 mb-16">
                    {manipuraData.header.hook}
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-6 justify-center font-sans text-xs tracking-[0.3em] uppercase">
                    <button 
                      onClick={() => {
                        setPhase('QUESTION');
                        document.getElementById('what-is-it')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-8 py-4 border border-orange-500/30 text-orange-300 hover:bg-orange-500/10 rounded-full transition-all"
                    >
                      Enter the Forge
                    </button>
                    <button 
                      onClick={() => setPhase('QUESTION')}
                      className="px-8 py-4 border border-orange-900/40 text-orange-500 hover:border-orange-500/30 hover:text-orange-300 rounded-full transition-all"
                    >
                      Explore Freely
                    </button>
                  </div>
                </motion.div>
              )}

              {phase === 'QUESTION' && (
                <motion.div
                  key="notice"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mt-16"
                >
                  <p className="text-sm font-sans tracking-[0.3em] uppercase text-orange-500/60 mb-4">
                    NOTICE
                  </p>
                  <p className="text-xl md:text-2xl text-orange-200/80 italic font-light">
                    «Your attention changes what you see.»
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
