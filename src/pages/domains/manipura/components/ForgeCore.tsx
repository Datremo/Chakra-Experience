import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

type Props = { heat: number; phase: 'raw' | 'heat' | 'shape' | 'temper' | 'transform'; label?: string };

const phaseCopy = {
  raw: 'RAW',
  heat: 'HEAT',
  shape: 'SHAPE',
  temper: 'TEMPER',
  transform: 'TRANSFORM',
};

export const ForgeCore: React.FC<Props> = ({ heat, phase, label }) => {
  const shards = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    x: 25 + ((i * 17) % 50),
    y: 18 + ((i * 23) % 58),
    r: (i * 37) % 360,
    s: 0.6 + ((i * 13) % 40) / 100,
  })), []);
  return (
    <div className="relative h-[420px] md:h-[520px] rounded-[2rem] overflow-hidden border border-amber-300/15 bg-black/35 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_68%,rgba(255,196,76,0.18),transparent_28%),radial-gradient(circle_at_50%_92%,rgba(255,70,0,0.28),transparent_32%)]" />
      <div className="absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2 w-[48%] aspect-square rounded-full border border-amber-200/15 bg-black/50 shadow-[0_0_80px_rgba(255,112,18,0.16)]" />
      <motion.div
        className="absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: `${130 + heat * 130}px`, height: `${130 + heat * 130}px`, background: 'radial-gradient(circle,#fff8cf 0%,#ffb11a 22%,#ff6517 44%,rgba(255,54,0,0.16) 70%,transparent 72%)' }}
        animate={{ scale: [0.96, 1.05, 0.96] }}
        transition={{ duration: 2.1 - heat * 0.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {shards.map((s) => (
        <motion.span key={s.x + '-' + s.y} className="absolute block w-1 h-4 rounded-full bg-amber-200/50" style={{ left: `${s.x}%`, top: `${s.y}%`, rotate: s.r }} animate={{ y: [0, -18 - heat * 35, 0], opacity: [0.18, 0.7, 0.1], scale: [s.s, s.s + 0.2, s.s] }} transition={{ duration: 1.8 + s.s, repeat: Infinity, ease: 'easeOut', delay: s.s }} />
      ))}
      <div className="absolute left-7 top-7 text-left">
        <div className="text-[10px] uppercase tracking-[0.32em] text-amber-200/45">{label || 'INNER FORGE'}</div>
        <div className="mt-2 text-sm text-amber-50/80">{phaseCopy[phase]}</div>
      </div>
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-amber-100/45">heat</div>
        <div className="mt-2 text-2xl font-serif text-amber-100">{Math.round(heat * 100)}°</div>
      </div>
    </div>
  );
};
