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
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#050202]">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">The Blueprint</h2>
        <h1 className="text-5xl md:text-7xl mb-6 font-serif text-orange-50">Construct the Lotus</h1>
        <p className="text-xl text-teal-100/60 italic max-w-2xl mx-auto">
          Reconstruct the traditional visualization layer by layer.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-6xl relative z-10">
        
        {/* Interactive Construction Controls */}
        <div className="flex flex-col space-y-4 w-full max-w-xs">
          {layerOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => toggleLayer(opt.id)}
              disabled={opt.id === 'PETALS'}
              className={`px-6 py-4 rounded-xl border text-left transition-all duration-300 font-sans tracking-widest text-sm uppercase flex justify-between items-center
                ${hasLayer(opt.id) 
                  ? 'bg-orange-900/40 border-orange-500 text-orange-100 shadow-[0_0_20px_rgba(249,115,22,0.2)]' 
                  : 'bg-black/50 border-orange-900/30 text-orange-200/40 hover:border-orange-500/50 hover:text-orange-200'
                }
                ${opt.id === 'PETALS' ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <span>{opt.label}</span>
              <div className={`w-3 h-3 rounded-full border border-orange-500/50 ${hasLayer(opt.id) ? 'bg-orange-500' : 'bg-transparent'}`} />
            </button>
          ))}
        </div>

        {/* The Mandala Visualizer */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center rounded-full">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)]" />

          <AnimatePresence>
            {hasLayer('WATER') && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 rounded-full border-4 border-teal-500/30 flex items-center justify-center bg-teal-900/10 overflow-hidden"
              >
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop')] opacity-20 mix-blend-screen bg-cover animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 6 Petals */}
          <div className="absolute inset-0 animate-spin-slow">
            {svadhisthanaData.mandala.petalSyllables.map((syllable: any, i: number) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-[80px] h-[140px] md:w-[120px] md:h-[220px] -ml-[40px] md:-ml-[60px] -mt-[140px] md:-mt-[220px] origin-bottom flex flex-col items-center justify-start transition-all duration-1000"
                style={{ transform: `rotate(${i * 60}deg)` }}
              >
                <svg viewBox="0 0 100 200" className="w-full h-full text-orange-500/80 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] cursor-pointer hover:text-orange-400 transition-colors mix-blend-screen">
                  {/* Improved Lotus Petal Path */}
                  <path d="M50,0 C90,40 110,120 50,200 C-10,120 10,40 50,0 Z" fill="url(#petalGrad)" stroke="rgba(255,166,0,0.5)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="petalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <AnimatePresence>
                  {hasLayer('LETTERS') && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-[20%] md:top-[25%] text-orange-50 font-serif text-2xl md:text-4xl drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
                      style={{ transform: `rotate(${-i * 60}deg)` }}
                    >
                      {syllable.sanskrit}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Center core to hide any minuscule overlapping seams */}
            <div className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 rounded-full bg-orange-400/50 blur-md mix-blend-screen" />
          </div>

          <AnimatePresence>
            {hasLayer('MOON') && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border-b-8 md:border-b-[12px] border-orange-100 shadow-[0_20px_40px_rgba(255,255,255,0.2)] flex items-center justify-center"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {hasLayer('ANIMAL') && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute mt-16 md:mt-24 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
              >
                <svg viewBox="0 0 100 100" fill="currentColor">
                  {/* Geometric Makara Representation */}
                  <path d="M50 15 L60 35 L85 35 L65 50 L75 75 L50 60 L25 75 L35 50 L15 35 L40 35 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M50 25 L56 38 L70 38 L58 48 L63 63 L50 54 L37 63 L42 48 L30 38 L44 38 Z" fill="currentColor" opacity="0.5" />
                  <circle cx="50" cy="50" r="5" fill="white" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {hasLayer('BIJA') && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute text-5xl md:text-7xl font-serif text-orange-50 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              >
                {svadhisthanaData.mandala.bija.sanskrit}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
