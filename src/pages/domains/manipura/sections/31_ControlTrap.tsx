import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Move, Sparkles } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

export const ControlTrapSection: React.FC = () => {
  const [pressure, setPressure] = useState(68);
  const [released, setReleased] = useState(false);
  const orbit = useMemo(() => Array.from({ length: 7 }, (_, i) => i), []);
  const label = pressure > 72 ? 'CONTROL' : pressure < 32 ? 'COLLAPSE' : 'AGENCY';
  return (
    <WorldChrome number="31" eyebrow="POWER / AGENCY" title="The control trap." subtitle="Control tries to guarantee the outcome. Agency chooses the move you can actually own." image="agency" tone="gold" grid>
      <div className="relative min-h-[600px] rounded-[2rem] border border-amber-200/10 bg-black/35 overflow-hidden p-6 md:p-10">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,175,70,.12),transparent_46%)]" />
        {orbit.map((i) => {
          const a = (i / orbit.length) * Math.PI * 2;
          const x = Math.cos(a) * (160 + pressure * 0.45);
          const y = Math.sin(a) * (120 + pressure * 0.32);
          return <motion.div key={i} animate={{ x, y, rotate: released ? 0 : 25 * Math.sin(i) }} transition={{ duration: .7 }} className="absolute left-1/2 top-1/2 w-16 h-16 rounded-full border border-amber-300/10 bg-amber-400/[.04] flex items-center justify-center" style={{ marginLeft: -32, marginTop: -32 }}><Sparkles size={14} className="text-amber-200/30" /></motion.div>;
        })}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 mb-8"><Lock size={15} className={label === 'CONTROL' ? 'text-orange-300' : 'text-white/20'} /><span className="font-mono text-[10px] tracking-[.35em] text-amber-100/45">OUTCOME PRESSURE</span><Unlock size={15} className={label === 'AGENCY' ? 'text-amber-300' : 'text-white/20'} /></div>
          <motion.div animate={{ scale: 0.78 + pressure / 350 }} className="w-44 h-44 rounded-full border border-amber-200/20 bg-black/50 flex items-center justify-center shadow-[0_0_80px_rgba(245,158,11,.08)]">
            <div className="w-20 h-20 rounded-full bg-[radial-gradient(circle,rgba(255,247,220,.9),rgba(255,151,22,.65)_25%,rgba(200,55,10,.12)_72%,transparent_74%)]" />
          </motion.div>
          <div className="mt-8 text-amber-100 font-mono tracking-[.4em] text-sm">{label}</div>
          <p className="mt-4 max-w-lg text-white/45 leading-7">{label === 'CONTROL' ? 'The room is getting hotter because you are trying to move what is not yours to move.' : label === 'COLLAPSE' ? 'You can stop gripping without disappearing. Agency is not passivity.' : 'The heat steadies when the target becomes your own action.'}</p>
          <input aria-label="Outcome pressure" type="range" min="0" max="100" value={pressure} onChange={(e) => { setPressure(Number(e.target.value)); setReleased(false); }} className="mt-10 w-full max-w-md accent-amber-400" />
          <button onClick={() => setReleased(v => !v)} className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-amber-300/20 bg-amber-400/[.05] text-amber-100/80 text-xs uppercase tracking-[.25em] hover:bg-amber-400/[.1] transition"> <Move size={14} /> {released ? 'Release the room' : 'Try letting go'} </button>
        </div>
      </div>
    </WorldChrome>
  );
};
