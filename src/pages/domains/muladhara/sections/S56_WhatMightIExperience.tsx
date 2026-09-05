import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S56_WhatMightIExperience: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(56); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      <div className="z-10 max-w-6xl w-full">
        <h3 className="text-4xl md:text-6xl font-serif text-white mb-16 text-center tracking-wider">What Might I Experience?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Grounded Column */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-emerald-950/10 border border-emerald-900/30 p-12 rounded-[3rem] hover:bg-emerald-950/20 transition-colors"
            >
                <h4 className="text-emerald-500 font-bold uppercase tracking-[0.3em] mb-8 text-xl">When Grounding</h4>
                <ul className="space-y-6">
                    {[
                        "A feeling of heaviness or warmth in the legs",
                        "Slower, deeper respiration",
                        "A quiet, resilient confidence",
                        "Decreased mental chatter and anxiety"
                    ].map((text, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-emerald-600 mr-4">✦</span>
                            <span className="text-slate-300 text-lg font-light leading-relaxed">{text}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Uprooted Column */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-red-950/10 border border-red-900/30 p-12 rounded-[3rem] hover:bg-red-950/20 transition-colors"
            >
                <h4 className="text-red-500 font-bold uppercase tracking-[0.3em] mb-8 text-xl">When Uprooted</h4>
                <ul className="space-y-6">
                    {[
                        "Cold extremities (blood rushes to core)",
                        "Racing thoughts and catastrophic thinking",
                        "Inability to sit still or be present",
                        "Exhaustion despite lack of physical activity"
                    ].map((text, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-red-600 mr-4">✦</span>
                            <span className="text-slate-300 text-lg font-light leading-relaxed">{text}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

        </div>
      </div>
    </div>
  );
};