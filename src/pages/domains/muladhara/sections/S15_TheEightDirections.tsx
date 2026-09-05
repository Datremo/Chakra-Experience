import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S15_TheEightDirections: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(15); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">The Eight Directions</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          Eight golden spears emerge from the square, anchoring it.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed">
          The subtle body is mapping its relationship to space. The root secures itself in all four cardinal and four ordinal directions. It cannot be moved.
        </p>
      </div>
    </div>
  );
};