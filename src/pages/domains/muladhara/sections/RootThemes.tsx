import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const THEMES = [
  'GROUNDING', 'STABILITY', 'SECURITY', 'BELONGING', 'EMBODIMENT', 'ROUTINE'
];

export const RootThemesSection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const getThemeReflection = (theme: string) => {
    switch (theme) {
      case 'GROUNDING': return "Are you able to sit still without needing a distraction? Grounding is the capacity to remain present in the body.";
      case 'STABILITY': return "Does your life feel like it's built on stone, or sand? Stability allows you to weather emotional storms.";
      case 'SECURITY': return "What does 'enough' mean to you? Security is an internal state of trust, often projected onto external money or relationships.";
      case 'BELONGING': return "Do you feel you have a right to take up space? Belonging begins with self-acceptance before it involves a community.";
      case 'EMBODIMENT': return "When you are stressed, do you retreat entirely into your thoughts? Embodiment means remembering you have hands, feet, and lungs.";
      case 'ROUTINE': return "What is the structure that holds your day together? Routine is not a prison; it is the skeleton that allows the muscles of creativity to function.";
      default: return "";
    }
  };

  return (
    <section id="themes" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#0a0505]">
      
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">Modern Interpretation</h2>
          <h1 className="text-5xl md:text-6xl mb-8 text-white">What does the Root represent today?</h1>
          <p className="text-xl text-white/50 mb-12 italic">
            Which of these themes feels most relevant to your life right now?
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {THEMES.map((theme) => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(theme)}
                className={`px-6 py-3 border rounded-full font-sans tracking-[0.2em] transition-all duration-300 text-sm
                  ${selectedTheme === theme 
                    ? 'bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]' 
                    : 'bg-black/50 border-white/10 text-white/40 hover:text-white/80 hover:border-white/30'
                  }`}
              >
                {theme}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedTheme && (
              <motion.div
                key={selectedTheme}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-900/10 border border-red-900/30 p-8 rounded-2xl max-w-2xl mx-auto text-red-100 text-2xl font-serif leading-relaxed"
              >
                {getThemeReflection(selectedTheme)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* The Balance Scale (Advanced concept) */}
        <div className="mt-32 border-t border-white/10 pt-24">
          <h2 className="text-center text-4xl mb-16 text-white">The Spectrum of Grounding</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#050101] p-8 rounded-3xl border border-white/5">
              <h3 className="text-red-400 font-sans tracking-widest uppercase text-sm mb-6 text-center">Too Little Root</h3>
              <ul className="space-y-4 text-white/60 text-lg">
                <li>• Scattered attention</li>
                <li>• Highly anxious / fearful</li>
                <li>• Disconnected from the body</li>
                <li>• Unable to maintain routines</li>
                <li>• Constant financial panic</li>
              </ul>
            </div>

            <div className="bg-[#1a0505] p-8 rounded-3xl border border-red-500/30 relative transform md:-translate-y-8 shadow-[0_0_40px_rgba(220,38,38,0.1)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-sans tracking-widest uppercase px-3 py-1 rounded-full">
                Balanced
              </div>
              <h3 className="text-red-100 font-sans tracking-widest uppercase text-sm mb-6 text-center">Harmony</h3>
              <ul className="space-y-4 text-white/90 text-lg">
                <li>• Deeply grounded & present</li>
                <li>• Feeling of inherent safety</li>
                <li>• Comfortable in the physical body</li>
                <li>• Adaptable but structured</li>
                <li>• Trust in basic survival</li>
              </ul>
            </div>

            <div className="bg-[#050101] p-8 rounded-3xl border border-white/5">
              <h3 className="text-red-400 font-sans tracking-widest uppercase text-sm mb-6 text-center">Too Much Root</h3>
              <ul className="space-y-4 text-white/60 text-lg">
                <li>• Rigid and stubborn</li>
                <li>• Terrified of any change</li>
                <li>• Hoarding money or items</li>
                <li>• Sluggish / heavy lethargy</li>
                <li>• Over-attached to physical security</li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-white/40 font-sans text-sm mt-12">
            These are reflective psychological themes, not medical symptoms or diagnostic criteria. "More chakra" does not automatically mean "better." The goal is integration.
          </p>
        </div>

      </div>
    </section>
  );
};
