import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type TruthBucket = 'TRADITION' | 'MODERN' | 'SYMBOLIC' | 'EVIDENCE' | 'UNSUPPORTED';

type Claim = { id: string; text: string; answer: TruthBucket; note: string };

const claims: Claim[] = [
  { id: 'yellow', text: 'Yellow is the chakra’s scientifically measurable frequency.', answer: 'UNSUPPORTED', note: 'Colour correspondences are modern symbolic conventions; this is not an established scientific measurement.' },
  { id: 'lotus', text: 'Maṇipūra is depicted with a ten-petalled lotus in the chosen classical map.', answer: 'TRADITION', note: 'This belongs to the textual/traditional representation being explored here.' },
  { id: 'will', text: 'Modern chakra culture often maps Maṇipūra onto confidence, agency and will.', answer: 'MODERN', note: 'This is a contemporary interpretive layer, not something to collapse into the whole historical tradition.' },
  { id: 'triangle', text: 'The fire triangle is a symbolic geometric element of the traditional mandala.', answer: 'TRADITION', note: 'The geometry belongs to the traditional visualization under discussion.' },
  { id: 'breath', text: 'A calming breath practice can influence subjective arousal and attention.', answer: 'EVIDENCE', note: 'Breath and attention research can inform practice; it does not prove a chakra as an anatomical object.' },
  { id: 'activation', text: 'A wearable can directly measure “Maṇipūra activation.”', answer: 'UNSUPPORTED', note: 'There is no accepted clinical measurement that turns a chakra into a device-readable activation percentage.' },
];

const bucketOrder: TruthBucket[] = ['TRADITION','MODERN','SYMBOLIC','EVIDENCE','UNSUPPORTED'];

export const TruthEngine: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<TruthBucket | null>(null);
  const [score, setScore] = useState(0);
  const claim = claims[current];
  const done = current >= claims.length;
  const title = useMemo(() => done ? 'The fire can hold nuance.' : 'Where does this claim belong?', [done]);

  const choose = (bucket: TruthBucket) => {
    if (selected || done) return;
    setSelected(bucket);
    if (bucket === claim.answer) setScore(s => s + 1);
    setTimeout(() => { setSelected(null); setCurrent(v => v + 1); }, 950);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-5">
        <div className="relative min-h-[390px] rounded-[2rem] border border-amber-200/12 bg-black/35 backdrop-blur-md p-7 md:p-10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,170,46,.11),transparent_48%)]" />
          {!done ? (
            <AnimatePresence mode="wait">
              <motion.div key={claim.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="relative z-10 max-w-xl text-center">
                <div className="text-[10px] uppercase tracking-[0.3em] text-amber-200/45 mb-7">claim {current + 1} / {claims.length}</div>
                <p className="font-serif text-2xl md:text-4xl text-amber-50 leading-tight">“{claim.text}”</p>
                {selected && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-7 text-sm text-amber-100/65 leading-relaxed">{claim.note}</motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="relative z-10 text-center">
              <div className="text-5xl font-serif text-amber-100">{score}/{claims.length}</div>
              <p className="mt-4 text-amber-100/65 max-w-md">Curiosity gets stronger when tradition, symbolism, modern interpretation and evidence are allowed to remain distinct.</p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 content-center">
          {bucketOrder.map(bucket => (
            <button key={bucket} onClick={() => choose(bucket)} disabled={Boolean(selected) || done} className={`relative rounded-2xl border px-5 py-4 text-left transition-all ${selected === bucket ? (bucket === claim.answer ? 'border-emerald-300/50 bg-emerald-300/10' : 'border-red-300/40 bg-red-300/10') : 'border-amber-100/10 bg-black/30 hover:bg-amber-100/5 hover:border-amber-100/20'}`}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-amber-100/50">{bucket}</div>
              <div className="mt-1 text-sm text-amber-50/75">Place it here</div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 text-center text-xs text-amber-100/35">{title}</div>
    </div>
  );
};
