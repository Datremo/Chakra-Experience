import React from 'react';
import { motion } from 'framer-motion';

export const CrownMandala: React.FC = () => {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Soft outer glow */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-white/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Procedural circles representing petals */}
      <div className="absolute inset-0">
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-80 h-1 border border-white/10 rounded-full origin-left"
            style={{ rotate: `${(360 / 32) * i}deg`, translateY: '-50%' }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Moon Mandala Center */}
      <motion.div 
        className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-white/20 to-white/60 shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center"
      >
        {/* Bindu */}
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
      </motion.div>
    </div>
  );
};
