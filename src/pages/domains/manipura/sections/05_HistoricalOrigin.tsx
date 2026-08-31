import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { useManipuraData } from '../../../../data/manipuraData';
import { Flame } from 'lucide-react';

export const HistoricalOriginSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activeEra, setActiveEra] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-32 px-6 bg-[#040100] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-6">Lineage</h2>
          <h1 className="text-4xl md:text-6xl mb-6 font-serif text-amber-50">A History of Fire</h1>
          <p className="text-xl text-amber-100/50 italic font-light max-w-2xl mx-auto">
            How the navel center evolved from ancient sacrificial fire to modern psychological empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto relative">
          
          {/* Vertical Fire River (The Timeline Line) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2">
            <div className="w-full h-full bg-gradient-to-b from-[#1a0500] via-[#992b00] to-[#f59e0b] rounded-full blur-[2px] opacity-60" />
            <div className="absolute inset-0 w-[1px] mx-auto bg-gradient-to-b from-transparent via-amber-500/50 to-white/80" />
          </div>

          {/* Timeline Nodes */}
          {manipuraData.history.map((era, i) => {
            const isLeft = i % 2 === 0;
            const isSelected = activeEra === i;

            return (
              <div key={i} className={`col-span-1 md:col-span-12 relative flex items-center justify-center mb-16 md:mb-32 group
                ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}>
                
                {/* Visual Node */}
                <button
                  onClick={() => setActiveEra(isSelected ? null : i)}
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20 w-12 h-12 flex items-center justify-center outline-none"
                >
                  <motion.div 
                    animate={{
                      scale: isSelected ? 1.2 : 1,
                      backgroundColor: isSelected ? '#f59e0b' : i < 3 ? '#7c2d12' : i < 6 ? '#c2410c' : '#fbbf24',
                      boxShadow: isSelected ? '0 0 30px rgba(245,158,11,0.8)' : '0 0 10px rgba(0,0,0,0)'
                    }}
                    className={`w-4 h-4 rounded-full border border-black z-20 transition-all duration-300
                      ${!isSelected ? 'group-hover:scale-150 group-hover:bg-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]' : ''}
                    `}
                  />
                  {/* Surrounding glow aura */}
                  <div className={`absolute inset-0 rounded-full bg-amber-500/20 blur-md transition-opacity duration-300
                    ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `} />
                </button>

                {/* Content Panel */}
                <div className={`w-full pl-20 md:pl-0 md:w-5/12 
                  ${isLeft ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}
                `}>
                  <div 
                    onClick={() => setActiveEra(isSelected ? null : i)}
                    className="cursor-pointer"
                  >
                    <p className={`font-sans tracking-widest text-xs uppercase mb-2
                      ${i < 4 ? 'text-orange-600' : 'text-amber-500'}
                    `}>
                      {era.year}
                    </p>
                    <h3 className={`text-2xl font-serif mb-2 transition-colors duration-300
                      ${isSelected ? 'text-amber-100' : 'text-amber-100/60 group-hover:text-amber-300'}
                    `}>
                      {era.era}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className={`pt-4 pb-6 ${isLeft ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                          <div className={`bg-gradient-to-br from-black/80 to-[#120400]/80 backdrop-blur-sm border border-amber-900/30 p-6 rounded-2xl shadow-xl w-full
                            ${isLeft ? 'text-left' : 'text-left'}
                          `}>
                            <div className="flex items-start justify-between mb-4">
                              <h4 className="text-lg font-serif text-amber-400">{era.title}</h4>
                              <SourceBadge type={era.sourceType as any} />
                            </div>
                            <p className="text-amber-100/70 font-light leading-relaxed">
                              {era.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div className="mt-32 flex flex-col items-center justify-center opacity-50">
          <div className="w-[1px] h-24 bg-gradient-to-b from-amber-500/50 to-transparent" />
          <Flame size={20} className="text-amber-500/50 mt-4 animate-pulse" />
        </div>

      </div>
    </section>
  );
};
