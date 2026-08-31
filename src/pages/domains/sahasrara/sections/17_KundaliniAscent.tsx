import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

const CHAKRAS = [
  { name: 'Mūlādhāra', color: 'bg-red-500' },
  { name: 'Svādhiṣṭhāna', color: 'bg-orange-500' },
  { name: 'Maṇipūra', color: 'bg-yellow-400' },
  { name: 'Anāhata', color: 'bg-green-500' },
  { name: 'Viśuddha', color: 'bg-blue-500' },
  { name: 'Ājñā', color: 'bg-indigo-500' },
  { name: 'Sahasrāra', color: 'bg-purple-400' },
];

export const KundaliniAscentSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="h-[400vh] w-full relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-12 md:top-32 text-center w-full z-20 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md mix-blend-difference">World 17</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_black] mix-blend-difference">The Ascent</h3>
        </div>

        <div className="absolute inset-0 w-full h-full flex flex-col-reverse overflow-hidden">
          {CHAKRAS.map((chakra, idx) => {
            const startPoint = idx * 0.1;
            const endPoint = startPoint + 0.1;
            
            // Each band grows in height as you scroll
            const height = useTransform(scrollYProgress, 
              [startPoint, endPoint], 
              ["0%", "15%"] // Roughly 100/7 = 14.2% each
            );

            return (
              <motion.div 
                key={chakra.name}
                style={{ height }}
                className={`w-full ${chakra.color} flex flex-col items-center justify-center border-t border-white/20 relative group`}
              >
                {/* massive typography clipping */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <h1 className="text-[10vw] font-serif font-black text-black/20 mix-blend-overlay tracking-tighter whitespace-nowrap">
                    {chakra.name.toUpperCase()}
                  </h1>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="absolute inset-0 bg-white pointer-events-none flex flex-col items-center justify-center"
          style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}
        >
          <h1 className="text-[15vw] font-serif text-purple-900 tracking-tighter drop-shadow-[0_0_50px_rgba(216,180,254,0.8)]">
            SAHASRĀRA
          </h1>
        </motion.div>

      </div>
    </section>
  );
};
