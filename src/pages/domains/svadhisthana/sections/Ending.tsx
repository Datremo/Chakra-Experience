import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { type ChakraData } from '../../../../data/chakras';

interface EndingSectionProps {
  onClose: () => void;
  chakra: ChakraData;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onClose }) => {
  const [phase, setPhase] = useState<'WARMING' | 'STEAM' | 'FINAL'>('WARMING');

  useEffect(() => {
    // Sequence the ending transition
    const seq1 = setTimeout(() => setPhase('STEAM'), 4000);
    const seq2 = setTimeout(() => setPhase('FINAL'), 8000);

    return () => {
      clearTimeout(seq1);
      clearTimeout(seq2);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black px-6">
      
      {/* Background Visuals Based on Phase */}
      <AnimatePresence mode="wait">
        
        {phase === 'WARMING' && (
          <motion.div
            key="WARMING"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0"
          >
            {/* Water becoming warmer, moving up */}
            <div className="absolute bottom-0 w-full h-[80vh] bg-gradient-to-t from-orange-600/40 via-orange-900/20 to-transparent flex flex-col justify-end">
               <div className="w-full text-center text-white/30 font-sans tracking-[0.5em] uppercase text-xs pb-12">
                 LOWER ABDOMEN → NAVEL
               </div>
            </div>
            {/* Orange ripples moving upward */}
            <motion.div 
              animate={{ y: [-100, -500], opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 border-t-2 border-orange-500/30 rounded-[100%]"
            />
          </motion.div>
        )}

        {phase === 'STEAM' && (
          <motion.div
            key="STEAM"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0"
          >
            {/* Water heating, steam, turning gold */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.2),transparent_70%)]" />
            
            {/* Simulated steam/heat waves */}
            <motion.div 
              animate={{ y: [0, -100], filter: ['blur(10px)', 'blur(30px)'], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-200/20 rounded-full"
            />
          </motion.div>
        )}

        {phase === 'FINAL' && (
          <motion.div
            key="FINAL"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0 bg-black flex flex-col items-center justify-center"
          >
            {/* A single orange droplet */}
            <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316] mb-32" />
          </motion.div>
        )}

      </AnimatePresence>

      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center justify-center h-full">
        
        <AnimatePresence>
          {phase === 'FINAL' && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 2 }}
               className="flex flex-col space-y-8 mb-24"
             >
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="font-serif text-3xl md:text-5xl text-white">LET YOURSELF FEEL.</motion.p>
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }} className="font-serif text-3xl md:text-5xl text-white">LET YOURSELF MOVE.</motion.p>
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6 }} className="font-serif text-3xl md:text-5xl text-white">LET YOURSELF CREATE.</motion.p>
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8 }} className="font-serif text-3xl md:text-5xl text-orange-400">LET YOURSELF CHOOSE.</motion.p>
               
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 transition={{ delay: 11 }}
                 className="mt-16 pt-16 border-t border-white/10"
               >
                 <p className="text-xl md:text-2xl text-white/60 italic font-light leading-relaxed max-w-2xl mx-auto">
                   «Flow is not the absence of boundaries. <br/> It is the ability to move within them.»
                 </p>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 transition={{ delay: 13 }}
                 className="flex flex-col md:flex-row justify-center gap-6 mt-16 font-sans tracking-widest uppercase text-sm"
               >
                 <button 
                   onClick={() => {
                     const container = document.getElementById('svadhisthana-scroll-container');
                     if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
                   }}
                   className="flex items-center justify-center space-x-3 px-8 py-4 bg-white/5 border border-white/20 text-white/60 rounded-full hover:bg-white/10 hover:text-white transition-all"
                 >
                   <RotateCcw size={16} />
                   <span>Return to Svādhiṣṭhāna</span>
                 </button>
                 
                 <button 
                   onClick={onClose} // Let the hero page handle the navigation / state
                   className="flex items-center justify-center space-x-3 px-8 py-4 bg-yellow-900/30 border border-yellow-500/50 text-yellow-100 rounded-full hover:bg-yellow-800/50 shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all"
                 >
                   <span>Return to Journey</span>
                   <ArrowRight size={16} />
                 </button>
               </motion.div>

             </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
