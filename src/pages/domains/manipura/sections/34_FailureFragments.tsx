import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, Sparkles } from 'lucide-react';
import { WorldChrome } from '../components/WorldChrome';

const pieces = ['lesson', 'method', 'contact', 'timing', 'courage', 'data'];

export const FailureFragmentsSection: React.FC = () => {
  const [placed, setPlaced] = useState<string[]>([]);
  const complete = placed.length === pieces.length;
  return (
    <WorldChrome number="34" eyebrow="FAILURE / REVISION" title="Break it. Keep the material." subtitle="Failure is an event. The usable part is what you learn, change, and carry into the next attempt." image="forge" tone="ember">
      <div className="relative min-h-[600px] rounded-[2rem] border border-orange-200/10 bg-black/35 p-6 md:p-10 overflow-hidden">
        <div className="relative h-full grid md:grid-cols-[.9fr_1.1fr] gap-8 items-center">
          <div className="relative h-[380px]">
            {pieces.map((p, i) => <motion.button key={p} drag dragSnapToOrigin={!placed.includes(p)} onDragEnd={(e, info) => { if (Math.abs(info.point.x) > 100 || Math.abs(info.point.y) > 100) setPlaced(v => v.includes(p) ? v : [...v, p]); }} className={`absolute w-28 h-20 rounded-xl border text-xs uppercase tracking-[.2em] ${placed.includes(p) ? 'border-amber-300/35 bg-amber-300/10 text-amber-100/70' : 'border-white/10 bg-white/[.03] text-white/45 cursor-grab active:cursor-grabbing'}`} style={{ left: `${15 + (i * 13) % 68}%`, top: `${10 + (i * 31) % 68}%` }}>{p}</motion.button>)}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-44 h-44 rounded-full border border-dashed border-amber-300/12" /><span className="absolute font-mono text-[9px] uppercase tracking-[.35em] text-white/20">rebuild</span></div>
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-[.32em] uppercase text-orange-200/45 mb-4">Try → learn → adjust</div>
            <h3 className="font-serif text-3xl text-amber-50 mb-5">Not every piece needs to survive.</h3>
            <p className="text-white/50 leading-7">Drag the fragments into the reconstruction field. Notice how failure stops being a verdict when you can still use what it taught you.</p>
            <div className="mt-8 h-2 rounded-full bg-white/5 overflow-hidden"><motion.div animate={{ width: `${(placed.length / pieces.length) * 100}%` }} className="h-full bg-gradient-to-r from-orange-500/60 to-amber-200/80" /></div>
            <div className="mt-3 text-[10px] uppercase tracking-[.25em] text-white/25">{placed.length}/{pieces.length} usable fragments</div>
            <button onClick={() => setPlaced([])} className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[.24em] text-orange-200/50 hover:text-orange-100"><RotateCw size={13} /> Break & rebuild</button>
            {complete && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-7 flex items-center gap-3 text-amber-200"><Sparkles size={16} /> The next attempt has new material.</motion.div>}
          </div>
        </div>
      </div>
    </WorldChrome>
  );
};
