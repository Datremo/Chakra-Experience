import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheMakaraMythSection: React.FC = () => {
  const [showDepth, setShowDepth] = useState(false);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ scale: showDepth ? 1.1 : 1, filter: showDepth ? 'brightness(1.2)' : 'brightness(0.5)' }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img 
          src="/assets/svadhisthana/svadhisthana_subconscious_makara_1788973098766.jpg" 
          alt="Makara Crocodile" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl px-4 pt-12 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-4 md:mb-6"
        >
          The Vehicle
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-teal-100 mb-8 leading-tight drop-shadow-xl"
        >
          The Makara
        </motion.h2>

        <motion.div 
          className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-teal-900/50 shadow-2xl relative overflow-hidden group cursor-pointer"
          onMouseEnter={() => setShowDepth(true)}
          onMouseLeave={() => setShowDepth(false)}
          onClick={() => setShowDepth(!showDepth)}
        >
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-6">
            In Tantric tradition, the animal associated with SvÄdhiá¹£á¹­hÄna is the Makaraâ€”a mythical crocodile. It rests at the bottom of the water, motionless, hiding its massive power just below the surface.
          </p>

          <AnimatePresence>
            {showDepth ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="text-orange-300/90 font-serif text-xl italic pt-4 border-t border-teal-800/30">
                  The Makara represents the subconscious mind. Our deep desires, past traumas, and hidden instincts lurk beneath the surface of our awareness. Until we shine a light into the deep, the crocodile directs the current.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-teal-500 text-sm font-sans tracking-widest uppercase mt-4 animate-pulse"
              >
                Tap to peer beneath the surface
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
