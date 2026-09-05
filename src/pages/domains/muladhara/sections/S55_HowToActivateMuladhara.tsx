import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const DOORS = [
  {
    id: 'tradition',
    label: 'Tradition',
    color: '#7f1d1d',
    borderColor: '#dc2626',
    content: `In classical Tantric and Yogic frameworks, Mūlādhāra is "activated" through specific practices: Mūla Bandha, Bīja mantra recitation (Laṃ), visualization of the Mūlādhāra yantra, and ultimately through Kuṇḍalinī awakening guided by a qualified teacher. These are disciplined, progressive practices — not passive wellness activities.`
  },
  {
    id: 'modern',
    label: 'Modern',
    color: '#1e3a5f',
    borderColor: '#3b82f6',
    content: `Modern spiritual wellness reinterprets Mūlādhāra as themes of grounding, safety, and embodiment. Practices promoted include walking barefoot, eating root vegetables, breathwork, and somatic body awareness. These may support wellbeing, but the claim that they "activate" or "balance" a chakra in the classical sense is a modern metaphorical application, not a traditional claim.`
  },
  {
    id: 'science',
    label: 'Science',
    color: '#14532d',
    borderColor: '#22c55e',
    content: `No peer-reviewed study has verified the existence of chakras as measurable physiological structures. Research into practices often associated with grounding (meditation, mindfulness, somatic therapy) shows benefits to nervous system regulation, anxiety, and wellbeing — but these benefits are not described scientifically as chakra activation. The mechanism is the practice itself, not a chakra system.`
  }
];

export const S55_HowToActivateMuladhara: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (inView) reachWorld(55); }, [inView, reachWorld]);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-black z-10 pointer-events-auto px-8 py-16">
      <h3 className="text-4xl font-serif text-white mb-4 text-center">How to Activate Mūlādhāra?</h3>
      <p className="text-slate-500 text-sm text-center max-w-md mb-16">Three completely honest answers. The answer depends on which framework you are asking from.</p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
        {DOORS.map(door => (
          <motion.div
            key={door.id}
            onClick={() => setOpen(open === door.id ? null : door.id)}
            whileHover={{ scale: 1.02 }}
            className="flex-1 border rounded-2xl p-8 cursor-pointer transition-all relative overflow-hidden"
            style={{ borderColor: open === door.id ? door.borderColor : 'rgba(255,255,255,0.05)', backgroundColor: open === door.id ? door.color + '20' : 'rgba(0,0,0,0.5)' }}
          >
            <h4 className="text-xl font-bold tracking-widest uppercase mb-4" style={{ color: door.borderColor }}>{door.label}</h4>
            <AnimatePresence>
              {open === door.id && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-slate-300 text-sm leading-relaxed">
                  {door.content}
                </motion.p>
              )}
            </AnimatePresence>
            {open !== door.id && <p className="text-slate-700 text-xs uppercase tracking-widest">Click to open</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};