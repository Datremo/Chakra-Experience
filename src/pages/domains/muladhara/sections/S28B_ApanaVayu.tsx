import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S28B_ApanaVayu: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(28); }, [inView, reachWorld]);

  const [apana, setApana] = useState(50); // Downward
  const [prana, setPrana] = useState(50); // Upward

  const ungrounded = prana > 80 && apana < 30;

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 relative overflow-hidden">
      
      {/* Warning Flash */}
      {ungrounded && (
        <motion.div 
            className="absolute inset-0 bg-red-900/40 pointer-events-none z-0"
            animate={{ opacity: [0, 0.8, 0] }} transition={{ repeat: Infinity, duration: 0.3 }}
        />
      )}

      <div className="z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
            <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-red-600 mb-4">The Winds of the Body</h3>
            <h2 className="text-5xl font-serif text-white mb-6 uppercase tracking-widest">
                Prāṇa vs Apāna
            </h2>
            <p className="text-slate-300 text-lg font-light leading-relaxed mb-8">
                Prāṇa moves upward (mind/spirit). Apāna moves downward (elimination/gravity). 
                If you pull energy up without establishing strong downward roots, you trigger the survival mind.
            </p>
            
            <div className="flex flex-col gap-8">
                <div>
                    <label className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2 block flex justify-between">
                        <span>Upward Current (Prāṇa)</span>
                        <span>{prana}%</span>
                    </label>
                    <input type="range" min="0" max="100" value={prana} onChange={e => setPrana(Number(e.target.value))} className="w-full accent-blue-500" />
                </div>
                <div>
                    <label className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2 block flex justify-between">
                        <span>Downward Root (Apāna)</span>
                        <span>{apana}%</span>
                    </label>
                    <input type="range" min="0" max="100" value={apana} onChange={e => setApana(Number(e.target.value))} className="w-full accent-red-500" />
                </div>
            </div>

            <div className="h-24 mt-8 flex items-center">
                {ungrounded && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-bold uppercase tracking-widest border border-red-500 p-4 rounded-lg bg-red-950/50 w-full text-center">
                        Warning: Ungrounded Ascension. The system is unstable.
                    </motion.p>
                )}
            </div>
        </div>

        <div className="flex justify-center items-center h-96 relative">
            <div className="w-4 h-full bg-slate-800 rounded-full relative overflow-hidden">
                <motion.div className="absolute bottom-0 w-full bg-red-600" style={{ height: `${apana}%` }} />
                <motion.div className="absolute top-0 w-full bg-blue-500" style={{ height: `${prana}%` }} />
            </div>
            
            <motion.div 
                className={`absolute w-48 h-48 rounded-full blur-3xl mix-blend-screen pointer-events-none ${ungrounded ? 'bg-red-600' : 'bg-purple-600'}`}
                animate={{ 
                    scale: ungrounded ? [1, 1.5, 1] : [1, 1.1, 1],
                    x: ungrounded ? [-15, 15, -15] : 0,
                    opacity: 0.5
                }}
                transition={{ repeat: Infinity, duration: ungrounded ? 0.1 : 2 }}
            />
        </div>

      </div>
    </div>
  );
};