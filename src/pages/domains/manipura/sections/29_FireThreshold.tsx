import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

export const FireThresholdSection: React.FC = () => {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 450);
    return () => clearTimeout(t);
  }, []);

  return (
    <WorldFrame
      eyebrow="THRESHOLD"
      title="A fire is potential. Direction makes it power."
      copy="Before we work with anger, discipline, boundaries and action, pause at the threshold. The next rooms are about what you do with heat—not how much of it you can create."
      scene="forge"
    >
      <div className="relative mx-auto max-w-5xl h-[420px] rounded-[2rem] border border-amber-100/10 bg-black/25 overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute h-64 w-64 rounded-full"
          initial={{ scale: 0.35, opacity: 0.05 }}
          animate={{ scale: entered ? 1 : 0.55, opacity: entered ? 0.72 : 0.15 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          style={{ background: 'radial-gradient(circle,#fff5c5 0%,#ffc45c 22%,rgba(255,92,16,.3) 54%,transparent 72%)' }}
        />
        {['HEAT','ATTENTION','CHOICE','ACTION'].map((word, i) => (
          <motion.div
            key={word}
            className="absolute font-sans text-[10px] tracking-[0.35em] uppercase text-amber-100/40"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: entered ? 1 : 0, y: entered ? 0 : 14 }}
            transition={{ delay: 0.7 + i * 0.18, duration: 0.6 }}
            style={{ left: `${18 + i * 22}%`, top: `${20 + (i % 2) * 56}%` }}
          >
            {word}
          </motion.div>
        ))}
        <div className="relative z-10 text-center max-w-sm">
          <div className="text-[10px] tracking-[0.3em] uppercase text-amber-100/35">the threshold</div>
          <div className="mt-5 font-serif text-3xl md:text-5xl text-amber-50 leading-tight">Use the fire. Don’t become the fire.</div>
        </div>
      </div>
    </WorldFrame>
  );
};
