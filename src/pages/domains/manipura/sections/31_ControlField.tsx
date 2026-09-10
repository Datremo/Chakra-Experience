import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';
import { useManipuraJourney } from '../state/ManipuraJourneyContext';

export const ControlFieldSection: React.FC = () => {
  const { setMetric } = useManipuraJourney();
  const ref = useRef<HTMLDivElement>(null);
  const [force, setForce] = useState(0.4);
  useEffect(() => { setMetric('agency', 1 - Math.abs(force - 0.56) * 1.2); }, [force, setMetric]);

  const onPointer = (e: React.PointerEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const next = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setForce(next);
  };
  return <WorldFrame eyebrow="16 — AGENCY" title="You cannot command what is not yours." copy="Try to move the room. Notice what happens when effort is spent on outcomes you cannot own." scene="human">
    <div ref={ref} onPointerMove={onPointer} className="relative h-[460px] rounded-[2rem] border border-amber-100/10 bg-black/30 overflow-hidden cursor-crosshair touch-none">
      {[0,1,2,3,4].map(i => <motion.div key={i} className="absolute rounded-full border border-amber-100/10" style={{ width: 80 + i*65, height: 80 + i*65, left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} animate={{ x: (force - .5) * (40 + i*12), rotate: (force - .5) * (i%2 ? 20 : -20) }} transition={{ type: 'spring', stiffness: 50, damping: 16 }} />)}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-[10px] tracking-[.3em] uppercase text-amber-200/35">your control</div>
        <div className="mt-2 font-serif text-4xl text-amber-50">{Math.round(force*100)}%</div>
      </div>
      <div className="absolute left-5 bottom-5 max-w-xs text-left text-xs leading-relaxed text-amber-100/40">Move the field. The centre is yours; the outer rings are not.</div>
    </div>
  </WorldFrame>;
};
