import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S02_TheGravitationalFall: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  
  useEffect(() => { if (inView) reachWorld(2); }, [inView, reachWorld]);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const wordY = useTransform(scrollYProgress, [0, 0.6], [0, 800]);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.5, 0]);
  const messageOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const messageScale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);

  const floatWords = ["WHAT IF?", "TOMORROW", "BILLS", "DEADLINES", "EXPECTATIONS", "UNCERTAINTY", "REGRET", "DOUBT"];
  
  return (
    <div ref={containerRef} className="h-[250vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          {floatWords.map((word, i) => (
            <motion.div
              key={word}
              className="absolute text-slate-500/30 font-sans tracking-widest text-sm md:text-xl font-light"
              style={{ left: `${15 + (i * 10)}%`, top: `${20 + (i % 4) * 15}%`, y: wordY, opacity: wordOpacity }}
              animate={{ x: [0, Math.random() * 20 - 10, 0], rotate: [0, Math.random() * 10 - 5, 0] }}
              transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        <motion.div style={{ opacity: messageOpacity, scale: messageScale }} className="flex flex-col items-center text-center space-y-6 z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-300 tracking-wide uppercase">What gives a human being</h2>
          <div className="w-px h-16 bg-gradient-to-b from-slate-500/50 to-transparent" />
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-wide uppercase font-bold">Somewhere to stand?</h2>
          <p className="mt-8 text-slate-400 max-w-lg text-center tracking-wider text-lg">
            Grounding requires moving attention from the noise of the mind into the weight of the body.
          </p>
        </motion.div>
      </div>
    </div>
  );
};