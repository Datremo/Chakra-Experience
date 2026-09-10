import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Waves } from 'lucide-react';

export const IntimacyBeyondSexSection: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#071014] px-5 py-10 md:py-14">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(45,212,191,0.14),transparent_36%),linear-gradient(135deg,#061016_0%,#0b1720_46%,#050708_100%)]" />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/10"
          animate={{ scale: [1, 1.06, 1], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/10"
          animate={{ scale: [1.08, 1, 1.08], rotate: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-teal-300 font-sans uppercase tracking-[0.35em] text-[10px] md:text-xs mb-4"
        >
          Nakedness
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-white mb-4"
        >
          Intimacy Beyond Sex
        </motion.h2>

        <p className="text-white/55 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          Nakedness here is not about removing clothing. It is the gradual lowering of defenses: being seen without pretending, while still keeping your own center.
        </p>

        <div className="relative max-w-3xl mx-auto min-h-[390px] rounded-[2rem] border border-teal-100/10 overflow-hidden bg-black/25 backdrop-blur-sm shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(45,212,191,0.22),transparent_32%),radial-gradient(circle_at_75%_75%,rgba(14,116,144,0.2),transparent_36%)]"
            animate={{ opacity: revealed ? 0.45 : 0.75 }}
            transition={{ duration: 0.8 }}
          />

          <AnimatePresence initial={false} mode="wait">
            {!revealed ? (
              <motion.div
                key="covered"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6"
              >
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, -1.5, 0, 1.5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-28 w-28 rounded-full border border-teal-200/20 bg-teal-100/[0.03] flex items-center justify-center shadow-[0_0_70px_rgba(45,212,191,0.12)]"
                >
                  <EyeOff className="text-teal-200/70" size={34} strokeWidth={1.25} />
                </motion.div>

                <h3 className="mt-7 text-2xl md:text-3xl font-serif text-white">What does nakedness mean here?</h3>
                <p className="mt-3 max-w-xl text-sm md:text-base text-white/55 leading-relaxed">
                  Move past the surface. Reveal the quieter layer underneath the physical idea of intimacy.
                </p>

                <button
                  type="button"
                  onClick={() => setRevealed(true)}
                  className="mt-7 inline-flex items-center gap-3 rounded-full border border-teal-300/30 bg-teal-400/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-teal-100 hover:bg-teal-400/15 hover:border-teal-200/50 transition-all"
                >
                  <Eye size={15} />
                  Uncover the next layer
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col items-center justify-center px-7 md:px-14"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: [0.9, 1.04, 1], opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="mb-6 h-24 w-24 rounded-full border border-teal-200/25 bg-teal-200/[0.05] flex items-center justify-center shadow-[0_0_90px_rgba(45,212,191,0.18)]"
                >
                  <Waves className="text-teal-100" size={38} strokeWidth={1.1} />
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">The deeper layer is trust.</h3>
                <p className="max-w-2xl text-base md:text-lg text-teal-50/75 leading-relaxed">
                  Real intimacy asks for honesty, vulnerability, consent, and boundaries. You can let another person see more of you without surrendering the shape of who you are.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  {['Vulnerability', 'Consent', 'Trust', 'Boundaries'].map((word, index) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/60"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setRevealed(false)}
                  className="mt-7 text-[10px] uppercase tracking-[0.2em] text-teal-200/50 hover:text-teal-100 transition-colors"
                >
                  Return to the surface
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
