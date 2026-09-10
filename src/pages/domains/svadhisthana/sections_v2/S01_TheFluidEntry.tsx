import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const S01_TheFluidEntry: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [phase, setPhase] = useState<'DROPLET' | 'RIPPLE' | 'REVEAL' | 'QUESTION'>('DROPLET');

  useEffect(() => {
    // Sequence the intro animation
    const seq1 = setTimeout(() => setPhase('RIPPLE'), 2000);
    const seq2 = setTimeout(() => setPhase('REVEAL'), 3500);
    const seq3 = setTimeout(() => setPhase('QUESTION'), 7000);

    return () => {
      clearTimeout(seq1);
      clearTimeout(seq2);
      clearTimeout(seq3);
    };
  }, []);

  return (
    <section className="relative w-full h-[120vh] md:h-[150vh] bg-black ">
      
      {/* Immersive Cinematic Background */}
      <motion.div 
        className="sticky top-0 w-full min-h-[100svh] overflow-hidden flex flex-col items-center justify-center"
        initial={{ filter: "brightness(0.3) contrast(1.2)" }}
        animate={{ filter: "brightness(0.7) contrast(1.1)" }}
        transition={{ duration: 8, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2000&auto=format&fit=crop" 
            alt="Dark water surface" 
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#050200]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Sequence 1: Droplet and Ripple */}
        <AnimatePresence>
          {phase === 'DROPLET' && (
            <motion.div 
              initial={{ y: -200, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="absolute z-10 w-4 h-4 bg-orange-400 rounded-full shadow-[0_0_30px_#f97316]"
            />
          )}
          
          {phase === 'RIPPLE' && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 30, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute z-10 w-32 h-32 border-[6px] border-orange-500 rounded-full"
            />
          )}
        </AnimatePresence>

        {/* Sequence 2: Title Reveal */}
        <AnimatePresence>
          {(phase === 'REVEAL' || phase === 'QUESTION') && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className={`relative z-20 text-center flex flex-col items-center transition-all duration-1000 ${phase === 'QUESTION' ? 'scale-90 -translate-y-16 md:-translate-y-32' : 'scale-100 translate-y-0'}`}
            >
              <h1 className="text-[6rem] sm:text-[8rem] md:text-[12rem] font-serif leading-none text-orange-500/10 mb-[-4rem] sm:mb-[-5rem] md:mb-[-7rem] select-none">
                {svadhisthanaData.header.sanskritName}
              </h1>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif text-orange-50 tracking-tighter mb-4 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                {svadhisthanaData.header.transliteration}
              </h2>
              <h3 className="text-sm sm:text-xl md:text-2xl font-sans tracking-[0.4em] md:tracking-[0.5em] text-orange-400 uppercase mb-8 md:mb-12">
                {svadhisthanaData.header.subtitle}
              </h3>
              <p className="text-xl md:text-2xl font-light italic text-orange-100/90 max-w-md md:max-w-xl mx-auto px-6">
                {svadhisthanaData.header.hook}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sequence 3: The Call to Descend */}
        <AnimatePresence>
          {phase === 'QUESTION' && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute bottom-20 md:bottom-32 z-30 w-full flex flex-col items-center text-center px-6"
            >
              <p className="text-lg md:text-2xl text-teal-200/90 italic font-serif mb-8 drop-shadow-md">
                "Where in your life are you gripping too tightly?"
              </p>
              
              {/* Scroll Indicator */}
              <motion.div
                className="text-orange-500/60 text-[10px] md:text-xs tracking-[0.3em] uppercase flex flex-col items-center"
              >
                <span className="mb-4">Let Go To Descend</span>
                <motion.div 
                  className="w-px h-16 md:h-24 bg-gradient-to-b from-orange-500 to-transparent" 
                  animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
