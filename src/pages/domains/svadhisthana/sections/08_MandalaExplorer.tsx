import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

type RevealLayer = 'PETALS' | 'LETTERS' | 'WATER' | 'MOON' | 'BIJA' | 'ANIMAL';

export const MandalaExplorerSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [layers, setLayers] = useState<RevealLayer[]>(['PETALS']);

  const toggleLayer = (layer: RevealLayer) => {
    if (layers.includes(layer)) {
      if (layer === 'PETALS') return; // Base layer cannot be removed
      setLayers(layers.filter(l => l !== layer));
    } else {
      setLayers([...layers, layer]);
    }
  };

  const hasLayer = (layer: RevealLayer) => layers.includes(layer);

  const layerOptions: { id: RevealLayer; label: string }[] = [
    { id: 'PETALS', label: 'Six Petals' },
    { id: 'LETTERS', label: 'Sanskrit Letters' },
    { id: 'WATER', label: 'Water Element' },
    { id: 'MOON', label: 'Crescent Moon' },
    { id: 'ANIMAL', label: 'Makara' },
    { id: 'BIJA', label: 'Bīja (Seed Sound)' }
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center px-4 md:px-6 flex flex-col items-center justify-center relative bg-black overflow-hidden">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/svadhisthana/svadhisthana_mandala_blueprint_1788966667396.jpg" 
          alt="Mandala Blueprint Background" 
          className="w-full h-full object-cover opacity-[0.15] mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)] opacity-90" />
      </div>

      <div className="text-center mb-10 md:mb-16 relative z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          className="font-sans text-orange-400 tracking-[0.4em] uppercase text-xs md:text-sm mb-4 md:mb-6 drop-shadow-md"
        >
          The Blueprint
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 font-serif text-white drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]"
        >
          Construct the Lotus
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-orange-100/60 italic max-w-2xl mx-auto px-4 font-light"
        >
          Reconstruct the traditional visualization layer by layer.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full max-w-7xl relative z-10">
        
        {/* Interactive Construction Controls */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-2 lg:flex lg:flex-col gap-3 md:gap-4 w-full max-w-md lg:max-w-xs"
        >
          {layerOptions.map((opt, index) => (
            <motion.button
              key={opt.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleLayer(opt.id)}
              disabled={opt.id === 'PETALS'}
              className={`px-4 md:px-6 py-3 md:py-4 rounded-xl border text-left transition-all duration-300 font-sans tracking-wider md:tracking-widest text-[10px] sm:text-xs md:text-sm uppercase flex justify-between items-center backdrop-blur-md
                ${hasLayer(opt.id) 
                  ? 'bg-orange-900/60 border-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.3)] scale-[1.02]' 
                  : 'bg-black/60 border-orange-900/30 text-orange-200/60 hover:border-orange-500/50 hover:text-orange-200 hover:bg-orange-900/20'
                }
                ${opt.id === 'PETALS' ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <span>{opt.label}</span>
              <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full border border-orange-500/50 flex-shrink-0 ml-2 transition-colors duration-500 ${hasLayer(opt.id) ? 'bg-orange-500 shadow-[0_0_10px_#f97316]' : 'bg-transparent'}`} />
            </motion.button>
          ))}
        </motion.div>

        {/* The Mandala Visualizer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center rounded-full mt-8 lg:mt-0"
        >
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)] rounded-full mix-blend-screen" />

          <AnimatePresence>
            {hasLayer('WATER') && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full border-[3px] md:border-[4px] border-teal-500/50 flex items-center justify-center bg-teal-900/20 overflow-hidden shadow-[inset_0_0_50px_rgba(20,184,166,0.3),0_0_30px_rgba(20,184,166,0.2)]"
              >
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop')] opacity-30 mix-blend-screen bg-cover animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 6 Petals */}
          <div className="absolute inset-0 animate-spin-slow">
            {svadhisthanaData.mandala.petalSyllables.map((syllable: any, i: number) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-[80px] h-[140px] sm:w-[100px] sm:h-[180px] md:w-[120px] md:h-[220px] -ml-[40px] sm:-ml-[50px] md:-ml-[60px] -mt-[140px] sm:-mt-[180px] md:-mt-[220px] origin-bottom flex flex-col items-center justify-start transition-all duration-1000"
                style={{ transform: `rotate(${i * 60}deg)` }}
              >
                <svg viewBox="0 0 100 200" className="w-full h-full text-orange-500/80 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] mix-blend-screen">
                  {/* Improved Lotus Petal Path */}
                  <path d="M50,0 C90,40 110,120 50,200 C-10,120 10,40 50,0 Z" fill="url(#petalGrad)" stroke="rgba(255,166,0,0.8)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="petalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <AnimatePresence>
                  {hasLayer('LETTERS') && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-[20%] md:top-[25%] text-orange-50 font-serif text-xl sm:text-3xl md:text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
                      style={{ transform: `rotate(${-i * 60}deg)` }}
                    >
                      {syllable.sanskrit}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Center core to hide any minuscule overlapping seams */}
            <div className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 -ml-3 -mt-3 sm:-ml-4 sm:-mt-4 rounded-full bg-orange-400/80 blur-md mix-blend-screen shadow-[0_0_20px_#f97316]" />
          </div>

          <AnimatePresence>
            {hasLayer('MOON') && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] rounded-full border-b-8 md:border-b-[12px] border-teal-100 shadow-[0_20px_50px_rgba(255,255,255,0.4)] flex items-center justify-center mix-blend-screen"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {hasLayer('ANIMAL') && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="absolute mt-12 sm:mt-16 md:mt-24 flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 text-teal-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.8)] z-10"
              >
                <svg viewBox="0 0 100 100" fill="currentColor">
                  {/* Geometric Makara Representation */}
                  <path d="M50 15 L60 35 L85 35 L65 50 L75 75 L50 60 L25 75 L35 50 L15 35 L40 35 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M50 25 L56 38 L70 38 L58 48 L63 63 L50 54 L37 63 L42 48 L30 38 L44 38 Z" fill="currentColor" opacity="0.7" />
                  <circle cx="50" cy="50" r="5" fill="white" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {hasLayer('BIJA') && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", bounce: 0.6 }}
                className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] font-serif text-white drop-shadow-[0_0_30px_rgba(255,255,255,1)] z-20 mix-blend-overlay"
              >
                {svadhisthanaData.mandala.bija.sanskrit}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
};
