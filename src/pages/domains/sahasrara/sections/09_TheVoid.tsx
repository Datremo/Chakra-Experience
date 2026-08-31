import { ScrollContext } from '../SahasraraDomain';
import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const TheVoidSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Fade STAY in and out
  const stayOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    [0, 1, 1, 0]
  );

  // Fade the question in later
  const questionOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-[#0b001a]">
      
      {/* Sticky container for silence */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <motion.div
          style={{ opacity: stayOpacity }}
          className="absolute text-center"
        >
          <h3 className="font-serif text-3xl md:text-5xl tracking-[0.5em] text-white/90 mb-6 drop-shadow-[0_0_15px_white]">
            THE VOID
          </h3>
          <p className="font-sans text-white/50 tracking-widest uppercase text-xs">
            Śūnyatā
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: questionOpacity }}
          className="absolute max-w-2xl text-center px-6"
        >
          <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed mb-8">
            As you ascend to the crown, the mind instinctively looks for shapes, forms, or concepts to grasp. But the ultimate reality has no form.
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic">
            When there is nothing left to hold onto, what does your mind do?
          </h2>
        </motion.div>

      </div>

    </section>
  );
};
