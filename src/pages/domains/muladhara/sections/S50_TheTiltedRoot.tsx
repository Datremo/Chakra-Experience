import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S50_TheTiltedRoot: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(50); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 pointer-events-auto relative">
      <div className="max-w-3xl w-full text-center bg-white/5 p-16 rounded-[3rem] border border-white/10 backdrop-blur-md">
        <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-slate-500 mb-8">End of Act VII</h3>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-widest uppercase">The Diagnosis</h2>
        <div className="w-16 h-1 bg-slate-700 mx-auto mb-8" />
        <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed">
          Awareness of scarcity, survival, and biological anchors is the diagnosis. <br/><br/>
          Next, we explore the prescription: <span className="text-white font-serif italic">Modern Root Practices.</span>
        </p>
      </div>
    </div>
  );
};