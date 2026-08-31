import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const RelationshipMirrorSection: React.FC = () => {
  const [archetype, setArchetype] = useState<'GIVER' | 'TAKER' | 'RECIPROCAL'>('RECIPROCAL');

  const archetypes = [
    { id: 'GIVER', label: 'The Over-Giver', desc: 'Finds worth in being needed. Constantly flowing outward until the internal reserve is dry. Often attracts takers.' },
    { id: 'TAKER', label: 'The Taker', desc: 'Operates from a core of scarcity. Constantly pulls energy in without returning it. Heavy, dense, and unfulfilled.' },
    { id: 'RECIPROCAL', label: 'The Reciprocal', desc: 'Maintains the healthy breath of the heart. Gives freely, but also has the capacity and humility to receive.' }
  ] as const;

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020504]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">Relational Archetypes</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">The Mirror</h1>
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center z-10 mb-16">
        
        {/* Archetype Selector */}
        <div className="flex bg-black/40 rounded-full border border-emerald-900/30 p-2 mb-16 backdrop-blur-sm">
          {archetypes.map(a => (
            <button
              key={a.id}
              onClick={() => setArchetype(a.id)}
              className={`px-6 py-2 rounded-full font-sans text-xs tracking-widest uppercase transition-all ${
                archetype === a.id
                  ? 'bg-emerald-900/50 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        {/* Visualizer */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-12">
          
          <AnimatePresence mode="wait">
            
            {archetype === 'GIVER' && (
              <motion.div key="giver" className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Draining core */}
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 border-dashed animate-[spin_4s_linear_infinite]" />
                {/* Outward flow */}
                {[0, 90, 180, 270].map(angle => (
                  <motion.div
                    key={angle}
                    className="absolute w-2 h-2 bg-emerald-400/50 rounded-full"
                    animate={{ x: Math.cos(angle * Math.PI / 180) * 100, y: Math.sin(angle * Math.PI / 180) * 100, opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                ))}
              </motion.div>
            )}

            {archetype === 'TAKER' && (
              <motion.div key="taker" className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Dense core */}
                <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-600 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" />
                {/* Inward flow */}
                {[45, 135, 225, 315].map(angle => (
                  <motion.div
                    key={angle}
                    className="absolute w-2 h-2 bg-slate-500 rounded-full"
                    initial={{ x: Math.cos(angle * Math.PI / 180) * 100, y: Math.sin(angle * Math.PI / 180) * 100, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                ))}
              </motion.div>
            )}

            {archetype === 'RECIPROCAL' && (
              <motion.div key="reciprocal" className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Healthy glowing core */}
                <div className="w-16 h-16 rounded-full bg-emerald-500/30 shadow-[0_0_30px_#34d399] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/40 animate-pulse" />
                </div>
                {/* Balanced flow (In and Out) */}
                <motion.div
                  className="absolute w-32 h-32 rounded-full border border-emerald-400/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            )}

          </AnimatePresence>

        </div>

        {/* Description */}
        <div className="h-24 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={archetype}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-white/60 font-serif leading-relaxed max-w-md mx-auto"
            >
              {archetypes.find(a => a.id === archetype)?.desc}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
