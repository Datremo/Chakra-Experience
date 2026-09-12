import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileInfoPopup } from '../components/MobileInfoPopup';

type EnergyCategory = 'WORK' | 'REST' | 'PLAY' | 'PURPOSE';

export const Act2_EnergyDial: React.FC = () => {
  const [budget, setBudget] = useState<Record<EnergyCategory, number>>({
    WORK: 40,
    REST: 30,
    PLAY: 15,
    PURPOSE: 15
  });

  const [activeCategory, setActiveCategory] = useState<EnergyCategory>('WORK');

  const descriptions: Record<EnergyCategory, { title: string; desc: string; color: string }> = {
    WORK: { title: 'The Forge', desc: 'Energy spent on career, survival, and obligations. Necessary for structure, but easily consumes everything if unchecked.', color: 'from-orange-600 to-red-600' },
    REST: { title: 'The Embers', desc: 'Active recovery, sleep, and stillness. This is not just stopping; it is the deliberate rebuilding of your capacity to burn.', color: 'from-blue-600 to-indigo-900' },
    PLAY: { title: 'The Sparks', desc: 'Spontaneous joy, creativity, and connection without an agenda. This keeps the fire bright and prevents it from turning bitter.', color: 'from-yellow-400 to-amber-500' },
    PURPOSE: { title: 'The Flame', desc: 'Energy directed toward meaning, growth, or spiritual cultivation. The reason you tend the fire in the first place.', color: 'from-purple-500 to-fuchsia-700' }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>, item: EnergyCategory) => {
    if (activeCategory === item) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      setBudget(prev => {
        const remaining = 100 - x * 100;
        const others = Object.keys(prev).filter(k => k !== item) as EnergyCategory[];
        const newBudget = { ...prev, [item]: x * 100 };
        const otherTotal = others.reduce((acc, k) => acc + prev[k], 0) || 1;
        others.forEach(k => {
          newBudget[k] = (prev[k] / otherTotal) * remaining;
        });
        return newBudget;
      });
    }
  };

  return (
    <section className="min-h-[100dvh] py-0 lg:py-32 relative flex items-center justify-center overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.03),transparent_60%)] pointer-events-none" />

      <div className="w-full lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 relative z-10 h-[100dvh] lg:h-full pointer-events-none lg:pointer-events-auto">
        
        {/* Left: Interactive Sliders (Absolute Fullscreen on Mobile) */}
        <div className="absolute inset-0 lg:relative lg:h-[600px] flex flex-col justify-center bg-[#050100]/80 lg:bg-[#050100]/60 backdrop-blur-md lg:border lg:border-amber-900/40 lg:rounded-3xl p-6 lg:p-12 pointer-events-auto">
          
          <div className="mb-8 lg:mb-12 text-center lg:text-left">
            <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-2 lg:mb-4">The Fire Budget</h2>
            <h1 className="text-3xl lg:text-5xl font-serif text-amber-50 mb-2">Allocate Your Heat</h1>
            <p className="text-amber-100/50 text-xs lg:text-sm italic">You have finite energy. Where does it go?</p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 w-full max-w-md mx-auto lg:mx-0">
            {(Object.keys(budget) as EnergyCategory[]).map((key) => (
              <div key={key} className="w-full">
                <div className="flex justify-between text-[10px] lg:text-xs tracking-widest text-amber-100/90 uppercase mb-2 px-1">
                  <span className={activeCategory === key ? 'text-amber-400 font-bold' : ''}>{key}</span>
                  <span className="text-amber-500 font-bold">{Math.round(budget[key])}%</span>
                </div>
                <div 
                  className={`relative h-10 lg:h-12 w-full bg-black/60 rounded-full overflow-hidden touch-none border cursor-pointer transition-colors ${activeCategory === key ? 'border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'border-white/5'}`}
                  onPointerDown={() => setActiveCategory(key)}
                  onPointerUp={() => setActiveCategory('WORK')}
                  onPointerLeave={() => setActiveCategory('WORK')}
                  onPointerMove={(e) => handlePointerMove(e, key)}
                  onClick={() => setActiveCategory(key)}
                >
                  <motion.div 
                    className={`absolute left-0 top-0 h-full bg-gradient-to-r ${descriptions[key].color} rounded-full`}
                    animate={{ width: `${budget[key]}%` }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-white/50 shadow-[0_0_10px_white] translate-x-2 lg:translate-x-3" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Info Panel (Desktop) */}
        <div className="hidden lg:flex flex-col justify-center">
          {renderContent()}
        </div>

        {/* Mobile Popup Modal */}
        <MobileInfoPopup buttonLabel="DETAILS" title="Energy Categories">
          {renderContent()}
        </MobileInfoPopup>

      </div>
    </section>
  );

  function renderContent() {
    return (
      <div className="flex flex-col h-full overflow-hidden pb-6 lg:pb-0">
        <div className="mb-6 lg:mb-8 flex-shrink-0">
          <h2 className="hidden lg:block font-sans text-amber-500/80 tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-2 lg:mb-4">Meaning</h2>
          <h1 className="text-3xl lg:text-5xl font-serif text-amber-50 mb-3 lg:mb-6">The Categories</h1>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#140600]/80 backdrop-blur-md border border-amber-900/30 p-6 lg:p-8 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.05)]"
            >
              <h3 className="text-2xl lg:text-3xl text-amber-300 font-serif mb-4">
                {descriptions[activeCategory].title}
              </h3>
              <p className="text-amber-100/80 font-light leading-relaxed text-sm lg:text-lg">
                {descriptions[activeCategory].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 p-5 bg-amber-900/10 border-l-2 border-amber-500/50 rounded-r-xl">
            <p className="text-amber-100/50 text-xs lg:text-sm font-light italic">
              "Burnout happens not when you work too much, but when you spend your entire budget on the forge and have nothing left to cultivate the flame."
            </p>
          </div>
        </div>
      </div>
    );
  }
};
