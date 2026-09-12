import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Play, RotateCcw } from 'lucide-react';

const CHAIN = [
  { id: 'TRIGGER', label: 'TRIGGER', desc: 'An external event' },
  { id: 'HEAT', label: 'BODY HEAT', desc: 'Heart rate rises, jaw clenches' },
  { id: 'THOUGHT', label: 'THOUGHT', desc: '"They are disrespecting me"' },
  { id: 'URGE', label: 'URGE', desc: 'The physical push to retaliate' },
  { id: 'CHOICE', label: 'CHOICE', desc: 'The window of agency' },
  { id: 'ACTION', label: 'ACTION', desc: 'What you actually do' },
];

export const AngerChainSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: number;
    if (isPlaying && !isPaused && currentIndex < CHAIN.length - 1) {
      timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 1500);
    } else if (currentIndex === CHAIN.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, isPlaying]);

  const startChain = () => {
    setCurrentIndex(0);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const togglePause = () => {
    if (currentIndex === -1 || currentIndex === CHAIN.length - 1) return;
    setIsPaused(!isPaused);
  };

  const reset = () => {
    setCurrentIndex(-1);
    setIsPlaying(false);
    setIsPaused(false);
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#030100] relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-red-500/80 tracking-[0.3em] uppercase text-sm mb-6">Deconstruction</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-red-50">The Anatomy of Anger</h1>
        </div>

        {/* The Chain Visualization */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-24 min-h-[160px]">
          {CHAIN.map((node, i) => {
            const isVisible = i <= currentIndex;
            const isCurrent = i === currentIndex;
            
            return (
              <React.Fragment key={node.id}>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0.2, 
                    scale: isCurrent && !isPaused ? 1.1 : 1,
                    filter: isVisible ? 'blur(0px)' : 'blur(4px)'
                  }}
                  className={`relative flex flex-col items-center p-4 rounded-xl border w-32 shrink-0 transition-colors duration-500
                    ${isVisible 
                      ? (isCurrent ? 'bg-red-900/40 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border-red-900/50') 
                      : 'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border-white/5'}
                  `}
                >
                  <span className={`font-sans tracking-widest text-xs uppercase mb-2 ${isVisible ? 'text-red-400' : 'text-white/20'}`}>
                    {node.label}
                  </span>
                  <span className={`text-[10px] text-center leading-tight ${isVisible ? 'text-red-100/60' : 'text-white/10'}`}>
                    {node.desc}
                  </span>
                </motion.div>

                {/* Connecting Arrow */}
                {i < CHAIN.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i < currentIndex ? 1 : 0.2 }}
                    className="w-8 h-px bg-gradient-to-r from-red-900 to-transparent rotate-90 md:rotate-0"
                  />
                )}
                
              </React.Fragment>
            );
          })}
        </div>

        {/* Controls & Feedback */}
        <div className="flex flex-col items-center min-h-[150px]">
          
          <div className="flex items-center gap-6 mb-8">
            {currentIndex === -1 ? (
              <button 
                onClick={startChain}
                className="flex items-center gap-2 px-8 py-3 bg-red-900/20 border border-red-500 text-red-300 rounded-full hover:bg-red-900/40 transition-all font-sans tracking-widest text-sm uppercase"
              >
                <Play size={16} /> Ignite Chain
              </button>
            ) : (
              <>
                <button 
                  onClick={togglePause}
                  disabled={currentIndex === CHAIN.length - 1}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all font-sans tracking-widest text-sm uppercase
                    ${currentIndex === CHAIN.length - 1 
                      ? 'opacity-50 border border-white/10 text-white/30 cursor-not-allowed'
                      : isPaused 
                        ? 'bg-red-500 text-black border border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                        : 'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-red-500 text-red-300 hover:bg-red-900/30'}
                  `}
                >
                  {isPaused ? <Play size={16} /> : <Pause size={16} />} 
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
                <button 
                  onClick={reset}
                  className="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
                  aria-label="Reset"
                >
                  <RotateCcw size={16} />
                </button>
              </>
            )}
          </div>

          <AnimatePresence mode="wait">
            {isPaused && currentIndex >= 1 && currentIndex <= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <p className="text-2xl font-serif text-red-300 italic">
                  "Feeling anger is not the same as obeying anger."
                </p>
                <p className="text-red-100/50 mt-2 text-sm font-light">
                  You caught the chain before the choice was made.
                </p>
              </motion.div>
            )}
            
            {currentIndex === CHAIN.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <p className="text-xl text-white/50 italic font-light">
                  When the chain runs uninterrupted, reaction is automatic.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
