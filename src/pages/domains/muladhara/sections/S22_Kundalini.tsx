import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S22_Kundalini: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(22); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">Kuṇḍalinī</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          Coiled around the Liṅga rests the Serpent Power, Kuṇḍalinī, sleeping peacefully.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-yellow-500/50 pl-4">
          Tradition: She covers the opening of the central channel with her mouth. She is the raw, unawakened evolutionary energy of the human being.
        </p>
      </div>
    </div>
  );
};