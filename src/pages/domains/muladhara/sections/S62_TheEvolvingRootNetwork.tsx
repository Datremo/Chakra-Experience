import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S62_TheEvolvingRootNetwork: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(62); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      {/* Network visualization */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at center, rgba(220,38,38,0.2) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-4xl font-serif text-slate-300 mb-8 uppercase tracking-widest">
            The Network Expands
        </h3>
        <p className="text-slate-400 text-xl font-light leading-relaxed">
            As your personal root stabilizes, you become a grounding rod for others. Your calm nervous system signals safety to those around you. You become the solid earth.
        </p>
      </div>
    </div>
  );
};