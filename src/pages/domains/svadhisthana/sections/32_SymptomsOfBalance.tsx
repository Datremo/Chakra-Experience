import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SymptomsOfBalanceSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const symptoms = [
    { title: "Fluidity", desc: "Easily adapting to change without massive resistance. When plans fall through, you pivot gracefully." },
    { title: "Healthy Boundaries", desc: "Knowing exactly what you want and don't want, and expressing it without guilt." },
    { title: "Creative Flow", desc: "Creating for the joy of it. Ideas flow naturally, and you execute them without crippling perfectionism." },
    { title: "Emotional Literacy", desc: "Feeling deep emotions (even grief and anger) fully, letting them pass, and not being controlled by them." },
    { title: "Joyful Sensation", desc: "Enjoying food, touch, and pleasure in a healthy, nourishing way without addiction or shame." },
    { title: "Vulnerability", desc: "Able to be deeply intimate and emotionally naked with trusted others." }
  ];

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-black">
      
      {/* Balanced Background effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/svadhisthana/svadhisthana_balanced_aura_1788973173552.jpg" 
          alt="Balanced Aura" 
          className="w-full h-full object-cover mix-blend-screen opacity-50 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Diagnosis
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-12 drop-shadow-xl"
        >
          Symptoms of Balance
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
                    ? 'bg-orange-500/80 border-orange-300 text-white shadow-[0_0_30px_rgba(249,115,22,0.6)]' 
                    : 'bg-black/50 border-orange-500/30 text-orange-200/80 hover:border-orange-400 hover:text-white backdrop-blur-sm'
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
                className="absolute bottom-0 left-0 right-0 bg-orange-950/80 backdrop-blur-xl p-8 rounded-3xl border border-orange-400/50 shadow-2xl"
              >
                <h3 className="text-xl font-serif text-orange-300 mb-2">{symptoms[activeNode].title}</h3>
                <p className="text-white/90 font-light">{symptoms[activeNode].desc}</p>
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
