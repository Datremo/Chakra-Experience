import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const SexualitySection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 flex items-center justify-center relative bg-transparent overflow-hidden">
      
      {/* Dynamic Mouse Tracker Glow */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-orange-600/5 blur-[120px] pointer-events-none mix-blend-screen z-0"
        animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
        transition={{ type: "spring", stiffness: 40, damping: 20, mass: 0.5 }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Expression</h2>
          <h1 className="text-4xl md:text-6xl mb-8 leading-tight font-serif text-white drop-shadow-lg">
            Desire &bull; Sexuality &bull; Creative Life
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-orange-100/70 font-sans font-light">
            <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              In modern psychology and New Age systems, Svādhiṣṭhāna is heavily associated with human sexuality and reproductive energy.
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              Classical tantric traditions absolutely contain sexual and reproductive symbolism within this chakra, but contemporary systems have expanded this interpretation to encompass the entirety of how we relate intimately to others.
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
              Sexuality is one profound manifestation of the "sacral" energy—the drive to connect, to feel deeply, and to create. However, reducing the entire chakra exclusively to sex ignores its broader domains of general emotion, adaptability, and artistic creation.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="mt-8 border-l-4 border-orange-500/50 pl-6 py-4 bg-orange-900/10 rounded-r-2xl shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <p className="text-orange-200/80 italic text-sm">
                Important boundary: Chakra concepts are contemplative tools. They are not a substitute for sexual-health education, trauma therapy, or medical care for reproductive issues.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }}
          className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-orange-900/30 shadow-[0_0_50px_rgba(249,115,22,0.1)] flex items-center justify-center hover:shadow-[0_0_80px_rgba(249,115,22,0.3)] hover:border-orange-500/50 transition-all duration-700"
        >
           <img 
             src="https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?q=80&w=1000&auto=format&fit=crop"
             alt="Tasteful abstract couple holding hands"
             className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#120a05] via-transparent to-[#120a05] group-hover:opacity-50 transition-opacity duration-1000" />
           <p className="relative z-10 font-serif text-2xl text-orange-100/90 italic px-10 text-center drop-shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
             "To flow with another requires first knowing how to hold your own shape."
           </p>
        </motion.div>

      </div>
    </section>
  );
};
