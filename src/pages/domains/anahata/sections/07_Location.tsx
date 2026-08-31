import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnahataData } from '../../../../data/anahataData';
import { SourceBadge } from '../../manipura/components/SourceBadge';

export const LocationSection: React.FC = () => {
  const data = useAnahataData();
  const [activeLayer, setActiveLayer] = useState<'PHYSICAL' | 'TRADITIONAL' | 'MODERN'>('TRADITIONAL');
  const [markerArrived, setMarkerArrived] = useState(false);

  useEffect(() => {
    // Total animation takes about 4 seconds
    const timer = setTimeout(() => {
      setMarkerArrived(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 bg-[#020604] relative overflow-hidden flex items-center justify-center">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left: Interactive Body Map */}
        <div className="relative h-[600px] flex items-center justify-center border border-emerald-900/20 bg-black/40 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Subtle Body Outline (Simplified SVG) */}
          <svg viewBox="0 0 200 600" className="h-[90%] opacity-20">
            {/* Head */}
            <path 
              d="M100 50 C110 50, 115 55, 115 70 C115 85, 110 90, 100 90 C90 90, 85 85, 85 70 C85 55, 90 50, 100 50 Z" 
              fill="none" stroke="currentColor" strokeWidth="2" 
            />
            {/* Torso */}
            <path 
              d="M100 90 L100 110 C120 110, 140 120, 145 140 C145 160, 135 250, 135 250 L125 250 C125 250, 130 150, 120 150 L120 300 C130 400, 130 500, 130 550 L110 550 L110 350 L100 320 L90 350 L90 550 L70 550 C70 500, 70 400, 80 300 L80 150 C70 150, 75 250, 75 250 L65 250 C65 250, 55 160, 55 140 C60 120, 80 110, 100 110" 
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
            />
          </svg>

          {/* Central Channel (Sushumna) */}
          <div className="absolute top-[15%] bottom-[15%] left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-t from-transparent via-emerald-900/30 to-transparent" />

          {/* Ascending Marker */}
          <motion.div 
            initial={{ top: '85%' }} // Root
            animate={{ top: ['85%', '70%', '55%', '30%'] }} // Root -> Sacral -> Navel -> Heart
            transition={{ duration: 4, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
          >
            <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_20px_#10b981] animate-pulse" />
            {!markerArrived && (
              <div className="w-[1px] h-32 bg-gradient-to-t from-transparent to-emerald-500/50 mt-2 opacity-50" />
            )}
          </motion.div>

          {/* Glow at Heart when arrived */}
          <AnimatePresence>
            {markerArrived && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                {/* Physical Layer Visualization */}
                {activeLayer === 'PHYSICAL' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-64 h-64 border border-rose-500/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-rose-500/10 rounded-full blur-xl" />
                    <p className="absolute text-[8px] tracking-[0.2em] text-rose-400 uppercase -right-16">Cardiac Plexus</p>
                  </motion.div>
                )}

                {/* Traditional Layer Visualization */}
                {activeLayer === 'TRADITIONAL' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-32 h-32 flex items-center justify-center">
                    <div className="w-20 h-20 border border-emerald-500/40 rotate-45 flex items-center justify-center">
                      <div className="w-20 h-20 border border-emerald-500/40 rotate-45 absolute" />
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
                    </div>
                  </motion.div>
                )}

                {/* Modern Layer Visualization */}
                {activeLayer === 'MODERN' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl animate-pulse" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Content & Layer Controls */}
        <div className="flex flex-col justify-center">
          <h2 className="font-sans text-emerald-500/80 tracking-[0.3em] uppercase text-sm mb-4">Location</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-emerald-50 mb-8">The Heart Center</h1>
          
          <div className="space-y-4 mb-12">
            {(['PHYSICAL', 'TRADITIONAL', 'MODERN'] as const).map(layer => (
              <button
                key={layer}
                onClick={() => setActiveLayer(layer)}
                className={`w-full text-left px-6 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center
                  ${activeLayer === layer 
                    ? 'bg-emerald-900/30 border-emerald-500/50' 
                    : 'bg-transparent border-white/5 hover:border-emerald-900/40 text-white/50'
                  }`}
              >
                <span className="font-sans tracking-widest text-sm uppercase">{layer} VIEW</span>
                {activeLayer === layer && <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />}
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeLayer === 'PHYSICAL' && (
                <motion.div key="PHYSICAL" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <SourceBadge type="EVIDENCE" content="Anatomical correlate, not a literal chakra." />
                  <p className="mt-6 text-xl leading-relaxed text-rose-100/70 font-light">
                    {data.location.anatomical}
                  </p>
                </motion.div>
              )}
              {activeLayer === 'TRADITIONAL' && (
                <motion.div key="TRADITIONAL" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <SourceBadge type="TRADITION" content="Region of the heart." />
                  <p className="mt-6 text-xl leading-relaxed text-emerald-100/70 font-light">
                    {data.location.traditional}
                  </p>
                </motion.div>
              )}
              {activeLayer === 'MODERN' && (
                <motion.div key="MODERN" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <SourceBadge type="MODERN" content="Psychological visualization." />
                  <p className="mt-6 text-xl leading-relaxed text-emerald-100/70 font-light">
                    {data.location.modern}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
