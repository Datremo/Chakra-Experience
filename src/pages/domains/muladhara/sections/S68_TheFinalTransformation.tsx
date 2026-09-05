import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

interface S68Props {
  onClose?: () => void;
}

export const S68_TheFinalTransformation: React.FC<S68Props> = ({ onClose }) => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(68); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 relative overflow-hidden">
      
      {/* Intense Orange/Sacral Glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent z-0 pointer-events-none mix-blend-screen"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />

      <div className="z-10 text-center max-w-4xl bg-black/40 p-16 rounded-[4rem] backdrop-blur-md border border-orange-500/20 shadow-[0_0_100px_rgba(251,146,60,0.1)]">
        <h3 className="text-orange-500 font-bold tracking-[0.5em] uppercase text-sm mb-6">The Next Evolutionary Step</h3>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 tracking-widest uppercase">
            Ascension
        </h2>
        <p className="text-slate-300 text-xl font-light leading-relaxed mb-12">
            The foundation is secure. You are grounded in the earth, heavy, stable, and safe.
            Now, the energy must rise. It must become fluid, creative, and adaptable. 
            The earth must become water.
        </p>

        <button 
            onClick={onClose}
            className="inline-block px-12 py-6 bg-orange-600 text-white font-bold uppercase tracking-[0.3em] rounded-full hover:bg-orange-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all duration-500"
        >
            Return To Journey
        </button>
      </div>
    </div>
  );
};