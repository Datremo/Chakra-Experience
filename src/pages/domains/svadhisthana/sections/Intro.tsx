import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const IntroSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [phase, setPhase] = useState<'DROPLET' | 'RIPPLE' | 'REVEAL' | 'QUESTION'>('DROPLET');
  const [selectedGrip, setSelectedGrip] = useState<string | null>(null);

  useEffect(() => {
    // Sequence the intro animation
    const seq1 = setTimeout(() => setPhase('RIPPLE'), 1500);
    const seq2 = setTimeout(() => setPhase('REVEAL'), 2500);
    const seq3 = setTimeout(() => setPhase('QUESTION'), 6000);

    return () => {
      clearTimeout(seq1);
      clearTimeout(seq2);
      clearTimeout(seq3);
    };
  }, []);

  const gripOptions = ['EMOTIONS', 'RELATIONSHIPS', 'DESIRE', 'CREATIVITY', 'CONTROL', 'CHANGE'];

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-20 px-6">
      
      {/* Sequence 1: Droplet and Ripple */}
      <AnimatePresence>
        {phase === 'DROPLET' && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: '50vh', opacity: 1, scale: [1, 1.2, 1] }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_20px_#f97316]"
          />
        )}
        
        {phase === 'RIPPLE' && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 20, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-32 h-32 border-4 border-orange-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
            className={`text-center transition-all duration-1000 ${phase === 'QUESTION' ? 'scale-75 -translate-y-32' : 'scale-100 translate-y-0'}`}
          >
            <h1 className="text-[8rem] md:text-[12rem] font-serif leading-none text-orange-500/20 mb-[-6rem] md:mb-[-8rem]">
              {svadhisthanaData.header.sanskritName}
            </h1>
            <h2 className="text-5xl md:text-8xl font-serif text-orange-100 tracking-tighter mb-4">
              {svadhisthanaData.header.transliteration}
            </h2>
            <h3 className="text-xl md:text-2xl font-sans tracking-[0.5em] text-orange-400 uppercase mb-12">
              {svadhisthanaData.header.subtitle}
            </h3>
            <p className="text-2xl italic text-orange-200/80">
              {svadhisthanaData.header.hook}
            </p>
            
            {phase === 'REVEAL' && (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 transition={{ delay: 1 }}
                 className="flex flex-col md:flex-row gap-6 justify-center mt-16 font-sans text-xs tracking-[0.3em] uppercase"
               >
                 <button className="px-8 py-4 border border-orange-500/30 text-orange-300 hover:bg-orange-500/10 rounded-full transition-all">
                   Follow the Journey
                 </button>
                 <button className="px-8 py-4 border border-teal-500/30 text-teal-300 hover:bg-teal-500/10 rounded-full transition-all">
                   Explore Freely
                 </button>
               </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sequence 3: The First Question */}
      <AnimatePresence>
        {phase === 'QUESTION' && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full max-w-5xl text-center mt-8"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-16 text-orange-50">WHAT DOES IT MEAN TO FLOW?</h2>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
               <div className="relative w-64 h-64 border border-orange-900/30 rounded-full flex flex-col items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-900/10" />
                  <div className="w-1 px-8 h-32 bg-white/40" />
                  <p className="mt-4 text-xs font-sans tracking-widest text-white/50 group-hover:text-white transition-colors">HOLDING</p>
               </div>
               
               <div className="w-12 h-[1px] bg-white/20 hidden md:block" />

               <div className="relative w-64 h-64 border border-orange-900/30 rounded-full flex flex-col items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-orange-900/10" />
                  {/* CSS waves representing flow */}
                  <svg className="absolute inset-0 w-full h-full text-orange-500/30 stroke-current animate-pulse" viewBox="0 0 100 100" fill="none">
                    <path d="M0,50 Q25,25 50,50 T100,50" strokeWidth="2" />
                    <path d="M0,60 Q25,35 50,60 T100,60" strokeWidth="2" />
                    <path d="M0,40 Q25,15 50,40 T100,40" strokeWidth="2" />
                  </svg>
                  <div className="w-1 h-32 bg-white/80 z-10" />
                  <p className="mt-4 text-xs font-sans tracking-widest text-white z-10">FLOWING</p>
               </div>
            </div>

            <p className="text-xl italic text-orange-200/80 mb-8">
              Where in your life are you gripping too tightly?
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {gripOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setSelectedGrip(option)}
                  className={`px-6 py-2 rounded-full border transition-all duration-500 font-sans text-xs tracking-widest ${
                    selectedGrip === option 
                      ? 'bg-orange-600/30 border-orange-500 text-orange-100 shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                      : 'bg-black/40 border-orange-900/40 text-orange-400/60 hover:border-orange-500/50 hover:text-orange-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            <AnimatePresence>
              {selectedGrip && (
                 <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: 'auto' }}
                   className="mt-12"
                 >
                   <p className="text-lg text-teal-300/80 italic">
                     Notice how the water begins to move differently when you acknowledge the grip.
                   </p>
                 </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
