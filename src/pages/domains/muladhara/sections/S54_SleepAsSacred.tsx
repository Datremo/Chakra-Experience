import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S54_SleepAsSacred: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(54); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* Gentle breathing background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-blue-950/20"
        animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-5xl md:text-7xl font-serif text-slate-300 mb-10 tracking-widest uppercase">
            Sleep as Sacred
        </h3>
        <p className="text-slate-400 text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
          Sleep is the ultimate surrender to gravity and the ultimate parasympathetic reset. 
        </p>
        <p className="text-blue-400 text-xl mt-8 font-serif italic tracking-widest">
          Protecting your sleep is protecting the foundation of your subtle body.
        </p>
      </div>
    </div>
  );
};