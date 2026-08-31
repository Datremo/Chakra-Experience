import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MYTHS = [
  { myth: "Chakras are physical organs.", truth: "FALSE. They are subtle-body meditation focal points." },
  { myth: "Everyone has exactly seven chakras.", truth: "OVERSIMPLIFIED. Ancient texts describe systems of 3, 5, 7, 12, or even 114 chakras depending on the lineage." },
  { myth: "Red is the universal ancient Root colour.", truth: "OVERSIMPLIFIED. The modern rainbow system (Red to Purple) was popularized in the late 20th century. Traditional texts often cite yellow (for Earth) or other colors." },
  { myth: "Certain foods automatically activate it.", truth: "NOT ESTABLISHED. Food provides biological nutrition, not magical spiritual activation." },
  { myth: "A blocked root causes physical disease.", truth: "NOT AN EVIDENCE-BASED DIAGNOSIS. While chronic stress affects the body, chakras should not be used to medically diagnose physical illnesses." }
];

export const EvidenceAndMythsSection: React.FC = () => {
  const [activeMythIdx, setActiveMythIdx] = useState<number | null>(null);

  return (
    <section id="evidence" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020101]">
      
      <div className="max-w-7xl mx-auto w-full">
        
        {/* The Evidence Room */}
        <div className="text-center mb-24">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">Intellectual Honesty</h2>
          <h1 className="text-5xl md:text-7xl mb-12 text-white">The Evidence Room</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          
          <div className="bg-[#1a0f05] p-8 border border-amber-700/30 rounded-2xl">
            <h3 className="text-amber-400 font-sans tracking-widest uppercase text-xs mb-6">Tradition</h3>
            <p className="text-white/80 text-lg">"Earth is associated with Mūlādhāra."</p>
          </div>

          <div className="bg-[#051a0f] p-8 border border-emerald-700/30 rounded-2xl">
            <h3 className="text-emerald-400 font-sans tracking-widest uppercase text-xs mb-6">Modern Interpretation</h3>
            <p className="text-white/80 text-lg">"The Root Chakra represents financial security."</p>
          </div>

          <div className="bg-[#050f1a] p-8 border border-blue-700/30 rounded-2xl">
            <h3 className="text-blue-400 font-sans tracking-widest uppercase text-xs mb-6">Research</h3>
            <p className="text-white/80 text-lg">"Mindfulness and grounding practices have measurable effects on the nervous system."</p>
          </div>

          <div className="bg-red-900/10 p-8 border border-red-700/30 rounded-2xl">
            <h3 className="text-red-400 font-sans tracking-widest uppercase text-xs mb-6">Not Established</h3>
            <p className="text-white/80 text-lg">"Scientifically measurable chakra activation percentages."</p>
          </div>

        </div>

        {/* Myths & Misconceptions */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-8">Myths & Misconceptions</h2>
          <p className="text-xl text-white/50 italic">Click a card to reveal the truth.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {MYTHS.map((m, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveMythIdx(activeMythIdx === idx ? null : idx)}
              className="relative w-80 h-48 cursor-pointer [perspective:1000px]"
            >
              <motion.div
                animate={{ rotateY: activeMythIdx === idx ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-full h-full relative [transform-style:preserve-3d]"
              >
                {/* Front (Myth) */}
                <div className="absolute inset-0 bg-[#0a0505] border border-white/10 rounded-2xl flex items-center justify-center p-6 text-center [backface-visibility:hidden] hover:border-red-500/50 transition-colors">
                  <p className="text-white/80 text-lg">{m.myth}</p>
                </div>

                {/* Back (Truth) */}
                <div className="absolute inset-0 bg-red-900/20 border border-red-500 rounded-2xl flex items-center justify-center p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                  <p className="text-red-100 text-sm leading-relaxed">{m.truth}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
