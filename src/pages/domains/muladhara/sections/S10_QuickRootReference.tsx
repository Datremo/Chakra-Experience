import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S10_QuickRootReference: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(10); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-transparent z-10 relative">
      <div className="max-w-5xl w-full bg-black/60 p-12 md:p-20 rounded-[3rem] border border-red-900/30 backdrop-blur-xl shadow-2xl">
        <h3 className="text-5xl font-serif text-white mb-16 uppercase tracking-widest text-center">Classical Reference</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-8 border border-white/5 rounded-2xl bg-black/40 hover:bg-black/80 transition-colors">
                <span className="block text-sm font-bold text-red-500 uppercase tracking-[0.2em] mb-4">Location</span> 
                <span className="text-2xl font-light text-slate-200">The Perineum</span>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black/40 hover:bg-black/80 transition-colors">
                <span className="block text-sm font-bold text-yellow-500 uppercase tracking-[0.2em] mb-4">Element</span> 
                <span className="text-2xl font-light text-slate-200">Earth</span>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black/40 hover:bg-black/80 transition-colors shadow-[0_0_30px_rgba(153,27,27,0.2)]">
                <span className="block text-sm font-bold text-red-700 uppercase tracking-[0.2em] mb-4">Color</span> 
                <span className="text-2xl font-light text-red-500">Deep Crimson</span>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black/40 hover:bg-black/80 transition-colors">
                <span className="block text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Petals</span> 
                <span className="text-2xl font-light text-slate-200">Four</span>
            </div>
        </div>
      </div>
    </div>
  );
};