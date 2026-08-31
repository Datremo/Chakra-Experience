import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const RelationshipsSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [distance, setDistance] = useState(200); // Distance between lights
  const containerRef = useRef<HTMLDivElement>(null);
  
  // A simple drag handler to adjust distance
  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    
    // Center is rect.width / 2
    const center = rect.width / 2;
    // Calculate how far the mouse is from the center
    const distFromCenter = Math.abs(clientX - rect.left - center);
    
    // Clamp distance between 20px (too close) and 300px (too far)
    const newDist = Math.max(20, Math.min(300, distFromCenter));
    setDistance(newDist);
  };

  // Determine state based on distance
  const isTooClose = distance < 60;
  const isTooFar = distance > 220;


  // Background visual turbulence
  const getTurbulence = () => {
    if (isTooClose) return 'animate-pulse scale-110 blur-md bg-orange-600/40';
    if (isTooFar) return 'blur-sm scale-90 bg-blue-900/10 opacity-30';
    return 'blur-lg scale-100 bg-teal-500/20'; // Calm
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020308]">
      
      <div className="text-center mb-16 relative z-10 max-w-4xl mx-auto">
        <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Connection</h2>
        <h1 className="text-4xl md:text-6xl mb-8 font-serif text-white leading-tight">
          {svadhisthanaData.themes.relationships.headline}
        </h1>
        <p className="text-xl text-white/60 italic font-light">
          Drag the right light to find the space between clinging and withdrawing.
        </p>
      </div>

      {/* Interactive Relationship Area */}
      <div 
        ref={containerRef}
        className="w-full max-w-3xl h-[400px] border border-white/10 rounded-3xl bg-black/50 overflow-hidden relative flex items-center justify-center mb-16 cursor-ew-resize touch-none"
        onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
        onTouchMove={handleDrag}
        onMouseDown={handleDrag}
      >
        {/* Dynamic Water Background reflecting relationship state */}
        <div className={`absolute inset-0 transition-all duration-700 ${getTurbulence()}`} />
        
        {/* The Self (Center/Left) */}
        <motion.div 
          animate={{ x: -distance }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute w-16 h-16 rounded-full bg-orange-400 shadow-[0_0_30px_#f97316] flex items-center justify-center z-10"
        >
          <div className="w-4 h-4 bg-white rounded-full blur-[2px]" />
        </motion.div>

        {/* The Other (Right) */}
        <motion.div 
          animate={{ x: distance }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute w-16 h-16 rounded-full bg-teal-400 shadow-[0_0_30px_#2dd4bf] flex items-center justify-center z-10"
        >
          <div className="w-4 h-4 bg-white rounded-full blur-[2px]" />
        </motion.div>

        {/* Feedback Text */}
        <div className="absolute bottom-8 left-0 right-0 text-center z-20">
          <p className={`font-serif text-2xl transition-colors duration-500 ${
            isTooClose ? 'text-red-400' : isTooFar ? 'text-blue-400/50' : 'text-teal-300'
          }`}>
            {isTooClose ? 'Turbulence (Enmeshment / Control)' : isTooFar ? 'Stagnation (Avoidance / Withdrawing)' : 'Flow (Healthy Connection)'}
          </p>
        </div>
      </div>

      {/* Reflection Prompts */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {svadhisthanaData.themes.relationships.prompts.map((prompt: any, i: number) => {
          const answers = [
            "We pull away because we confuse vulnerability with weakness. By withdrawing, we artificially construct safety at the cost of genuine connection.",
            "Enmeshment happens when we seek external validation to soothe internal emptiness. It is the desire to merge so completely that the fear of abandonment is silenced.",
            "Boundaries are the banks of the river; without them, water floods and disperses. True intimacy requires two distinct shores holding the space for the current to flow."
          ];
          
          return (
            <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between hover:bg-white/10 transition-colors h-full cursor-pointer relative overflow-hidden">
              <p className="text-orange-200/90 font-serif text-lg mb-6 leading-relaxed relative z-10">{prompt}</p>
              
              <div className="mt-4 pt-4 border-t border-white/5 relative z-10">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-3 group-hover:text-teal-400 transition-colors">Wisdom</p>
                <p className="text-white/60 font-sans text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {answers[i]}
                </p>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          );
        })}
      </div>

    </section>
  );
};
