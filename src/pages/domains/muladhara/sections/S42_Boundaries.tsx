import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S42_Boundaries: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(42); }, [inView, reachWorld]);

  const [boundary, setBoundary] = useState(50);

  return (
    <div ref={containerRef} className="min-h-screen w-full relative flex flex-col md:flex-row items-center justify-center p-8 bg-black z-10 pointer-events-auto">
      
      <div className="z-10 w-full md:w-1/2 pr-0 md:pr-12">
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">The Boundary Membrane</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-8 bg-slate-900 p-6 rounded-xl border border-slate-700">
          A boundary is not a rigid wall. It is a semi-permeable membrane. Porous lets everything in. Rigid isolates you. Healthy protects while connecting.
        </p>
        
        <div>
          <div className="flex justify-between text-sm text-slate-400 uppercase tracking-widest mb-2 font-bold">
            <span>Porous (0)</span>
            <span>Rigid (100)</span>
          </div>
          <input 
            type="range" min="0" max="100" value={boundary} onChange={e => setBoundary(Number(e.target.value))}
            className="w-full accent-red-600 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="z-10 w-full md:w-1/2 h-64 md:h-96 mt-12 md:mt-0 relative flex items-center justify-center">
        {/* Core Identity */}
        <div className="absolute w-16 h-16 bg-red-600 rounded-full z-20 shadow-[0_0_30px_rgba(220,38,38,0.8)]" />
        
        {/* The Membrane */}
        <motion.div 
          className="absolute z-10 rounded-full flex items-center justify-center"
          animate={{
            width: boundary < 30 ? '300px' : boundary > 70 ? '120px' : '200px',
            height: boundary < 30 ? '300px' : boundary > 70 ? '120px' : '200px',
            borderWidth: boundary < 30 ? '1px' : boundary > 70 ? '16px' : '4px',
            borderColor: boundary < 30 ? 'rgba(255,255,255,0.1)' : boundary > 70 ? 'rgba(200,200,200,1)' : 'rgba(255,255,255,0.5)',
            borderStyle: boundary < 30 ? 'dashed' : 'solid',
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Incoming demands/noise */}
        <motion.div className="absolute w-4 h-4 bg-blue-400 rounded-full" animate={{ x: boundary < 30 ? 0 : boundary > 70 ? -100 : -50, y: boundary < 30 ? 0 : boundary > 70 ? -100 : -50, opacity: boundary < 30 ? 0 : 1 }} transition={{ repeat: Infinity, duration: 2 }} />
        <motion.div className="absolute w-4 h-4 bg-yellow-400 rounded-full" animate={{ x: boundary < 30 ? 0 : boundary > 70 ? 100 : 50, y: boundary < 30 ? 0 : boundary > 70 ? 100 : 50, opacity: boundary < 30 ? 0 : 1 }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
      </div>

    </div>
  );
};