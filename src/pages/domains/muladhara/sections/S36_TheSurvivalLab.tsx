import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S36_TheSurvivalLab: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(36); }, [inView, reachWorld]);

  return (
    <div ref={ref} id="act6" className="min-h-screen w-full relative flex items-center justify-center p-8 overflow-hidden bg-black">
      {/* Background Cinematic */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0"
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 3 }}
        style={{ backgroundImage: 'url(/assets/muladhara/cinematic/nervous_system.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(4px)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-5xl w-full z-10 text-center"
      >
        <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-red-600 mb-8">Act VI</h3>
        <h2 className="text-6xl md:text-8xl font-serif text-white mb-10 drop-shadow-2xl uppercase tracking-widest">
          The Survival Lab
        </h2>
        <div className="w-24 h-1 bg-red-900/50 mx-auto mb-10" />
        <p className="text-slate-300 text-xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
          When the root is threatened, the subtle body translates that energy into a physical, biological cascade. We move from the energetic Kuṇḍalinī to the physical nervous system.
        </p>
      </motion.div>
    </div>
  );
};