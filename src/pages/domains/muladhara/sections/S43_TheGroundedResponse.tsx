import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S43_TheGroundedResponse: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(43); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      {/* Background Cinematic - Returning to calm */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0"
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 3 }}
        style={{ backgroundImage: 'url(/assets/muladhara/cinematic/nervous_system.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(8px) hue-rotate(-90deg)' }}
      />
      
      <div className="z-10 max-w-5xl text-center bg-black/30 p-12 md:p-24 rounded-[3rem] border border-white/5 backdrop-blur-lg">
        <h3 className="text-2xl md:text-3xl font-serif text-emerald-500 mb-8 uppercase tracking-[0.4em]">The Grounded Response</h3>
        <p className="text-slate-200 text-2xl md:text-4xl font-light leading-snug mb-12">
          The goal of root work is not to destroy the survival instincts. <br/><br/>
          The goal is to feel them, recognize them, and widen your window of tolerance so that you have a <span className="font-serif italic font-bold">choice</span>.
        </p>
        <div className="w-16 h-1 bg-emerald-800/50 mx-auto" />
      </div>
    </div>
  );
};