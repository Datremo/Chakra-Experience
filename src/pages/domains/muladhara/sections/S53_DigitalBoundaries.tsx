import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';
import { WifiOff } from 'lucide-react';

export const S53_DigitalBoundaries: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(53); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden group">
      
      {/* Background glitch effect on hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[url(/assets/muladhara/texture_soil.jpg)] mix-blend-screen" />
      
      <div className="z-10 max-w-4xl text-center">
        <div className="flex justify-center mb-12">
            <WifiOff size={80} className="text-slate-700 group-hover:text-red-500 transition-colors duration-700" />
        </div>
        <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-wider group-hover:text-red-100 transition-colors duration-700">
            Digital Boundaries
        </h3>
        <p className="text-slate-400 text-xl md:text-3xl font-light leading-relaxed max-w-2xl mx-auto">
          The internet is an ungrounded, disembodied space. Continuous scrolling pulls energy into the mind and triggers the amygdala with endless threats. 
        </p>
        <div className="mt-12 p-1 bg-red-900/0 group-hover:bg-red-900/20 rounded-full transition-colors duration-700 inline-block">
            <p className="text-red-500 text-sm md:text-base tracking-[0.3em] uppercase px-8 py-4 border border-red-900/0 group-hover:border-red-900/50 rounded-full transition-colors">
                Logging off is a root practice.
            </p>
        </div>
      </div>
    </div>
  );
};