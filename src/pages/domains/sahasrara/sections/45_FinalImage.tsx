import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ScrollContext } from '../SahasraraDomain';

export const FinalImageSection: React.FC = () => {
  const scrollContainer = useContext(ScrollContext);

  const scrollToTop = () => {
    if (scrollContainer?.current) {
      scrollContainer.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-black pb-32">
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 45</h2>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">
        
        {/* The Final Lotus */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center mb-16"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-2 h-48 md:h-72 bg-gradient-to-t from-transparent via-purple-300/30 to-white/80 rounded-full mix-blend-screen origin-bottom"
              style={{ rotate: i * (360 / 20) }}
            />
          ))}
          <div className="w-16 h-16 rounded-full bg-white shadow-[0_0_50px_white] mix-blend-screen" />
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-serif text-white tracking-widest text-center mb-12 drop-shadow-[0_0_30px_white]">
          ŚĀNTI
        </h1>

        <p className="font-serif text-sm tracking-[0.4em] uppercase text-white/50 text-center mb-24">
          Peace. Peace. Peace.
        </p>

        <div className="flex flex-col md:flex-row gap-8 z-50">
          <button
            onClick={() => window.document.getElementById('sahasrara-scroll-container')?.parentElement?.querySelector('button')?.click()}
            className="px-8 py-4 bg-white text-black font-sans text-xs tracking-[0.3em] uppercase rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            RETURN TO THE WORLD
          </button>
          
          <button
            onClick={scrollToTop}
            className="px-8 py-4 bg-transparent border border-white/20 text-white/70 font-sans text-xs tracking-[0.3em] uppercase rounded-full hover:border-white hover:text-white transition-all"
          >
            SCROLL TO TOP
          </button>
        </div>

      </div>
    </section>
  );
};
