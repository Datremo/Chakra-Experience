import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface IntroOverlayProps {
  isIntro: boolean;
  loadingProgress: number;
  isLoaded: boolean;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ 
  isIntro, 
  loadingProgress, 
  isLoaded 
}) => {
  const [phaseText, setPhaseText] = useState('Gathering primordial essence...');

  useEffect(() => {
    if (loadingProgress < 25) {
      setPhaseText('Gathering primordial essence...');
    } else if (loadingProgress < 50) {
      setPhaseText('Harmonizing the subtle channels...');
    } else if (loadingProgress < 75) {
      setPhaseText('Awakening the seven energy centers...');
    } else if (loadingProgress < 100) {
      setPhaseText('Aligning the sacred gateway...');
    } else {
      setPhaseText('Gateway open. Ascend.');
    }
  }, [loadingProgress]);

  const handleBeginScroll = () => {
    window.scrollTo({
      top: 650,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* PHASE 1: MASTER CINEMATIC PRELOADER (Visible only while loading assets) */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="master-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060012] text-white px-6 overflow-hidden select-none"
          >
            {/* Ambient Background Aura */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
            <div className="absolute w-[350px] h-[350px] rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none translate-y-24" />

            {/* Glowing Sacred Geometry Core */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-8 sm:mb-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-purple-400/25 border-dashed"
              />
              <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-2 rounded-full border border-amber-300/30"
              />
              {/* Inner Glowing Jewel */}
              <motion.div 
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-amber-300 shadow-[0_0_40px_rgba(216,180,254,0.8)] flex items-center justify-center"
              >
                <Sparkles size={18} className="text-white drop-shadow-md" />
              </motion.div>
            </div>

            {/* Title & Spiritual Header */}
            <h3 className="font-sans text-[11px] sm:text-xs tracking-[0.45em] uppercase text-purple-300/70 mb-3 text-center">
              Prāṇa • Sacred Energetics
            </h3>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-widest text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] mb-8 text-center">
              THE AWAKENING
            </h1>

            {/* Glowing Minimalist Progress Bar */}
            <div className="w-64 sm:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-md p-[1px] relative shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-amber-300"
                style={{ width: `${loadingProgress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Percentage & Dynamic Contemplative Phrase */}
            <div className="flex items-center justify-between w-64 sm:w-80 mt-4 text-xs font-sans">
              <span className="text-purple-200/60 tracking-wider italic text-[11px] sm:text-xs">
                {phaseText}
              </span>
              <span className="font-mono text-purple-300 font-medium tracking-widest">
                {loadingProgress}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PHASE 2: HERO INTRO OVERLAY (Smoothly revealed once loaded, dismissed when scrolling) */}
      <div 
        className={`fixed inset-0 pointer-events-none z-20 flex flex-col items-center justify-between py-12 sm:py-16 md:py-20 px-6 transition-all duration-1000 ${
          isLoaded && isIntro ? 'opacity-100 bg-black/35 backdrop-blur-[2px]' : 'opacity-0'
        }`}
      >
        {/* Top Eyebrow */}
        <div 
          className={`flex flex-col items-center transform transition-all duration-1000 delay-200 ${
            isLoaded && isIntro ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-purple-400/60" />
            <h3 className="font-sans text-[10px] sm:text-xs tracking-[0.45em] uppercase text-purple-200/75">
              The Inner Journey
            </h3>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>
        </div>

        {/* Center Main Title */}
        <div 
          className={`flex flex-col items-center text-center transform transition-all duration-1000 delay-300 ${
            isLoaded && isIntro ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] mb-4">
            Awakening
          </h1>
          <p className="font-sans text-xs sm:text-sm text-purple-200/70 font-light tracking-widest max-w-md mx-auto uppercase">
            Seven vortexes of consciousness
          </p>
        </div>

        {/* Bottom Interactive Scroll Guidance */}
        <div 
          className={`flex flex-col items-center space-y-4 pointer-events-auto transform transition-all duration-1000 delay-500 ${
            isLoaded && isIntro ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button
            onClick={handleBeginScroll}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 text-white/80 hover:text-white transition-all group backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.2)]"
          >
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] uppercase font-medium">
              Begin Journey
            </span>
            <ChevronDown size={14} className="transform group-hover:translate-y-0.5 transition-transform text-purple-300" />
          </button>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 animate-pulse">
            Scroll or tap to enter
          </p>
        </div>

        {/* Ambient background glows for the intro */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isLoaded && isIntro ? 'opacity-40' : 'opacity-0'}`}>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]" />
        </div>
      </div>
    </>
  );
};
