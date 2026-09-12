import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';
import { useManipuraData } from '../../../../data/manipuraData';
import { MobileInfoPopup } from '../components/MobileInfoPopup';

type DeityKey = 'ram' | 'rudra' | 'lakini' | 'kundalini';
const DEITIES: DeityKey[] = ['ram', 'rudra', 'lakini', 'kundalini'];

export const DeitiesSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeKey = DEITIES[activeIndex];
  
  // Cinematic Reveal Stages: 0: Silhouette, 1: Form, 2: Radiance
  const [revealStage, setRevealStage] = useState(0);

  useEffect(() => {
    setRevealStage(0);
    const t1 = setTimeout(() => setRevealStage(1), 800);
    const t2 = setTimeout(() => setRevealStage(2), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [activeIndex]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % DEITIES.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + DEITIES.length) % DEITIES.length);

  return (
    <section className="min-h-[100dvh] py-0 lg:py-32 bg-black lg:bg-[#040100] relative flex items-center justify-center overflow-hidden">
      <div className="w-full lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 relative z-10 h-[100dvh] lg:h-full pointer-events-none lg:pointer-events-auto">
        
        {/* Left: Cinematic Carousel (Absolute Fullscreen on Mobile) */}
        <div className="absolute inset-0 lg:relative lg:h-[600px] flex items-center justify-center bg-[#040100]/60 backdrop-blur-md lg:border lg:border-amber-500/20 lg:shadow-[0_0_30px_rgba(245,158,11,0.05)] lg:rounded-3xl overflow-hidden pointer-events-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              {/* Silhouette Stage */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: revealStage === 0 ? 1 : 0 }}
                className="absolute inset-0 flex items-center justify-center bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)]"
              >
                <div className="w-64 h-64 bg-amber-900/20 rounded-full blur-2xl animate-pulse" />
              </motion.div>

              {/* Form Stage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: revealStage >= 1 ? 1 : 0, y: revealStage >= 1 ? 0 : 20 }}
                transition={{ duration: 1.5, type: 'spring' }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                {activeKey === 'ram' && (
                  <div className="text-amber-700/50 font-serif text-[15rem] leading-none drop-shadow-[0_0_50px_rgba(245,158,11,0.3)]">♈︎</div>
                )}
                {activeKey === 'rudra' && (
                  <div className="w-48 h-48 border-4 border-blue-900/50 rounded-full flex items-center justify-center rotate-45 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                    <div className="w-32 h-32 border-4 border-blue-900/50 rounded-full" />
                  </div>
                )}
                {activeKey === 'lakini' && (
                  <div className="w-48 h-48 rotate-45 bg-red-900/20 border-2 border-red-900/50 shadow-[0_0_50px_rgba(239,68,68,0.3)]" />
                )}
                {activeKey === 'kundalini' && (
                  <svg viewBox="0 0 100 200" className="w-32 h-64 opacity-70">
                    <path d="M50 180 Q20 150 50 100 T50 20" fill="none" stroke="#f59e0b" strokeWidth="6" className="drop-shadow-[0_0_10px_#f59e0b]" />
                    <circle cx="50" cy="100" r="12" fill="none" stroke="#ef4444" strokeWidth="3" />
                  </svg>
                )}
              </motion.div>

              {/* Radiance Stage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: revealStage === 2 ? 1 : 0 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                {activeKey === 'ram' && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.25),transparent_60%)]" />}
                {activeKey === 'rudra' && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_60%)]" />}
                {activeKey === 'lakini' && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.2),transparent_60%)]" />}
                {activeKey === 'kundalini' && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.25),transparent_70%)]" />}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls Overlay */}
          <div className="absolute bottom-24 lg:bottom-10 left-0 w-full flex justify-between px-8 lg:px-12 items-center pointer-events-auto">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-amber-500/30 bg-black/40 backdrop-blur-sm text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors"
            >
              ←
            </button>
            <div className="flex gap-2">
              {DEITIES.map((d, i) => (
                <div key={d} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-amber-500 scale-125 shadow-[0_0_10px_#f59e0b]' : 'bg-amber-900/40'}`} />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-amber-500/30 bg-black/40 backdrop-blur-sm text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Right: Info Panel */}
        <div className="hidden lg:flex flex-col justify-center">
          {renderContent()}
        </div>

        {/* Mobile Popup Modal */}
        <MobileInfoPopup buttonLabel="SUMMON ENTITY" title="The Inhabitants">
          {renderContent()}
        </MobileInfoPopup>

      </div>
    </section>
  );

  function renderContent() {
    return (
      <div className="flex flex-col h-full">
        <div className="mb-6 lg:mb-8 flex-shrink-0">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-2 lg:mb-4">The Inhabitants</h2>
          <h1 className="text-3xl lg:text-5xl font-serif text-amber-50 mb-2 lg:mb-4">Forces of the Forge</h1>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar pb-6 lg:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 lg:space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-serif text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                {manipuraData.deities[activeKey].title}
              </h2>

              <div className="bg-[#140600]/80 backdrop-blur-md border border-amber-900/30 p-5 lg:p-6 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                <div className="flex items-center gap-3 lg:gap-4 mb-3">
                  <SourceBadge type="TRADITION" />
                </div>
                <p className="text-amber-100/80 font-light leading-relaxed text-sm lg:text-base">
                  {manipuraData.deities[activeKey].traditional}
                </p>
              </div>

              <div className="bg-[#140600]/80 backdrop-blur-md border border-amber-900/30 p-5 lg:p-6 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                <div className="flex items-center gap-3 lg:gap-4 mb-3">
                  <SourceBadge type="SYMBOLIC" />
                </div>
                <p className="text-amber-100/80 font-light leading-relaxed italic text-sm lg:text-base">
                  {manipuraData.deities[activeKey].meaning}
                </p>
              </div>

              {(manipuraData.deities[activeKey] as any).modern && (
                <div className="bg-[#140600]/80 backdrop-blur-md border border-amber-900/30 p-5 lg:p-6 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                  <div className="flex items-center gap-3 lg:gap-4 mb-3">
                    <SourceBadge type="MODERN" />
                  </div>
                  <p className="text-amber-100/80 font-light leading-relaxed text-sm lg:text-base">
                    {(manipuraData.deities[activeKey] as any).modern}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }
};
