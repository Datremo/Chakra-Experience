import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useManipuraData } from '../../../../data/manipuraData';
import { MobileInfoPopup } from '../components/MobileInfoPopup';

export const TenPetalsSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activePetal, setActivePetal] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="min-h-[100dvh] py-0 lg:py-32 bg-black lg:bg-[#0a0300]/80 lg:backdrop-blur-sm relative overflow-hidden flex items-center justify-center">
      <div className="w-full lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 relative z-10 h-[100dvh] lg:h-full pointer-events-none lg:pointer-events-auto">
        
        {/* Left: Interactive Rotating Ring (Absolute Fullscreen on Mobile) */}
        <div className="absolute inset-0 lg:relative lg:h-[600px] flex items-center justify-center pointer-events-auto" ref={containerRef}>
          
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative cursor-grab active:cursor-grabbing mt-[-5vh] lg:mt-0"
            style={{ touchAction: "none" }}
            initial={{ rotate: 0 }}
          >
            {manipuraData.mandala.petalLetters.map((petal, i) => {
              const angle = (i * 36) * (Math.PI / 180);
              // Calculate radius so it fits nicely
              const radius = window.innerWidth < 1024 ? 130 : 180;
              const x = Math.sin(angle) * radius;
              const y = -Math.cos(angle) * radius;

              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${i * 36}deg)` }}
                >
                  <button
                    onClick={() => setActivePetal(i)}
                    className={`relative w-16 h-20 lg:w-20 lg:h-24 flex items-center justify-center transition-all duration-300
                      ${activePetal === i ? 'scale-125 z-20' : 'hover:scale-110 z-10'}
                    `}
                  >
                    {/* Petal Shape */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                      <path 
                        d="M50 100 C30 80 10 50 50 0 C90 50 70 80 50 100" 
                        fill={activePetal === i ? 'rgba(245,158,11,0.15)' : 'rgba(10,5,0,0.8)'}
                        stroke={activePetal === i ? '#f59e0b' : 'rgba(245,158,11,0.4)'}
                        strokeWidth={activePetal === i ? "2" : "1"}
                      />
                    </svg>
                    
                    {/* Text (aligned upright relative to the screen initially) */}
                    <span 
                      className={`relative font-serif text-2xl lg:text-3xl transition-colors duration-300
                        ${activePetal === i ? 'text-amber-300 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]' : 'text-amber-600'}
                      `}
                      style={{ transform: `rotate(${-i * 36}deg)` }}
                    >
                      {petal.devanagari}
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Center Bija */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] pointer-events-none">
              <span className="text-4xl text-amber-500 font-serif">रं</span>
            </div>
          </motion.div>
          
          <p className="absolute bottom-24 lg:bottom-10 text-amber-500/40 text-[10px] lg:text-xs tracking-[0.2em] uppercase lg:block hidden">Drag to rotate • Click to examine</p>
        </div>

        {/* Right: Info Panel */}
        <div className="hidden lg:flex flex-col justify-center">
          {renderContent()}
        </div>

        {/* Mobile Popup Modal */}
        <MobileInfoPopup buttonLabel="EXAMINE PETAL" title="The Ten Vibrations">
          {renderContent()}
        </MobileInfoPopup>

      </div>
    </section>
  );

  function renderContent() {
    return (
      <AnimatePresence mode="wait">
        {activePetal !== null ? (
          <motion.div
            key={activePetal}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-full bg-[#140600]/80 backdrop-blur-md border border-amber-900/40 p-10 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.05)] overflow-y-auto max-h-full custom-scrollbar flex flex-col"
          >
            <div className="flex justify-between items-start mb-8 flex-shrink-0">
              <div>
                <h3 className="text-6xl text-amber-400 font-serif mb-2 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                  {manipuraData.mandala.petalLetters[activePetal].devanagari}
                </h3>
                <p className="text-amber-200/60 font-sans tracking-[0.3em] uppercase text-xl">
                  {manipuraData.mandala.petalLetters[activePetal].iast}
                </p>
              </div>
              <button 
                onClick={() => setActivePetal(null)}
                className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 flex-shrink-0">
              <div className="pt-6 border-t border-amber-900/30">
                <p className="font-sans text-xs tracking-widest text-amber-500/60 uppercase mb-2">Vibrational Seed</p>
                <p className="text-amber-100/80 font-light leading-relaxed text-base">
                  A phonetic vibration mapped to the Manipura lotus, considered a fundamental acoustic root of the universe.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-full h-full flex flex-col items-center justify-center text-center px-12 py-16 border border-dashed border-amber-900/30 rounded-3xl opacity-50"
          >
            <div className="w-16 h-16 mb-6 rounded-full border border-amber-500/20 flex items-center justify-center">
              <span className="text-amber-500/40 text-2xl font-serif">ॐ</span>
            </div>
            <h2 className="text-2xl font-serif text-amber-500/40 mb-4 hidden lg:block">The Ten Vibrations</h2>
            <p className="font-sans text-xs tracking-widest text-amber-500/60 uppercase text-center">
              Select a petal to view its syllable
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
};
