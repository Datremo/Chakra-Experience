import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHAKRAS = [
  { id: 'crown',     label: 'Sahasrara',    subtitle: 'Crown',                         color: '#a855f7', yPct: 8  },
  { id: 'thirdeye',  label: 'Ajna',         subtitle: 'Third Eye',                     color: '#6366f1', yPct: 17 },
  { id: 'throat',    label: 'Vishuddha',    subtitle: 'Throat',                        color: '#06b6d4', yPct: 26 },
  { id: 'heart',     label: 'Anahata',      subtitle: 'Heart',                         color: '#22c55e', yPct: 38 },
  { id: 'solar',     label: 'Manipura',     subtitle: 'Solar Plexus',                  color: '#eab308', yPct: 50 },
  { id: 'sacral',    label: 'Svadhisthana', subtitle: 'Sacral \u2014 YOU ARE HERE',    color: '#f97316', yPct: 61 },
  { id: 'root',      label: 'Muladhara',    subtitle: 'Root',                          color: '#ef4444', yPct: 75 },
];

export const LocationSection: React.FC = () => {
  const [hovered, setHovered] = useState<string>('sacral');
  const active = CHAKRAS.find(c => c.id === hovered) ?? CHAKRAS[5];

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#040608]">

      {/* ambient sacral glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '70%', top: '61%',
          transform: 'translate(-50%, -50%)',
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---- Left: text ---- */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs mb-5">Location in the Body</p>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Where does it live?
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mb-8 min-h-[140px]"
            >
              <p className="text-2xl font-serif mb-1" style={{ color: active.color }}>{active.label}</p>
              <p className="text-white/40 text-xs font-sans tracking-[0.3em] uppercase mb-4">{active.subtitle}</p>
              {active.id === 'sacral' ? (
                <p className="text-white/70 text-lg leading-relaxed">
                  Svadhisthana sits roughly <strong className="text-orange-300">2 inches below the navel</strong>, at the center of the pelvic bowl. It governs the hips, sacrum, lower back, kidneys, and reproductive organs.
                </p>
              ) : (
                <p className="text-white/40 text-base leading-relaxed italic">
                  Hover the chakra points to explore the energy body.
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border border-orange-500/30 bg-orange-900/10 text-orange-200 text-[10px] font-sans tracking-widest uppercase">Traditional: Pelvic floor</span>
            <span className="px-4 py-2 rounded-full border border-teal-500/30 bg-teal-900/10 text-teal-200 text-[10px] font-sans tracking-widest uppercase">Modern: Sacral plexus nerve cluster</span>
          </div>
        </motion.div>

        {/* ---- Right: Interactive body map ---- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative" style={{ width: 280, height: 520 }}>

            {/* SVG silhouette */}
            <svg viewBox="0 0 280 520" className="absolute inset-0 w-full h-full" fill="none">
              {/* head */}
              <ellipse cx="140" cy="48" rx="30" ry="30" fill="#111827" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
              {/* neck */}
              <rect x="131" y="76" width="18" height="22" rx="4" fill="#111827" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
              {/* torso */}
              <path d="M88 98 Q140 88 192 98 L198 282 Q140 294 82 282 Z" fill="#111827" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
              {/* left arm */}
              <path d="M90 105 Q68 150 58 220 Q56 236 64 248" stroke="rgba(255,255,255,0.07)" strokeWidth="13" strokeLinecap="round" fill="none"/>
              {/* right arm */}
              <path d="M190 105 Q212 150 222 220 Q224 236 216 248" stroke="rgba(255,255,255,0.07)" strokeWidth="13" strokeLinecap="round" fill="none"/>
              {/* left leg */}
              <path d="M116 282 Q112 370 110 478" stroke="rgba(255,255,255,0.07)" strokeWidth="17" strokeLinecap="round" fill="none"/>
              {/* right leg */}
              <path d="M164 282 Q168 370 170 478" stroke="rgba(255,255,255,0.07)" strokeWidth="17" strokeLinecap="round" fill="none"/>
              {/* spine */}
              <line x1="140" y1="98" x2="140" y2="282" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5 5"/>
            </svg>

            {/* Chakra points */}
            {CHAKRAS.map((chakra) => {
              const isActive = hovered === chakra.id;
              const isSacral = chakra.id === 'sacral';
              return (
                <button
                  key={chakra.id}
                  onMouseEnter={() => setHovered(chakra.id)}
                  onClick={() => setHovered(chakra.id)}
                  aria-label={chakra.label}
                  className="absolute flex items-center"
                  style={{ top: `${chakra.yPct}%`, left: '50%', transform: 'translateX(-50%)' }}
                >
                  {/* pulse for sacral */}
                  {isSacral && (
                    <span
                      className="absolute rounded-full animate-ping"
                      style={{
                        width: 32, height: 32,
                        background: `${chakra.color}33`,
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  )}

                  {/* dot */}
                  <motion.span
                    animate={{ scale: isActive ? 1.6 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="relative z-10 rounded-full border-2"
                    style={{
                      width: isSacral ? 20 : 14,
                      height: isSacral ? 20 : 14,
                      background: isActive ? chakra.color : `${chakra.color}44`,
                      borderColor: chakra.color,
                      boxShadow: isActive ? `0 0 24px ${chakra.color}` : 'none',
                      display: 'block',
                    }}
                  />

                  {/* hover label */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        className="ml-3 text-[11px] font-sans tracking-widest uppercase whitespace-nowrap pointer-events-none"
                        style={{ color: chakra.color }}
                      >
                        {chakra.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
