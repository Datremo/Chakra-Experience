import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';
import { SourceBadge } from '../../manipura/components/SourceBadge';

export const ModernRepresentationSection: React.FC = () => {
  const data = useAnahataData();
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020705]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Modern Translation</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-emerald-50 mb-6">The Emotional Heart</h1>
        <div className="flex justify-center mb-6">
          <SourceBadge type="MODERN" />
        </div>
        <p className="text-white/50 italic font-light leading-relaxed">
          In the 20th century, Western psychology merged with the chakra system. The heart centre was re-interpreted as the seat of our relational lives. It became the lens through which we explore connection, boundaries, and grief.
        </p>
      </div>

      <div className="w-full max-w-4xl relative min-h-[400px] flex items-center justify-center z-10">
        
        {/* Central interactive nodes */}
        <div className="flex flex-wrap justify-center gap-6 z-20">
          {data.modernThemes.map((theme) => {
            const isActive = activeTheme === theme.id;
            return (
              <motion.button
                key={theme.id}
                onClick={() => setActiveTheme(isActive ? null : theme.id)}
                className={`px-8 py-4 rounded-full border transition-all duration-500 backdrop-blur-md ${
                  isActive 
                    ? 'border-emerald-400 bg-emerald-900/40 text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-110' 
                    : 'border-emerald-900/30 bg-black/40 text-emerald-100/50 hover:border-emerald-600/50 hover:text-emerald-100/80'
                }`}
                whileHover={!isActive ? { scale: 1.05 } : {}}
              >
                <span className="font-sans tracking-[0.2em] uppercase text-sm">{theme.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Ambient background glow that shifts based on selection */}
        <AnimatePresence>
          {activeTheme && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-emerald-500/10 rounded-full blur-[100px]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description overlay */}
        <AnimatePresence>
          {activeTheme && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute -bottom-24 left-0 right-0 text-center"
            >
              <p className="text-xl md:text-2xl font-serif text-white/80 italic font-light">
                {data.modernThemes.find(t => t.id === activeTheme)?.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
