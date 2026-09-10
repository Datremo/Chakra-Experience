import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Wind, Droplets, RotateCcw } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const levers = [
  { id: 'rest', label: 'Rest', icon: Moon },
  { id: 'space', label: 'Space', icon: Wind },
  { id: 'reset', label: 'Reset', icon: RotateCcw },
  { id: 'water', label: 'Hydrate', icon: Droplets },
];

export const RecoveryEmberSection: React.FC = () => {
  const [recovery, setRecovery] = useState(18);
  useEffect(() => { const t = window.setInterval(() => setRecovery(v => Math.min(100, v + 0.7)), 1200); return () => window.clearInterval(t); }, []);
  return (
    <WorldChrome number="40" eyebrow="RECOVERY / SUSTAINABILITY" title="The fire needs an ember." subtitle="Recovery is not the prize you earn after productivity. It is part of the system that makes effort possible." image="sun" tone="gold">
      <div className="relative min-h-[600px] rounded-[2rem] border border-amber-200/10 bg-black/45 p-6 md:p-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,160,30,.12),transparent_45%)]" />
        <div className="relative z-10 grid md:grid-cols-[.9fr_1.1fr] gap-10 items-center h-full">
          <div className="flex flex-col items-center">
            <motion.div animate={{ scale: .7 + recovery / 330, boxShadow: `0 0 ${10 + recovery / 2}px rgba(245,158,11,${.1 + recovery / 250})` }} className="w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(255,247,218,.95),rgba(255,164,35,.72)_24%,rgba(191,52,7,.17)_65%,transparent_72%)]" />
            <div className="mt-7 text-4xl font-serif text-amber-50">{Math.round(recovery)}%</div>
            <div className="mt-2 text-[9px] font-mono tracking-[.35em] text-white/25 uppercase">ember recovered</div>
          </div>
          <div>
            <p className="text-white/50 leading-7 mb-7">Choose a recovery action. The flame does not need to blaze to remain alive.</p>
            <div className="grid grid-cols-2 gap-3">{levers.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => setRecovery(v => Math.min(100, v + (id === 'rest' ? 18 : id === 'space' ? 12 : id === 'water' ? 8 : 15)))} className="rounded-2xl border border-white/8 bg-white/[.02] p-5 text-left hover:border-amber-200/20 transition"><Icon size={16} className="text-amber-200/55 mb-4"/><div className="font-serif text-lg text-white/75">{label}</div><div className="mt-1 text-[9px] uppercase tracking-[.23em] text-white/25">add recovery</div></button>)}</div>
            <button onClick={() => setRecovery(18)} className="mt-7 text-[10px] uppercase tracking-[.25em] text-white/25 hover:text-white/55">Reset ember</button>
          </div>
        </div>
      </div>
    </WorldChrome>
  );
};
