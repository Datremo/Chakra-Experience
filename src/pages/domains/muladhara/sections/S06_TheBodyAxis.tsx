import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S06_TheBodyAxis: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(6); }, [inView, reachWorld]);

  const chakras = [
    { name: "Sahasrāra", color: "bg-purple-400", active: false },
    { name: "Ājñā", color: "bg-indigo-400", active: false },
    { name: "Viśuddha", color: "bg-blue-400", active: false },
    { name: "Anāhata", color: "bg-green-400", active: false },
    { name: "Maṇipūra", color: "bg-yellow-400", active: false },
    { name: "Svādhiṣṭhāna", color: "bg-orange-400", active: false },
    { name: "Mūlādhāra", color: "bg-red-600 shadow-[0_0_50px_rgba(220,38,38,1)]", active: true },
  ];

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-transparent z-10 relative">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 md:order-1 flex justify-center items-center h-[60vh] relative">
            <div className="absolute top-10 bottom-10 w-1 bg-slate-800 rounded-full" />
            <div className="flex flex-col justify-between h-full py-10 z-10">
                {chakras.map((c, i) => (
                    <motion.div 
                        key={i}
                        className="flex items-center gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className={`w-32 text-right uppercase tracking-[0.2em] text-xs font-bold ${c.active ? 'text-red-400' : 'text-slate-600'}`}>{c.name}</div>
                        <div className={`w-6 h-6 rounded-full border-2 ${c.active ? 'border-red-400 ' + c.color : 'border-slate-700 bg-black'}`} />
                        <div className="w-32" />
                    </motion.div>
                ))}
            </div>
        </div>

        <div className="order-1 md:order-2 bg-black/40 p-12 rounded-3xl backdrop-blur-md border border-white/5">
            <h3 className="text-5xl font-serif text-white mb-6 uppercase tracking-widest drop-shadow-lg">The Body Axis</h3>
            <p className="text-slate-300 text-xl font-light leading-relaxed mb-8">
                We are suspended between gravity and space. The spine is the central axis of the human experience.
            </p>
            <p className="text-red-400 text-lg font-bold tracking-[0.2em] uppercase border-l-4 border-red-600 pl-4">
                The Root is the anchor point pulling us down into physical reality.
            </p>
        </div>
        
      </div>
    </div>
  );
};