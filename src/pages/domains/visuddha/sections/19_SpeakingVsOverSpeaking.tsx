import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const SpeakingVsOverSpeakingSection: React.FC = () => {
  const [level, setLevel] = useState(50); // 0 to 100

  // Calculate visual properties based on level
  let label = "Balanced Expression";
  let desc = "Clear, intentional communication.";
  let glow = "shadow-[0_0_20px_rgba(34,211,238,0.5)]";
  let waveOpacity = 0.5;
  let waveSpeed = 2;
  let textColor = "text-cyan-400";

  if (level < 20) {
    label = "Suppression / Silence";
    desc = "Withholding truth out of fear or avoidance.";
    glow = "shadow-none";
    waveOpacity = 0.1;
    waveSpeed = 10;
    textColor = "text-slate-500";
  } else if (level > 80) {
    label = "Over-Speaking / Noise";
    desc = "Talking to fill space. Not listening. Dominating.";
    glow = "shadow-[0_0_50px_rgba(220,38,38,0.3)]";
    waveOpacity = 0.9;
    waveSpeed = 0.5;
    textColor = "text-red-400";
  } else if (level < 40) {
    label = "Hesitation";
    desc = "Speaking, but lacking conviction.";
    glow = "shadow-[0_0_10px_rgba(34,211,238,0.2)]";
    textColor = "text-cyan-600";
  } else if (level > 60) {
    label = "Forceful";
    desc = "Speaking loudly, perhaps faster than necessary.";
    glow = "shadow-[0_0_30px_rgba(245,158,11,0.2)]";
    textColor = "text-orange-400";
  }

  return (
    <section className="min-h-screen py-16 flex flex-col items-center justify-center relative px-6">
      
      <div className="text-center z-10 mb-8">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Volume</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Speaking vs. Noise</h1>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center z-10">
        
        {/* The Visualizer */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-8">
          {/* Abstract Waveform based on level */}
          <div className={`w-32 h-32 rounded-full border flex items-center justify-center transition-all duration-500 ${glow} ${
            level > 80 ? 'border-red-500 bg-red-950/20' : 
            level < 20 ? 'border-slate-600 bg-slate-900/20' : 
            'border-cyan-400 bg-cyan-950/20'
          }`}>
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full border ${
                  level > 80 ? 'border-red-500/30' : 
                  level < 20 ? 'border-slate-500/10' : 
                  'border-cyan-400/30'
                }`}
                style={{
                  width: `${50 + (level / 100) * 150}%`,
                  height: `${50 + (level / 100) * 150}%`,
                }}
                animate={{ 
                  scale: [1, 1 + (level/100) * 0.5, 1],
                  rotate: [0, (level > 80 ? 180 : 90)],
                  borderRadius: level > 80 ? ['50%', '30%', '50%'] : '50%'
                }}
                transition={{
                  duration: waveSpeed + (i * 0.2),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Center dot */}
            <div className={`w-4 h-4 rounded-full ${
              level > 80 ? 'bg-red-400' : 
              level < 20 ? 'bg-slate-600' : 
              'bg-cyan-300'
            }`} />
          </div>
        </div>

        {/* The Slider */}
        <div className="w-full max-w-md mb-12">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none accent-cyan-400 hover:accent-cyan-300"
          />
          <div className="flex justify-between mt-4 text-[10px] font-sans tracking-widest text-white/40 uppercase">
            <span>Silence</span>
            <span>Balanced</span>
            <span>Noise</span>
          </div>
        </div>

        {/* State readout */}
        <div className="text-center h-24">
          <h3 className={`font-serif text-2xl transition-colors duration-300 mb-2 ${textColor}`}>
            {label}
          </h3>
          <p className="text-white/60 font-light max-w-sm mx-auto text-sm transition-opacity duration-300">
            {desc}
          </p>
        </div>

      </div>

    </section>
  );
};
