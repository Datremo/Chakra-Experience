import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BreathFieldSection: React.FC = () => {
  const [phase, setPhase] = useState<'inhale' | 'exhale'>('inhale');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const cycleLength = 12000; // 12 seconds total
    const inhaleRatio = 0.4; // 4.8s inhale
    
    const cycle = () => {
      setPhase('inhale');
      setTimeout(() => setPhase('exhale'), cycleLength * inhaleRatio);
    };

    cycle();
    const interval = setInterval(cycle, cycleLength);
    
    // Show the realization message after 2 cycles
    const msgTimer = setTimeout(() => setShowMessage(true), cycleLength * 2);

    return () => {
      clearInterval(interval);
      clearTimeout(msgTimer);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-6">
      
      {/* 
        The visual field around the 'body' 
        We use a large, soft radial gradient that expands on inhale and contracts on exhale.
      */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          className="rounded-full bg-emerald-500/5 blur-[100px]"
          animate={{
            width: phase === 'inhale' ? '80vw' : '40vw',
            height: phase === 'inhale' ? '80vw' : '40vw',
            opacity: phase === 'inhale' ? 0.8 : 0.3
          }}
          transition={{
            duration: phase === 'inhale' ? 4.8 : 7.2,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div 
          className="font-sans text-2xl tracking-[0.5em] uppercase text-emerald-100/80 mb-24"
          animate={{
            opacity: phase === 'inhale' ? 1 : 0.4,
            scale: phase === 'inhale' ? 1.05 : 0.95
          }}
          transition={{
            duration: phase === 'inhale' ? 4.8 : 7.2,
            ease: "easeInOut"
          }}
        >
          {phase === 'inhale' ? 'Breathe In' : 'Breathe Out'}
        </motion.div>

        <AnimatePresence>
          {showMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              className="font-serif text-xl md:text-2xl italic text-white/50 max-w-lg leading-relaxed"
            >
              «Notice what changes when you stop trying to control the moment.»
            </motion.p>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
