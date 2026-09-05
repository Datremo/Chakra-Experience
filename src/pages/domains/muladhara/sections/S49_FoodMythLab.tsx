import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const CLAIMS = [
  { claim: 'Red foods activate Mūlādhāra', category: 'Modern Symbolic', explanation: 'Red = root chakra color is a modern New Age association. No classical text makes this nutritional claim.' },
  { claim: 'Pink Himalayan salt opens the root', category: 'Unsupported', explanation: 'No scientific or classical tradition supports this. All salt contains sodium chloride regardless of color.' },
  { claim: 'Root vegetables are grounding foods', category: 'Modern Metaphor', explanation: 'This is a symbolic/contemplative association used in modern wellness, not a clinical or classical claim.' },
  { claim: 'Eating warm cooked food supports stability', category: 'Āyurveda', explanation: 'Āyurvedic tradition (not Tantric chakra texts) recommends warm, cooked food for Vāta-related instability. Different tradition entirely.' },
  { claim: 'There is no scientifically verified chakra diet', category: 'Evidence', explanation: 'True. No randomized controlled trial has verified that eating any food activates or balances a chakra.' },
];

const COLORS: Record<string, string> = {
  'Modern Symbolic': '#7c3aed',
  'Unsupported': '#dc2626',
  'Modern Metaphor': '#b45309',
  'Āyurveda': '#16a34a',
  'Evidence': '#2563eb'
};

export const S49_FoodMythLab: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (inView) reachWorld(49); }, [inView, reachWorld]);
  const [sorted, setSorted] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState<number | null>(null);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-black z-10 pointer-events-auto px-8 py-16">
      <h3 className="text-4xl font-serif text-white mb-4 text-center">Food Myth Lab</h3>
      <p className="text-slate-500 text-sm text-center max-w-md mb-12">Click each claim to reveal its correct classification and evidence level.</p>

      <div className="space-y-3 w-full max-w-xl">
        {CLAIMS.map((c, i) => (
          <motion.div key={i} layout>
            <button
              onClick={() => { setActive(active === i ? null : i); setSorted(s => ({...s, [i]: true})); }}
              className="w-full p-4 rounded-xl border text-left transition-all"
              style={{ borderColor: sorted[i] ? COLORS[c.category] + '60' : 'rgba(255,255,255,0.05)', backgroundColor: sorted[i] ? COLORS[c.category] + '15' : 'rgba(255,255,255,0.02)' }}
            >
              <div className="flex items-center justify-between">
                <p className="text-slate-200 text-sm">{c.claim}</p>
                {sorted[i] && <span className="text-xs px-2 py-0.5 rounded-full font-bold whitespace-nowrap ml-4" style={{ backgroundColor: COLORS[c.category] + '30', color: COLORS[c.category] }}>{c.category}</span>}
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-slate-400 text-xs mt-3 leading-relaxed">
                    {c.explanation}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};