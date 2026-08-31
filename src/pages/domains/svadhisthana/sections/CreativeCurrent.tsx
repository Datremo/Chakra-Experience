import React, { useState } from 'react';
import { InteractiveCanvas } from '../components/InteractiveCanvas';
import { motion } from 'framer-motion';

export const CreativeCurrentSection: React.FC = () => {
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#0a0502]">
      
      <div className="text-center mb-16 relative z-10 max-w-4xl mx-auto">
        <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Manifestation</h2>
        <h1 className="text-5xl md:text-7xl mb-8 font-serif text-white leading-tight">
          Create something that didn't exist before.
        </h1>
        <p className="text-xl text-white/60 italic font-light">
          The same energy that drives desire and reproduction is the energy that drives art, ideas, and innovation.
        </p>
      </div>

      <div 
        className="w-full max-w-5xl mx-auto relative z-10"
        onMouseDown={() => setHasInteracted(true)}
        onTouchStart={() => setHasInteracted(true)}
      >
        <InteractiveCanvas />
      </div>

      <motion.div 
        className="mt-16 text-center max-w-3xl mx-auto px-6 h-24"
        animate={{ opacity: hasInteracted ? 1 : 0 }}
      >
        <p className="text-2xl text-orange-300 font-serif mb-4">
          You just created something that didn't exist before.
        </p>
        <p className="text-lg text-white/50 font-sans font-light">
          Creativity does not mean you have to be a professional artist. It simply means allowing energy to move through you and take form in the world.
        </p>
      </motion.div>
      
      <div className="mt-16 group relative max-w-2xl mx-auto w-full cursor-pointer text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-2xl md:text-3xl font-serif text-teal-400/90 italic group-hover:text-teal-300 transition-colors relative z-10"
        >
          “What would you create if nobody judged you?”
        </motion.p>
        
        <div className="mt-8 max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-700 overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 relative z-10">
          <p className="text-xs text-orange-400 uppercase tracking-widest mb-4">Wisdom</p>
          <p className="text-lg text-white/70 font-sans font-light leading-relaxed">
            Judgment is the dam that blocks the river. The energy required to suppress a creative urge is immense. When we let go of the fear of producing something "bad," the current naturally resumes its flow. Creation is not about the final product; it is about the movement of life through you.
          </p>
        </div>
      </div>
    </section>
  );
};
