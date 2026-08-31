import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BodyMapProps {
  activeChakra?: string;
}

export const BodyMap: React.FC<BodyMapProps> = ({ activeChakra = 'none' }) => {
  const isAjna = activeChakra !== 'none';
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {/* Majestic Human Silhouette */}
      <svg viewBox="0 0 200 500" className="w-full h-full text-indigo-500/20 drop-shadow-[0_0_15px_rgba(79,70,229,0.2)]" stroke="currentColor" fill="none" strokeWidth="1">
        {/* Abstract Head */}
        <path d="M100 40 C 70 40, 70 90, 100 110 C 130 90, 130 40, 100 40 Z" />
        
        {/* Abstract Torso & Shoulders */}
        <path d="M100 110 C 100 110, 50 120, 40 180 C 35 210, 50 250, 60 300 C 70 350, 100 450, 100 450" strokeWidth="0.5" />
        <path d="M100 110 C 100 110, 150 120, 160 180 C 165 210, 150 250, 140 300 C 130 350, 100 450, 100 450" strokeWidth="0.5" />
        
        {/* Central Channel (Sushumna) */}
        <line x1="100" y1="50" x2="100" y2="400" className="text-white/10" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
      
      {/* Glowing Chakra Points */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Crown */}
        <div className="absolute top-[8%] w-4 h-4 rounded-full border border-violet-500/30 bg-violet-500/10 blur-[2px]" />
        
        {/* Third Eye (Ajna) */}
        <motion.div 
          className={`absolute top-[14%] rounded-full flex items-center justify-center transition-all duration-1000 ${
            isAjna ? 'w-12 h-12 border border-indigo-400 bg-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.6)] blur-[0px]' : 'w-4 h-4 border border-indigo-500/30 bg-indigo-500/10 blur-[2px]'
          }`}
          animate={{
            scale: isAjna ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           {isAjna && <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />}
        </motion.div>

        {/* Throat */}
        <div className="absolute top-[22%] w-4 h-4 rounded-full border border-blue-500/30 bg-blue-500/10 blur-[2px]" />
        
        {/* Heart */}
        <div className="absolute top-[32%] w-4 h-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 blur-[2px]" />
        
        {/* Solar Plexus */}
        <div className="absolute top-[42%] w-4 h-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 blur-[2px]" />
        
        {/* Sacral */}
        <div className="absolute top-[52%] w-4 h-4 rounded-full border border-orange-500/30 bg-orange-500/10 blur-[2px]" />
        
        {/* Root */}
        <div className="absolute top-[62%] w-4 h-4 rounded-full border border-red-500/30 bg-red-500/10 blur-[2px]" />
        
      </div>
      
      {/* Floating label if active */}
      <AnimatePresence>
        {isAjna && (
          <motion.div 
            key="ajna-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-[14%] left-[60%] ml-4 flex items-center"
          >
            <div className="h-px w-8 bg-indigo-400/50 mr-2" />
            <div className="text-xs font-serif text-indigo-200 tracking-[0.2em] uppercase">
              Bhrūmadhya<br/><span className="text-[10px] text-indigo-400/70 font-sans tracking-widest">(Brow Center)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
