import React from 'react';
import { motion } from 'framer-motion';

export const FoodSection: React.FC = () => {
  return (
    <section className="min-h-[70vh] py-32 px-6 flex flex-col items-center justify-center relative bg-[#010403]">
      
      <div className="max-w-2xl text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-24 h-24 mx-auto mb-8 rounded-full border border-emerald-900/50 flex items-center justify-center bg-emerald-950/20"
        >
          {/* Abstract leaf/food icon crossed out implicitly by the text */}
          <div className="w-8 h-8 rounded-tr-full rounded-bl-full bg-emerald-700/30" />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Food & The Heart</h1>
        
        <p className="text-lg md:text-xl font-serif text-white/60 font-light leading-relaxed italic mb-8">
          Eating green vegetables is good for your biological body, but there is no evidence that eating spinach "opens your heart chakra."
        </p>

        <p className="text-sm text-white/40 font-sans leading-relaxed">
          The association of the color green with Anāhata is a 20th-century development, largely driven by the New Age movement's color spectrum mapping. Classical texts often described the petals as deep red or vermilion. Do not confuse nutritional science with symbolic meditation maps.
        </p>
      </div>

    </section>
  );
};
