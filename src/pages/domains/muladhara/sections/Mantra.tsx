import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, Mic, EyeOff } from 'lucide-react';

export const MantraSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'LISTEN' | 'CHANT' | 'SILENT'>('LISTEN');

  const playChant = () => {
    // Audio stub. Will need actual audio files.
    console.log("Playing Lam mantra audio...");
    alert("Audio playback initiated (Placeholder for actual .mp3)");
  };

  const requestMic = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      alert("Microphone accessed. (Placeholder for Web Audio API visualizer)");
    } catch (err) {
      alert("Microphone access denied or unavailable.");
    }
  };

  return (
    <section id="lam" className="min-h-screen py-32 px-6 flex items-center justify-center relative bg-black overflow-hidden">
      
      {/* Visualizer Background Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className={`w-[80vw] h-[80vw] rounded-full blur-[100px] transition-all duration-1000 ${
          activeMode === 'LISTEN' ? 'bg-red-600 scale-100' :
          activeMode === 'CHANT' ? 'bg-yellow-600 scale-125' : 'bg-transparent scale-50'
        }`} />
      </div>

      <div className="relative z-10 w-full text-center">
        
        <h2 className="font-sans text-red-700 tracking-[0.5em] uppercase text-xs mb-12">The Seed Syllable</h2>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h1 className="text-[12rem] md:text-[20rem] leading-none text-red-500 font-serif drop-shadow-[0_0_50px_rgba(220,38,38,0.3)]">
            लं
          </h1>
          <div className="text-3xl text-red-300 font-sans tracking-widest uppercase mt-4">Laṃ</div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <button 
            onClick={() => { setActiveMode('LISTEN'); playChant(); }}
            className={`flex items-center space-x-3 px-8 py-4 border rounded-full font-sans tracking-[0.2em] transition-all uppercase text-sm
              ${activeMode === 'LISTEN' ? 'bg-red-900/50 border-red-500 text-white' : 'border-white/10 text-white/50 hover:text-white'}`}
          >
            <Volume2 size={18} />
            <span>Listen</span>
          </button>

          <button 
            onClick={() => { setActiveMode('CHANT'); requestMic(); }}
            className={`flex items-center space-x-3 px-8 py-4 border rounded-full font-sans tracking-[0.2em] transition-all uppercase text-sm
              ${activeMode === 'CHANT' ? 'bg-red-900/50 border-red-500 text-white' : 'border-white/10 text-white/50 hover:text-white'}`}
          >
            <Mic size={18} />
            <span>Chant</span>
          </button>

          <button 
            onClick={() => setActiveMode('SILENT')}
            className={`flex items-center space-x-3 px-8 py-4 border rounded-full font-sans tracking-[0.2em] transition-all uppercase text-sm
              ${activeMode === 'SILENT' ? 'bg-red-900/50 border-red-500 text-white' : 'border-white/10 text-white/50 hover:text-white'}`}
          >
            <EyeOff size={18} />
            <span>Silent Repetition</span>
          </button>
        </div>

        <p className="text-white/40 max-w-xl mx-auto font-serif text-lg italic">
          {activeMode === 'LISTEN' && "Allow the vibration of the sound to anchor your awareness in the base of the body."}
          {activeMode === 'CHANT' && "Let the 'L' originate from the back of the mouth, and the 'M' resonate deeply in the chest."}
          {activeMode === 'SILENT' && "Mentally repeat the syllable. Sound becomes thought. Thought becomes stillness."}
        </p>

      </div>
    </section>
  );
};
