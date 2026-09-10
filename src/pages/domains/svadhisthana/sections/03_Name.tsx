import React from 'react';
import { motion } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const NameSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  return (
    <section className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-black">
      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        
        <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-16 mb-8 md:mb-10">
          {svadhisthanaData.name.components.map((part: any, idx: number) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: idx * 0.3 }}
               className="flex flex-col items-center"
             >
               <h2 className="text-7xl md:text-9xl font-serif text-orange-400 mb-4">{part.sanskrit}</h2>
               <h3 className="text-2xl font-sans tracking-[0.3em] uppercase text-orange-200 mb-2">{part.transliteration}</h3>
               <p className="text-lg text-orange-100/60 italic">"{part.meaning}"</p>
             </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <div className="w-px h-16 bg-gradient-to-b from-orange-500/50 to-transparent mx-auto mb-8 md:mb-10" />
          <p className="text-3xl md:text-4xl text-orange-50 leading-relaxed font-serif">
            {svadhisthanaData.name.interpretation}
          </p>
          <p className="text-xl md:text-2xl text-teal-300/80 italic mt-12">
            “What does it mean to have an inner place you can return to?”
          </p>
        </motion.div>

      </div>
    </section>
  );
};
