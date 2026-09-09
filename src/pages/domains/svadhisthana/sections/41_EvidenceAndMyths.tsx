import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';
import { X, Check } from 'lucide-react';

export const EvidenceAndMythsSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [activeMyth, setActiveMyth] = useState<number | null>(null);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black px-6">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-blue-400 tracking-[0.3em] uppercase text-sm mb-6">Clarity</h2>
          <h1 className="text-4xl md:text-6xl mb-8 font-serif text-white">Myths & Nuance</h1>
          <p className="text-xl text-white/50 italic font-light max-w-2xl mx-auto">
            Distinguishing traditional symbolism from modern biological claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {svadhisthanaData.myths.map((myth: any, i: number) => (
            <div 
              key={i}
              className="bg-[#050a14] border border-blue-900/30 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setActiveMyth(activeMyth === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-blue-900/20 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <X className="text-red-500/50 flex-shrink-0" size={20} />
                  <span className="text-lg text-white/80 font-serif">{myth.claim}</span>
                </div>
              </button>

              <AnimatePresence>
                {activeMyth === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-[#02050a]"
                  >
                    <div className="p-6 border-t border-blue-900/30 flex items-start space-x-4">
                      <Check className="text-teal-500/50 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <span className="font-sans text-xs tracking-widest uppercase text-teal-400 block mb-2">
                          {myth.nuance.split('.')[0]}
                        </span>
                        <p className="text-white/60 font-light leading-relaxed">
                          {myth.nuance.split('.').slice(1).join('.').trim()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
