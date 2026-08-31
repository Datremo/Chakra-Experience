import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const WaterElementSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const waveIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.5]);

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-32 px-6">
      
      {/* Dynamic Water Background */}
      <motion.div 
        className="absolute inset-0 bg-[#050a14] opacity-50 z-0"
        style={{ y: yOffset }}
      >
         {/* CSS pseudo-waves based on scroll (simulated via scaleY) */}
         <motion.div 
           className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-teal-900/40 to-transparent"
           style={{ scaleY: waveIntensity, transformOrigin: 'bottom' }}
         />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-sm font-sans tracking-[0.4em] text-teal-400 uppercase mb-8">Element</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16 text-4xl md:text-6xl font-serif text-teal-50 drop-shadow-lg">
          <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>WATER</motion.span>
          <span className="text-teal-900 hidden md:block">•</span>
          <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>FLOW</motion.span>
          <span className="text-teal-900 hidden md:block">•</span>
          <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>ADAPTATION</motion.span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-teal-900/30 shadow-2xl"
        >
          <p className="text-xl md:text-2xl text-teal-100/80 leading-relaxed font-sans font-light">
            Svādhiṣṭhāna is traditionally associated with the element of water (Āpaḥ). In classical thought, water represents cohesion, movement, and the dissolution of rigid boundaries.
          </p>
          <div className="mt-8 pt-8 border-t border-teal-900/30">
            <p className="text-sm text-teal-200/50 uppercase tracking-widest mb-4">Important Distinction</p>
            <p className="text-lg text-teal-50/90 italic">
              The traditional element association is a meditative visualization tool. It does not mean there is physical liquid stored in the pelvis that needs to be "released."
            </p>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 text-lg text-orange-300/80 italic cursor-default hover:text-orange-200 transition-colors"
        >
          “Why does this chakra use a six-petaled lotus?”
        </motion.p>
      </div>
    </section>
  );
};
