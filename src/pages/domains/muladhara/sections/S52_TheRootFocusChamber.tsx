import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const PRACTICES = [
  { id: 'mandala', name: 'Visual', icon: '◎', desc: 'Focus on the Mūlādhāra mandala. Let the geometry fill your awareness.' },
  { id: 'breath', name: 'Breath', icon: '○', desc: 'Slow the breath. 4 counts in. 6 counts out. Feel weight on each exhale.' },
  { id: 'mantra', name: 'Mantra लं', icon: 'लं', desc: 'Repeat LAM silently. Once per breath cycle.' },
  { id: 'body', name: 'Body', icon: '⬇', desc: 'Bring attention to the base of the spine. Notice warmth or pressure.' },
  { id: 'earth', name: 'Earth', icon: '▣', desc: 'Feel the floor, chair, ground. Let their support be your object of meditation.' }
];

const DURATIONS = [60, 180, 300];

export const S52_TheRootFocusChamber: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (inView) reachWorld(52); }, [inView, reachWorld]);

  const [practice, setPractice] = useState(PRACTICES[0]);
  const [duration, setDuration] = useState(60);
  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const start = () => { setActive(true); setTimeLeft(duration); };
  const stop = () => { setActive(false); setTimeLeft(duration); };

  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => { setTimeLeft(tl => { if (tl <= 1) { clearInterval(t); setActive(false); return 0; } return tl - 1; }); }, 1000);
    return () => clearInterval(t);
  }, [active]);

  const fmt = (s: number) => `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`;

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-stone-950 z-10 pointer-events-auto px-8 py-16">
      <h3 className="text-4xl font-serif text-stone-200 mb-4 text-center">Root Focus Chamber</h3>
      <p className="text-stone-600 text-sm text-center max-w-md mb-12">Choose a practice object and duration. This is genuine meditation — not instruction reading.</p>

      {!active ? (
        <>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {PRACTICES.map(p => (
              <button key={p.id} onClick={() => setPractice(p)}
                className={`px-5 py-3 rounded-full border text-sm transition-all ${practice.id === p.id ? 'bg-red-950/50 border-red-800 text-white' : 'border-stone-800 text-stone-600 hover:border-stone-600'}`}
              >
                <span className="mr-2">{p.icon}</span>{p.name}
              </button>
            ))}
          </div>

          <div className="flex gap-3 mb-10">
            {DURATIONS.map(d => (
              <button key={d} onClick={() => setDuration(d)}
                className={`px-4 py-2 rounded-full border text-xs tracking-widest uppercase transition-all ${duration === d ? 'bg-stone-800 border-stone-600 text-white' : 'border-stone-900 text-stone-700 hover:border-stone-700'}`}
              >
                {d/60} min
              </button>
            ))}
          </div>

          <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6 max-w-md text-center mb-8">
            <p className="text-stone-300 text-sm leading-relaxed">{practice.desc}</p>
          </div>

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={start}
            className="px-12 py-4 border border-red-900 text-red-300 text-sm tracking-widest uppercase rounded-full hover:bg-red-950/30 transition-all">
            Begin Practice
          </motion.button>
        </>
      ) : (
        <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
          <motion.div className="text-8xl mb-8" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity }}>{practice.icon}</motion.div>
          <p className="text-stone-400 text-sm mb-8 text-center max-w-xs leading-relaxed">{practice.desc}</p>
          <p className="text-6xl font-serif text-stone-300 mb-8 tabular-nums">{fmt(timeLeft)}</p>
          {timeLeft === 0
            ? <p className="text-stone-400 text-lg font-serif">Practice complete. Rest for a moment.</p>
            : <button onClick={stop} className="text-xs text-stone-700 tracking-widest uppercase border-b border-stone-800 pb-1 hover:text-stone-500">End early</button>
          }
        </motion.div>
      )}
    </div>
  );
};