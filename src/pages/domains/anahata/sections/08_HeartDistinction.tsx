import React from 'react';
import { motion } from 'framer-motion';

export const HeartDistinctionSection: React.FC = () => {
  
  const concepts = [
    {
      title: 'PHYSICAL HEART',
      subtitle: 'Biological Organ',
      description: 'The muscular organ that pumps blood throughout the circulatory system. Measurable, anatomical, and vital for biological survival.',
      color: 'border-rose-500/30 text-rose-400',
      bg: 'bg-rose-950/20'
    },
    {
      title: 'ANĀHATA',
      subtitle: 'Traditional Subtle-Body Centre',
      description: 'A conceptual focal point used in yogic and tantric meditation (padma/chakra). Described with specific iconography (petals, bījas) to guide internal visualization and ritual.',
      color: 'border-emerald-500/30 text-emerald-400',
      bg: 'bg-emerald-950/20'
    },
    {
      title: 'EMOTIONAL HEART',
      subtitle: 'Cultural / Metaphorical Language',
      description: 'The poetic and psychological concept representing our capacity for love, grief, compassion, and connection. A modern linguistic metaphor.',
      color: 'border-amber-500/30 text-amber-400',
      bg: 'bg-amber-950/20'
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % concepts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + concepts.length) % concepts.length);
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#040806]">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">Distinctions</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Word "Heart" is Not One Thing</h1>
      </div>

      <div className="relative w-full max-w-2xl h-[400px] flex items-center justify-center z-10">
        
        <button onClick={handlePrev} className="absolute left-0 z-20 p-4 text-emerald-500/50 hover:text-emerald-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div className="w-full px-16">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className={`p-8 md:p-12 rounded-[3rem] border ${concepts[currentIndex].color} ${concepts[currentIndex].bg} backdrop-blur-sm relative overflow-hidden group text-center min-h-[300px] flex flex-col justify-center items-center`}
          >
            {/* Subtle hover pulse */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-current`} />

            <h3 className={`text-3xl font-serif mb-3 ${concepts[currentIndex].color.split(' ')[1]}`}>
              {concepts[currentIndex].title}
            </h3>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-white/50 mb-8 pb-6 border-b border-white/10 w-3/4">
              {concepts[currentIndex].subtitle}
            </h4>
            <p className="text-white/70 font-light leading-relaxed text-lg">
              {concepts[currentIndex].description}
            </p>
          </motion.div>
        </div>

        <button onClick={handleNext} className="absolute right-0 z-20 p-4 text-emerald-500/50 hover:text-emerald-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

      </div>
      
      <div className="flex gap-3 mt-8 z-10">
        {concepts.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-emerald-400 scale-125' : 'bg-emerald-900/40 hover:bg-emerald-700/60'}`} 
          />
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 font-serif italic text-white/40 text-lg max-w-2xl text-center z-10"
      >
        Conflating these three concepts leads to confusion. A blockage in the emotional heart does not mean you have a biological heart condition, nor does it mean you are failing at traditional yogic meditation.
      </motion.p>

    </section>
  );
};
