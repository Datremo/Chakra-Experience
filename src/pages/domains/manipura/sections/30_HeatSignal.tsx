import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Eye, ArrowRight } from 'lucide-react';
import { CinematicBackdrop } from '../components/CinematicBackdrop';
import { WorldChrome } from '../components/WorldChrome';

const states = [
  { id: 'signal', label: 'SIGNAL', title: 'Something matters.', copy: 'Anger can be information: a boundary, value, need, or expectation has been touched.', icon: Flame },
  { id: 'story', label: 'STORY', title: 'Then the mind interprets it.', copy: 'The event is real. The meaning you add can be accurate, incomplete, or wrong.', icon: Eye },
  { id: 'choice', label: 'CHOICE', title: 'Heat is not a verdict.', copy: 'The felt surge can arrive before the decision. The practice is noticing the gap.', icon: ArrowRight },
] as const;

export const HeatSignalSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const angle = useMemo(() => active * 120, [active]);
  return (
    <WorldChrome number="30" eyebrow="ANGER / DISCERNMENT" title="Heat is a signal." subtitle="Before anger becomes an instruction, notice what it is carrying. Then decide what deserves to move." image="agency" tone="crimson">
      <div className="relative min-h-[560px] rounded-[2rem] border border-orange-300/10 bg-black/35 backdrop-blur-sm overflow-hidden p-6 md:p-10">
        <motion.div animate={{ rotate: angle }} transition={{ duration: .8 }} className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-orange-400/10" />
        <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.8, repeat: Infinity }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative z-10 grid md:grid-cols-[1fr_.9fr] gap-8 h-full items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[.35em] text-orange-300/55 uppercase mb-5">The heat sequence</p>
            <div className="space-y-3">
              {states.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button key={s.id} onClick={() => setActive(i)} className={`w-full text-left rounded-2xl border p-5 transition-all duration-500 ${active === i ? 'border-orange-300/40 bg-orange-400/[.08]' : 'border-white/5 bg-white/[.02] hover:border-orange-300/20'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 w-9 h-9 rounded-full flex items-center justify-center border ${active === i ? 'border-orange-300/40 text-orange-200' : 'border-white/10 text-white/30'}`}><Icon size={15} /></div>
                      <div>
                        <div className="font-mono text-[10px] tracking-[.3em] text-orange-300/50 mb-1">0{i + 1} · {s.label}</div>
                        <div className="font-serif text-xl text-white/90">{s.title}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={states[active].id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: .35 }} className="flex flex-col items-center text-center">
              <div className="relative w-60 h-60 flex items-center justify-center mb-8">
                <motion.div animate={{ rotate: active === 1 ? -360 : 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} className="absolute inset-2 rounded-full border border-dashed border-orange-300/20" />
                <motion.div animate={{ scale: active === 2 ? [1, .92, 1] : [1, 1.08, 1] }} transition={{ duration: active === 2 ? 3 : 1.8, repeat: Infinity }} className="w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,248,220,1),rgba(255,153,32,.8)_24%,rgba(210,49,10,.22)_65%,transparent_72%)] blur-[1px]" />
                <span className="absolute bottom-2 font-mono text-[9px] tracking-[.35em] uppercase text-orange-100/45">{states[active].label}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-amber-50 mb-4">{states[active].title}</h3>
              <p className="max-w-md text-white/55 leading-7">{states[active].copy}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </WorldChrome>
  );
};
