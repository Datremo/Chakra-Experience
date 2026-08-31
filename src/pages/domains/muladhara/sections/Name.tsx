import React from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

export const NameSection: React.FC = () => {


  const playAudio = (text: string) => {
    // In a real app, this would play the actual audio file
    // For now, we'll use SpeechSynthesis as a fallback for pronunciation
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN'; // Closest to Sanskrit for basic TTS
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="name" className="min-h-screen py-32 px-6 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto w-full text-center">
        
        <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-16">The Name</h2>

        {/* The Equation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-24">
          
          {/* MULA */}
          <motion.div 
            onHoverStart={() => console.log('mula')}
            onHoverEnd={() => console.log(null)}
            className="group cursor-pointer p-8 rounded-2xl transition-colors hover:bg-red-900/10"
            onClick={() => playAudio('Moo-la')}
          >
            <h2 className="text-6xl md:text-8xl text-red-50 mb-2 transition-transform group-hover:scale-110">मूल</h2>
            <h3 className="text-2xl text-red-400 font-sans tracking-widest mb-1 uppercase">Mūla</h3>
            <p className="text-red-200/50 uppercase tracking-[0.2em] text-sm">Root</p>
          </motion.div>

          {/* + */}
          <div className="text-4xl text-red-900/50">+</div>

          {/* ADHARA */}
          <motion.div 
            onHoverStart={() => console.log('adhara')}
            onHoverEnd={() => console.log(null)}
            className="group cursor-pointer p-8 rounded-2xl transition-colors hover:bg-red-900/10"
            onClick={() => playAudio('Aaa-dha-ra')}
          >
            <h2 className="text-6xl md:text-8xl text-red-50 mb-2 transition-transform group-hover:scale-110">आधार</h2>
            <h3 className="text-2xl text-red-400 font-sans tracking-widest mb-1 uppercase">Ādhāra</h3>
            <p className="text-red-200/50 uppercase tracking-[0.2em] text-sm">Support / Foundation</p>
          </motion.div>

        </div>

        {/* = */}
        <div className="text-4xl text-red-900/50 mb-16">=</div>

        {/* THE RESULT */}
        <div 
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => playAudio('Moo-laa-dha-ra')}
        >
          <div className="flex items-center space-x-4 mb-4 text-white/30 group-hover:text-red-400 transition-colors">
            <Volume2 size={24} />
            <span className="font-sans uppercase tracking-widest text-sm">Listen</span>
          </div>
          <h1 className="text-[5rem] md:text-[8rem] text-red-50 leading-none mb-6">
            मूलाधार
          </h1>
          <h2 className="text-4xl tracking-widest text-red-200 font-sans font-light uppercase">
            Mūlādhāra
          </h2>
        </div>

      </div>
    </section>
  );
};
