import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const blocks = [
  { id: 'sleep', label: 'Sleep', color: 'bg-indigo-900' },
  { id: 'eat', label: 'Nourish', color: 'bg-emerald-900' },
  { id: 'work', label: 'Effort', color: 'bg-amber-900' },
  { id: 'rest', label: 'Stillness', color: 'bg-slate-700' }
];

export const S38_DailyRhythm: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(38); }, [inView, reachWorld]);

  const [activeBlocks, setActiveBlocks] = useState<string[]>([]);

  const toggleBlock = (id: string) => {
    setActiveBlocks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  return (
    <div ref={containerRef} className="min-h-screen w-full relative flex flex-col items-center justify-center p-8 bg-slate-950 z-10">
      
      <div className="z-10 text-center max-w-2xl mb-12 pointer-events-auto">
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Daily Rhythm</h3>
        <p className="text-slate-300 text-lg leading-relaxed">
          Routine is the biological equivalent of a root system. It creates predictability, which the nervous system reads as safety. Build your rhythm.
        </p>
      </div>

      <div className="z-10 flex flex-col md:flex-row items-center gap-12 pointer-events-auto">
        {/* Selection */}
        <div className="grid grid-cols-2 gap-4">
          {blocks.map(b => (
            <button 
              key={b.id} 
              onClick={() => toggleBlock(b.id)}
              className={`p-6 border rounded-xl transition-all font-bold tracking-widest uppercase text-sm ${activeBlocks.includes(b.id) ? `${b.color} border-white/50 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]` : 'bg-black/30 border-white/10 text-slate-500 hover:border-white/30'}`}
            >
              {b.label}
            </button>
          ))}
        </div>
        
        {/* Visual Clock */}
        <div className="w-64 h-64 rounded-full border-4 border-slate-800 relative flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black overflow-hidden">
          <div className="w-4 h-4 bg-red-900 rounded-full absolute z-20" />
          {/* Slices representation based on active blocks */}
          {activeBlocks.map((id, index) => {
            const block = blocks.find(b => b.id === id);
            const rotation = index * (360 / Math.max(1, activeBlocks.length));
            return (
              <motion.div 
                key={id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`absolute w-1/2 h-1/2 ${block?.color} origin-bottom-right`}
                style={{ rotate: rotation, borderTopLeftRadius: '100%' }}
              />
            );
          })}
          {activeBlocks.length === 0 && <span className="text-slate-600 text-sm tracking-widest absolute">CHAOS</span>}
          {activeBlocks.length === 4 && <span className="text-white z-20 font-bold tracking-widest bg-black/30 px-4 py-2 rounded-full backdrop-blur-md absolute">STABILITY</span>}
        </div>
      </div>
      
    </div>
  );
};