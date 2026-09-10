import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BellOff, Clock3, Trash2, Reply } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const notifications = [
  ['09:12', 'Urgent?', 'team chat'],
  ['09:18', 'Sale ends today', 'store'],
  ['09:31', 'Can you look at this?', 'colleague'],
  ['09:47', '3 new mentions', 'social'],
];

export const DigitalHeatSection: React.FC = () => {
  const [mode, setMode] = useState<Record<number, string>>({});
  const count = Object.keys(mode).length;
  return (
    <WorldChrome number="38" eyebrow="DIGITAL BOUNDARIES" title="Not every notification deserves your fire." subtitle="Create distance between an incoming signal and your automatic response." image="agency" tone="crimson">
      <div className="relative min-h-[600px] rounded-[2rem] border border-orange-200/10 bg-black/45 p-6 md:p-10 overflow-hidden">
        <motion.div animate={{ opacity: .1 + count * .04 }} className="absolute -right-16 top-12 w-80 h-80 rounded-full bg-orange-500 blur-3xl" />
        <div className="relative z-10 space-y-3">
          {notifications.map(([time, text, source], i) => <motion.div key={i} layout className={`rounded-2xl border p-4 md:p-5 ${mode[i] ? 'border-amber-200/15 bg-amber-300/[.03]' : 'border-red-200/10 bg-red-400/[.03]'}`}><div className="flex items-center gap-4"><span className="font-mono text-[9px] text-white/25">{time}</span><div className="flex-1"><div className="text-white/70 text-sm">{text}</div><div className="text-[9px] uppercase tracking-[.25em] text-white/25 mt-1">{source}</div></div><span className="text-[9px] font-mono uppercase tracking-[.2em] text-orange-200/45">{mode[i] ?? 'incoming'}</span></div><div className="mt-4 flex flex-wrap gap-2"><button onClick={() => setMode(v => ({ ...v, [i]: 'muted' }))} className="px-3 py-2 rounded-lg border border-white/8 text-white/35 hover:text-white/65 text-[9px] uppercase tracking-[.22em] flex items-center gap-2"><BellOff size={12} /> mute</button><button onClick={() => setMode(v => ({ ...v, [i]: 'later' }))} className="px-3 py-2 rounded-lg border border-white/8 text-white/35 hover:text-white/65 text-[9px] uppercase tracking-[.22em] flex items-center gap-2"><Clock3 size={12} /> later</button><button onClick={() => setMode(v => ({ ...v, [i]: 'removed' }))} className="px-3 py-2 rounded-lg border border-white/8 text-white/35 hover:text-white/65 text-[9px] uppercase tracking-[.22em] flex items-center gap-2"><Trash2 size={12} /> remove</button><button onClick={() => setMode(v => ({ ...v, [i]: 'replying' }))} className="px-3 py-2 rounded-lg border border-amber-200/15 text-amber-100/55 hover:text-amber-100 text-[9px] uppercase tracking-[.22em] flex items-center gap-2"><Reply size={12} /> respond</button></div></motion.div>)}
        </div>
      </div>
    </WorldChrome>
  );
};
