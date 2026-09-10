import React from 'react';
import { motion } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const S03_TheSacralVessel: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center py-12 md:py-16 px-6 bg-black ">
      
      {/* Background imagery: the inner place / the glowing reflection */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534062024564-9452b4dc2018?q=80&w=2000&auto=format&fit=crop" 
          alt="Golden reflection on water" 
          className="w-full h-full object-cover opacity-48 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-12 md:gap-10 md:gap-16 mb-24">
          {svadhisthanaData.name.components.map((part: any, idx: number) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, delay: idx * 0.4 }}
               className="flex flex-col items-center"
             >
               <h2 className="text-8xl md:text-[10rem] font-serif text-orange-500/80 mb-2 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]">
                 {part.sanskrit}
               </h2>
               <h3 className="text-xl md:text-3xl font-sans tracking-[0.4em] uppercase text-orange-200 mb-4 font-light">
                 {part.transliteration}
               </h3>
               <p className="text-base md:text-xl text-orange-100/60 italic font-serif">
                 "{part.meaning}"
               </p>
             </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-16 px-6"
        >
          <div className="w-px h-24 bg-gradient-to-b from-orange-500/50 to-transparent mx-auto mb-8 md:mb-10" />
          
          <p className="text-2xl md:text-4xl text-orange-50 leading-relaxed font-serif max-w-4xl mx-auto drop-shadow-md">
            {svadhisthanaData.name.interpretation}
          </p>
          
          <p className="text-xl md:text-3xl text-teal-300/80 italic mt-16 font-light">
            “What does it mean to have an inner place you can return to?”
          </p>
        </motion.div>

      </div>
    </section>
  );
};
