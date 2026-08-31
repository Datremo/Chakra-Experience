import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const PleasureSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center py-32 px-6 bg-transparent overflow-hidden">
      
      {/* Dynamic Mouse Tracker Glow */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none mix-blend-screen z-0"
        animate={{ x: mousePos.x - 250, y: mousePos.y - 250 }}
        transition={{ type: "spring", stiffness: 40, damping: 20, mass: 0.5 }}
      />

      {/* Soft warm background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        
        <h2 className="font-sans text-orange-500 tracking-[0.4em] uppercase text-sm mb-6">Experience</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-16 font-serif text-white leading-tight drop-shadow-xl">
          {svadhisthanaData.themes.pleasure.headline.split('=')[0]} <br/>
          <span className="text-3xl md:text-5xl text-orange-300 italic drop-shadow-[0_0_20px_rgba(253,186,116,0.3)]">
            = {svadhisthanaData.themes.pleasure.headline.split('=')[1]}
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24 max-w-3xl mx-auto">
          {svadhisthanaData.themes.pleasure.examples.map((item: any, i: number) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.15, backgroundColor: 'rgba(249,115,22,0.4)', borderColor: 'rgba(249,115,22,0.8)' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="px-6 py-3 rounded-full bg-orange-900/20 border border-orange-500/30 text-orange-100 font-sans tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(249,115,22,0.1)] cursor-default transition-colors duration-300 backdrop-blur-md"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ boxShadow: '0 0 50px rgba(153, 27, 27, 0.4)' }}
          transition={{ duration: 1 }}
          className="bg-black/70 backdrop-blur-2xl p-10 md:p-14 rounded-3xl border border-red-900/40 max-w-3xl mx-auto shadow-[0_0_30px_rgba(153,27,27,0.2)] transition-shadow duration-700"
        >
          <p className="text-3xl text-red-100/90 leading-relaxed font-serif italic drop-shadow-md">
            «Pleasure becomes problematic when it turns into compulsive avoidance, dependence, or loss of choice.»
          </p>
          <div className="mt-10 pt-10 border-t border-red-900/50 font-sans text-xl text-red-200/70 font-light leading-relaxed">
            Healthy Svādhiṣṭhāna allows you to enjoy a meal without overeating, enjoy rest without stagnating, and enjoy connection without clinging. It is the capacity to savor the moment and then let it go.
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 text-lg text-orange-400/80 italic cursor-default hover:text-orange-300 hover:scale-105 transition-all drop-shadow-md"
        >
          “When does pleasure become escape?”
        </motion.p>

      </div>
    </section>
  );
};
