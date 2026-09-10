import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SymptomsOfImbalanceSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const symptoms = [
    { title: "Emotional Numbness", desc: "Feeling completely disconnected from your feelings, flat, or unable to experience joy or sadness." },
    { title: "Guilt & Shame", desc: "A constant underlying feeling that you are bad, wrong, or undeserving of pleasure." },
    { title: "Creative Block", desc: "Total inability to create, or feeling paralyzed by perfectionism and fear of judgment." },
    { title: "Addiction", desc: "Using food, sex, substances, or drama to artificially stimulate the senses and avoid feeling." },
    { title: "Over-Emotionality", desc: "Being completely swept away by the current. No emotional regulation. Constant dramatic outbursts." },
    { title: "Lower Back Pain", desc: "Physical manifestation of stuck energy, tight hips, and rigid pelvic floor." }
  ];

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#1a0a05]">
      
      {/* Imbalanced Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.2),transparent_50%)]" />
        {/* Erratic noise/blur */}
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-red-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Diagnosis
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-12 drop-shadow-xl"
        >
          Symptoms of Imbalance
        </motion.h2>

        <div className="relative w-full max-w-3xl mx-auto h-[400px]">
          
          <div className="absolute inset-0 flex flex-wrap justify-center content-center gap-4">
            {symptoms.map((symp, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveNode(i)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 font-sans tracking-widest text-sm uppercase ${
                  activeNode === i 
                    ? 'bg-red-900/80 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]' 
                    : 'bg-black/40 border-red-900/50 text-red-300/60 hover:border-red-500/50 hover:text-red-200'
                }`}
              >
                {symp.title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {activeNode !== null && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl p-8 rounded-3xl border border-red-500/30"
              >
                <h3 className="text-xl font-serif text-red-400 mb-2">{symptoms[activeNode].title}</h3>
                <p className="text-white/80 font-light">{symptoms[activeNode].desc}</p>
                <button 
                  onClick={(e) => { e.stopPropagation(); setActiveNode(null); }}
                  className="absolute top-4 right-4 text-white/50 hover:text-white"
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
