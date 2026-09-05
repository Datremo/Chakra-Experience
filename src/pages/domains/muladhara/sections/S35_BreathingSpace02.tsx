import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S35_BreathingSpace02: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(35); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center p-8 z-10 text-center">
      <h3 className="text-2xl font-serif text-slate-500 mb-6 uppercase tracking-widest">End of Act V</h3>
      <div className="w-16 h-1 bg-red-900/50 mb-8" />
      <p className="text-slate-400 max-w-lg">
        We have explored the maps, the symbols, and the physical earth. Next, we descend into the psychology of a human life—the Survival Response Lab.
      </p>
    </div>
  );
};