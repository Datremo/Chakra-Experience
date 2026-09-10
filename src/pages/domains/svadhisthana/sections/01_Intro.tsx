import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Droplets } from 'lucide-react';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const IntroSection: React.FC = () => {
  const data = useSvadhisthanaData();
  const [phase, setPhase] = useState<'DROP' | 'IMPACT' | 'REVEAL' | 'QUESTION'>('DROP');
  const [selectedGrip, setSelectedGrip] = useState<string | null>(null);
  const poolRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const impact = window.setTimeout(() => setPhase('IMPACT'), 2400);
    const reveal = window.setTimeout(() => setPhase('REVEAL'), 4550);
    const question = window.setTimeout(() => setPhase('QUESTION'), 7400);

    return () => {
      window.clearTimeout(impact);
      window.clearTimeout(reveal);
      window.clearTimeout(question);
    };
  }, []);

  const grips = ['Emotions', 'Relationships', 'Desire', 'Creativity', 'Control', 'Change'];

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-5 py-10 md:px-8 md:py-14 text-white">
      {/* Cinematic water-at-dawn background. Kept luminous so the entry never drops into black. */}
      <div className="absolute inset-0 bg-[#10252b]" />
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.035, 1], opacity: [0.92, 1, 0.92] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 50% 18%, rgba(255,236,203,0.68) 0%, rgba(248,173,86,0.34) 19%, rgba(31,116,126,0.28) 46%, rgba(5,35,42,0.30) 75%, rgba(4,18,24,0.68) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[58%]"
        style={{
          background:
            'linear-gradient(to top, rgba(5,25,31,0.76), rgba(14,76,84,0.24) 45%, transparent 100%)',
        }}
      />
      <motion.div
        className="absolute inset-x-[-10%] bottom-[9%] h-[30%] rounded-[50%]"
        animate={{ scaleX: [1, 1.025, 1], opacity: [0.38, 0.52, 0.38] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(111,226,221,0.33) 0%, rgba(49,153,162,0.14) 38%, transparent 72%)',
        }}
      />

      {/* Subtle photographic environment behind the drop when the asset is available. */}
      <div className="absolute inset-0 bg-[url('/assets/svadhisthana/svadhisthana_moon_water.jpg')] bg-cover bg-center opacity-[0.20] mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100/[0.10] via-transparent to-cyan-950/[0.24]" />

      <div ref={poolRef} className="absolute bottom-[11%] left-1/2 h-[150px] w-[min(88vw,980px)] -translate-x-1/2 rounded-[50%] border border-cyan-100/30 bg-cyan-200/[0.055] shadow-[0_0_110px_rgba(103,232,249,0.16)]" />
      <motion.div
        className="absolute bottom-[10%] left-1/2 h-[70px] w-[min(58vw,560px)] -translate-x-1/2 rounded-[50%]"
        animate={{ scaleX: [0.94, 1.02, 0.94], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(219,252,252,0.38), rgba(45,212,191,0.06) 54%, transparent 76%)',
        }}
      />

      <AnimatePresence mode="wait">
        {phase === 'DROP' && (
          <motion.div
            key="drop"
            initial={{ y: '-22vh', opacity: 0, scale: 0.76 }}
            animate={{
              y: '27vh',
              opacity: [0, 1, 1],
              scale: [0.76, 0.9, 1.02],
            }}
            exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
            transition={{
              y: { duration: 2.4, ease: [0.18, 0.82, 0.25, 1] },
              opacity: { duration: 2.1, times: [0, 0.15, 1] },
              scale: { duration: 2.4, ease: [0.18, 0.82, 0.25, 1] },
            }}
            className="absolute top-0 z-30 flex flex-col items-center"
          >
            <motion.div
              animate={{ scaleY: [1, 0.92, 1.04], scaleX: [0.78, 0.94, 1], rotate: [0, 1.5, -1, 0] }}
              transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-24 w-14 rounded-[58%_58%_72%_72%] bg-gradient-to-b from-white via-cyan-100 to-cyan-500 shadow-[0_0_55px_rgba(186,230,253,0.82),inset_0_2px_16px_rgba(255,255,255,0.7)]"
            >
              <div className="absolute left-2 top-3 h-6 w-2 rounded-full bg-white/75 blur-[1px]" />
            </motion.div>
            <motion.div
              animate={{ height: [26, 34, 26], opacity: [0.45, 0.72, 0.45] }}
              transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[2px] bg-gradient-to-b from-cyan-100/75 to-transparent"
            />
          </motion.div>
        )}

        {phase === 'IMPACT' && (
          <motion.div key="impact" initial={{ opacity: 0.85 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 pointer-events-none">
            <motion.div
              initial={{ scale: 0.12, opacity: 0.95 }}
              animate={{ scale: [0.12, 1, 2.6], opacity: [0.95, 0.4, 0] }}
              transition={{ duration: 1.55, ease: 'easeOut' }}
              className="absolute left-1/2 bottom-[14%] h-16 w-16 -translate-x-1/2 rounded-full bg-cyan-100/55 blur-sm"
            />
            {[0, 1, 2, 3, 4].map((ring) => (
              <motion.div
                key={ring}
                initial={{ width: 70, height: 14, opacity: 0.76, y: 6 }}
                animate={{ width: 360 + ring * 150, height: 70 + ring * 17, opacity: 0, y: ring * 4 }}
                transition={{ duration: 2.05, delay: ring * 0.13, ease: 'easeOut' }}
                className="absolute left-1/2 bottom-[12%] -translate-x-1/2 rounded-[50%] border border-cyan-50/55 shadow-[0_0_30px_rgba(165,243,252,0.2)]"
              />
            ))}
            <motion.div
              initial={{ opacity: 0.25, scaleY: 0.2 }}
              animate={{ opacity: [0.25, 0.7, 0.2], scaleY: [0.2, 1.1, 0.2] }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute bottom-[9%] left-1/2 h-36 w-[3px] -translate-x-1/2 bg-gradient-to-t from-cyan-200/70 via-white/25 to-transparent blur-[1px]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(phase === 'REVEAL' || phase === 'QUESTION') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, ease: 'easeOut' }}
            className={`relative z-20 w-full max-w-6xl text-center transition-transform duration-1000 ${phase === 'QUESTION' ? 'scale-[0.86] -translate-y-8 md:-translate-y-14' : ''}`}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.35em] text-cyan-50/75">
              <Droplets size={14} />
              The Current Begins
            </motion.div>

            <h1 className="text-[4.5rem] leading-none text-orange-100/20 sm:text-[7rem] md:text-[10rem] font-serif drop-shadow-[0_8px_30px_rgba(0,0,0,0.22)]">
              {data.header.sanskritName}
            </h1>
            <h2 className="-mt-5 text-5xl tracking-[-0.045em] text-orange-50 drop-shadow-[0_8px_30px_rgba(0,0,0,0.48)] sm:text-7xl md:-mt-9 md:text-9xl font-serif">
              {data.header.transliteration}
            </h2>
            <h3 className="mt-3 text-[10px] uppercase tracking-[0.42em] text-orange-100 md:text-sm">
              {data.header.subtitle}
            </h3>
            <p className="mt-5 text-lg italic text-orange-50/85 md:text-2xl">
              {data.header.hook}
            </p>

            {phase === 'REVEAL' && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/25 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  Scroll gently to enter the water
                  <ArrowDown size={13} />
                </div>
              </motion.div>
            )}

            {phase === 'QUESTION' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mx-auto mt-9 max-w-4xl">
                <h2 className="mb-6 text-3xl text-orange-50 md:text-5xl font-serif">What does it mean to flow?</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  <motion.div whileHover={{ y: -4 }} className="relative flex min-h-[170px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-orange-200/20 bg-slate-950/24 p-6 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_68%)]" />
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-orange-200/30 bg-orange-400/[0.07] shadow-[0_0_50px_rgba(249,115,22,0.12)]">
                      <div className="h-20 w-5 rounded-full bg-gradient-to-b from-orange-50/90 to-orange-500/20" />
                    </div>
                    <span className="relative z-10 mt-4 text-[10px] tracking-[0.3em] text-white/65">HOLDING</span>
                  </motion.div>

                  <motion.div whileHover={{ y: -4 }} className="relative flex min-h-[170px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-teal-200/20 bg-slate-950/24 p-6 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15),transparent_68%)]" />
                    <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-teal-200/30 bg-teal-400/[0.07]">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full border border-teal-50/30"
                          animate={{ width: ['20%', '88%'], height: ['20%', '88%'], opacity: [0.45, 0] }}
                          transition={{ duration: 2.6, delay: i * 0.55, repeat: Infinity, ease: 'easeOut' }}
                        />
                      ))}
                    </div>
                    <span className="relative z-10 mt-4 text-[10px] tracking-[0.3em] text-white/80">FLOWING</span>
                  </motion.div>
                </div>

                <p className="mb-4 mt-7 text-base italic text-orange-100/75 md:text-xl">Where in your life are you gripping too tightly?</p>
                <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
                  {grips.map((grip) => (
                    <button
                      key={grip}
                      type="button"
                      onClick={() => setSelectedGrip(grip)}
                      className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.16em] transition-all ${
                        selectedGrip === grip
                          ? 'border-orange-300/70 bg-orange-500/20 text-orange-50 shadow-[0_0_22px_rgba(249,115,22,0.16)]'
                          : 'border-white/15 bg-slate-950/20 text-white/60 hover:border-orange-200/40 hover:text-white'
                      }`}
                    >
                      {grip}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {selectedGrip && (
                    <motion.p key={selectedGrip} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-5 text-sm italic text-teal-50/75">
                      Notice what changes when you simply acknowledge the grip.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
