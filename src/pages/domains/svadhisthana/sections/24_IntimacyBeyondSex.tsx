import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const IntimacyBeyondSexSection: React.FC = () => {
  const [layers, setLayers] = useState(0);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#070b14]">
      
      <div className="relative z-10 text-center max-w-4xl px-4 pt-12 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-teal-500 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          True Connection
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-16 drop-shadow-xl"
        >
          Intimacy Beyond Sex
        </motion.h2>

        <div className="relative w-full max-w-lg mx-auto h-[300px] flex items-center justify-center">
          
          {/* Layer 1: Physical */}
          <motion.div 
            className="absolute inset-0 rounded-[3rem] border-2 border-teal-900 bg-[#070b14] flex flex-col items-center justify-center p-8 cursor-pointer shadow-xl z-30"
            animate={{ y: layers > 0 ? 300 : 0, opacity: layers > 0 ? 0 : 1 }}
            onClick={() => setLayers(1)}
          >
            <h3 className="text-2xl font-sans tracking-widest text-teal-400 uppercase mb-4">Physical</h3>
            <p className="text-white/60 font-light">The surface. Skin, bodies, the immediate sensory experience. Many people stop here, confusing this for true closeness.</p>
            <p className="mt-6 text-xs text-teal-600 uppercase tracking-widest animate-pulse">Tap to strip layer</p>
          </motion.div>

          {/* Layer 2: Emotional */}
          <motion.div 
            className="absolute inset-0 rounded-[3rem] border-2 border-teal-500/50 bg-[#070b14] flex flex-col items-center justify-center p-8 cursor-pointer shadow-[0_0_30px_rgba(20,184,166,0.1)] z-20"
            animate={{ y: layers > 1 ? 300 : 0, opacity: layers > 1 ? 0 : 1 }}
            onClick={() => { if (layers === 1) setLayers(2); }}
          >
            <h3 className="text-2xl font-sans tracking-widest text-teal-300 uppercase mb-4">Emotional</h3>
            <p className="text-white/80 font-light">Sharing fears, joys, and vulnerabilities. Being seen in your messiness and loved anyway.</p>
            <p className="mt-6 text-xs text-teal-500 uppercase tracking-widest animate-pulse">Tap to strip layer</p>
          </motion.div>

          {/* Layer 3: Energetic Core */}
          <motion.div 
            className="absolute inset-0 rounded-[3rem] border border-white/20 bg-gradient-to-br from-teal-900/40 to-black flex flex-col items-center justify-center p-8 shadow-[0_0_50px_rgba(20,184,166,0.3)] z-10"
            onClick={() => setLayers(0)}
          >
            <h3 className="text-3xl font-serif text-white italic mb-6 drop-shadow-md">Nakedness</h3>
            <p className="text-teal-100 font-light text-lg">True intimacy is not just taking off your clothes. It is taking off your armor. It is allowing your deep waters to merge with another's without losing your center.</p>
            <button className="mt-8 px-6 py-2 border border-teal-500/30 text-teal-400 rounded-full text-xs tracking-widest uppercase hover:bg-teal-900/50 transition-colors">
              Reset Layers
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
