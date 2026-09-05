import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S54_MulaBandha: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (inView) reachWorld(54); }, [inView, reachWorld]);
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-black z-10 pointer-events-auto px-8">
      <div className="max-w-xl w-full">
        <p className="text-slate-600 text-xs tracking-widest uppercase mb-4 text-center">Advanced Technique</p>
        <h3 className="text-5xl font-serif text-white mb-8 text-center">Mūla Bandha</h3>

        <div className="bg-amber-950/20 border border-amber-900/40 rounded-xl p-6 mb-8">
          <p className="text-amber-600 font-bold text-sm mb-3 uppercase tracking-widest">Important Context</p>
          <p className="text-amber-800/80 text-sm leading-relaxed">
            Mūla Bandha is an advanced subtle-body practice from classical Haṭha Yoga. It is traditionally taught by a qualified teacher within a systematic practice framework. It is not a beginner technique or a quick fix.
          </p>
        </div>

        <div className="space-y-6 mb-10">
          <div className="border-l-2 border-slate-800 pl-6">
            <p className="text-slate-300 font-bold mb-2">What the tradition says</p>
            <p className="text-slate-500 text-sm leading-relaxed">Mūla Bandha involves contraction at the root of the perineum (Mūlādhāra). Classical texts describe it as a technique for controlling Apāna Vāyu (the downward breath current) and supporting the awakening of Kuṇḍalinī in advanced practice.</p>
          </div>
          <div className="border-l-2 border-slate-800 pl-6">
            <p className="text-slate-300 font-bold mb-2">What it is not</p>
            <p className="text-slate-500 text-sm leading-relaxed">It is not a pelvic floor exercise identical to Kegel exercises. It is not a beginner meditation. The physical resemblance to modern exercises does not make them equivalent practices.</p>
          </div>
        </div>

        {!acknowledged ? (
          <button onClick={() => setAcknowledged(true)}
            className="w-full py-4 border border-slate-800 text-slate-400 text-xs tracking-widest uppercase rounded-xl hover:border-slate-600 hover:text-slate-200 transition-all">
            I understand — show me the classical description
          </button>
        ) : (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-stone-900/50 border border-stone-800 rounded-xl p-6">
            <p className="text-xs text-stone-600 font-mono leading-relaxed italic">
              "Contract the perineum firmly, draw Apāna upward, and perform Jālandhara Bandha. This is called the Mūla Bandha which destroys old age and death." — Haṭhayoga Pradīpikā, 3.61 (traditional text)
            </p>
            <p className="text-xs text-stone-700 mt-4">Note: Do not practice advanced Bandhas without proper instruction from a qualified Haṭhayoga teacher.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};