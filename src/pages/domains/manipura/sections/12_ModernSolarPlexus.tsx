import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useManipuraData } from '../../../../data/manipuraData';
import { SourceBadge } from '../components/SourceBadge';
import { Check } from 'lucide-react';

export const ModernSolarPlexusSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('manipura_core_theme');
    if (saved) {
      setSelectedTheme(saved);
    }
  }, []);

  const handleSelect = (id: string) => {
    setSelectedTheme(id);
    localStorage.setItem('manipura_core_theme', id);
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#090500] relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SourceBadge type="MODERN" content="This section explores psychological concepts mapped onto the chakra system in the 20th century." />
          </div>
          <h1 className="text-4xl md:text-6xl mb-6 font-serif text-amber-400">The Power Centre</h1>
          <p className="text-xl text-amber-100/60 font-light italic max-w-3xl mx-auto leading-relaxed">
            While traditional texts saw this as the seat of the fire god, modern psychology and New Age synthesis have transformed Maṇipūra into the engine of personal will. 
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-white/50">
            What brings you to the fire? Select the theme that currently requires your attention.
          </p>
          <p className="text-xs text-white/30 italic mt-2">Your choice will personalize later reflections.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manipuraData.modernThemes.map((theme, i) => {
            const isSelected = selectedTheme === theme.id;

            return (
              <motion.button
                key={theme.id}
                onClick={() => handleSelect(theme.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative p-8 rounded-3xl text-left border transition-all duration-500 overflow-hidden group
                  ${isSelected 
                    ? 'bg-amber-900/40 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
                    : 'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border-amber-900/30 hover:bg-amber-950/40 hover:border-amber-700/50'
                  }
                `}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 transition-opacity duration-500
                  ${isSelected ? 'opacity-100' : 'group-hover:opacity-50'}
                `} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-2xl font-serif transition-colors
                      ${isSelected ? 'text-amber-300' : 'text-amber-500/70 group-hover:text-amber-400'}
                    `}>
                      {theme.label}
                    </h3>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center"
                        >
                          <Check size={14} className="text-black" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <p className={`font-light leading-relaxed transition-colors
                    ${isSelected ? 'text-amber-100/90' : 'text-amber-100/50'}
                  `}>
                    {theme.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedTheme && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 text-center"
            >
              <p className="text-amber-500/80 font-serif italic text-xl">
                The forge will remember your focus.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
