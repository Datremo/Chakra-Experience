import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Check, RotateCcw } from 'lucide-react';
import { CinematicBackdrop } from '../components/CinematicBackdrop';
import { WorldChrome } from '../components/WorldChrome';

export const PerfectionismForgeSection: React.FC = () => {
  const [heat, setHeat] = useState(42);
  const [strikes, setStrikes] = useState(0);
  const quality = Math.max(0, Math.min(100, 34 + strikes * 10 - Math.max(0, heat - 72) * 1.7));
  const damaged = heat > 88;
  return (
    <WorldChrome number="32" eyebrow="PRESSURE / PERFECTION" title="When care becomes heat." subtitle="Refinement has a limit. Past it, more pressure can stop improving the thing you care about." image="forge" tone="crimson">
      <div className="relative min-h-[590px] rounded-[2rem] border border-orange-200/10 bg-black/45 overflow-hidden p-6 md:p-10">
        <CinematicBackdrop image="forge" tone="crimson" vignette={0.96} />
        <div className="relative z-10 grid md:grid-cols-[1fr_1fr] gap-8 items-center h-full">
          <div className="text-center">
            <motion.div animate={{ rotate: strikes * 2, scale: damaged ? [1, .96, 1] : [1, 1.02, 1] }} transition={{ duration: .7 }} className={`mx-auto w-56 h-40 rounded-[45%] border ${damaged ? 'border-red-300/50 bg-red-400/10' : 'border-amber-200/25 bg-amber-300/[.06]'} flex items-center justify-center shadow-[0_0_70px_rgba(245,158,11,.08)]`}>
              <div className="w-32 h-16 rounded-full bg-[linear-gradient(90deg,rgba(80,30,10,.9),rgba(255,159,46,.85),rgba(90,23,5,.9))] shadow-[0_0_30px_rgba(255,135,20,.5)]" />
            </motion.div>
            <div className="mt-7 text-[10px] font-mono tracking-[.35em] uppercase text-orange-200/45">WORKPIECE · {Math.round(quality)}% usable</div>
            <div className="mt-5 h-px bg-white/10 relative"><div className="absolute inset-y-0 left-0 bg-amber-300/60" style={{ width: `${Math.max(0, quality)}%` }} /></div>
          </div>
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono tracking-[.28em] uppercase text-amber-100/45 mb-3"><span>Heat</span><span>{heat}</span></div>
            <input type="range" min="0" max="100" value={heat} onChange={(e) => setHeat(Number(e.target.value))} className="w-full accent-orange-400" />
            <p className="mt-7 text-white/55 leading-7">You can increase the heat, but the lesson is not “more is better.” Watch what happens at the edge.</p>
            <button onClick={() => setStrikes(v => v + 1)} className="mt-8 w-full rounded-2xl border border-orange-300/20 bg-orange-300/[.06] hover:bg-orange-300/[.1] py-5 text-orange-100/85 uppercase tracking-[.25em] text-xs transition flex items-center justify-center gap-3"><Hammer size={15} /> Strike the metal</button>
            <div className="mt-5 flex gap-3">
              <button onClick={() => { setHeat(42); setStrikes(0); }} className="px-4 py-3 rounded-xl border border-white/10 text-white/45 hover:text-white/70 transition"><RotateCcw size={14} /></button>
              <div className="flex-1 p-3 rounded-xl border border-white/5 bg-white/[.02] flex items-center gap-3 text-xs text-white/45">{damaged ? 'The edge is overheating.' : quality > 70 ? 'Useful refinement.' : 'Still becoming workable.'}</div>
            </div>
          </div>
        </div>
        {damaged && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 text-red-200/70 text-xs uppercase tracking-[.25em]"><Check size={14} /> Know when to stop</motion.div>}
      </div>
    </WorldChrome>
  );
};
