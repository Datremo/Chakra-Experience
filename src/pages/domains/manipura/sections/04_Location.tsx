import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useManipuraData } from '../../../../data/manipuraData';
import { MobileInfoPopup } from '../components/MobileInfoPopup';

export const LocationSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activeTab, setActiveTab] = useState<'physical' | 'traditional' | 'modern'>('traditional');
  const [markerArrived, setMarkerArrived] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMarkerArrived(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[100dvh] py-0 lg:py-32 bg-black lg:bg-[#030100] relative overflow-hidden flex items-center justify-center">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.03),transparent_60%)] pointer-events-none" />

      <div className="w-full lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 relative z-10 h-[100dvh] lg:h-full pointer-events-none lg:pointer-events-auto">
        
        {/* Left: Visual Map (Absolute Fullscreen on Mobile) */}
        <div className="absolute inset-0 lg:relative lg:h-[600px] flex items-center justify-center bg-black/40 lg:bg-[#050100]/60 lg:backdrop-blur-md lg:border lg:border-amber-900/40 lg:rounded-3xl overflow-hidden pointer-events-auto">
          
          {/* Subtle Body Outline (Simplified SVG) */}
          <svg viewBox="0 0 200 600" className="h-[90%] opacity-20">
            <path 
              d="M100 50 C110 50, 115 55, 115 70 C115 85, 110 90, 100 90 C90 90, 85 85, 85 70 C85 55, 90 50, 100 50 Z" 
              fill="none" stroke="currentColor" strokeWidth="2" 
            />
            <path 
              d="M100 90 L100 110 C120 110, 140 120, 145 140 C145 160, 135 250, 135 250 L125 250 C125 250, 130 150, 120 150 L120 300 C130 400, 130 500, 130 550 L110 550 L110 350 L100 320 L90 350 L90 550 L70 550 C70 500, 70 400, 80 300 L80 150 C70 150, 75 250, 75 250 L65 250 C65 250, 55 160, 55 140 C60 120, 80 110, 100 110" 
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
            />
          </svg>

          {/* Central Channel (Sushumna) */}
          <div className="absolute top-[15%] bottom-[15%] left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-amber-900/30 to-transparent" />

          {/* Descending Marker */}
          <motion.div 
            initial={{ top: '15%', scale: 1 }}
            animate={{ top: '45%' }}
            transition={{ duration: 2, ease: "anticipate" }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
          >
            <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_20px_#f59e0b] animate-pulse" />
            {!markerArrived && (
              <div className="w-[1px] h-32 bg-gradient-to-b from-amber-500/50 to-transparent -mt-2 opacity-50" />
            )}
          </motion.div>

          {/* Glow at Navel when arrived */}
          <AnimatePresence>
            {markerArrived && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                {/* Physical Layer Visualization */}
                {activeTab === 'physical' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-64 h-64 border border-blue-500/25 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
                    <p className="absolute text-[8px] tracking-[0.2em] text-blue-400 uppercase -right-16">Solar Plexus Network</p>
                  </motion.div>
                )}

                {/* Traditional Layer Visualization */}
                {activeTab === 'traditional' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-32 h-32 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/30 rotate-180 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                       <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]" />
                    </div>
                  </motion.div>
                )}

                {/* Modern Layer Visualization */}
                {activeTab === 'modern' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Right: Info Panel */}
        <div className="hidden lg:flex flex-col justify-center">
          {renderContent()}
        </div>

        {/* Mobile Popup Modal */}
        <MobileInfoPopup buttonLabel="LAYERS" title="Location & Biology">
          {renderContent()}
        </MobileInfoPopup>

      </div>
    </section>
  );

  function renderContent() {
    return (
      <>
        <div className="mb-4 lg:mb-8 flex-shrink-0">
          <h2 className="hidden lg:block font-sans text-amber-500/80 tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-2 lg:mb-4">Location & Biology</h2>
          <h1 className="text-3xl lg:text-4xl md:text-5xl font-serif text-amber-50 mb-3 lg:mb-6">The Physical Anchor</h1>
          <p className="text-sm lg:text-lg text-white/50 font-light italic leading-relaxed">
            The esoteric centers map remarkably well onto the major nerve plexuses and endocrine glands of the physical body.
          </p>
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex border-b border-amber-900/30 mb-6 lg:mb-8 flex-shrink-0">
          {(['physical', 'traditional', 'modern'] as const).map(layer => (
            <button
              key={layer}
              onClick={() => setActiveTab(layer)}
              className={`flex-1 pb-3 lg:pb-4 font-sans text-[10px] lg:text-xs tracking-widest uppercase transition-colors relative
                ${activeTab === layer ? 'text-amber-400' : 'text-amber-500/40 hover:text-amber-500/80'}
              `}
            >
              {layer} VIEW
              {activeTab === layer && (
                <motion.div 
                  layoutId="activeTabLocation"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500" 
                />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[200px] flex-shrink-0 pb-8 lg:pb-0">
          <AnimatePresence mode="wait">
            {activeTab === 'physical' && (
              <motion.div key="physical" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <p className="mt-4 lg:mt-6 text-sm lg:text-xl leading-relaxed text-blue-100/70 font-light">
                  {manipuraData.location.anatomical}
                </p>
              </motion.div>
            )}
            {activeTab === 'traditional' && (
              <motion.div key="traditional" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <p className="mt-4 lg:mt-6 text-sm lg:text-xl leading-relaxed text-amber-100/70 font-light">
                  {manipuraData.location.traditional}
                </p>
              </motion.div>
            )}
            {activeTab === 'modern' && (
              <motion.div key="modern" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <p className="mt-4 lg:mt-6 text-sm lg:text-xl leading-relaxed text-yellow-100/70 font-light">
                  {manipuraData.location.modern}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
  }
};
