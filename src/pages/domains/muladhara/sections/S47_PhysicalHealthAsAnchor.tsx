import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';
import { Activity } from 'lucide-react';

export const S47_PhysicalHealthAsAnchor: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(47); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 pointer-events-auto relative">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
            <h3 className="text-4xl md:text-5xl font-serif text-red-500 mb-6 uppercase tracking-widest">The Body As Home</h3>
            <p className="text-slate-300 text-xl font-light leading-relaxed mb-6">
                Physical health is the most literal root. When the body is ill, the root is shaking.
            </p>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
                Grounding requires honoring the animal needs of the physical vessel: sleep, nutrition, and movement.
            </p>
        </div>

        <div className="flex justify-center">
            <motion.div 
                className="w-64 h-64 border border-red-900/50 rounded-full flex items-center justify-center bg-red-950/20"
                animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Activity size={64} className="text-red-600 opacity-50" />
            </motion.div>
        </div>
        
      </div>
    </div>
  );
};