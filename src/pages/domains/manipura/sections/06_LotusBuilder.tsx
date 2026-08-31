import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useManipuraData } from '../../../../data/manipuraData';
import { SourceBadge } from '../components/SourceBadge';

export const LotusBuilderSection: React.FC = () => {
  const manipuraData = useManipuraData();
  
  const [layers, setLayers] = useState({
    petals: true, // Base layer, cannot be disabled
    letters: false,
    triangle: false,
    bija: false,
    ram: false,
    rudra: false,
    lakini: false
  });

  const toggleLayer = (layer: keyof typeof layers) => {
    if (layer === 'petals') return; // Immutable
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-black relative flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left: Interactive Canvas */}
        <div className="relative h-[600px] flex items-center justify-center bg-[#050100] border border-orange-900/20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05),transparent_70%)]" />

          {/* Scale container */}
          <div className="relative w-[400px] h-[400px]">
            
            {/* Layer 1: 10 Petals (Always on) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {[...Array(10)].map((_, i) => (
                <div 
                  key={`petal-${i}`}
                  className="absolute w-full h-full"
                  style={{ transform: `rotate(${i * 36}deg)` }}
                >
                  <svg viewBox="0 0 100 100" className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-40 opacity-80" style={{ transformOrigin: 'bottom center' }}>
                    <path 
                      d="M50 100 C30 80 10 50 50 0 C90 50 70 80 50 100" 
                      fill="url(#darkEmber)" stroke="rgba(245,158,11,0.5)" strokeWidth="1" 
                    />
                    <defs>
                      <linearGradient id="darkEmber" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#050100" />
                        <stop offset="60%" stopColor="#2a0a00" />
                        <stop offset="100%" stopColor="#5c1a06" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              ))}
            </motion.div>

            {/* Layer 2: Letters */}
            <AnimatePresence>
              {layers.letters && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(10)].map((_, i) => (
                    <div 
                      key={`letter-${i}`}
                      className="absolute w-full h-full flex justify-center pt-8"
                      style={{ transform: `rotate(${i * 36}deg)` }}
                    >
                      <span 
                        className="text-amber-500 font-serif text-2xl drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                        style={{ transform: `rotate(-${i * 36}deg)` }}
                      >
                        {manipuraData.mandala.petalLetters[i].devanagari}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Layer 3: Fire Triangle */}
            <AnimatePresence>
              {layers.triangle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <svg viewBox="0 0 200 200" className="w-56 h-56">
                    <polygon points="100,180 20,40 180,40" fill="rgba(220,38,38,0.1)" stroke="rgba(239,68,68,0.8)" strokeWidth="2" />
                    {/* Swastika marks (T-marks) mentioned in some texts on the sides of the triangle */}
                    <path d="M100 180 L100 160 M20 40 L40 40 M180 40 L160 40" stroke="rgba(239,68,68,0.8)" strokeWidth="2" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Layer 5: Ram (Vehicle) */}
            <AnimatePresence>
              {layers.ram && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
                >
                  <div className="w-16 h-16 border border-amber-700/50 rounded-full flex items-center justify-center bg-black/50">
                    <span className="text-[10px] tracking-widest text-amber-500 uppercase">RAM</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Layer 4: Bija (Seed Mantra) */}
            <AnimatePresence>
              {layers.bija && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <span className="text-6xl text-amber-400 font-serif" style={{ textShadow: '0 0 30px rgba(245,158,11,1)' }}>
                    रं
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Layer 6 & 7: Deities (Rudra & Lakini) */}
            <AnimatePresence>
              {layers.rudra && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute top-1/4 left-1/4 flex flex-col items-center pointer-events-none"
                >
                  <div className="w-12 h-12 border border-blue-500/50 rounded-full flex items-center justify-center bg-black/80">
                    <span className="text-[8px] tracking-widest text-blue-400 uppercase">Rudra</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {layers.lakini && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute top-1/4 right-1/4 flex flex-col items-center pointer-events-none"
                >
                  <div className="w-12 h-12 border border-red-500/50 rounded-full flex items-center justify-center bg-black/80">
                    <span className="text-[8px] tracking-widest text-red-400 uppercase">Lākinī</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Right: Controls & Context */}
        <div className="flex flex-col justify-center">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Construction</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-6">The Traditional Map</h1>
          <p className="text-lg text-white/50 font-light mb-8 italic">
            Reconstruct the classical visualization layer by layer as described in the Ṣaṭ-Cakra-Nirūpaṇa.
          </p>
          
          <div className="bg-[#0f0400] border border-amber-900/30 p-6 rounded-2xl mb-8">
            <SourceBadge type="TRADITION" content="Notice the colour. The text specifies 'dark as heavy rain-clouds' (often depicted as dark ember), not the bright yellow of modern systems." />
          </div>

          <div className="space-y-3">
            <ControlRow label="10 Petals (Base)" active={layers.petals} onClick={() => {}} disabled />
            <ControlRow label="Petal Letters (Devanagari)" active={layers.letters} onClick={() => toggleLayer('letters')} />
            <ControlRow label="The Fire Region (Triangle)" active={layers.triangle} onClick={() => toggleLayer('triangle')} />
            <ControlRow label="The Ram (Vāhana / Vehicle)" active={layers.ram} onClick={() => toggleLayer('ram')} />
            <ControlRow label="The Fire Bīja (Seed Sound)" active={layers.bija} onClick={() => toggleLayer('bija')} />
            <ControlRow label="Rudra (Presiding Deity)" active={layers.rudra} onClick={() => toggleLayer('rudra')} />
            <ControlRow label="Lākinī (Presiding Śakti)" active={layers.lakini} onClick={() => toggleLayer('lakini')} />
          </div>
        </div>

      </div>
    </section>
  );
};

const ControlRow: React.FC<{ label: string, active: boolean, onClick: () => void, disabled?: boolean }> = ({ label, active, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300
      ${disabled ? 'opacity-50 cursor-not-allowed bg-black/20 border-white/5 text-white/50' : 
        active 
          ? 'bg-amber-900/20 border-amber-500/40 text-amber-200' 
          : 'bg-black/40 border-white/10 hover:border-amber-900/50 text-white/60 hover:text-white/90'
      }
    `}
  >
    <span className="font-sans text-sm tracking-wide">{label}</span>
    <div className={`w-4 h-4 rounded border transition-colors ${active ? 'bg-amber-500 border-amber-500' : 'border-white/30'}`} />
  </button>
);
