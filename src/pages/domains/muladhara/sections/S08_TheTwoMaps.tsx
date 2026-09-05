import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S08_TheTwoMaps: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(8); }, [inView, reachWorld]);

  const [activeMap, setActiveMap] = useState<'biological' | 'subtle'>('biological');

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-transparent z-10 relative overflow-hidden">
      
      <h2 className="text-5xl font-serif text-white mb-16 uppercase tracking-widest text-center drop-shadow-2xl">The Two Maps</h2>
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-black/40 p-12 rounded-[3rem] backdrop-blur-md border border-white/5">
        
        <div 
            className={`cursor-pointer transition-all duration-500 p-8 rounded-2xl border-l-4 ${activeMap === 'biological' ? 'bg-slate-900 border-slate-400 shadow-lg scale-105' : 'border-slate-800 opacity-50 hover:opacity-100'}`}
            onClick={() => setActiveMap('biological')}
        >
            <h4 className="text-2xl font-serif text-slate-200 mb-6 uppercase tracking-widest flex items-center justify-between">
                The Biological Map
                <div className={`w-4 h-4 rounded-full ${activeMap === 'biological' ? 'bg-slate-400' : 'bg-transparent'}`} />
            </h4>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-6">
                The brainstem. The amygdala. The autonomic nervous system. This is the hardware of survival. It manages heart rate, fear, and fight-or-flight without your conscious input.
            </p>
            {activeMap === 'biological' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-24 border border-slate-700 rounded-lg flex items-center justify-center text-slate-500 tracking-widest uppercase text-sm font-bold bg-black">
                    Hardware / Nervous System
                </motion.div>
            )}
        </div>
        
        <div 
            className={`cursor-pointer transition-all duration-500 p-8 rounded-2xl border-l-4 ${activeMap === 'subtle' ? 'bg-red-950/30 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-105' : 'border-red-900/30 opacity-50 hover:opacity-100'}`}
            onClick={() => setActiveMap('subtle')}
        >
            <h4 className="text-2xl font-serif text-red-400 mb-6 uppercase tracking-widest flex items-center justify-between">
                The Subtle Map
                <div className={`w-4 h-4 rounded-full ${activeMap === 'subtle' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]' : 'bg-transparent'}`} />
            </h4>
            <p className="text-slate-300 text-lg font-light leading-relaxed mb-6">
                Mūlādhāra. The base of the Śuṣumṇā Nādī. The energetic software that interfaces with the physical hardware. It governs our psychological relationship to gravity, matter, and safety.
            </p>
            {activeMap === 'subtle' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-24 border border-red-900 rounded-lg flex items-center justify-center text-red-500 tracking-widest uppercase text-sm font-bold bg-black">
                    Software / Prāṇic Body
                </motion.div>
            )}
        </div>
      </div>
    </div>
  );
};