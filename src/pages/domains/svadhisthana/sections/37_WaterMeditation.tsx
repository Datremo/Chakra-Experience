import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Square, RotateCcw } from 'lucide-react';
import { AdvancedWaterCanvas } from '../components/AdvancedWaterCanvas';

export const WaterMeditationSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0); // Total seconds elapsed
  
  const STAGE_DURATION = 60; // seconds per stage
  const TOTAL_STAGES = 5;
  const TOTAL_DURATION = STAGE_DURATION * TOTAL_STAGES;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive && !isPaused && seconds < TOTAL_DURATION) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused, seconds]);

  const minute = Math.min(Math.floor(seconds / STAGE_DURATION) + 1, 5);

  const stages = [
    { num: 1, title: 'Surface', instruction: 'Notice the physical sensations of your body resting.', color1: 'bg-teal-900', color2: 'bg-cyan-900' },
    { num: 2, title: 'Ripple', instruction: 'Notice any emotional movement without judgment.', color1: 'bg-cyan-800', color2: 'bg-blue-900' },
    { num: 3, title: 'Wave', instruction: 'Visualize a vast body of water rising and falling.', color1: 'bg-blue-800', color2: 'bg-indigo-900' },
    { num: 4, title: 'Current', instruction: 'Optional: Silently chant the seed syllable VAá¹‚.', color1: 'bg-indigo-800', color2: 'bg-violet-900' },
    { num: 5, title: 'Still Water', instruction: 'Let all imagery and sound disappear.', color1: 'bg-black', color2: 'bg-black' }
  ];

  const currentStage = minute > 0 && minute <= 5 ? stages[minute - 1] : null;

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(false);
    setSeconds(0);
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const formatTime = (totalSeconds: number) => {
    const remaining = TOTAL_DURATION - totalSeconds;
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="h-screen w-full relative flex flex-col items-center justify-center py-32 px-6 overflow-hidden bg-[#000508]">
      
      {/* Dynamic Visual Environment based on Stage */}
      <AnimatePresence mode="wait">
        {currentStage && (
           <motion.div
             key={currentStage.num}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 3 }}
             className="absolute inset-0 z-0 flex items-center justify-center transition-colors duration-1000 overflow-hidden"
           >
             {/* Base Gradient Layer */}
             <div className={`absolute inset-0 transition-colors duration-2000 ${currentStage.color1} opacity-20`} />
             
             {/* Advanced Canvas Fluid Simulation */}
             <AdvancedWaterCanvas stage={minute} />
             
           </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        {!isActive && seconds === 0 ? (
          <div className="bg-black/60 backdrop-blur-2xl p-12 rounded-[3rem] border border-teal-900/40 shadow-[0_0_80px_rgba(20,184,166,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="font-sans text-teal-400 tracking-[0.3em] uppercase text-sm mb-6">Practice</h2>
              <h1 className="text-5xl md:text-6xl mb-8 font-serif text-white drop-shadow-lg">Water Meditation</h1>
              <p className="text-xl text-teal-50/70 mb-12 font-light leading-relaxed">
                A 5-minute guided visual and contemplative journey to connect with your fluid nature.
              </p>
              <button
                onClick={() => { setIsActive(true); setSeconds(0); setIsPaused(false); }}
                className="group flex items-center justify-center space-x-4 mx-auto px-10 py-5 bg-teal-900/30 text-teal-50 border border-teal-500/40 rounded-full font-sans tracking-widest uppercase hover:bg-teal-800/50 transition-all shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] hover:scale-105"
              >
                <Play size={18} className="text-teal-400 group-hover:text-teal-300" />
                <span>Begin Journey</span>
              </button>
            </div>
          </div>
        ) : seconds < TOTAL_DURATION ? (
          <div className="flex flex-col items-center w-full">
            <div className="mb-16">
              <p className="text-sm font-sans tracking-[0.4em] text-teal-400/80 uppercase mb-4 drop-shadow-md">Stage {minute} of {TOTAL_STAGES}</p>
              <h2 className="text-5xl md:text-7xl font-serif mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                {currentStage?.title}
              </h2>
              <p className="text-2xl font-light italic text-teal-50/90 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
                {currentStage?.instruction}
              </p>
            </div>
            
            {/* Timer Display & Controls */}
            <div className="mt-12 flex flex-col items-center bg-black/40 backdrop-blur-xl px-10 py-6 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <div className="text-4xl font-sans font-extralight text-teal-100 mb-6 tracking-widest drop-shadow-md">
                {formatTime(seconds)}
              </div>
              <div className="flex space-x-6">
                <button 
                  onClick={handlePauseToggle}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10 hover:border-white/30"
                >
                  {isPaused ? <Play size={20} /> : <Pause size={20} />}
                </button>
                <button 
                  onClick={handleStop}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10 hover:border-red-500/30 hover:text-red-400"
                >
                  <Square size={20} />
                </button>
              </div>
            </div>
            
            {/* Next stage skip control */}
            <button 
              onClick={() => setSeconds(s => Math.min(s + 60, TOTAL_DURATION))} 
              className="mt-12 text-[10px] uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors"
            >
              Skip Stage →
            </button>
          </div>
        ) : (
          <div className="bg-black/80 backdrop-blur-2xl p-6 sm:p-12 md:p-16 rounded-3xl sm:rounded-[3rem] border border-teal-900/40 text-center shadow-[0_0_80px_rgba(20,184,166,0.15)] max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 md:mb-8 drop-shadow-lg">Practice Complete</h2>
            <p className="text-lg sm:text-2xl text-teal-200/90 italic mb-10 sm:mb-16 leading-relaxed max-w-xl mx-auto drop-shadow-md font-light">
              «What changed when you stopped resisting the feeling?»
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => { setSeconds(0); setIsActive(true); setIsPaused(false); }}
                className="flex items-center justify-center space-x-3 px-8 py-4 rounded-full border border-teal-500/30 text-teal-100 bg-teal-900/20 hover:bg-teal-900/40 hover:scale-105 transition-all font-sans tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(20,184,166,0.2)]"
              >
                <RotateCcw size={16} />
                <span>Meditate Again</span>
              </button>
              <button
                onClick={handleStop}
                className="flex items-center justify-center space-x-3 px-8 py-4 rounded-full border border-white/10 text-white/60 bg-white/5 hover:bg-white/10 hover:text-white transition-all font-sans tracking-widest uppercase text-sm"
              >
                <span>Return</span>
              </button>
            </div>
          </div>
        )}
      </div>

    </section>
  );
};
