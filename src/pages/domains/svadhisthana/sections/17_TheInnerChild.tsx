import React from 'react';
import { motion } from 'framer-motion';

export const TheInnerChildSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#0c0519]">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/svadhisthana/svadhisthana_inner_child_1788973155683.jpg" 
          alt="Inner Child Joy" 
          className="w-full h-full object-cover mix-blend-screen opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0519] via-[#0c0519]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0519] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 pt-12 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-400 font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Wonder & Play
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          The Inner Child
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-black/30 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-violet-500/30 max-w-3xl mx-auto shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-orange-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-1000" />
          
          <p className="relative z-10 text-lg md:text-2xl text-white/90 font-light leading-relaxed mb-6">
            SvÄdhiá¹£á¹­hÄna is the seat of the inner child. It is the part of you that does things simply because they are <strong className="text-orange-300 font-serif italic">fun</strong>.
          </p>
          
          <p className="relative z-10 text-base md:text-lg text-white/60 font-sans leading-relaxed">
            As adults, we often kill our creative impulses by demanding they be "productive" or "profitable." To heal this chakra, you must give yourself permission to play with absolutely no goal in mind.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
