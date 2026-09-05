import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const textures = [
  { id: 'soil', color: 'bg-amber-950/40', image: '/assets/muladhara/texture_soil.jpg', label: 'Bare Soil' },
  { id: 'stone', color: 'bg-slate-700/40', image: '/assets/muladhara/texture_stone.jpg', label: 'River Stone' },
  { id: 'wood', color: 'bg-orange-950/40', image: '/assets/muladhara/texture_wood.jpg', label: 'Ancient Wood' },
  { id: 'grass', color: 'bg-emerald-900/40', image: '/assets/muladhara/texture_grass.jpg', label: 'Damp Grass' },
];

export const S32_TheRootWalk: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => {
    if (inView) reachWorld(32);
  }, [inView, reachWorld]);

  const [activeTexture, setActiveTexture] = useState<string | null>(null);

  const activeTexData = textures.find(t => t.id === activeTexture);

  return (
    <div ref={containerRef} className="min-h-screen w-full relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
        
        {/* Dynamic Image Background based on interaction */}
        <AnimatePresence>
          {activeTexData && (
            <motion.div 
              key={activeTexData.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <img 
                src={activeTexData.image} 
                alt={activeTexData.label} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="z-10 text-center mb-16 px-6 drop-shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 uppercase tracking-wider">
            The Root Walk
          </h2>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-white/5">
            Grounding can be an active sensory experience. Focus entirely on the exact sensation of your heel, arch, and toes striking the ground. <br/><br/>
            Hover or tap to simulate the texture beneath your feet.
          </p>
        </div>

        {/* Texture Panels */}
        <div className="z-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl px-6 h-64 md:h-96">
          {textures.map((texture) => (
            <motion.div
              key={texture.id}
              onMouseEnter={() => setActiveTexture(texture.id)}
              onMouseLeave={() => setActiveTexture(null)}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-xl overflow-hidden cursor-pointer shadow-2xl flex items-end justify-center p-6 border ${
                activeTexture === texture.id ? 'border-white/40' : 'border-white/5'
              }`}
            >
              {/* Image preview in the button itself */}
              <img 
                src={texture.image} 
                alt={texture.label} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  activeTexture === texture.id ? 'opacity-100' : 'opacity-40'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <h3 className="relative z-10 text-white font-serif text-xl md:text-2xl tracking-widest uppercase pointer-events-none drop-shadow-lg text-center">
                {texture.label}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};