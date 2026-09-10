import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DualitiesSection: React.FC = () => {
  const [position, setPosition] = useState(0); // -100 to 100
  
  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#0a050f]">
      
      {/* Dynamic Background based on position */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
           background: `linear-gradient(90deg, rgba(239,68,68,${position < 0 ? Math.abs(position)/100 * 0.3 : 0}) 0%, rgba(10,5,15,1) 50%, rgba(59,130,246,${position > 0 ? position/100 * 0.3 : 0}) 100%)`
        }}
      />

      <div className="relative z-10 text-center max-w-4xl px-4 pt-12 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-fuchsia-500 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          The Pendulum
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-8 md:mb-10"
        >
          Attraction & Repulsion
        </motion.h2>

        <div className="flex items-center justify-between w-full max-w-2xl mx-auto mb-12 px-4">
          <div className="text-red-400 font-sans tracking-widest uppercase text-sm w-24 text-left">Repulsion</div>
          
          <div className="relative flex-1 h-2 bg-white/10 rounded-full mx-6">
            <motion.div 
              drag="x"
              dragConstraints={{ left: -150, right: 150 }}
              dragElastic={0.1}
              onDrag={(_, info) => {
                const val = Math.max(-100, Math.min(100, (info.offset.x / 150) * 100));
                setPosition(val);
              }}
              onDragEnd={() => setPosition(0)}
              animate={{ x: position === 0 ? 0 : undefined }}
              className="absolute top-1/2 left-1/2 -mt-6 -ml-6 w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-grab active:cursor-grabbing flex items-center justify-center"
            >
              <div className="w-4 h-4 rounded-full bg-fuchsia-500" />
            </motion.div>
          </div>

          <div className="text-blue-400 font-sans tracking-widest uppercase text-sm w-24 text-right">Attraction</div>
        </div>

        <div className="h-32 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl transition-all duration-300">
            {position < -30 && "I hate this. I want it away from me. (This is still an attachment.)"}
            {position > 30 && "I need this. I must have it. (This is still an attachment.)"}
            {Math.abs(position) <= 30 && "Equanimity. Observing the pull without being dragged by it."}
          </p>
        </div>
        
        <p className="text-fuchsia-500/50 text-xs tracking-widest uppercase mt-8 animate-pulse">
          Drag the pendulum
        </p>

      </div>
    </section>
  );
};
