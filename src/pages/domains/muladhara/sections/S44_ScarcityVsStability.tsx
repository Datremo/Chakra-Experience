import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S44_ScarcityVsStability: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(44); }, [inView, reachWorld]);

  return (
    <div ref={ref} id="act7" className="min-h-screen w-full flex items-center justify-center p-8 z-10 pointer-events-auto relative overflow-hidden bg-black">
      
      {/* Cinematic Split Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 mix-blend-luminosity"
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 3 }}
        style={{ backgroundImage: 'url(/assets/muladhara/cinematic/scarcity_stability.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black z-0" />
      
      <div className="max-w-5xl w-full z-10 text-center">
        <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-yellow-600 mb-8 drop-shadow-lg">Act VII</h3>
        <h2 className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-widest uppercase drop-shadow-2xl">
          Scarcity <span className="text-yellow-600/50">vs</span> Stability
        </h2>
        <div className="w-24 h-1 bg-yellow-600/30 mx-auto mb-10" />
        <p className="text-slate-300 text-xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg bg-black/40 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
          The psychological manifestation of the root is the tension between having enough and fearing starvation. 
          It constantly asks: <span className="text-yellow-500 font-serif italic">"Will my basic needs be met?"</span>
        </p>
      </div>
    </div>
  );
};