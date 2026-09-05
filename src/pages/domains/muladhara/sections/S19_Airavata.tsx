import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S19_Airavata: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(19); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center p-8 lg:p-24 z-10 pointer-events-auto">
      <div className="max-w-xl w-full">
        <h3 className="text-6xl font-serif text-white drop-shadow-lg mb-6">Airāvata</h3>
        <p className="text-slate-300 text-2xl font-light leading-relaxed mb-6">
          The vehicle (Vāhana) of the Bīja is Airāvata, the majestic seven-trunked elephant.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-500/50 pl-4">
          Tradition: The elephant symbolizes immense weight, steadfastness, memory, and the raw, unmovable power of the Earth element.
        </p>
      </div>
    </div>
  );
};