import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { useManipuraData } from '../../../../data/manipuraData';
import { FireCanvas } from '../components/FireCanvas';

export const BijaSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activeMode, setActiveMode] = useState<'HEAR' | 'CHANT' | 'SILENT'>('SILENT');
  const [isHolding, setIsHolding] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const pulseInterval = useRef<number | null>(null);
  const [pulses, setPulses] = useState<number[]>([]);

  useEffect(() => {
    if (isHolding) {
      pulseInterval.current = setInterval(() => {
        setPulses(prev => [...prev, Date.now()]);
      }, 800); // Pulse every 800ms
    } else {
      if (pulseInterval.current) clearInterval(pulseInterval.current);
    }
    return () => {
      if (pulseInterval.current) clearInterval(pulseInterval.current);
    };
  }, [isHolding]);

  // Cleanup old pulses
  useEffect(() => {
    if (pulses.length > 5) {
      setPulses(prev => prev.slice(prev.length - 5));
    }
  }, [pulses]);

  return (
    <section className="min-h-screen py-32 px-6 bg-[#020000] relative flex items-center justify-center overflow-hidden">
      
      {/* Background ambient fire */}
      <div className="absolute inset-0 z-0 opacity-30">
        <FireCanvas intensity={0.2} colorMode="amber" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">The Seed</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-50">The Sound of Fire</h1>
        </div>

        {/* Central Glyph Area */}
        <div className="relative w-96 h-96 flex items-center justify-center mb-16">
          
          {/* Pulses */}
          <AnimatePresence>
            {pulses.map(id => (
              <motion.div
                key={id}
                initial={{ scale: 0.5, opacity: 0.8, borderWidth: '2px' }}
                animate={{ scale: 3, opacity: 0, borderWidth: '0px' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute w-48 h-48 rounded-full border-amber-500"
              />
            ))}
          </AnimatePresence>

          {/* Glyph */}
          <motion.div 
            animate={{ 
              scale: isHolding ? 1.05 : 1,
              textShadow: isHolding ? '0 0 60px rgba(245,158,11,1)' : '0 0 30px rgba(245,158,11,0.5)'
            }}
            transition={{ type: 'spring', damping: 10 }}
            className="text-[12rem] font-serif text-amber-100 z-10 select-none"
          >
            {manipuraData.mandala.bija.sanskrit}
          </motion.div>

        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-8 w-full max-w-lg">
          <p className="text-amber-500/50 font-sans tracking-[0.3em] uppercase text-xs">
            Hold button to generate resonance
          </p>

          <div className="flex gap-4 w-full">
            {(['HEAR', 'CHANT', 'SILENT'] as const).map(mode => (
              <button
                key={mode}
                onMouseDown={() => { setActiveMode(mode); setIsHolding(true); }}
                onMouseUp={() => setIsHolding(false)}
                onMouseLeave={() => setIsHolding(false)}
                onTouchStart={() => { setActiveMode(mode); setIsHolding(true); }}
                onTouchEnd={() => setIsHolding(false)}
                className={`flex-1 py-4 rounded-xl font-sans tracking-widest text-sm transition-all duration-200 select-none
                  ${activeMode === mode && isHolding
                    ? 'bg-amber-600 text-white shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-95' 
                    : activeMode === mode
                      ? 'bg-amber-900/40 border border-amber-500/50 text-amber-200'
                      : 'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-white/10 text-white/40 hover:border-amber-900/50'
                  }
                `}
              >
                {mode}
              </button>
            ))}
          </div>

          <div className="h-8">
            <AnimatePresence mode="wait">
              {isHolding && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-amber-300/80 italic font-light"
                >
                  {activeMode === 'HEAR' && "Listening to the external sound."}
                  {activeMode === 'CHANT' && "Vocalizing, feeling the vibration in the body."}
                  {activeMode === 'SILENT' && "Mental repetition (Mānasa Japa)."}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Educational Note Toggle */}
        <div className="mt-16 w-full max-w-lg">
          <button 
            onClick={() => setShowNote(!showNote)}
            className="w-full flex items-center justify-center gap-2 text-amber-500/60 hover:text-amber-400 transition-colors font-sans tracking-widest text-xs uppercase"
          >
            <Info size={14} />
            <span>Did you know?</span>
          </button>
          
          <AnimatePresence>
            {showNote && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-6 bg-amber-950/20 border border-amber-900/30 rounded-2xl">
                  <h4 className="font-serif text-xl text-amber-300 mb-2">RAṂ ≠ RĀMA</h4>
                  <p className="text-amber-100/70 font-light leading-relaxed text-sm">
                    The seed syllable (bīja) is pronounced roughly as "Rum" (with a nasal resonance), not like the name of the deity Rāma. In the tantric system, sounds themselves are the energetic forces, not just symbols for concepts. Use the sound purely as an anchor for concentration, not as a semantic word.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
