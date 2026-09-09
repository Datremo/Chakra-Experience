import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

const WISDOM = [
  "We pull away because we confuse vulnerability with weakness. By withdrawing, we construct artificial safety at the cost of genuine connection. The current needs two shores to flow.",
  "Enmeshment happens when we seek external validation to soothe internal emptiness \u2014 trying to merge so completely that the fear of abandonment is silenced. But two flames merged become smoke.",
  "Boundaries are the banks of the river. Without them, water floods and disperses. True intimacy requires two distinct people holding space for the current to flow freely between them.",
];

export const RelationshipsSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [distance, setDistance] = useState(200);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const distFromCenter = Math.abs(clientX - rect.left - rect.width / 2);
    setDistance(Math.max(20, Math.min(300, distFromCenter)));
  };

  const isTooClose = distance < 60;
  const isTooFar = distance > 220;
  const stateLabel = isTooClose
    ? 'Turbulence \u2014 Enmeshment'
    : isTooFar ? 'Stagnation \u2014 Avoidance'
    : 'Flow \u2014 Healthy Connection';
  const stateColor = isTooClose ? 'text-red-400' : isTooFar ? 'text-blue-400/60' : 'text-teal-300';
  const bgClass = isTooClose
    ? 'bg-orange-600/25 animate-pulse' : isTooFar
    ? 'bg-blue-900/10 opacity-40' : 'bg-teal-500/10';

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative overflow-hidden bg-[#020308]">
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-5 pt-12">

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs">
          Connection
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif text-white text-center leading-tight">
          {svadhisthanaData.themes.relationships.headline}
        </motion.h2>

        <p className="text-white/40 text-sm italic text-center">
          Drag to find the space between clinging and withdrawing.
        </p>

        {/* Interactive visualizer */}
        <div
          ref={containerRef}
          className="w-full max-w-2xl h-[130px] border border-white/10 rounded-2xl bg-black/50 overflow-hidden relative flex items-center justify-center cursor-ew-resize touch-none"
          onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
          onTouchMove={handleDrag}
          onMouseDown={handleDrag}
        >
          <div className={`absolute inset-0 transition-all duration-700 ${bgClass}`} />
          <motion.div animate={{ x: -distance }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-12 h-12 rounded-full bg-orange-400 shadow-[0_0_25px_#f97316] z-10 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full blur-sm" />
          </motion.div>
          <motion.div animate={{ x: distance }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-12 h-12 rounded-full bg-teal-400 shadow-[0_0_25px_#2dd4bf] z-10 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full blur-sm" />
          </motion.div>
          <div className="absolute bottom-3 left-0 right-0 text-center z-20">
            <AnimatePresence mode="wait">
              <motion.p key={stateLabel} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className={`font-sans text-xs tracking-widest uppercase ${stateColor}`}>
                {stateLabel}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Wisdom boxes - always visible */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {(svadhisthanaData.themes.relationships.prompts as string[]).map((prompt: string, i: number) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-3 hover:bg-white/[0.07] transition-colors duration-300">
              <p className="text-orange-200/80 font-serif text-sm leading-relaxed">{prompt}</p>
              <div className="border-t border-white/5 pt-3">
                <p className="text-teal-400/60 text-[10px] uppercase tracking-widest mb-2 font-sans">Wisdom</p>
                <p className="text-white/55 font-sans text-xs leading-relaxed">{WISDOM[i]}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
