import { ScrollContext } from '../SahasraraDomain';
import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STATEMENTS = [
  { affirm: "I am the body.", deny: "I am not the body." },
  { affirm: "I am the mind.", deny: "I am not the mind." },
  { affirm: "I am the observer.", deny: "I am not the observer." },
];

export const IAmSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"]
  });

  // Background shifts to pure radiant light (white/gold) by the end
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ['#0b001a', '#2a0a4a', '#ffffff']
  );

  return (
    <section ref={containerRef} className="h-[400vh] relative">
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor }}
      >
        <div className="absolute top-32 text-center w-full z-20 pointer-events-none px-6">
          <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 mix-blend-difference">World 12</h2>
          <h3 className="text-xl md:text-2xl font-serif text-white/80 mb-2">Neti Neti</h3>
          <p className="text-white/50 font-light max-w-xl mx-auto italic">
            "Not this, not this." The ancient practice of analytical negation. To find the observer, we must deny all that can be observed. Keep scrolling.
          </p>
        </div>

        {STATEMENTS.map((stmt, idx) => {
          const startAffirm = 0.1 + (idx * 0.2);
          const endAffirm = startAffirm + 0.1;
          const startDeny = endAffirm;
          const endDeny = startDeny + 0.1;

          const affirmOpacity = useTransform(
            scrollYProgress,
            [startAffirm, startAffirm + 0.05, endAffirm, endAffirm + 0.05],
            [0, 1, 1, 0]
          );

          const denyOpacity = useTransform(
            scrollYProgress,
            [startDeny, startDeny + 0.05, endDeny, endDeny + 0.05],
            [0, 1, 1, 0]
          );

          const yAffirm = useTransform(
            scrollYProgress,
            [startAffirm, endAffirm + 0.05],
            [50, -50]
          );

          const yDeny = useTransform(
            scrollYProgress,
            [startDeny, endDeny + 0.05],
            [50, -50]
          );

          return (
            <React.Fragment key={idx}>
              <motion.div
                style={{ opacity: affirmOpacity, y: yAffirm }}
                className="absolute font-serif text-3xl md:text-5xl text-white/70 tracking-widest text-center"
              >
                {stmt.affirm}
              </motion.div>
              <motion.div
                style={{ opacity: denyOpacity, y: yDeny }}
                className="absolute font-serif text-3xl md:text-5xl text-white tracking-widest text-center"
              >
                {stmt.deny}
              </motion.div>
            </React.Fragment>
          );
        })}

        {/* Final "I AM" */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]),
            scale: useTransform(scrollYProgress, [0.8, 0.9, 1], [0.8, 1, 1.5]),
            color: useTransform(scrollYProgress, [0.8, 0.95], ['#ffffff', '#000000'])
          }}
          className="absolute font-serif text-6xl md:text-8xl tracking-[0.2em] font-bold"
        >
          I AM.
        </motion.div>

      </motion.div>
    </section>
  );
};
