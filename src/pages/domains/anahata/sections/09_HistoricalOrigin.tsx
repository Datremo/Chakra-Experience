import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';
import { SourceBadge } from '../../manipura/components/SourceBadge';

export const HistoricalOriginSection: React.FC = () => {
  const data = useAnahataData();
  const [activeEra, setActiveEra] = useState<number>(data.history.length - 1);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020504]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">Historical Evolution</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-emerald-50 mb-6">The Rings of the Tree</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          There is no single "ancient universal chakra system." Academic scholarship reveals that subtle-body systems evolved over millennia, growing new layers of meaning in different eras.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left: The Tree Rings */}
        <div className="relative h-[400px] flex items-center justify-center">
          {data.history.map((item, index) => {
            const isActive = activeEra === index;
            const radius = 100 + index * 25; // Growing rings
            
            return (
              <motion.button
                key={index}
                onClick={() => setActiveEra(index)}
                className={`absolute rounded-full border border-dashed transition-colors duration-500 focus:outline-none`}
                style={{ width: radius * 2, height: radius * 2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Visual Ring */}
                <div 
                  className={`absolute inset-0 rounded-full transition-colors duration-500 ${
                    isActive 
                      ? 'border-2 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-900/10' 
                      : 'border-[1px] border-emerald-900/40 hover:border-emerald-600/60 hover:bg-emerald-900/5'
                  }`} 
                />
              </motion.button>
            );
          })}
        </div>

        {/* Right: Content Panel */}
        <div className="min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEra}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-emerald-400/80 tracking-widest text-sm">
                  {data.history[activeEra].year}
                </span>
                <SourceBadge type={data.history[activeEra].sourceType as any} />
              </div>

              <h3 className="text-3xl font-serif text-emerald-50 mb-6">
                {data.history[activeEra].title}
              </h3>
              
              <p className="text-lg text-emerald-100/70 font-light leading-relaxed">
                {data.history[activeEra].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Timeline Navigation Dots */}
          <div className="flex gap-2 mt-12">
            {data.history.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveEra(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeEra === index ? 'bg-emerald-400 scale-150' : 'bg-emerald-900 hover:bg-emerald-700'
                }`}
                aria-label={`Go to era ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
