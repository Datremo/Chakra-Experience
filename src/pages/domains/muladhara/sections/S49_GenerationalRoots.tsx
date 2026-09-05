import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';
import { TreeDeciduous } from 'lucide-react';

export const S49_GenerationalRoots: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(49); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 pointer-events-auto relative">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
            <h3 className="text-4xl md:text-5xl font-serif text-emerald-500 mb-6 uppercase tracking-widest">Generational Roots</h3>
            <p className="text-slate-300 text-xl font-light leading-relaxed mb-6">
                We inherit both the stability and the trauma of our ancestors.
            </p>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
                The root chakra contains the unresolved survival fears of our lineage. Healing your root is healing the bloodline.
            </p>
        </div>

        <div className="flex justify-center">
            <motion.div 
                className="w-64 h-64 border border-emerald-900/50 rounded-full flex items-center justify-center bg-emerald-950/20"
                animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            >
                <TreeDeciduous size={64} className="text-emerald-600 opacity-50" />
            </motion.div>
        </div>
        
      </div>
    </div>
  );
};