import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const responses = [
  { id: 'fight', name: 'Fight', desc: 'Moving toward the threat to neutralize it. Shows up as anger, controlling behavior, or explosive energy.', color: 'bg-red-900 border-red-500' },
  { id: 'flight', name: 'Flight', desc: 'Moving away from the threat. Shows up as avoidance, chronic busyness, over-working, or panic.', color: 'bg-blue-900 border-blue-500' },
  { id: 'freeze', name: 'Freeze', desc: 'Immobilization. Shows up as dissociation, brain fog, lethargy, or unable to make decisions.', color: 'bg-slate-900 border-slate-500' },
  { id: 'fawn', name: 'Fawn', desc: 'Appeasing the threat. Shows up as people-pleasing, abandoning your boundaries to stay safe.', color: 'bg-emerald-900 border-emerald-500' }
];

export const S43_SurvivalResponseLab: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(43); }, [inView, reachWorld]);

  const [activeRes, setActiveRes] = useState(responses[0]);

  return (
    <div ref={containerRef} className="min-h-screen w-full relative flex flex-col justify-center p-8 bg-slate-950 z-10 pointer-events-auto">
      <div className="max-w-4xl mx-auto w-full">
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 text-center">Survival Response Lab</h3>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          These are autonomic nervous system responses, not spiritual failings. Grounding requires recognizing which strategy your body uses when it loses connection to safety.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {responses.map(r => (
              <button
                key={r.id}
                onClick={() => setActiveRes(r)}
                className={`p-4 text-left font-bold tracking-widest uppercase rounded-lg border transition-all ${activeRes.id === r.id ? r.color + ' text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-black border-slate-800 text-slate-500 hover:border-slate-600'}`}
              >
                {r.name}
              </button>
            ))}
          </div>

          <div className="w-full md:w-2/3">
            <motion.div 
              key={activeRes.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`h-full p-8 rounded-2xl border ${activeRes.color} bg-opacity-20 backdrop-blur-md flex flex-col justify-center`}
            >
              <h4 className="text-4xl font-serif text-white mb-4">{activeRes.name}</h4>
              <p className="text-slate-200 text-lg leading-relaxed">{activeRes.desc}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};