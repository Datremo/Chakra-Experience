import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

type TreeState = 'Scattered' | 'Rigid' | 'Rooted';

export const S34_TheWindTree: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => {
    if (inView) reachWorld(34);
  }, [inView, reachWorld]);

  const [treeState, setTreeState] = useState<TreeState>('Scattered');

  return (
    <div ref={containerRef} className="min-h-[100svh] w-full relative">
      <div className="sticky top-0 h-[100svh] w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-slate-900 p-6 md:p-8">
        
        {/* Background Cinematic Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/muladhara/wind_tree.jpg" 
            alt="Wind Tree Background" 
            className="w-full h-full object-cover opacity-30 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/90" />
        </div>

        {/* Messaging & Controls */}
        <div className="z-10 w-full md:w-1/2 md:pr-12 flex flex-col justify-center mt-12 md:mt-0 h-1/2 md:h-auto overflow-y-auto">
          <h2 className="text-2xl md:text-5xl font-serif text-slate-200 mb-4 md:mb-6 uppercase tracking-wider drop-shadow-xl text-center md:text-left">
            The Wind Tree
          </h2>
          <p className="text-slate-300 text-sm md:text-xl font-light leading-relaxed bg-black/40 p-4 md:p-6 rounded-xl backdrop-blur-md mb-6 text-center md:text-left">
            When the storm hits, how do you respond? <br className="hidden md:block"/>
            Select a state of being.
          </p>

          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => setTreeState('Scattered')}
              className={`p-3 md:p-4 text-left border rounded-lg transition-all ${treeState === 'Scattered' ? 'bg-amber-900/50 border-amber-500 text-amber-100' : 'bg-black/30 border-white/10 text-slate-400 hover:border-white/30'}`}
            >
              <h3 className="font-bold tracking-widest uppercase mb-1 text-xs md:text-base">Scattered</h3>
              <p className="text-xs md:text-sm opacity-80">No roots. Blown away by every breeze.</p>
            </button>
            <button 
              onClick={() => setTreeState('Rigid')}
              className={`p-3 md:p-4 text-left border rounded-lg transition-all ${treeState === 'Rigid' ? 'bg-red-900/50 border-red-500 text-red-100' : 'bg-black/30 border-white/10 text-slate-400 hover:border-white/30'}`}
            >
              <h3 className="font-bold tracking-widest uppercase mb-1 text-xs md:text-base">Rigid</h3>
              <p className="text-xs md:text-sm opacity-80">Refusing to yield. Brittle and snaps.</p>
            </button>
            <button 
              onClick={() => setTreeState('Rooted')}
              className={`p-3 md:p-4 text-left border rounded-lg transition-all ${treeState === 'Rooted' ? 'bg-green-900/50 border-green-500 text-green-100' : 'bg-black/30 border-white/10 text-slate-400 hover:border-white/30'}`}
            >
              <h3 className="font-bold tracking-widest uppercase mb-1 text-xs md:text-base">Rooted</h3>
              <p className="text-xs md:text-sm opacity-80">Deeply anchored, but top bends.</p>
            </button>
          </div>
        </div>

        {/* The Interactive Tree Simulation */}
        <div className="z-20 w-full md:w-1/2 flex items-end justify-center h-1/2 md:h-[50vh] relative border-b border-white/20 mt-4 md:mt-0">
          
          {/* Wind visual effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />

          <motion.div 
            className={`w-24 md:w-32 bg-slate-800 rounded-t-full relative flex flex-col justify-end overflow-hidden ${
              treeState === 'Scattered' ? 'h-32 md:h-48' : 
              treeState === 'Rigid' ? 'h-48 md:h-72' : 
              'h-48 md:h-64'
            }`}
            animate={
              treeState === 'Scattered' ? { rotate: [0, 45, 90], x: [0, 200, 400], opacity: [1, 0] } :
              treeState === 'Rigid' ? { rotate: [0, 15, -5, 20], y: [0, 50] } :
              { rotate: [0, 5, -2, 4, 0] }
            }
            transition={
              treeState === 'Scattered' ? { duration: 1.5, ease: 'easeIn' } :
              treeState === 'Rigid' ? { duration: 0.5, type: 'spring' } :
              { duration: 2, repeat: Infinity, repeatType: 'reverse' }
            }
            style={{ originY: 1 }}
          >
            {/* Roots */}
            <div className={`h-8 md:h-12 w-full mt-auto flex justify-around px-2 ${
                treeState === 'Scattered' ? 'opacity-0' :
                treeState === 'Rigid' ? 'opacity-50' : 
                'opacity-100'
            }`}>
                <div className="w-1 h-full bg-slate-600 rounded-b-md transform -rotate-12" />
                <div className="w-2 h-full bg-slate-500 rounded-b-md" />
                <div className="w-1 h-full bg-slate-600 rounded-b-md transform rotate-12" />
            </div>
            {treeState === 'Rigid' && (
                <div className="absolute top-1/2 w-full h-1 bg-red-500/50 transform rotate-12" />
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
};