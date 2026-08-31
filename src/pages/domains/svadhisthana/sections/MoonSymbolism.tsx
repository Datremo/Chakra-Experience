import React from 'react';
import { motion } from 'framer-motion';

export const MoonSymbolismSection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center py-32 px-6 bg-[#02050a] overflow-hidden">
      
      {/* Background with Moon reflection */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* The Moon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-orange-100 shadow-[0_0_100px_rgba(255,237,213,0.3)] flex items-center justify-center overflow-hidden mix-blend-screen opacity-80"
        >
          {/* Creating the crescent shape by overlaying a dark circle */}
          <div className="absolute top-[-10%] right-[-10%] w-[110%] h-[110%] rounded-full bg-[#02050a]" />
        </motion.div>
        
        {/* The Reflection on water */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-orange-900/20 to-transparent"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-screen blur-[2px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <h2 className="font-sans text-orange-200/50 tracking-[0.4em] uppercase text-sm mb-4 text-center">Symbolism</h2>
        <h1 className="text-6xl md:text-8xl font-serif text-white text-center mb-16 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
          MOON
        </h1>

        <div className="bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <p className="text-xl md:text-2xl text-orange-50/90 leading-relaxed font-sans font-light mb-8">
            Inside the lotus of Svādhiṣṭhāna rests a luminous white crescent moon, representing the watery, reflective nature of the center. 
          </p>
          <div className="space-y-4 text-lg text-white/60 leading-relaxed">
            <p>
              In tantric visualizations, the lunar imagery connects the practitioner to themes of tides, cycles, receptivity, and the subconscious.
            </p>
            <p className="border-l-2 border-orange-500/50 pl-4 mt-6 text-orange-200/80 italic">
              Note: This is traditional symbolic imagery for meditation. It should not be reduced to biological medical claims (e.g., "this chakra controls your menstrual cycle or fertility").
            </p>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 text-center text-lg text-teal-300/80 italic cursor-default hover:text-teal-200 transition-colors"
        >
          “Why does a moon appear here?”
        </motion.p>
      </div>
    </section>
  );
};
