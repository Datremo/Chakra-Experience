import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const SevenChakraIntegrationSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  const chakras = [
    { name: 'Root', color: 'bg-red-500', shadow: 'shadow-red-500' },
    { name: 'Sacral', color: 'bg-orange-500', shadow: 'shadow-orange-500' },
    { name: 'Solar', color: 'bg-yellow-400', shadow: 'shadow-yellow-400' },
    { name: 'Heart', color: 'bg-green-500', shadow: 'shadow-green-500' },
    { name: 'Throat', color: 'bg-blue-500', shadow: 'shadow-blue-500' },
    { name: 'Third Eye', color: 'bg-indigo-500', shadow: 'shadow-indigo-500' },
    { name: 'Crown', color: 'bg-purple-400', shadow: 'shadow-purple-400' },
  ];

  return (
    <section ref={containerRef} className="h-[400vh] w-full relative bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 43</h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Integration Tower */}
          <div className="absolute inset-y-0 w-full flex flex-col-reverse justify-around py-32 z-0 opacity-20">
            {chakras.map((c, i) => {
              const start = i * 0.1;
              const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);
              const scale = useTransform(scrollYProgress, [start, start + 0.1], [0.8, 1]);

              return (
                <motion.div
                  key={i}
                  style={{ opacity, scale }}
                  className={`w-full h-[10vh] ${c.color} shadow-[0_0_50px_currentColor] mix-blend-screen flex items-center justify-center border-t border-white/20`}
                >
                  <span className="font-sans text-[2vw] tracking-[0.5em] uppercase text-white/50 mix-blend-overlay">
                    {c.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Cinematic Text */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]) }}
            className="absolute z-30 flex flex-col items-center text-center pointer-events-none w-full px-6 bg-black/60 backdrop-blur-md p-12 rounded-[50px] border border-white/10"
          >
            <h1 className="text-4xl md:text-7xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_white] mb-6">
              INTEGRATION
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-purple-200/90 max-w-2xl leading-relaxed">
              Survival. Desire. Will. Love. Truth. Insight. Liberation.<br/><br/>
              They are not steps on a ladder. They are notes in a chord.<br/>
              You must play them all at once.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
