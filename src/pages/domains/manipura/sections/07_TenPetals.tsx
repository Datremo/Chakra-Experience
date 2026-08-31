import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useManipuraData } from '../../../../data/manipuraData';
import { X } from 'lucide-react';

export const TenPetalsSection: React.FC = () => {
  const manipuraData = useManipuraData();
  const [activePetal, setActivePetal] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleDragEnd = (event: any, info: any) => {
    // Keep it rotating or allow snapping, but for now just let framer-motion handle inertia
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#0a0300] relative overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 h-full">
        
        {/* Left: Interactive Rotating Ring */}
        <div className="relative h-[600px] flex items-center justify-center" ref={containerRef}>
          
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={controls}
            className="w-[400px] h-[400px] relative cursor-grab active:cursor-grabbing"
            style={{ touchAction: "none" }}
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          >
            {manipuraData.mandala.petalLetters.map((petal, i) => {
              const angle = (i * 36) * (Math.PI / 180);
              const radius = 180;
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
                    className={`relative w-20 h-24 flex items-center justify-center transition-all duration-300
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
                    
                    {/* Text (needs counter-rotation if we want it upright, but traditional is aligned with petal) */}
                    <span 
                      className={`relative font-serif text-3xl transition-colors duration-300
                        ${activePetal === i ? 'text-amber-300 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]' : 'text-amber-600'}
                      `}
                      style={{ transform: `rotate(-${i * 36}deg)` }} // keep text upright for readability
                    >
                      {petal.devanagari}
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Center Bija */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-amber-900/30 flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-none">
              <span className="text-4xl text-amber-500 font-serif">रं</span>
            </div>
          </motion.div>
          
          <p className="absolute bottom-10 text-amber-500/40 text-xs tracking-[0.2em] uppercase">Drag to rotate • Click to examine</p>
        </div>

        {/* Right: Info Panel (AnimatePresence) */}
        <div className="relative h-[600px] flex items-center">
          <AnimatePresence mode="wait">
            {activePetal !== null ? (
              <motion.div
                key="panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ type: 'spring', damping: 20 }}
                className="w-full bg-[#140600]/80 backdrop-blur-md border border-amber-900/40 p-10 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.05)]"
              >
                <div className="flex justify-between items-start mb-8">
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
                    className="p-2 rounded-full hover:bg-amber-900/30 text-amber-500/50 hover:text-amber-400 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="pt-6 border-t border-amber-900/30">
                    <p className="font-sans text-xs tracking-widest text-amber-500/60 uppercase mb-2">Classical Placement</p>
                    <p className="text-amber-100/80 font-light leading-relaxed">
                      Sanskrit syllables are traditionally placed on the petals of the chakras as focal points for mantra recitation (japa) and internal installation (nyāsa).
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-amber-900/30">
                    <p className="font-sans text-xs tracking-widest text-amber-500/60 uppercase mb-2">Note on Meaning</p>
                    <p className="text-amber-100/60 font-light leading-relaxed italic text-sm">
                      Unlike modern systems which assign psychological traits (like "ignorance" or "jealousy") to specific petals, early tantric texts primarily treated these as acoustic and vibratory realities for ritual use.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col items-center justify-center text-center px-12 border border-dashed border-amber-900/30 rounded-3xl"
              >
                <h2 className="text-2xl font-serif text-amber-500/40 mb-4">The Ten Vibrations</h2>
                <p className="text-amber-200/30 font-light">
                  Select a petal from the mandala to examine its syllable.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
