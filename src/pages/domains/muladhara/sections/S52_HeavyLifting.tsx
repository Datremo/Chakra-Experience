import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S52_HeavyLifting: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(52); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* Immersive Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 mix-blend-luminosity"
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        style={{ backgroundImage: 'url(/assets/muladhara/cinematic/crimson_grounding.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0" />
      
      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-6xl md:text-8xl font-serif text-white mb-10 uppercase tracking-widest drop-shadow-2xl">
            Heavy Lifting
        </h3>
        <p className="text-slate-300 text-2xl md:text-4xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
          Engaging the large muscles of the legs and glutes forces the nervous system to ground into the physical body.
        </p>
        <p className="text-red-400 text-xl mt-8 font-serif italic tracking-widest">
          It is a highly effective, visceral root practice.
        </p>
      </div>
    </div>
  );
};