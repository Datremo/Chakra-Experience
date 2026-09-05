import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S16_TheSymbolBecomesLand: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(16); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">The Symbol Becomes Land</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed">
          The geometric diagram is a map, but the experience is felt in the body as weight, gravity, and density. The symbol represents the literal soil, rock, and foundation of reality.
        </p>
      </div>
    </div>
  );
};