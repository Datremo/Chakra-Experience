import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const BijaSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [clickCount, setClickCount] = useState(0);
  const [ripples, setRipples] = useState<{ id: number, x: number, y: number }[]>([]);

  const handleInteract = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setClickCount(prev => prev + 1);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 2000);
  };

  return (
    <section className="min-min-h-[100svh] relative flex items-center justify-center py-12 md:py-16 px-6 bg-[#040812] ">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Interaction Side */}
        <div 
          className="relative w-full aspect-square max-w-md mx-auto rounded-full border border-orange-500/20 flex flex-col items-center justify-center cursor-pointer overflow-hidden group bg-black/40 backdrop-blur-sm"
          onClick={handleInteract}
          // @ts-ignore
          onTouchStart={handleInteract}
        >
          {/* Ripples */}
          <AnimatePresence>
            {ripples.map(ripple => (
              <motion.div
                key={ripple.id}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 4, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute w-32 h-32 border-2 border-orange-400 rounded-full"
                style={{ left: ripple.x - 64, top: ripple.y - 64 }}
              />
            ))}
          </AnimatePresence>
          
          {/* Complex ripples based on click count */}
          {clickCount > 2 && (
             <div className="absolute inset-0 flex items-center justify-center">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-[80%] h-[80%] border border-dashed border-teal-500/30 rounded-full"
               />
               <motion.div
                 animate={{ rotate: -360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[60%] h-[60%] border border-dashed border-orange-500/30 rounded-full"
               />
             </div>
          )}

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-8xl md:text-9xl font-serif text-orange-50 drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] group-hover:scale-110 transition-transform duration-500">
              {svadhisthanaData.mandala.bija.sanskrit}
            </h1>
            <p className="mt-4 font-sans tracking-[0.5em] text-orange-300 uppercase">
              {svadhisthanaData.mandala.bija.transliteration}
            </p>
          </div>
          
          <p className="absolute bottom-10 text-xs font-sans tracking-widest uppercase text-white/30 group-hover:text-white/60 transition-colors">
            Interact to sound
          </p>
        </div>

        {/* Explanation Side */}
        <div>
          <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Sound</h2>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight font-serif text-white">The Seed Vibration</h1>
          
          <div className="space-y-6 text-xl leading-relaxed text-white/70">
            <p>
              The Bīja (seed) mantra for Svādhiṣṭhāna is <strong>VAṂ</strong> (pronounced VUM).
            </p>
            <p>
              In tantric practice, chanting this seed syllable creates a subtle vibration in the lower abdomen. It acts as a point of focus for attention.
            </p>
            <div className="bg-orange-900/10 border-l-4 border-orange-500 p-6 mt-8 rounded-r-xl">
              <p className="text-orange-200 italic text-lg">
                "The sound is being used as a focus for attention and mantra practice."
              </p>
              <p className="text-sm text-orange-300/60 mt-2">
                It does not have scientifically proven "chakra-opening" physical effects.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
