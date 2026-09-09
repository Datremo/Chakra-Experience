import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const HistoricalOriginSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && dragRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const dragWidth = dragRef.current.scrollWidth;
        setConstraints({ left: -dragWidth + containerWidth - 100, right: 100 });
      }
    };
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden min-h-screen flex flex-col justify-center bg-[#030610]">
      
      <div className="max-w-7xl mx-auto w-full relative z-10 mb-20 text-center pointer-events-none">
        <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Development</h2>
        <h1 className="text-4xl md:text-6xl mb-8 leading-tight font-serif text-orange-50">A River Through Time</h1>
        <p className="text-xl text-teal-100/60 leading-relaxed italic">
          Traditions develop. Follow the current of history.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full h-[500px] overflow-hidden cursor-grab active:cursor-grabbing">
        
        {/* The River Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-900/10 to-transparent blur-2xl pointer-events-none" />
        <div className="absolute w-[200vw] h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent top-1/2 -translate-y-1/2 pointer-events-none" />
        
        <motion.div 
          ref={dragRef}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.2}
          className="flex space-x-12 md:space-x-24 px-[10vw] absolute top-0 h-full items-center min-w-max pb-8"
        >
          {svadhisthanaData.historicalOrigin.map((node: any, idx: number) => (
            <div key={idx} className="relative group flex flex-col items-center justify-center w-64 md:w-80 h-full shrink-0">
              
              {/* Timeline Node */}
              <div className="w-4 h-4 rounded-full bg-orange-400 z-10 shadow-[0_0_20px_#f97316] group-hover:scale-150 transition-transform duration-300" />
              
              {/* Connecting Line Segment */}
              {idx < svadhisthanaData.historicalOrigin.length - 1 && (
                <div className="absolute left-1/2 right-[-50%] top-1/2 h-px bg-orange-500/30 pointer-events-none" />
              )}

              {/* Content Box */}
              <div className={`absolute w-full px-6 transition-all duration-500 pointer-events-none ${idx % 2 === 0 ? 'top-[55%]' : 'bottom-[55%]'}`}>
                <h3 className="text-lg font-serif text-orange-200 mb-3">{node.period}</h3>
                <p className="text-sm text-orange-100/60 leading-relaxed font-sans font-light group-hover:text-orange-100 transition-colors">
                  {node.description}
                </p>
              </div>

            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-[10vw] bg-gradient-to-r from-[#030610] to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[10vw] bg-gradient-to-l from-[#030610] to-transparent pointer-events-none" />

      </div>
      
      <p className="text-center mt-12 text-white/30 text-xs font-sans tracking-[0.2em] uppercase animate-pulse pointer-events-none">
        Click and Drag Horizontally
      </p>
    </section>
  );
};
