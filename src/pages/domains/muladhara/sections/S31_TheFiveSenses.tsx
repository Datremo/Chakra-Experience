import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S31_TheFiveSenses: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(31); }, [inView, reachWorld]);

  const [activeSense, setActiveSense] = useState<string | null>(null);

  const senses = [
    { id: 'sight', name: 'Sight', color: 'from-blue-900/40', text: 'Peripheral softening. Hard stares signal danger. Soft gaze signals safety.' },
    { id: 'hearing', name: 'Hearing', color: 'from-purple-900/40', text: 'Low frequencies. Deep hums and drones calm the nervous system (like the LAM bija).' },
    { id: 'touch', name: 'Touch', color: 'from-orange-900/40', text: 'Deep pressure therapy. Weighted blankets or heavy physical pressure grounds the body.' },
    { id: 'taste', name: 'Taste', color: 'from-amber-900/40', text: 'Earthy, heavy, savory. Sweet root flavors anchor digestion.' },
    { id: 'smell', name: 'Smell', color: 'from-red-900/50', text: 'The true anchor. Smell bypasses the thalamus directly into the amygdala. Petrichor, ash, sandalwood.' }
  ];

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 relative overflow-hidden transition-colors duration-1000">
      
      {/* Sense Visualizer Background */}
      {senses.map(s => (
        <motion.div 
            key={s.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSense === s.id ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-gradient-to-t ${s.color} via-transparent to-transparent z-0 pointer-events-none mix-blend-screen`}
        />
      ))}

      <div className="z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-black/40 p-12 rounded-[3rem] backdrop-blur-md border border-white/5">
        
        <div>
            <h3 className="text-red-500 font-bold tracking-[0.5em] uppercase text-sm mb-6">Perceptual Anchoring</h3>
            <h2 className="text-5xl font-serif text-white mb-8 tracking-widest uppercase">
                The Five Senses
            </h2>
            <p className="text-slate-300 text-xl font-light leading-relaxed mb-6">
                When the nervous system is overwhelmed, you must use physical perception to drag the mind back into the body.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
                Click on any sense to explore how Mūlādhāra processes reality to establish absolute safety. Notice how smell is the deepest red—the ultimate, most primitive survival anchor.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-4 relative">
            {senses.map(s => (
                <button
                    key={s.id}
                    onClick={() => setActiveSense(s.id)}
                    className={`w-full p-4 border rounded-2xl flex items-center gap-6 transition-all duration-500 ${activeSense === s.id ? `bg-black/80 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)] scale-105 z-10` : 'bg-black/30 border-white/5 opacity-60 hover:opacity-100 z-0'}`}
                >
                    <div className="text-2xl font-bold text-slate-200 tracking-widest uppercase w-32 text-right border-r border-white/10 pr-6">{s.name}</div>
                    <div className="text-left text-sm text-slate-400 leading-relaxed font-light">{s.text}</div>
                </button>
            ))}
        </div>
        
      </div>
    </div>
  );
};