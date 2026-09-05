import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S20_TheDownwardTriangle: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(20); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">Traipura</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          Within the earth square lies a downward-pointing triangle, described as "shining like lightning."
        </p>
        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-red-500/50 pl-4">
          Tradition: The downward triangle is the yoni, the symbol of the Goddess, representing the creative matrix and the generative downward pull of gravity.
        </p>
      </div>
    </div>
  );
};