import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

export const HeatIsInformationSection: React.FC = () => {
  const [mode, setMode] = useState<'signal' | 'story' | 'choice'>('signal');
  const data = {
    signal: ['SIGNAL', 'Something matters. The body gets louder before the mind has words.', 'Notice the heat without turning it into a verdict.'],
    story: ['STORY', 'The mind explains what happened. The explanation may be useful—or incomplete.', 'Ask: what did I add to the event?'],
    choice: ['CHOICE', 'The feeling can remain real without dictating the next action.', 'Agency begins in the space between heat and movement.'],
  } as const;
  return <WorldFrame eyebrow="15 — HEAT" title="Anger is heat, not a verdict." copy="A Maṇipūra experience can begin with heat. The work is learning what the heat is telling you before you decide what it means." scene="forge">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-3">
        {(['signal','story','choice'] as const).map(key => <button key={key} onClick={() => setMode(key)} className={`relative rounded-3xl border p-6 text-left transition-all ${mode === key ? 'border-amber-300/45 bg-amber-200/8 shadow-[0_0_50px_rgba(255,160,40,.08)]' : 'border-amber-100/10 bg-black/20'}`}>
          <div className="text-[10px] tracking-[.25em] uppercase text-amber-200/40">{key === 'signal' ? '01' : key === 'story' ? '02' : '03'}</div>
          <div className="mt-3 font-serif text-2xl text-amber-50">{data[key][0]}</div>
          <div className="mt-3 text-sm leading-relaxed text-amber-100/55">{data[key][1]}</div>
        </button>)}
      </div>
      <motion.div key={mode} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-[2rem] border border-amber-100/10 bg-black/25 p-7 text-center">
        <div className="text-[10px] tracking-[.3em] uppercase text-amber-200/40">{data[mode][0]}</div>
        <div className="mt-3 text-lg md:text-xl text-amber-50/80">{data[mode][2]}</div>
      </motion.div>
    </div>
  </WorldFrame>;
};
