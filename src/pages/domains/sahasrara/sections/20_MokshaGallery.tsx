import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TRADITIONS = [
  {
    name: 'Advaita Vedānta',
    term: 'Mokṣa / Jīvanmukti',
    description: 'Liberation is not going to another world; it is realizing you were never bound. It is the experiential knowledge that the individual soul (Ātman) and the supreme reality (Brahman) are identical.',
    color: 'from-purple-500/20 to-transparent'
  },
  {
    name: 'Buddhism',
    term: 'Nirvāṇa',
    description: 'Literally "blowing out" (like a candle). It is not annihilation, but the extinguishing of the fires of greed, hatred, and delusion. It is the end of suffering and rebirth.',
    color: 'from-blue-500/20 to-transparent'
  },
  {
    name: 'Jainism',
    term: 'Kevala Jñāna',
    description: 'Absolute omniscience. When the soul (jīva) sheds all karmic particles through rigorous asceticism, it rises to the top of the universe and exists in eternal bliss and infinite knowledge.',
    color: 'from-green-500/20 to-transparent'
  },
  {
    name: 'Modern Psychology',
    term: 'Self-Actualization',
    description: 'Stripped of metaphysical rebirth, modern interpretations view "liberation" as freedom from trauma, neurotic conditioning, and the realization of one\'s full human potential.',
    color: 'from-yellow-500/20 to-transparent'
  }
];

export const MokshaGallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-[#050014]">
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-24 md:top-32 text-center w-full z-20 px-6 pointer-events-none">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 20</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white tracking-widest drop-shadow-[0_0_15px_white]">The Gallery of Liberation</h3>
          <p className="text-white/60 font-light mt-4">The Crown represents the ultimate goal. But what is it?</p>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="w-full h-full flex items-center">
          <motion.div 
            style={{ x }}
            className="flex w-[400vw] h-full"
          >
            {TRADITIONS.map((tradition, idx) => (
              <div 
                key={tradition.name}
                className="w-screen h-full flex items-center justify-center relative group"
              >
                {/* Background ambient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tradition.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                
                <div className="absolute top-1/4 text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <h4 className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-white/50 mb-4 border-b border-white/10 pb-4 inline-block">
                    {tradition.name}
                  </h4>
                </div>

                {/* Massive Typography */}
                <div className="relative z-10 mix-blend-difference pointer-events-none">
                  <h3 className="text-[12vw] font-serif text-white font-bold tracking-tighter whitespace-nowrap leading-none transition-transform duration-700 group-hover:scale-110">
                    {tradition.term}
                  </h3>
                </div>

                {/* Explanation on hover */}
                <div className="absolute bottom-1/4 max-w-2xl px-6 text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 pointer-events-none">
                  <p className="text-xl md:text-3xl font-light text-white/90 leading-relaxed font-serif italic drop-shadow-[0_0_10px_black]">
                    "{tradition.description}"
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
          {TRADITIONS.map((_, idx) => {
            
            // Explicitly map out strictly increasing domains inside [0,1]
            // We have 4 traditions, so the "mid" points are roughly 0, 0.33, 0.66, 1
            let domain = [0, 0.5, 1];
            let range = [0.3, 1, 0.3];

            if (idx === 0) {
              domain = [0, 0.15, 0.33];
              range = [1, 0.5, 0.3];
            } else if (idx === 1) {
              domain = [0.1, 0.33, 0.66];
            } else if (idx === 2) {
              domain = [0.33, 0.66, 0.9];
            } else if (idx === 3) {
              domain = [0.66, 0.85, 1];
              range = [0.3, 0.5, 1];
            }

            const opacity = useTransform(
              scrollYProgress,
              domain,
              range
            );
            
            return (
              <motion.div 
                key={idx}
                style={{ opacity }}
                className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
