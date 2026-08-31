import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InnerSunSection: React.FC = () => {
  const [phase, setPhase] = useState<'INHALE' | 'HOLD' | 'EXHALE' | 'WAIT'>('WAIT');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let t1: number, t2: number, t3: number, t4: number;

    if (isActive) {
      setPhase('INHALE');
      
      const cycle = () => {
        setPhase('INHALE'); // 4s
        t1 = setTimeout(() => {
          setPhase('HOLD'); // 2s
          t2 = setTimeout(() => {
            setPhase('EXHALE'); // 4s
            t3 = setTimeout(() => {
              setPhase('WAIT'); // 2s
              t4 = setTimeout(cycle, 2000);
            }, 4000);
          }, 2000);
        }, 4000);
      };

      // Start first cycle after a tiny delay
      setTimeout(cycle, 100);

    } else {
      setPhase('WAIT');
    }

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, [isActive]);

  return (
    <section className="min-h-screen py-32 px-6 bg-[#060200] relative flex items-center justify-center overflow-hidden">
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Visualization</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50">The Inner Sun</h1>
        </div>

        {/* Breathing Visualizer */}
        <div className="relative w-full h-[400px] flex items-center justify-center mb-16">
          
          <motion.div
            animate={{
              scale: phase === 'INHALE' ? 1.5 : phase === 'EXHALE' ? 0.7 : phase === 'HOLD' ? 1.5 : 0.7,
              opacity: phase === 'INHALE' ? 0.6 : phase === 'EXHALE' ? 1 : phase === 'HOLD' ? 0.7 : 1,
              backgroundColor: phase === 'EXHALE' || phase === 'WAIT' ? '#ea580c' : '#f59e0b',
              boxShadow: phase === 'EXHALE' || phase === 'WAIT' 
                ? '0 0 80px rgba(234,88,12,0.8), inset 0 0 40px rgba(255,255,255,0.5)' 
                : '0 0 120px rgba(245,158,11,0.4), inset 0 0 20px rgba(255,255,255,0.2)'
            }}
            transition={{ 
              duration: phase === 'INHALE' || phase === 'EXHALE' ? 4 : 2, 
              ease: "easeInOut" 
            }}
            className="absolute w-48 h-48 rounded-full mix-blend-screen"
          />

          {/* Core intensity pulse during exhale/wait */}
          <motion.div
            animate={{
              scale: phase === 'EXHALE' || phase === 'WAIT' ? [1, 1.1, 1] : 1,
              opacity: phase === 'EXHALE' || phase === 'WAIT' ? 1 : 0
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute w-16 h-16 bg-white rounded-full blur-[4px] mix-blend-overlay"
          />

          {/* Phase Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={phase}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {isActive && (
                  <span className={`font-sans tracking-[0.5em] uppercase font-bold text-sm drop-shadow-md
                    ${phase === 'EXHALE' ? 'text-white' : 'text-amber-900'}
                  `}>
                    {phase}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Instructions / Text */}
        <div className="h-32 text-center mb-12 w-full max-w-lg">
          <AnimatePresence mode="wait">
            {!isActive ? (
              <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="text-amber-100/70 font-light leading-relaxed mb-8">
                  Focus on the solar plexus. The mechanism of heat is compression. 
                  When we expand, we gather energy. When we compress, that energy ignites.
                </p>
                <button 
                  onClick={() => setIsActive(true)}
                  className="px-8 py-3 rounded-full border border-amber-500 text-amber-400 hover:bg-amber-900/30 transition-colors font-sans tracking-widest text-xs uppercase"
                >
                  Begin Sequence
                </button>
              </motion.div>
            ) : (
              <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full justify-between">
                <div>
                  <p className="text-2xl font-serif text-amber-200 transition-all duration-1000">
                    {phase === 'INHALE' && "The sun expands. Gather."}
                    {phase === 'HOLD' && "Hold the expansion. Retain."}
                    {phase === 'EXHALE' && "The sun condenses and grows hotter. Focus."}
                    {phase === 'WAIT' && "Rest in the heat."}
                  </p>
                </div>
                <button 
                  onClick={() => setIsActive(false)}
                  className="text-amber-500/40 hover:text-amber-400 font-sans tracking-[0.2em] text-[10px] uppercase underline underline-offset-4 transition-colors"
                >
                  Stop
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
