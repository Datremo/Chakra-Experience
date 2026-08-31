import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Leaf {
  id: number;
  startX: number;
  delay: number;
  duration: number;
}

export const GriefSection: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Generate continuous falling leaves
  useEffect(() => {
    let idCounter = 0;
    const interval = setInterval(() => {
      const newLeaf: Leaf = {
        id: idCounter++,
        startX: Math.random() * 100, // percentage width
        delay: 0,
        duration: Math.random() * 5 + 10 // 10-15s fall
      };
      
      setLeaves(prev => {
        const next = [...prev, newLeaf];
        if (next.length > 20) return next.slice(next.length - 20); // Keep max 20 leaves
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403] overflow-hidden">
      
      {/* The River Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-950/20 pointer-events-none" />

      {/* The Falling Leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {leaves.map((leaf) => (
            <motion.div
              key={leaf.id}
              initial={{ y: -50, x: `${leaf.startX}vw`, opacity: 0, rotate: 0 }}
              animate={{ 
                y: '120vh', 
                x: [`${leaf.startX}vw`, `${leaf.startX + 5}vw`, `${leaf.startX - 5}vw`, `${leaf.startX}vw`],
                opacity: [0, 0.5, 0.5, 0],
                rotate: 360
              }}
              transition={{ 
                y: { duration: leaf.duration, ease: "linear" },
                x: { duration: leaf.duration, ease: "easeInOut" },
                opacity: { duration: leaf.duration, ease: "linear" },
                rotate: { duration: leaf.duration, ease: "linear" }
              }}
              className="absolute w-4 h-4"
            >
              {/* Simple leaf shape */}
              <div className="w-full h-full bg-emerald-700/40 rounded-tl-full rounded-br-full" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center z-10 max-w-2xl relative">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-8">The Release</h2>
        
        <AnimatePresence mode="wait">
          {!hasInteracted ? (
            <motion.div
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-12">Grief</h1>
              <button
                onClick={() => setHasInteracted(true)}
                className="px-8 py-3 rounded-full border border-emerald-500/30 text-emerald-300/80 font-sans tracking-widest text-xs uppercase hover:bg-emerald-900/20 hover:border-emerald-400 transition-all backdrop-blur-sm"
              >
                Let Go
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-8 leading-tight">
                "Grief is love with nowhere to go."
              </h1>
              <p className="text-xl font-serif text-white/50 italic font-light leading-relaxed mb-8">
                It is the natural, inevitable shadow of having an open heart. You do not heal grief by closing the heart; you heal it by letting it flow like water over stone.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
