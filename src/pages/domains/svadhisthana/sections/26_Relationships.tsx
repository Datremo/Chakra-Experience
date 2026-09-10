import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

const WISDOM = [
  'Closeness can become control when reassurance feels like something another person must constantly provide. Connection leaves room for both people to breathe.',
  'Pulling away can feel protective when vulnerability feels risky. Distance becomes a problem only when it prevents genuine contact or honest communication.',
  'Adaptability does not mean abandoning yourself. Healthy connection allows both people to change while remaining recognizable to themselves.',
  'Desire becomes easier to navigate when it can be spoken clearly. Saying what you want without demanding that another person provide it creates room for honesty, consent, and choice.',
  "Connection cannot remove all uncertainty. Healthy intimacy leaves room for unanswered questions, changing feelings, and another person's freedom to choose.",
  'Attachment seeks security through holding on. Connection allows closeness without ownership. You can care deeply for someone without needing to control the outcome.',
];

export const RelationshipsSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [distance, setDistance] = useState(200);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const distFromCenter = Math.abs(clientX - rect.left - rect.width / 2);
    setDistance(Math.max(20, Math.min(300, distFromCenter)));
  };

  const isTooClose = distance < 60;
  const isTooFar = distance > 220;
  const stateLabel = isTooClose
    ? 'Turbulence — Enmeshment'
    : isTooFar
      ? 'Stagnation — Avoidance'
      : 'Flow — Healthy Connection';
  const stateColor = isTooClose ? 'text-orange-300' : isTooFar ? 'text-blue-300/70' : 'text-teal-200';
  const bgClass = isTooClose
    ? 'bg-orange-600/20'
    : isTooFar
      ? 'bg-blue-900/15 opacity-70'
      : 'bg-teal-500/10';

  const prompts = (svadhisthanaData.themes.relationships.prompts as string[]).slice(0, 6);
  const completePrompts = [...prompts, ...[
    'Can you communicate desire?',
    'Can you tolerate uncertainty?',
    'Do you confuse attachment with connection?',
  ]].slice(0, 6);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center px-5 py-10 md:py-14 relative  bg-[#020308]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_48%)]" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-5">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-orange-300 font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs">
          Connection
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif text-white text-center leading-tight">
          {svadhisthanaData.themes.relationships.headline}
        </motion.h2>

        <p className="text-white/45 text-sm italic text-center max-w-xl">
          Drag to find the space between clinging and withdrawing.
        </p>

        <div
          ref={containerRef}
          className="w-full max-w-3xl h-[140px] md:h-[155px] border border-white/10 rounded-[1.75rem] bg-black/45 overflow-hidden relative flex items-center justify-center cursor-ew-resize touch-none shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
          onMouseMove={(event) => event.buttons === 1 && handleDrag(event.clientX)}
          onTouchMove={(event) => handleDrag(event.touches[0].clientX)}
          onMouseDown={(event) => handleDrag(event.clientX)}
        >
          <div className={`absolute inset-0 transition-all duration-700 ${bgClass}`} />
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_24px,rgba(255,255,255,0.03)_25px)]" />

          <motion.div animate={{ x: -distance }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-12 h-12 rounded-full bg-orange-300 shadow-[0_0_30px_rgba(251,146,60,0.55)] z-10 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full blur-sm" />
          </motion.div>
          <motion.div animate={{ x: distance }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-12 h-12 rounded-full bg-teal-300 shadow-[0_0_30px_rgba(45,212,191,0.55)] z-10 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full blur-sm" />
          </motion.div>

          <div className="absolute bottom-4 left-0 right-0 text-center z-20">
            <AnimatePresence mode="wait">
              <motion.p key={stateLabel} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                className={`font-sans text-[10px] md:text-xs tracking-[0.18em] uppercase ${stateColor}`}>
                {stateLabel}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full">
          {completePrompts.map((prompt, i) => (
            <motion.div key={`${prompt}-${i}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.05 * i }}
              className="bg-white/[0.045] border border-white/10 p-4 md:p-5 rounded-2xl flex flex-col gap-3 min-h-[155px] hover:bg-white/[0.065] transition-colors">
              <p className="text-orange-100/85 font-serif text-sm leading-relaxed">{prompt}</p>
              <div className="border-t border-white/10 pt-3 mt-auto">
                <p className="text-teal-300/75 text-[9px] uppercase tracking-[0.2em] mb-2 font-sans">Wisdom</p>
                <p className="text-white/58 font-sans text-xs leading-relaxed">{WISDOM[i]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
