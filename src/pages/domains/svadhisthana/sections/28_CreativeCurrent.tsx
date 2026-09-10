import React, { useState } from 'react';
import { InteractiveCanvas } from '../components/InteractiveCanvas';
import { motion } from 'framer-motion';

export const CreativeCurrentSection: React.FC = () => {
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center px-4 md:px-6 relative ">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/svadhisthana/svadhisthana_glowing_flow_1788966700008.jpg" 
          alt="Glowing Flow Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-[#0a0502]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0502] via-[#0a0502]/60 to-transparent" />
      </div>

      <div className="text-center mb-10 md:mb-8 md:mb-10 relative z-10 max-w-4xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          className="font-sans text-orange-400 tracking-[0.4em] uppercase text-xs md:text-sm mb-4 md:mb-6"
        >
          Manifestation
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-serif text-white leading-tight drop-shadow-xl"
        >
          Create something that didn't exist before.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 italic font-light px-4"
        >
          The same energy that drives desire and reproduction is the energy that drives art, ideas, and innovation.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        className="w-full max-w-5xl mx-auto relative z-10 bg-black/40 p-2 md:p-6 rounded-[2rem] md:rounded-[3rem] border border-orange-900/30 shadow-[0_0_50px_rgba(249,115,22,0.1)] backdrop-blur-sm"
        onMouseDown={() => setHasInteracted(true)}
        onTouchStart={() => setHasInteracted(true)}
      >
        <InteractiveCanvas />
      </motion.div>

      <motion.div 
        className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4 md:px-6 h-auto md:h-24 relative z-10"
        animate={{ opacity: hasInteracted ? 1 : 0, y: hasInteracted ? 0 : 20 }}
      >
        <p className="text-xl md:text-2xl text-orange-300 font-serif mb-4 drop-shadow-md">
          You just created something that didn't exist before.
        </p>
        <p className="text-base md:text-lg text-white/60 font-sans font-light leading-relaxed">
          Creativity does not mean you have to be a professional artist. It simply means allowing energy to move through you and take form in the world.
        </p>
      </motion.div>
      
      <div className="mt-16 md:mt-24 group relative max-w-2xl mx-auto w-full cursor-pointer text-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl font-serif text-teal-400/90 italic group-hover:text-teal-300 transition-colors relative z-10 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]"
        >
          “What would you create if nobody judged you?”
        </motion.p>
        
        <div className="mt-6 md:mt-8 max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-700 overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 relative z-10 backdrop-blur-xl shadow-2xl">
          <p className="text-[10px] md:text-xs text-orange-400 uppercase tracking-widest mb-4">Wisdom</p>
          <p className="text-base md:text-lg text-white/80 font-sans font-light leading-relaxed">
            Judgment is the dam that blocks the river. The energy required to suppress a creative urge is immense. When we let go of the fear of producing something "bad," the current naturally resumes its flow. Creation is not about the final product; it is about the movement of life through you.
          </p>
        </div>
      </div>
    </section>
  );
};
