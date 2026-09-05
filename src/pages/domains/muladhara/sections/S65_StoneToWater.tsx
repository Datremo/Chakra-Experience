import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S65_StoneToWater: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(65); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      {/* Immersive Background */}
      <motion.div 
        className="absolute inset-0 z-0 mix-blend-screen opacity-50"
        whileInView={{ filter: 'hue-rotate(30deg) blur(5px)' }}
        transition={{ duration: 4 }}
        style={{ backgroundImage: 'url(/assets/muladhara/cinematic/fluid_geometry.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/30 z-0" />
      
      <div className="z-10 max-w-4xl text-center">
        <h2 className="text-5xl md:text-7xl font-serif text-orange-400 mb-10 tracking-widest drop-shadow-[0_0_20px_rgba(251,146,60,0.5)]">
            Stone <span className="text-orange-200 italic">to</span> Water
        </h2>
        <p className="text-orange-100/80 text-2xl font-light leading-relaxed">
            Hard boundaries dissolve. The survival instinct softens into feeling, sensation, and emotion.
        </p>
      </div>
    </div>
  );
};