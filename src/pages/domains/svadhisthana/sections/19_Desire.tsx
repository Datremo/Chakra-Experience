import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const DesireSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scenarios = [
    "â€œI want to buy this.”",
    "â€œI want someone to like me.”",
    "â€œI want pleasure.”",
    "â€œI want to escape.”"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center px-4 md:px-6 flex items-center justify-center relative bg-black overflow-hidden">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/svadhisthana/svadhisthana_surface_droplet_1788966630680.jpg" 
          alt="Surface Droplet Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B19] via-transparent to-[#060B19]" />
      </div>

      {/* Dynamic Mouse Tracker Glow */}
      <motion.div 
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-orange-600/20 blur-[80px] md:blur-[100px] pointer-events-none mix-blend-screen z-0"
        animate={{ x: mousePos.x - (window.innerWidth < 768 ? 128 : 192), y: mousePos.y - (window.innerWidth < 768 ? 128 : 192) }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
      />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        
        <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Translation</h2>
        <h1 className="text-4xl md:text-6xl mb-12 font-serif text-white max-w-3xl mx-auto leading-tight drop-shadow-lg">
          {svadhisthanaData.themes.desire.headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-teal-100/70 mb-16 italic font-light drop-shadow-md">
          There is a space between feeling a desire and acting on it. The practice is not to kill the desire, but to decode it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          {scenarios.map((scenario) => (
            <button
              key={scenario}
              onClick={() => setSelectedScenario(scenario)}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 font-serif text-lg overflow-hidden
                ${selectedScenario === scenario 
                  ? 'bg-orange-900/40 border-orange-500 text-orange-50 shadow-[0_0_30px_rgba(249,115,22,0.3)] scale-105' 
                  : 'bg-black/40 border-white/10 text-white/60 hover:bg-white/5 hover:border-white/30 hover:text-white hover:scale-105'
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10">{scenario}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedScenario && (
            <motion.div
              key={selectedScenario}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="mt-12 bg-black/60 backdrop-blur-xl p-10 rounded-3xl border border-teal-500/30 max-w-3xl mx-auto shadow-[0_0_40px_rgba(20,184,166,0.15)] relative overflow-hidden"
            >
              {/* Internal glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_50%)]" />
              
              <h3 className="relative z-10 text-xl text-teal-300 font-sans tracking-widest uppercase mb-8">What is this desire actually asking for?</h3>
              <div className="relative z-10 flex flex-wrap justify-center gap-4">
                {svadhisthanaData.themes.desire.options.map((opt: string, i: number) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={opt} 
                    className="px-6 py-3 rounded-full border border-teal-500/50 text-teal-100 bg-teal-900/40 text-sm font-sans shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:bg-teal-800/60 hover:scale-110 transition-all cursor-default"
                  >
                    {opt}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
