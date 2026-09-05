import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S40_ResourceReservoir: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(40); }, [inView, reachWorld]);

  const [money, setMoney] = useState(50);
  const [time, setTime] = useState(50);
  const [energy, setEnergy] = useState(50);

  const total = (money + time + energy) / 3;

  return (
    <div ref={containerRef} className="min-h-screen w-full relative flex flex-col md:flex-row items-center justify-center p-8 bg-slate-950 z-10 pointer-events-auto">
      <div className="z-10 w-full md:w-1/2 pr-0 md:pr-12">
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Resource Reservoir</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-8 bg-black/40 p-6 rounded-xl border border-white/10">
          You have finite resources. Grounding means operating sustainably within your limits, not maximizing endlessly until you burn out.
        </p>
        
        <div className="space-y-8">
          <div>
            <label className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2 block">Money / Capital</label>
            <input type="range" min="0" max="100" value={money} onChange={e => setMoney(Number(e.target.value))} className="w-full accent-green-600 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer" />
          </div>
          <div>
            <label className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2 block">Time / Margins</label>
            <input type="range" min="0" max="100" value={time} onChange={e => setTime(Number(e.target.value))} className="w-full accent-blue-600 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer" />
          </div>
          <div>
            <label className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2 block">Energy / Focus</label>
            <input type="range" min="0" max="100" value={energy} onChange={e => setEnergy(Number(e.target.value))} className="w-full accent-orange-600 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer" />
          </div>
        </div>
      </div>
      
      {/* Visual Reservoir */}
      <div className="z-10 w-full md:w-1/2 h-64 md:h-96 mt-12 md:mt-0 relative flex items-end justify-center bg-black border-b-8 border-slate-800 rounded-b-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-slate-900/50" />
        <motion.div 
          className="w-full bg-gradient-to-t from-red-900 to-red-500/80 absolute bottom-0"
          animate={{ height: `${total}%` }}
          transition={{ type: 'spring', bounce: 0.5 }}
        >
          {/* Water ripples */}
          <motion.div className="w-full h-4 bg-white/20 absolute top-0" animate={{ x: [-100, 100] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white font-serif text-3xl mix-blend-difference">
            {total < 30 ? 'Depleted' : total > 70 ? 'Sustainable' : 'Stretched'}
          </span>
        </div>
      </div>
    </div>
  );
};