import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BreathAndHeartSection: React.FC = () => {
  const [phase, setPhase] = useState<'IN' | 'OUT'>('IN');

  useEffect(() => {
    // 12 second total cycle matching the BreathField (4.8s in, 7.2s out)
    const cycleLength = 12000;
    const inhaleRatio = 0.4;
    
    const cycle = () => {
      setPhase('IN');
      setTimeout(() => setPhase('OUT'), cycleLength * inhaleRatio);
    };

    cycle();
    const interval = setInterval(cycle, cycleLength);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-transparent pointer-events-none">
      
      {/* 
        This section is mostly transparent to let the BreathField 
        in the background shine through. We just provide the text sync.
      */}

      <div className="text-center z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-24">Synchronization</h2>
        
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={phase}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-serif text-white/80 tracking-widest uppercase"
            >
              {phase === 'IN' ? 'Inhale' : 'Exhale'}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p 
          className="mt-24 text-xl font-serif text-emerald-100/50 italic leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Match your breathing to the rhythm of this space.
        </motion.p>
      </div>

    </section>
  );
};
