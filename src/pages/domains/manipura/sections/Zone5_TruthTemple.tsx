import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileInfoPopup } from '../components/MobileInfoPopup';

export const Act4_TruthTemple: React.FC = () => {
  const [activeRune, setActiveRune] = useState<number | null>(null);

  const runes = [
    { myth: "The fire must always burn bright.", truth: "Sustainable warmth is better than a consuming inferno." },
    { myth: "Power means control over others.", truth: "True power is agency over yourself." },
    { myth: "Anger is toxic and must be suppressed.", truth: "Anger is heat; it is information about your boundaries." },
    { myth: "You must earn your right to exist.", truth: "Your existence is the only fuel you need." }
  ];

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-0 lg:p-12 overflow-hidden snap-start">
      {/* Background Image (Single, non-overlapping, heavily dimmed) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-screen"
        style={{ backgroundImage: 'url(/assets/images/manipura/manipura_sun_temple_1789217690723.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050100] via-[#050100]/60 to-[#050100] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 h-[100dvh] lg:h-auto pointer-events-none lg:pointer-events-auto">
        
        {/* Left: Interactive Grid (Absolute Fullscreen on Mobile) */}
        <div className="absolute inset-0 lg:relative lg:h-[600px] flex flex-col justify-center bg-transparent p-6 lg:p-0 pointer-events-auto">
          
          <div className="text-center lg:text-left mb-8 lg:mb-12">
            <div className="text-[10px] tracking-[0.4em] uppercase text-amber-500/80 mb-2 font-bold">
              Act IV: The Temple of Discernment
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-amber-50 mb-4 drop-shadow-md">
              Can the story survive the light?
            </h2>
            <p className="text-amber-100/70 text-sm md:text-lg">
              Tap the floating runes to separate modern myths from sustainable inner truth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-8 w-full max-w-lg mx-auto lg:mx-0">
            {runes.map((rune, idx) => (
              <div 
                key={idx}
                className="relative aspect-square cursor-pointer group"
                onClick={() => setActiveRune(idx)}
              >
                {/* Made tiles completely opaque, removed transparency issue */}
                <div className={`absolute inset-0 border rounded-2xl transition-all duration-300 flex items-center justify-center p-4 text-center shadow-xl
                  ${activeRune === idx 
                    ? 'bg-[#1a0800] border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.4)] scale-105 z-10' 
                    : 'bg-[#0a0300] border-amber-900/50 hover:border-amber-500/50 hover:bg-[#0f0400]'
                  }
                `}>
                  <div className="text-amber-500/80 text-xs lg:text-sm uppercase tracking-widest leading-relaxed">
                    {rune.myth}
                  </div>
                  
                  {activeRune === idx && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]" />
                  )}
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
        <MobileInfoPopup buttonLabel="REVEAL TRUTH" title="The Truth">
          {renderContent()}
        </MobileInfoPopup>

      </div>
    </section>
  );

  function renderContent() {
    return (
      <div className="flex flex-col h-full overflow-hidden pb-6 lg:pb-0">
        <div className="mb-6 lg:mb-8 flex-shrink-0">
          <h2 className="hidden lg:block font-sans text-amber-500/80 tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-2 lg:mb-4">Illumination</h2>
          <h1 className="text-3xl lg:text-5xl font-serif text-amber-50 mb-3 lg:mb-6">The Hidden Truth</h1>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeRune !== null ? (
              <motion.div
                key={activeRune}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#140600] border border-amber-500/50 p-6 lg:p-8 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-8xl font-serif text-amber-500">"</span>
                </div>
                
                <h3 className="text-xs font-sans tracking-[0.2em] text-amber-500/60 uppercase mb-4">
                  The Myth: {runes[activeRune].myth}
                </h3>
                
                <p className="text-amber-100 font-serif text-xl lg:text-3xl leading-snug drop-shadow-md">
                  {runes[activeRune].truth}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 border border-dashed border-amber-900/30 rounded-3xl opacity-50"
              >
                <div className="w-12 h-12 mb-4 rounded-full border border-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-500/40 text-xl font-serif">👁</span>
                </div>
                <p className="font-sans text-xs tracking-widest text-amber-500/60 uppercase">
                  Select a myth to reveal the truth
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
};
