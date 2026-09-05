import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S67_FourPetalsToSixPetals: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(67); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-black">
      <div className="z-10 flex items-center justify-center gap-4 md:gap-12 mb-16 opacity-80">
        <span className="text-6xl text-red-600 font-serif">4</span>
        <motion.div className="w-16 h-px bg-white/30" whileInView={{ width: 64, backgroundColor: '#fb923c' }} />
        <span className="text-8xl text-orange-500 font-serif font-bold">6</span>
      </div>
      
      <p className="text-orange-300 text-xl font-light tracking-widest uppercase">
        The lotus expands.
      </p>
    </div>
  );
};