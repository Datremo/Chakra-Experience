import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S27_Sushumna: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(27); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">Suṣumṇā Nādī</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          Rising directly up the center is Suṣumṇā, the luminous axis of the subtle body.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-yellow-400/50 pl-4">
          Tradition: When Iḍā and Piṅgalā are perfectly balanced, prana enters the Suṣumṇā. This is the pathway of spiritual ascent, dormant in most until awakened.
        </p>
      </div>
    </div>
  );
};