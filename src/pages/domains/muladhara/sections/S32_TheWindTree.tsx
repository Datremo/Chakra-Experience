import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S32_TheWindTree: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(32); }, [inView, reachWorld]);

  const [mode, setMode] = useState<'scattered' | 'rigid' | 'rooted'>('rooted');

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 z-10 pointer-events-auto">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        <h3 className="text-3xl font-serif text-white mb-6">The Resilience of the Root</h3>
        <p className="text-slate-400 mb-12 max-w-2xl">
          A rigid tree breaks in the storm. A rootless tree blows away. The true function of Mūlādhāra is dynamic stability—anchored deep, allowing the top to sway safely.
        </p>

        <div className="flex gap-4 bg-slate-900 p-2 rounded-xl mb-12">
            <button onClick={() => setMode('scattered')} className={`px-6 py-2 rounded-lg ${mode === 'scattered' ? 'bg-red-900/50 text-white' : 'text-slate-500'}`}>Scattered (Uprooted)</button>
            <button onClick={() => setMode('rigid')} className={`px-6 py-2 rounded-lg ${mode === 'rigid' ? 'bg-red-900/50 text-white' : 'text-slate-500'}`}>Rigid (Fear)</button>
            <button onClick={() => setMode('rooted')} className={`px-6 py-2 rounded-lg ${mode === 'rooted' ? 'bg-green-900/50 text-white' : 'text-slate-500'}`}>Rooted (Trust)</button>
        </div>

        <div className="w-full h-[400px] border border-white/10 bg-slate-900/50 rounded-2xl relative flex items-end justify-center overflow-hidden">
            {/* Ground */}
            <div className="absolute bottom-0 w-full h-20 bg-slate-800" />
            
            {/* The Tree Body */}
            <motion.div
                className="w-4 bg-slate-600 rounded-t-full origin-bottom absolute bottom-20 flex flex-col items-center justify-start pt-4"
                style={{ height: '250px' }}
                animate={
                    mode === 'scattered' ? { rotate: [0, 45, -20, 60], x: [0, 50, 100, 200], opacity: [1, 0.5, 0] } :
                    mode === 'rigid' ? { rotate: [0, 5, -5, 8, -8], x: 0 } :
                    { rotate: [0, 15, -10, 5, 0], x: 0 }
                }
                transition={
                    mode === 'scattered' ? { duration: 2 } :
                    mode === 'rigid' ? { duration: 0.5, repeat: Infinity, repeatType: 'mirror' } :
                    { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
            >
                {/* Leaves */}
                <div className={`w-32 h-32 rounded-full absolute -top-16 transition-colors ${mode === 'scattered' ? 'bg-red-900/20' : mode === 'rigid' ? 'bg-slate-500/50' : 'bg-green-800/50 blur-sm'}`} />
            </motion.div>

            {/* Roots */}
            {mode !== 'scattered' && (
                <motion.div 
                    className="absolute bottom-10 flex gap-4 transition-all"
                    animate={{ opacity: mode === 'rooted' ? 1 : 0.2, scaleY: mode === 'rooted' ? 1 : 0.5 }}
                >
                    <div className="w-1 h-16 bg-slate-700 rotate-[30deg] transform origin-top" />
                    <div className="w-1 h-20 bg-slate-700" />
                    <div className="w-1 h-16 bg-slate-700 -rotate-[30deg] transform origin-top" />
                </motion.div>
            )}

            {/* Wind effect */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
        </div>
      </div>
    </div>
  );
};