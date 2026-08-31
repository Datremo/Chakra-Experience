import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BrahmanSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center bg-[#050014] overflow-hidden">
      
      <div className="absolute top-32 text-center w-full z-20 pointer-events-none">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/40 mb-4 mix-blend-difference">World 13</h2>
      </div>

      {/* Background Macrocosm */}
      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.1, transition: { duration: 1 } }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            {/* CSS Cosmic Sunburst */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-purple-500/20 to-black mix-blend-screen" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(216,180,254,0.8)_10%,rgba(168,85,247,0.4)_40%,transparent_70%)] blur-2xl animate-[spin_60s_linear_infinite]" />
            </div>
            
            <div className="relative z-10 text-center px-6 max-w-2xl bg-black/40 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/30">
              <h3 className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-6">BRAHMAN</h3>
              <p className="text-xl font-serif text-purple-200/80 italic mb-6">Aham Brahmāsmi</p>
              <p className="text-white/80 font-light leading-relaxed">
                When the "I" is fully expanded, it recognizes itself not as a drop of water, but as the entire ocean in a drop. The individual consciousness (Ātman) and the supreme cosmic reality (Brahman) are identical.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Point / Button */}
      <div className="relative z-30 flex flex-col items-center">
        {!expanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 font-sans text-center"
          >
            <p className="text-purple-300 font-light mb-2">The drop returns to the ocean.</p>
            <p className="text-xs tracking-widest text-purple-300/50 uppercase animate-pulse">Hold to expand the bindu.</p>
          </motion.div>
        )}

        <motion.button
          onPointerDown={() => setExpanded(true)}
          onPointerUp={() => setExpanded(false)}
          onPointerLeave={() => setExpanded(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 15, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-8 h-8 rounded-full bg-white shadow-[0_0_30px_white] cursor-pointer"
        />
        
        {/* Helper ring */}
        {!expanded && (
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-full mt-[-2rem] w-8 h-8 rounded-full border border-white pointer-events-none"
          />
        )}
      </div>

    </section>
  );
};
