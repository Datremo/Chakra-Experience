import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S40_TheWindowOfTolerance: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(40); }, [inView, reachWorld]);

  const [arousal, setArousal] = useState(50); // 0 to 100

  let stateText = "Optimal Window";
  let stateDesc = "Calm, engaged, grounded. You can process information and connect with others.";
  let bgColor = "#0f172a"; // slate-900
  let textColor = "text-emerald-400";
  let indicatorColor = "bg-emerald-500";
  
  if (arousal > 75) {
    stateText = "Hyperarousal";
    stateDesc = "Fight or Flight. Anxiety, panic, rage, overwhelmed system.";
    bgColor = "#450a0a"; // red-950
    textColor = "text-red-500";
    indicatorColor = "bg-red-500";
  } else if (arousal < 25) {
    stateText = "Hypoarousal";
    stateDesc = "Freeze or Fawn. Numbness, dissociation, shut down, collapse.";
    bgColor = "#172554"; // blue-950
    textColor = "text-blue-400";
    indicatorColor = "bg-blue-500";
  }

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 overflow-hidden">
      
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 z-0 transition-colors duration-700"
        style={{ backgroundColor: bgColor }}
      />
      
      {/* Chaotic noise overlay based on state */}
      {arousal > 75 && (
        <motion.div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url(/assets/muladhara/texture_soil.jpg)' }}
            animate={{ scale: [1, 1.05, 1], x: [0, 5, -5, 0] }}
            transition={{ duration: 0.1, repeat: Infinity }}
        />
      )}
      
      <div className="z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* The Text & State */}
        <div className="bg-black/30 p-12 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-wider">Window of Tolerance</h3>
          <p className="text-slate-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
            A grounded root chakra means your nervous system can handle stress without getting thrown out of its optimal window.
          </p>
          
          <div className="p-8 border-l-4 rounded-r-2xl bg-black/40 transition-colors duration-500" style={{ borderLeftColor: indicatorColor }}>
            <h4 className={`font-serif text-3xl mb-4 transition-colors duration-500 ${textColor}`}>{stateText}</h4>
            <p className="text-slate-300 text-lg leading-relaxed">{stateDesc}</p>
          </div>
        </div>

        {/* The Interactive Slider */}
        <div className="flex flex-col items-center justify-center py-12">
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-6 drop-shadow-md">Sympathetic Activation</span>
            
            {/* Custom Vertical Slider */}
            <div className="relative h-96 w-16 bg-slate-900 rounded-full border border-white/10 flex flex-col items-center py-2 shadow-inner">
                {/* Gradient Track */}
                <div className="absolute inset-y-2 w-4 rounded-full bg-gradient-to-b from-red-600 via-emerald-600 to-blue-600 opacity-50" />
                
                <input 
                    type="range" min="0" max="100" value={arousal} 
                    onChange={(e) => setArousal(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    style={{ writingMode: 'vertical-lr', direction: 'rtl' }}
                />
                
                {/* Thumb Indicator */}
                <motion.div 
                    className="absolute w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10 flex items-center justify-center pointer-events-none"
                    style={{ bottom: `calc(${arousal}% - 24px)` }}
                >
                    <div className={`w-6 h-6 rounded-full transition-colors duration-300 ${indicatorColor}`} />
                </motion.div>
            </div>

            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mt-6 drop-shadow-md">Parasympathetic Shutdown</span>
            
            <button 
                onClick={() => setArousal(50)} 
                className="mt-12 px-8 py-3 border border-slate-600 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-[0.2em]"
            >
                Return to Center
            </button>
        </div>

      </div>
    </div>
  );
};