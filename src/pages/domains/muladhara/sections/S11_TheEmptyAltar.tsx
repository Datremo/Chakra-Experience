import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S11_TheEmptyAltar: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(11); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">The Empty Altar</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          The classical texts describe a beautiful, luminous space within the subtle body where this root rests. 
          Before we visualize the elements, we must recognize the space itself.
        </p>
        <p className="text-red-300 text-sm tracking-widest uppercase font-bold">Look to the right as you descend.</p>
      </div>
    </div>
  );
};