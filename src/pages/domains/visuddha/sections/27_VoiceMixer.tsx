import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const VoiceMixerSection: React.FC = () => {
  const [voice, setVoice] = useState(50);
  const [listening, setListening] = useState(50);
  const [silence, setSilence] = useState(50);
  const [reflection, setReflection] = useState(50);

  // Harmony logic: We want (Voice ≈ Listening) and (Silence ≈ Reflection).
  // Extreme highs without their counterpart are dissonant.
  const activeBalance = 100 - Math.abs(voice - listening);
  const passiveBalance = 100 - Math.abs(silence - reflection);
  const overallBalance = (activeBalance + passiveBalance) / 2;

  // Visual cues based on balance
  let statusText = "Harmonious Resonance";
  let statusColor = "text-cyan-400";
  let description = "Output matches input. Action is grounded in stillness.";
  let glowColor = "rgba(34,211,238,0.5)";

  if (overallBalance < 50) {
    statusText = "Severe Dissonance";
    statusColor = "text-red-400";
    description = "The throat is out of phase. Imbalance causes exhaustion and misunderstanding.";
    glowColor = "rgba(239,68,68,0.3)";
  } else if (overallBalance < 80) {
    statusText = "Slight Imbalance";
    statusColor = "text-blue-300";
    description = "Leaning too heavily into one mode. Seek equilibrium.";
    glowColor = "rgba(147,197,253,0.3)";
  }

  // If Voice > Listening heavily
  if (voice - listening > 40) {
    description = "Dominating the space. Speaking without receiving.";
  } else if (listening - voice > 40) {
    description = "Over-absorbing. Failing to assert your own presence.";
  } else if (silence - reflection > 40) {
    description = "Dissociation. Quiet, but not processing anything.";
  } else if (reflection - silence > 40) {
    description = "Over-thinking without allowing the mind to rest.";
  }

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6 bg-[#000103]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Equilibrium</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Voice Mixer</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-lg mx-auto">
          Viśuddha requires dynamic balance. Speaking demands listening. Outer expression requires inner silence. Adjust the sliders to find harmony.
        </p>
      </div>

      <div className="w-full max-w-5xl relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Sliders Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pair 1: Communication */}
          <div className="p-6 border border-white/10 rounded-2xl bg-white/5 flex flex-col gap-6">
            <h3 className="font-sans text-xs tracking-widest text-white/40 uppercase text-center border-b border-white/10 pb-4">Communication</h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[10px] font-sans tracking-widest text-blue-400 uppercase">
                <span>Speaking</span>
                <span>{voice}%</span>
              </div>
              <input type="range" min="0" max="100" value={voice} onChange={e => setVoice(parseInt(e.target.value))} className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none accent-blue-400" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[10px] font-sans tracking-widest text-cyan-400 uppercase">
                <span>Listening</span>
                <span>{listening}%</span>
              </div>
              <input type="range" min="0" max="100" value={listening} onChange={e => setListening(parseInt(e.target.value))} className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none accent-cyan-400" />
            </div>
          </div>

          {/* Pair 2: Inner State */}
          <div className="p-6 border border-white/10 rounded-2xl bg-white/5 flex flex-col gap-6">
            <h3 className="font-sans text-xs tracking-widest text-white/40 uppercase text-center border-b border-white/10 pb-4">Inner State</h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[10px] font-sans tracking-widest text-indigo-400 uppercase">
                <span>Reflection</span>
                <span>{reflection}%</span>
              </div>
              <input type="range" min="0" max="100" value={reflection} onChange={e => setReflection(parseInt(e.target.value))} className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none accent-indigo-400" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[10px] font-sans tracking-widest text-teal-400 uppercase">
                <span>Silence</span>
                <span>{silence}%</span>
              </div>
              <input type="range" min="0" max="100" value={silence} onChange={e => setSilence(parseInt(e.target.value))} className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none accent-teal-400" />
            </div>
          </div>

        </div>

        {/* Master Output Visualization */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 border border-white/10 rounded-full flex items-center justify-center mb-8 overflow-hidden bg-black/50">
            
            <motion.div 
              className="absolute w-full h-full rounded-full blur-2xl mix-blend-screen"
              animate={{
                background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Dynamic shape based on harmony */}
            <motion.div
              className={`border border-white/50 rounded-[40%] ${overallBalance > 80 ? 'shadow-[0_0_40px_rgba(34,211,238,0.8)]' : ''}`}
              animate={{
                width: `${Math.max(50, overallBalance * 2.5)}px`,
                height: `${Math.max(50, overallBalance * 2.5)}px`,
                rotate: [0, 360],
                borderRadius: overallBalance > 80 ? ['50%', '50%', '50%'] : ['30%', '50%', '40%']
              }}
              transition={{ duration: overallBalance > 80 ? 10 : 2, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="absolute text-2xl font-serif text-white/80 z-10 mix-blend-overlay font-bold">
              {overallBalance.toFixed(0)}%
            </div>

          </div>

          <div className="text-center h-24">
            <h3 className={`font-serif text-2xl mb-2 transition-colors ${statusColor}`}>{statusText}</h3>
            <p className="text-white/60 text-sm max-w-sm mx-auto font-light leading-relaxed">
              {description}
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
