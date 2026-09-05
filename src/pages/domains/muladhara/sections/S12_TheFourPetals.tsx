import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S12_TheFourPetals: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(12); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">The Four Petals</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          "A lotus of four petals, crimson like the bandhuka flower."
        </p>
        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-red-900/50 pl-4">
          Tradition: The four petals represent the four vrittis (mental modifications) or foundational states of consciousness originating here. They are the boundary of the space.
        </p>
      </div>
    </div>
  );
};