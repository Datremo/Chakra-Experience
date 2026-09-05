import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S01_TheCinematicEntry: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const [sequenceComplete, setSequenceComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      reachWorld(1);
      setSequenceComplete(true);
    }, 12000);
    return () => clearTimeout(timer);
  }, [reachWorld]);

  return (
    <div className="relative w-full h-[150vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        
        {/* Mountain Meditator Base */}
        <motion.div
          className="absolute inset-0 z-0 origin-[50%_75%]"
          initial={{ scale: 1.0, filter: "brightness(0.5) contrast(1.1) sepia(0.2) hue-rotate(200deg)" }}
          animate={{ 
            scale: [1.0, 1.05, 1.6],
            filter: [
              "brightness(0.5) contrast(1.1) sepia(0.2) hue-rotate(200deg)",
              "brightness(0.9) contrast(1.05) sepia(0.1) hue-rotate(0deg)",
              "brightness(0.6) contrast(1.2) sepia(0) hue-rotate(0deg)"
            ]
          }}
          transition={{ duration: 12, times: [0, 0.4, 1], ease: "easeInOut" }}
        >
          <img src="/assets/muladhara/mountain_meditator.jpg" alt="Meditator" className="w-full h-full object-cover" />
        </motion.div>

        {/* Mist */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 0.2, 0] }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ background: 'linear-gradient(to top, rgba(200,210,220,0.8) 0%, transparent 60%)' }}
        />

        {/* Root Glow */}
        <motion.div
          className="absolute z-20 w-32 h-32 rounded-full mix-blend-screen"
          style={{ top: '72%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(220,38,38,1) 0%, rgba(153,27,27,0.6) 40%, transparent 70%)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0, 1], scale: [0, 0, 1.5] }}
          transition={{ duration: 12, times: [0, 0.6, 1], ease: "easeOut" }}
        />

        {/* Lotus */}
        <motion.div
          className="absolute z-30"
          style={{ top: '72%', left: '50%', x: '-50%', y: '-50%' }}
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: [0, 0, 1], scale: [0, 0, 1], rotate: [-45, -45, 0] }}
          transition={{ duration: 12, times: [0, 0.7, 1], ease: "easeOut" }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
            <path d="M50 10 C60 30, 70 40, 50 50 C30 40, 40 30, 50 10 Z" fill="none" stroke="#ef4444" strokeWidth="2" />
            <path d="M90 50 C70 60, 60 70, 50 50 C60 30, 70 40, 90 50 Z" fill="none" stroke="#ef4444" strokeWidth="2" />
            <path d="M50 90 C40 70, 30 60, 50 50 C70 60, 60 70, 50 90 Z" fill="none" stroke="#ef4444" strokeWidth="2" />
            <path d="M10 50 C30 40, 40 30, 50 50 C40 70, 30 60, 10 50 Z" fill="none" stroke="#ef4444" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.div
          className="absolute bottom-20 z-50 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0, 1], y: [20, 20, 0] }}
          transition={{ duration: 12, times: [0, 0.8, 1], ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-[0.2em] uppercase shadow-black drop-shadow-2xl">Mūlādhāra</h1>
          <h2 className="text-sm md:text-base font-sans text-red-200 tracking-[0.5em] mt-4 uppercase">The Living Root</h2>
          <motion.div className="w-px h-12 bg-gradient-to-b from-red-500 to-transparent mt-8" initial={{ height: 0 }} animate={{ height: [0, 0, 48] }} transition={{ duration: 12, times: [0, 0.9, 1] }} />
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 z-50 text-white/40 text-xs tracking-widest uppercase flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: sequenceComplete ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <span className="mb-2">Descend</span>
          <motion.div className="w-1 h-1 rounded-full bg-white/50" animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </div>
    </div>
  );
};