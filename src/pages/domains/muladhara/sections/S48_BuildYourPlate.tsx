import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const FOODS = [
  { id: 'grains', name: 'Grains & Dal', color: '#b45309', icon: '🌾', benefit: 'Slow-release carbohydrates. Stable blood sugar.' },
  { id: 'roots', name: 'Root Veg', color: '#dc2626', icon: '🥕', benefit: 'Fiber, minerals, grounding density.' },
  { id: 'protein', name: 'Protein', color: '#16a34a', icon: '🫘', benefit: 'Muscle maintenance and satiety.' },
  { id: 'water', name: 'Hydration', color: '#2563eb', icon: '💧', benefit: 'Every cellular function depends on it.' },
  { id: 'greens', name: 'Greens', color: '#15803d', icon: '🥬', benefit: 'Micronutrients, folate, magnesium.' }
];

export const S48_BuildYourPlate: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (inView) reachWorld(48); }, [inView, reachWorld]);

  const [plate, setPlate] = useState<string[]>([]);

  const toggle = (id: string) => setPlate(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const complete = plate.length >= 4;

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-slate-950 z-10 pointer-events-auto px-8 gap-12">
      <div className="w-full md:w-1/2 max-w-xs">
        <h3 className="text-4xl font-serif text-white mb-4">Build Your Plate</h3>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">Click items to add them to your plate. A nourished body is the physical foundation beneath any practice.</p>
        <div className="space-y-3">
          {FOODS.map(f => (
            <button
              key={f.id}
              onClick={() => toggle(f.id)}
              className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${plate.includes(f.id) ? 'border-emerald-700 bg-emerald-950/30' : 'border-slate-800 bg-slate-900/30 hover:border-slate-700'}`}
            >
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="text-white font-bold text-sm">{f.name}</p>
                {plate.includes(f.id) && <p className="text-slate-400 text-xs mt-1">{f.benefit}</p>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Plate visual */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="w-56 h-56 rounded-full border-4 border-slate-800 bg-slate-900 flex flex-wrap items-center justify-center gap-2 p-6 relative overflow-hidden">
          {FOODS.filter(f => plate.includes(f.id)).map(f => (
            <motion.div key={f.id} initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: f.color + '30', border: `1px solid ${f.color}50` }}>
              {f.icon}
            </motion.div>
          ))}
          {plate.length === 0 && <p className="text-slate-700 text-xs text-center">Empty plate</p>}
        </div>
        {complete && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-8 text-emerald-500 text-xs tracking-widest uppercase font-bold">Nourished Foundation</motion.div>}
      </div>
    </div>
  );
};