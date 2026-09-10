import React from 'react';
import { motion } from 'framer-motion';

export const HeatOrb: React.FC<{ intensity?: number; label?: string; size?: number }> = ({ intensity = 1, label, size = 220 }) => {
  const scale = 0.88 + intensity * 0.12;
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <motion.div
        animate={{ scale: [scale, scale * 1.06, scale], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(255,245,210,.95)_0%,rgba(255,177,56,.82)_14%,rgba(244,91,18,.46)_38%,rgba(110,26,4,.16)_67%,transparent_76%)] blur-md"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[18%] rounded-full border border-amber-200/20 border-t-amber-200/70 border-r-transparent"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[28%] rounded-full border border-orange-300/20 border-l-orange-200/70 border-b-transparent"
      />
      {label && <span className="relative z-10 font-mono text-[10px] tracking-[.35em] uppercase text-amber-50/70">{label}</span>}
    </div>
  );
};
