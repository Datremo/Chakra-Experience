import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const pillars = [
  { id: 'shelter', title: 'Shelter', desc: 'A safe place to sleep.' },
  { id: 'food', title: 'Food', desc: 'Reliable nourishment.' },
  { id: 'health', title: 'Health', desc: 'Physical capability.' },
  { id: 'capital', title: 'Capital', desc: 'Financial buffer.' },
  { id: 'support', title: 'Support', desc: 'People who care.' }
];

export const S39_SecurityLandscape: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(39); }, [inView, reachWorld]);

  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <div ref={containerRef} className="min-h-screen w-full relative flex flex-col justify-center p-8 bg-black z-10 pointer-events-auto">
      <div className="max-w-5xl mx-auto w-full">
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">Security Landscape</h3>
        
        <div className="flex flex-col md:flex-row gap-4 h-[500px]">
          {pillars.map(p => (
            <motion.div
              key={p.id}
              onMouseEnter={() => setActivePillar(p.id)}
              onMouseLeave={() => setActivePillar(null)}
              animate={{ flex: activePillar === p.id ? 3 : 1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-end cursor-pointer transition-all overflow-hidden relative group"
            >
              <div className={`absolute inset-0 bg-red-900/20 transition-opacity duration-300 ${activePillar === p.id ? 'opacity-100' : 'opacity-0'}`} />
              <div className={`absolute bottom-6 left-6 whitespace-nowrap transition-all duration-300 ${activePillar === p.id ? 'rotate-0 origin-bottom-left' : 'md:-rotate-90 md:origin-bottom-left'}`}>
                <h4 className="text-white font-bold tracking-widest uppercase text-xl">{p.title}</h4>
              </div>
              <motion.p 
                animate={{ opacity: activePillar === p.id ? 1 : 0, y: activePillar === p.id ? 0 : 20 }}
                className="text-slate-300 text-base mt-12 relative z-10 bg-black/30 p-4 rounded-lg backdrop-blur-md"
              >
                {p.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};