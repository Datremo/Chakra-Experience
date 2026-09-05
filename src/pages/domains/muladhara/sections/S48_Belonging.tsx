import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';
import { Users } from 'lucide-react';

export const S48_Belonging: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(48); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 pointer-events-auto relative">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 md:order-1 flex justify-center">
            <motion.div 
                className="w-64 h-64 border border-blue-900/50 rounded-full flex items-center justify-center bg-blue-950/20"
                animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Users size={64} className="text-blue-500 opacity-50" />
            </motion.div>
        </div>

        <div className="order-1 md:order-2">
            <h3 className="text-4xl md:text-5xl font-serif text-blue-400 mb-6 uppercase tracking-widest">Belonging</h3>
            <p className="text-slate-300 text-xl font-light leading-relaxed mb-6">
                Humans are tribal primates. Isolation is a profound root threat.
            </p>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
                We ground not just into the earth, but into a community, a family, or a chosen tribe. To be unseen is to feel unsafe.
            </p>
        </div>
        
      </div>
    </div>
  );
};