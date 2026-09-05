import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S47B_TheRootKitchen: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(47); }, [inView, reachWorld]);

  const [activeFood, setActiveFood] = useState<string | null>(null);

  const foods = [
    { 
      id: 'roots', 
      name: 'Root Vegetables', 
      color: 'bg-amber-900/80', 
      border: 'border-amber-600',
      text: 'text-amber-500',
      desc: 'Carrots, beets, potatoes.',
      science: 'High glycemic carbohydrates release serotonin, naturally calming the nervous system while providing dense, slow-burning fuel.' 
    },
    { 
      id: 'protein', 
      name: 'Dense Proteins', 
      color: 'bg-red-950/80', 
      border: 'border-red-600',
      text: 'text-red-500',
      desc: 'Meat, beans, heavy lentils.',
      science: 'Requires massive blood flow to the gut for digestion, physically pulling Prāna (energy) down from an overactive brain into the lower body.' 
    },
    { 
      id: 'earth', 
      name: 'Earthy Minerals', 
      color: 'bg-slate-900/80', 
      border: 'border-slate-500',
      text: 'text-slate-300',
      desc: 'Sea salt, ashwagandha.',
      science: 'Rebuilds the physical architecture (bones, teeth). Sodium regulates blood volume and prevents lightheadedness/dissociation.' 
    }
  ];

  return (
    <div ref={ref} className="min-h-[100svh] w-full flex items-center justify-center bg-black z-10 relative overflow-hidden">
      
      {/* Full Bleed Cinematic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0 transition-transform duration-[20s] ease-linear scale-110"
        style={{ backgroundImage: 'url(/assets/cinematic_root_kitchen.jpg)' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-0" />

      <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 p-6 md:p-12">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col justify-center mt-12 md:mt-0">
            <h3 className="text-red-500 font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-xs md:text-sm mb-4">The Root Kitchen</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-widest uppercase drop-shadow-2xl">
                Consuming Gravity
            </h2>
            <p className="text-slate-200 text-lg md:text-2xl font-light leading-relaxed mb-8 drop-shadow-md">
                Diet is energetic weight. To ground a scattered mind, you must literally consume gravity.
            </p>

            <div className="flex flex-col gap-4">
                {foods.map(f => (
                    <button 
                        key={f.id}
                        onMouseEnter={() => setActiveFood(f.id)}
                        className={`text-left p-4 md:p-6 border rounded-2xl transition-all duration-300 backdrop-blur-md ${activeFood === f.id ? `${f.color} ${f.border} shadow-2xl scale-[1.02]` : 'bg-black/40 border-white/10 hover:border-white/30 hover:bg-black/60'}`}
                    >
                        <h4 className={`text-lg md:text-xl font-bold uppercase tracking-widest mb-1 ${activeFood === f.id ? 'text-white' : 'text-slate-300'}`}>{f.name}</h4>
                        <p className="text-xs md:text-sm leading-relaxed text-slate-400 font-medium tracking-wide">{f.desc}</p>
                    </button>
                ))}
            </div>
        </div>

        {/* Right Side: Actionable Knowledge Visualizer */}
        <div className="flex items-center justify-center min-h-[300px] md:min-h-0">
            <AnimatePresence mode="wait">
                {!activeFood ? (
                    <motion.div 
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-slate-400 tracking-[0.3em] uppercase text-sm font-bold bg-black/40 p-8 rounded-full border border-white/10 backdrop-blur-md animate-pulse text-center"
                    >
                        Select a food group
                    </motion.div>
                ) : (
                    <motion.div
                        key={activeFood}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full bg-black/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group"
                    >
                        {/* The Science Data */}
                        {foods.filter(f => f.id === activeFood).map(f => (
                            <div key={f.id} className="relative z-10">
                                <div className={`text-xs font-bold tracking-[0.3em] uppercase mb-4 ${f.text}`}>Physiological Mechanism</div>
                                <h4 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-relaxed">
                                    {f.science}
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mt-8 border-t border-white/10 pt-8">
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Energy Direction</div>
                                        <div className={`font-bold tracking-widest uppercase text-sm ${f.text}`}>Downward (Apāna)</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Dosha Effect</div>
                                        <div className={`font-bold tracking-widest uppercase text-sm ${f.text}`}>Decreases Vata</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
};