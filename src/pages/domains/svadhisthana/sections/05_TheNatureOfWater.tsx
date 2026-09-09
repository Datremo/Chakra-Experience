import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const TheNatureOfWaterSection: React.FC = () => {
  const [interacted, setInteracted] = useState(false);

  return (
    <section 
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black cursor-pointer"
      onMouseMove={() => setInteracted(true)}
      onTouchMove={() => setInteracted(true)}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-black/90 mix-blend-multiply" />
        <motion.div 
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl px-6 pt-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          The Element
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight drop-shadow-xl"
        >
          Water yields, yet it cuts through rock.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Svādhiṣṭhāna teaches us the power of adaptability. Unlike earth, which resists until it breaks, water flows around obstacles, eventually eroding them entirely. True power is not rigidity, but endless resilience.
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-20 text-teal-400/50 text-sm font-sans tracking-widest uppercase animate-pulse"
        animate={{ opacity: interacted ? 0 : 1 }}
      >
        Move your cursor to ripple the water
      </motion.div>
    </section>
  );
};
