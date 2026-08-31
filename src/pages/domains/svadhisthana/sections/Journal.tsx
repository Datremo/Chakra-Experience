import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const questions = svadhisthanaData.journalPrompts;

  const nextQ = () => setCurrentIndex(prev => (prev + 1) % questions.length);
  const prevQ = () => setCurrentIndex(prev => (prev - 1 + questions.length) % questions.length);

  return (
    <section className="min-h-screen relative flex items-center justify-center py-32 px-6 bg-black overflow-hidden">
      
      {/* The Water Mirror Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
         <div className="w-full h-full bg-gradient-to-b from-[#0a0502] via-[#05101a] to-[#020a14] opacity-80" />
         {/* A completely still orange-blue surface reflection */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_50%)]" />
         
         {/* Abstract reflection of the user */}
         <motion.div 
           animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute w-[400px] h-[600px] bg-orange-100/5 blur-[100px] rounded-full"
         />
      </div>

      <div className="relative z-10 w-full max-w-4xl text-center">
        
        <h2 className="font-sans text-teal-400/50 tracking-[0.4em] uppercase text-sm mb-4">The Water Mirror</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-orange-50/50 mb-24 uppercase tracking-widest">
          What do you see when nothing is moving?
        </h1>

        <div className="h-[200px] flex items-center justify-center relative">
          
          <button 
            onClick={prevQ}
            className="absolute left-0 p-4 text-white/20 hover:text-white/60 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
              transition={{ duration: 1 }}
              className="px-16"
            >
              <p className="text-3xl md:text-5xl font-serif text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {questions[currentIndex]}
              </p>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={nextQ}
            className="absolute right-0 p-4 text-white/20 hover:text-white/60 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
          
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {questions.map((_: any, i: number) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-orange-500 w-4' : 'bg-white/20'}`} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};
