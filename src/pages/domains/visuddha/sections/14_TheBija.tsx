import React from 'react';
import { motion } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const TheBijaSection: React.FC = () => {
  const data = useVisuddhaData();

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#02050a]">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Concentration Practice</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Core Vibration</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-5xl w-full z-10">
        
        {/* Left: The Visualizer */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center h-[400px]">
          
          {/* Concentric resonating rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-cyan-400/20"
                style={{ width: `${(i + 1) * 20}%`, height: `${(i + 1) * 20}%` }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
              />
            ))}
          </div>

          {/* The Bija in the center */}
          <div className="relative z-10 flex flex-col items-center justify-center bg-cyan-950/40 w-48 h-48 rounded-full border border-cyan-500/50 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            <span className="text-7xl font-serif text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              {data.mandala.bija.sanskrit}
            </span>
            <span className="font-sans text-sm tracking-[0.3em] text-cyan-300 uppercase mt-4">
              {data.mandala.bija.transliteration}
            </span>
          </div>

        </div>

        {/* Right: Explanation */}
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-lg text-white/70 font-light leading-relaxed">
            The Bīja (seed) mantra of Viśuddha is <strong className="text-cyan-300 font-normal">HAṂ</strong>.
          </p>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            In tantric meditation, one does not merely visualize the throat; one visualizes a pure white space (Ākāśa) within the throat, and within that space, the radiant, resonating syllable HAṂ.
          </p>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            It is the phonetic embodiment of space itself—an open, expansive breath sound ('H') vibrating into the nasal resonance ('M').
          </p>

          <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-900/30">
            <h3 className="font-sans text-xs tracking-widest text-cyan-500 uppercase mb-3">Practice</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Close your eyes. Visualize a vast, clear, midnight-blue space inside your throat. Inhale silently. As you exhale, internally hum the sound <em>HAṂ</em>. Feel the vibration center in the throat and expand outward.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
