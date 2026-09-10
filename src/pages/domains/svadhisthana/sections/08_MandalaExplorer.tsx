import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

type RevealLayer = 'PETALS' | 'LETTERS' | 'WATER' | 'MOON' | 'ANIMAL' | 'BIJA';

const LAYERS: { id: RevealLayer; label: string; detail: string }[] = [
  { id: 'PETALS', label: 'Six petals', detail: 'The lotus establishes the outer rhythm.' },
  { id: 'LETTERS', label: 'Sanskrit letters', detail: 'Six seed syllables appear around the lotus.' },
  { id: 'WATER', label: 'Water field', detail: 'The element becomes the living field of the mandala.' },
  { id: 'MOON', label: 'Crescent moon', detail: 'The lunar crescent enters at the centre.' },
  { id: 'ANIMAL', label: 'Makara', detail: 'The symbolic animal emerges beneath the water.' },
  { id: 'BIJA', label: 'Bīja — VAṂ', detail: 'The seed sound completes the central composition.' },
];

export const MandalaExplorerSection: React.FC = () => {
  const data = useSvadhisthanaData();
  const [layers, setLayers] = useState<RevealLayer[]>([]);
  const [autoBuild, setAutoBuild] = useState(true);

  const petalSyllables = useMemo(() => data.mandala.petalSyllables, [data.mandala.petalSyllables]);
  const revealedCount = layers.length;

  const buildNext = () => {
    const next = LAYERS.find((item) => !layers.includes(item.id));
    if (next) setLayers((current) => [...current, next.id]);
  };

  const resetBuild = () => {
    setAutoBuild(false);
    setLayers([]);
    window.setTimeout(() => setAutoBuild(true), 120);
  };

  React.useEffect(() => {
    if (!autoBuild) return;
    if (revealedCount >= LAYERS.length) return;

    const id = window.setTimeout(() => {
      setLayers((current) => {
        const next = LAYERS.find((item) => !current.includes(item.id));
        return next ? [...current, next.id] : current;
      });
    }, 900);

    return () => window.clearTimeout(id);
  }, [autoBuild, revealedCount]);

  const activeLayer = LAYERS[Math.max(0, Math.min(revealedCount - 1, LAYERS.length - 1))] ?? LAYERS[0];
  const sixLetters = petalSyllables.length >= 6
    ? petalSyllables.slice(0, 6)
    : ['बं', 'भं', 'मं', 'यं', 'रं', 'लं'].map((sanskrit) => ({ sanskrit }));

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#071114] px-5 py-10 md:px-8 md:py-14">
      <div className="absolute inset-0">
        <img
          src="/assets/svadhisthana/svadhisthana_mandala_blueprint_1788966667396.jpg"
          alt="Svādhiṣṭhāna mandala blueprint"
          className="h-full w-full object-cover opacity-[0.62]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,30,34,0.05),rgba(5,15,18,0.52)_78%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/[0.07] via-transparent to-[#041014]/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1450px]">
        <div className="mx-auto mb-7 max-w-4xl text-center md:mb-8">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-3 text-[10px] uppercase tracking-[0.38em] text-orange-200 md:text-xs">
            The Blueprint
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="font-serif text-4xl text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)] md:text-6xl lg:text-7xl">
            Construct the Lotus
          </motion.h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm italic leading-relaxed text-orange-50/80 md:text-lg">
            Watch the traditional visualization assemble itself, layer by layer.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[225px_minmax(0,1fr)_230px] lg:gap-10">
          {/* Layer controls */}
          <div className="order-2 grid grid-cols-2 gap-2.5 lg:order-1 lg:grid-cols-1">
            {LAYERS.map((item, index) => {
              const active = layers.includes(item.id);
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => {
                    setAutoBuild(false);
                    setLayers((current) => current.includes(item.id) ? current : [...current, item.id]);
                  }}
                  className={`rounded-2xl border px-3.5 py-3 text-left backdrop-blur-sm transition-all ${
                    active
                      ? 'border-orange-200/55 bg-orange-400/15 text-white shadow-[0_0_28px_rgba(249,115,22,0.12)]'
                      : 'border-white/15 bg-slate-950/28 text-white/55 hover:border-orange-200/30 hover:text-white/85'
                  }`}
                >
                  <span className="mb-1 block text-[9px] uppercase tracking-[0.17em] text-orange-100/50">0{index + 1}</span>
                  <span className="block text-[11px] uppercase tracking-[0.11em] md:text-xs">{item.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Stable radial mandala */}
          <div className="order-1 flex flex-col items-center lg:order-2">
            <div className="relative aspect-square w-[310px] sm:w-[420px] md:w-[500px] lg:w-[540px]">
              <motion.div
                className="absolute inset-[2%] rounded-full border border-orange-100/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[7%] rounded-full border border-teal-100/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 62, repeat: Infinity, ease: 'linear' }}
              />

              {/* Water field */}
              <AnimatePresence>
                {layers.includes('WATER') && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.35 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.35 }}
                    transition={{ duration: 1.0, ease: 'easeOut' }}
                    className="absolute inset-[12%] overflow-hidden rounded-full border-[3px] border-teal-100/35 bg-[radial-gradient(circle,rgba(45,212,191,0.22),rgba(11,69,78,0.16)_50%,transparent_74%)] shadow-[inset_0_0_80px_rgba(45,212,191,0.2),0_0_60px_rgba(45,212,191,0.14)]"
                  >
                    {[0, 1, 2, 3].map((wave) => (
                      <motion.div
                        key={wave}
                        className="absolute left-1/2 top-1/2 rounded-full border border-cyan-50/25"
                        animate={{ width: ['18%', '88%'], height: ['18%', '88%'], opacity: [0.5, 0] }}
                        transition={{ duration: 3.1, delay: wave * 0.65, repeat: Infinity, ease: 'easeOut' }}
                        style={{ transform: 'translate(-50%, -50%)' }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Petals are anchored to one exact center. No rotating parent, so they cannot drift. */}
              <div className="absolute inset-[13%]">
                {sixLetters.map((syllable: any, index: number) => {
                  const angle = index * 60;
                  const revealed = layers.includes('PETALS');
                  return (
                    <div
                      key={index}
                      className="absolute left-1/2 top-1/2 h-[44%] w-[18%]"
                      style={{
                        transformOrigin: '50% 100%',
                        transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                      }}
                    >
                      <AnimatePresence>
                        {revealed && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.2, y: 35 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 0.09, duration: 0.8, ease: 'easeOut' }}
                            className="relative h-full w-full"
                          >
                            <svg viewBox="0 0 100 200" className="h-full w-full overflow-visible drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]" aria-hidden="true">
                              <defs>
                                <linearGradient id={`petalGrad-${index}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.98" />
                                  <stop offset="42%" stopColor="#fb923c" stopOpacity="0.86" />
                                  <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.32" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M50 2 C88 42 104 108 50 198 C-4 108 12 42 50 2 Z"
                                fill={`url(#petalGrad-${index})`}
                                stroke="rgba(255,235,205,0.9)"
                                strokeWidth="1.4"
                              />
                            </svg>

                            {layers.includes('LETTERS') && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.65 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.16 + index * 0.08, duration: 0.55 }}
                                className="absolute left-1/2 top-[28%] -translate-x-1/2 rotate-[0deg] font-serif text-xl text-orange-50 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] md:text-3xl"
                                style={{ transform: 'translateX(-50%)' }}
                              >
                                {syllable.sanskrit}
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Moon */}
              <AnimatePresence>
                {layers.includes('MOON') && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.2, rotate: -25, y: 16 }}
                    animate={{ opacity: 1, scale: 1, rotate: 8, y: 0 }}
                    exit={{ opacity: 0, scale: 0.2, y: 16 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 14 }}
                    className="absolute left-1/2 top-1/2 h-[26%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border-b-[10px] border-cyan-50/90 shadow-[0_18px_60px_rgba(255,255,255,0.23)]"
                  />
                )}
              </AnimatePresence>

              {/* Makara */}
              <AnimatePresence>
                {layers.includes('ANIMAL') && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.35, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.35, y: 24 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 13 }}
                    className="absolute left-1/2 top-1/2 h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-teal-100/30 bg-slate-950/35 shadow-[0_0_42px_rgba(45,212,191,0.25)]"
                  >
                    <img
                      src="/assets/svadhisthana/svadhisthana_subconscious_makara_1788973098766.jpg"
                      alt="Makara"
                      className="h-full w-full scale-110 object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.62)_100%)]" />
                    <span className="absolute inset-x-0 bottom-3 text-center text-[8px] uppercase tracking-[0.2em] text-teal-50/90">Makara</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bīja */}
              <AnimatePresence>
                {layers.includes('BIJA') && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.2, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, scale: [0.92, 1.06, 1], filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.2, filter: 'blur(12px)' }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 font-serif text-[4rem] text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.95)] md:text-[7rem]"
                  >
                    {data.mandala.bija.sanskrit}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Central bindu */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.55] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => { setLayers([]); setAutoBuild(true); }}
                className="rounded-full border border-orange-200/30 bg-orange-400/10 px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] text-orange-50 transition-colors hover:bg-orange-400/20"
              >
                Build automatically
              </button>
              <button
                type="button"
                onClick={buildNext}
                disabled={revealedCount >= LAYERS.length}
                className="rounded-full border border-white/15 bg-slate-950/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white disabled:opacity-30"
              >
                Reveal next layer
              </button>
              <button
                type="button"
                onClick={resetBuild}
                className="rounded-full border border-white/10 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white/75"
              >
                Rebuild
              </button>
            </div>
          </div>

          {/* Current layer */}
          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="order-3 rounded-3xl border border-white/15 bg-slate-950/30 p-5 backdrop-blur-md md:p-6">
            <p className="text-[9px] uppercase tracking-[0.2em] text-orange-100/55">Current layer</p>
            <h3 className="mt-2 font-serif text-xl text-white">{activeLayer.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/62">{activeLayer.detail}</p>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div animate={{ width: `${(revealedCount / LAYERS.length) * 100}%` }} className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-teal-300" />
            </div>
            <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-white/40">{revealedCount} of {LAYERS.length} layers revealed</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
