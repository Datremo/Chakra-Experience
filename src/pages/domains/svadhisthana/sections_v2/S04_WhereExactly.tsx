import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const S04_WhereExactly: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [sliderPos, setSliderPos] = useState(65); // Default to Sacral
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    let pos = ((clientY - rect.top) / rect.height) * 100;
    pos = Math.max(5, Math.min(95, pos));
    setSliderPos(pos);
  };

  const getChakraLabel = () => {
    if (sliderPos < 95 && sliderPos >= 75) return "Mūlādhāra (Root)";
    if (sliderPos >= 55 && sliderPos < 75) return "Svādhiṣṭhāna (Sacral)";
    if (sliderPos >= 45 && sliderPos < 55) return "Maṇipūra (Solar Plexus)";
    return "";
  };

  const isSacral = sliderPos >= 55 && sliderPos < 75;
  const isSolar = sliderPos >= 45 && sliderPos < 55;
  const isRoot = sliderPos >= 75 && sliderPos < 95;

  return (
    <section className="min-min-h-[100svh] py-24 md:py-12 md:py-16 px-4 flex items-center justify-center relative bg-black ">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d1b5?q=80&w=2000&auto=format&fit=crop" 
          alt="Night ocean bioluminescence" 
          className="w-full h-full object-cover opacity-48 mix-blend-screen scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 px-4 text-center lg:text-left">
          <h2 className="font-sans text-orange-400 tracking-[0.4em] uppercase text-xs md:text-sm mb-4 md:mb-6">Location</h2>
          <h1 className="text-4xl md:text-6xl mb-6 md:mb-8 leading-tight font-serif text-orange-50 drop-shadow-md">Where is it?</h1>
          
          <div className="space-y-6 text-lg md:text-xl leading-loose text-orange-100/70 mb-10 md:mb-12 font-light">
            <p>
              Drag the scanner down the body. Notice the vertical relationship between the Root, the Sacral, and the Solar Plexus.
            </p>
            <div className="bg-orange-900/20 backdrop-blur-md border-l-4 border-orange-500 p-6 mt-8 rounded-r-2xl shadow-lg text-left">
              <p className="text-orange-100/90 italic">
                "{svadhisthanaData.location.note}"
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <SourceBadge 
              type="TRADITION" 
              text={svadhisthanaData.location.traditional}
              sourceText="Classical Tantric Texts"
            />
            <SourceBadge 
              type="MODERN" 
              text={svadhisthanaData.location.modern}
            />
          </div>
        </div>

        {/* Interactive Scanner */}
        <div className="order-1 lg:order-2 relative h-[600px] md:h-[800px] w-full max-w-sm md:max-w-md mx-auto bg-[#02050a]/80 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-orange-900/30 flex justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          <div className="absolute inset-x-10 md:inset-x-20 top-10 bottom-10 bg-white/5 blur-3xl rounded-full" />
          
          {/* Subtle glows for areas */}
          <div className="absolute bottom-[20%] inset-x-20 h-32 bg-red-500/10 blur-3xl rounded-full transition-opacity duration-500" style={{ opacity: isRoot ? 1 : 0 }} />
          <div className="absolute bottom-[35%] inset-x-20 h-32 bg-orange-500/20 blur-3xl rounded-full transition-opacity duration-500" style={{ opacity: isSacral ? 1 : 0 }} />
          <div className="absolute top-[45%] inset-x-20 h-32 bg-yellow-500/10 blur-3xl rounded-full transition-opacity duration-500" style={{ opacity: isSolar ? 1 : 0 }} />

          {/* Simple silhouette placeholder (spine) */}
          <div className="absolute inset-y-10 w-px bg-white/10 left-1/2 -translate-x-1/2 pointer-events-none" />

          <div 
            ref={containerRef}
            className="absolute inset-0 z-20 cursor-ns-resize touch-none"
            onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
            onTouchMove={handleDrag}
            onMouseDown={handleDrag}
          >
            {/* The Scanner Line */}
            <motion.div 
              className="absolute left-0 right-0 h-px flex items-center justify-center transition-colors duration-300"
              style={{ top: `${sliderPos}%` }}
              animate={{ 
                backgroundColor: isSacral ? 'rgba(249,115,22,1)' : isSolar ? 'rgba(234,179,8,1)' : isRoot ? 'rgba(239,68,68,1)' : 'rgba(255,255,255,0.3)',
                boxShadow: isSacral ? '0 0 20px rgba(249,115,22,0.8)' : isSolar ? '0 0 20px rgba(234,179,8,0.8)' : isRoot ? '0 0 20px rgba(239,68,68,0.8)' : '0 0 10px rgba(255,255,255,0.2)'
              }}
            >
              <div className="w-32 h-1 bg-white/100 blur-[2px] rounded-full absolute" />
              
              <div className={`absolute -top-14 px-6 py-2 rounded-full border backdrop-blur-md font-sans tracking-widest uppercase text-xs md:text-sm whitespace-nowrap transition-all duration-300
                ${isSacral ? 'bg-orange-900/90 border-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.6)]' 
                  : isSolar ? 'bg-yellow-900/90 border-yellow-500 text-white shadow-[0_0_30px_rgba(234,179,8,0.6)]'
                  : isRoot ? 'bg-red-900/90 border-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.6)]'
                  : 'bg-black/80 border-white/20 text-white/50 opacity-0'}`}
              >
                {getChakraLabel()}
              </div>
            </motion.div>

            {/* Sacral Info Popups */}
            <AnimatePresence>
              {isSacral && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-10 left-0 right-0 flex justify-between px-4 md:px-8 pointer-events-none"
                >
                  <div className="bg-black/90 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/10 w-[48%] text-center">
                    <p className="text-[9px] md:text-[10px] text-white/40 font-sans uppercase tracking-widest mb-1">Physical Anatomy</p>
                    <p className="text-xs md:text-sm text-white/90">Lower Abdomen / Pelvis</p>
                  </div>
                  <div className="bg-orange-900/90 backdrop-blur-md p-3 md:p-4 rounded-xl border border-orange-500/50 w-[48%] text-center shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                    <p className="text-[9px] md:text-[10px] text-orange-200/60 font-sans uppercase tracking-widest mb-1">Subtle Body</p>
                    <p className="text-xs md:text-sm text-orange-50">Svādhiṣṭhāna Center</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute top-6 text-center w-full z-10 pointer-events-none">
            <p className="text-white/40 font-sans text-[10px] tracking-[0.4em] uppercase animate-pulse">Drag to scan</p>
          </div>

        </div>

      </div>
    </section>
  );
};
