import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';
import { Coins } from 'lucide-react';

export const S46_FinancialGrounding: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(46); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 bg-transparent z-10 pointer-events-auto relative">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 md:order-1 flex justify-center">
            <motion.div 
                className="w-64 h-64 border border-yellow-900/50 rounded-full flex items-center justify-center bg-yellow-950/20"
                animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
                <Coins size={64} className="text-yellow-600 opacity-50" />
            </motion.div>
        </div>

        <div className="order-1 md:order-2">
            <h3 className="text-4xl md:text-5xl font-serif text-yellow-500 mb-6 uppercase tracking-widest">Financial Grounding</h3>
            <p className="text-slate-300 text-xl font-light leading-relaxed mb-6">
                In a capitalist society, money is a primary anchor of Mūlādhāra. 
            </p>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
                Financial instability triggers the exact same biological survival mechanisms in the brain as a physical predator hunting you in the wild.
            </p>
        </div>
        
      </div>
    </div>
  );
};