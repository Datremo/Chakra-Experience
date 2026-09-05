import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const STATES = [
  { id: 'under', label: 'Under-Supported', color: '#7f1d1d', symptoms: ['Anxiety, fear, instability', 'Difficulty completing things', 'Feeling ungrounded or spacey', 'Chronic financial worry', 'Difficulty sleeping'], actions: ['Establish one consistent routine', 'Walk barefoot on grass or earth', 'Eat warm, cooked, nourishing meals', 'Reduce stimulation before sleep'] },
  { id: 'grounded', label: 'Grounded', color: '#166534', symptoms: ['Feeling stable and present', 'Consistent energy through the day', 'Clear boundaries with others', 'Meeting basic needs reliably', 'Comfortable in the body'], actions: ['Maintain your existing practices', 'Deepen one chosen routine', 'Support others in finding stability', 'Continue conscious nourishment'] },
  { id: 'over', label: 'Over-Anchored', color: '#1e3a5f', symptoms: ['Resistance to change or growth', 'Excessive material accumulation', 'Clinging to familiar but unhealthy patterns', 'Fear of movement, risk, or expansion'], actions: ['Introduce one gentle new practice', 'Explore creative expression', 'Release one object or habit intentionally', 'Practice Svādhiṣṭhāna themes (flow)'] }
];

export const S45_TheRootSpectrum: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (inView) reachWorld(45); }, [inView, reachWorld]);
  const [active, setActive] = useState(1);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-black z-10 pointer-events-auto px-8 py-16">
      <h3 className="text-4xl font-serif text-white mb-4 text-center">The Root Spectrum</h3>
      <p className="text-slate-500 text-sm text-center max-w-md mb-12">A contemporary reflective framework — not a diagnostic tool. Select your felt sense.</p>

      <div className="flex gap-3 mb-12">
        {STATES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className="px-5 py-3 rounded-full text-xs tracking-widest uppercase border transition-all"
            style={{ borderColor: active === i ? s.color : 'rgba(255,255,255,0.05)', backgroundColor: active === i ? s.color + '30' : 'transparent', color: active === i ? 'white' : 'rgba(255,255,255,0.3)' }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">You may notice...</p>
            <ul className="space-y-2">
              {STATES[active].symptoms.map((s, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2"><span style={{ color: STATES[active].color }}>·</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Practical actions</p>
            <ul className="space-y-2">
              {STATES[active].actions.map((a, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2"><span className="text-emerald-700">→</span>{a}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};