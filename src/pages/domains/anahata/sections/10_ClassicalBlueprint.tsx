import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';

export const ClassicalBlueprintSection: React.FC = () => {
  const data = useAnahataData();
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    { id: 'petals', title: '12 Petals', desc: 'The foundation of the Anāhata lotus, described as deep red.' },
    { id: 'letters', title: '12 Syllables', desc: 'The Sanskrit syllables Ka through Tha resting on the petals.' },
    { id: 'air', title: 'Air Region', desc: 'The smoky-coloured region of Vāyu (Air) filling the centre.' },
    { id: 'geometry', title: 'Six-Pointed Star', desc: 'Two interlocking triangles forming a hexagram, representing the union of opposites.' },
    { id: 'bija', title: 'Yaṃ (Bīja)', desc: 'The seed mantra of Air residing in the centre.' },
    { id: 'antelope', title: 'Black Antelope', desc: 'The swift vehicle of Vāyu, carrying the bīja.' },
    { id: 'kakini', title: 'Kākinī (Śakti)', desc: 'The four-armed goddess presiding over the heart centre.' },
    { id: 'isa', title: 'Īśa (Overlord)', desc: 'The three-eyed deity granting boons.' },
    { id: 'triangle', title: 'Inner Triangle', desc: 'A downward-pointing triangle within the pericarp.' },
    { id: 'linga', title: 'Bāṇa-liṅga', desc: 'Shining like brilliant gold within the triangle.' },
    { id: 'hamsa', title: 'Haṃsa (Swan)', desc: 'The Jīvātman glowing like a steady flame in a windless place.' }
  ];

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403] overflow-hidden">
      
      <div className="text-center mb-12 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Classical Blueprint</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Ṣaṭ-Cakra-Nirūpaṇa</h1>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-12 items-center justify-center z-10 h-[600px]">
        
        {/* Left: Interactive Mandala */}
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
          
          {/* Base Outer Glow */}
          <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full" />

          {/* 1. Petals */}
          <AnimatePresence>
            {activeLayer >= 0 && (
              <motion.div 
                className="absolute inset-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <svg viewBox="0 0 500 500" className="w-full h-full text-red-900/60 drop-shadow-2xl">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.path
                      key={`petal-${i}`}
                      d="M250,100 C300,0 350,150 250,250 C150,150 200,0 250,100 Z"
                      fill="currentColor"
                      stroke="rgba(248, 113, 113, 0.2)"
                      strokeWidth="1"
                      transform={`rotate(${i * 30} 250 250)`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    />
                  ))}
                  <circle cx="250" cy="250" r="150" fill="#010403" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. Petal Letters */}
          <AnimatePresence>
            {activeLayer >= 1 && (
              <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {data.mandala.petalLetters.map((letter, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180);
                  const radius = 190;
                  const x = 250 + Math.cos(angle) * radius;
                  const y = 250 + Math.sin(angle) * radius;
                  return (
                    <div
                      key={`letter-${i}`}
                      className="absolute font-serif text-rose-300/80 text-xl"
                      style={{
                        left: `${(x / 500) * 100}%`,
                        top: `${(y / 500) * 100}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {letter.devanagari}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. Air Region (Smoky) */}
          <AnimatePresence>
            {activeLayer >= 2 && (
              <motion.div 
                className="absolute inset-[15%] rounded-full bg-slate-500/10 blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </AnimatePresence>

          {/* 4. Geometry (Hexagram) */}
          <AnimatePresence>
            {activeLayer >= 3 && (
              <motion.div className="absolute inset-0" initial={{ scale: 0, opacity: 0, rotate: -90 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ duration: 1, type: "spring" }}>
                <svg viewBox="0 0 500 500" className="w-full h-full text-emerald-500/30">
                  <polygon points="250,120 137,315 363,315" fill="none" stroke="currentColor" strokeWidth="4" />
                  <polygon points="250,380 137,185 363,185" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 5. Bīja Yaṃ */}
          <AnimatePresence>
            {activeLayer >= 4 && (
              <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                <span className="font-serif text-7xl text-emerald-300 drop-shadow-[0_0_15px_rgba(110,231,183,0.5)] z-20 -mt-10">
                  {data.mandala.bija.sanskrit}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 6. Black Antelope */}
          <AnimatePresence>
            {activeLayer >= 5 && (
              <motion.div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-20 h-20 opacity-40 z-10" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}>
                {/* Abstract SVG representation of an antelope in motion */}
                <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="1">
                  <path d="M20,60 C40,40 60,40 80,60 M70,50 L85,30 M75,55 L90,35" strokeLinecap="round" />
                  <circle cx="80" cy="45" r="2" fill="#fff" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 7 & 8. Kākinī & Īśa */}
          <AnimatePresence>
            {activeLayer >= 6 && (
              <motion.div className="absolute inset-0 flex justify-between items-center px-24 pointer-events-none opacity-40" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}>
                <div className="text-xs font-serif text-yellow-500 tracking-widest uppercase">Kākinī</div>
                {activeLayer >= 7 && <div className="text-xs font-serif text-white tracking-widest uppercase">Īśa</div>}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 9. Inner Triangle */}
          <AnimatePresence>
            {activeLayer >= 8 && (
              <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <svg viewBox="0 0 500 500" className="w-full h-full text-rose-500/40">
                  <polygon points="250,300 210,220 290,220" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 10. Bāṇa-liṅga */}
          <AnimatePresence>
            {activeLayer >= 9 && (
              <motion.div className="absolute top-[52%] left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-yellow-600 to-yellow-200 rounded-full shadow-[0_0_15px_#facc15]" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} />
            )}
          </AnimatePresence>

          {/* 11. Haṃsa */}
          <AnimatePresence>
            {activeLayer >= 10 && (
              <motion.div className="absolute top-[75%] left-1/2 -translate-x-1/2 flex items-center justify-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                {/* Steady flame / swan motif */}
                <div className="w-6 h-6 rotate-45 bg-amber-100 shadow-[0_0_20px_#fef3c7]" style={{ borderRadius: '50% 0 50% 50%' }} />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right: Controls & Text */}
        <div className="w-full max-w-sm flex flex-col justify-center">
          
          <div className="mb-8 min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif text-emerald-300 mb-4">{layers[activeLayer].title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{layers[activeLayer].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {layers.map((layer, idx) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(idx)}
                className={`text-left px-4 py-2 rounded border text-xs font-sans tracking-widest uppercase transition-all
                  ${activeLayer === idx 
                    ? 'bg-emerald-900/40 border-emerald-500 text-emerald-100' 
                    : activeLayer > idx 
                      ? 'bg-emerald-900/10 border-emerald-900/50 text-emerald-100/50 hover:border-emerald-700/50'
                      : 'bg-black/30 border-white/5 text-white/30 hover:border-white/20'
                  }
                `}
              >
                {layer.title}
              </button>
            ))}
          </div>
          
          <p className="mt-8 text-[10px] text-white/20 font-sans tracking-widest uppercase">
            Click layers to build the traditional visualization.
          </p>

        </div>

      </div>
    </section>
  );
};
