import React from 'react';
import { motion } from 'framer-motion';

type Props = { value: number; onChange: (value: number) => void; label?: string };

export const HeatDial: React.FC<Props> = ({ value, onChange, label = 'HEAT' }) => {
  const angle = -135 + value * 270;
  return (
    <div className="relative w-72 h-72 mx-auto select-none touch-none">
      <div className="absolute inset-0 rounded-full border border-amber-200/10 bg-black/45 shadow-[0_0_60px_rgba(255,130,25,0.12)]" />
      <div className="absolute inset-5 rounded-full border border-amber-300/10" />
      <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,212,115,0.12),rgba(255,86,0,0.04)_48%,transparent_70%)]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="37" fill="none" stroke="rgba(255,184,64,.1)" strokeWidth="2" strokeDasharray="174 59" strokeLinecap="round" />
        <motion.circle cx="50" cy="50" r="37" fill="none" stroke="rgba(255,170,35,.78)" strokeWidth="2" strokeDasharray="174 59" strokeLinecap="round" animate={{ strokeDashoffset: 174 * (1-value) }} />
      </svg>
      <input aria-label={label} type="range" min={0} max={1} step={0.001} value={value} onChange={(e) => onChange(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-grab" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div animate={{ rotate: angle }} className="absolute w-1 h-28 origin-bottom top-8 left-1/2 -translate-x-1/2">
          <div className="w-1 h-14 bg-amber-200 rounded-full shadow-[0_0_16px_rgba(255,200,100,.65)]" />
        </motion.div>
        <div className="text-center mt-6">
          <div className="text-[10px] tracking-[0.35em] uppercase text-amber-100/45">{label}</div>
          <div className="mt-1 text-4xl font-serif text-amber-50">{Math.round(value * 100)}</div>
        </div>
      </div>
    </div>
  );
};
