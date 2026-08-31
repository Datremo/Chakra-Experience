import React, { useState, useRef } from 'react';
import { SourceBadge } from '../components/SourceBadge';

export const LocationSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(100); // 0 to 100 representing percentage from top
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    // Calculate percentage, clamping between 5 and 95
    let pos = ((clientY - rect.top) / rect.height) * 100;
    pos = Math.max(5, Math.min(95, pos));
    setSliderPos(pos);
  };

  // Determine which label to show based on slider position
  const getChakraLabel = () => {
    if (sliderPos < 15) return "Crown";
    if (sliderPos < 25) return "Third Eye";
    if (sliderPos < 35) return "Throat";
    if (sliderPos < 45) return "Heart";
    if (sliderPos < 55) return "Solar Plexus";
    if (sliderPos < 75) return "Sacral";
    if (sliderPos < 95) return "The Root";
    return "";
  };

  const isRoot = sliderPos >= 75 && sliderPos < 95;

  return (
    <section id="location" className="min-h-screen py-32 px-6 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Explanation Side */}
        <div>
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">Location</h2>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Where is it?</h1>
          
          <div className="space-y-6 text-xl leading-loose text-white/70 mb-12">
            <p>
              Drag the scanner down the body. Notice the difference between physical anatomical landmarks and the traditional subtle-body map.
            </p>
            <div className="bg-red-900/10 border-l-4 border-red-500 p-6 mt-8 rounded-r-xl">
              <p className="text-red-100 italic">
                "Mūlādhāra is a subtle-body concept. It should not be understood as a physically visible organ, a literal wheel of light, or a gland."
              </p>
            </div>
          </div>
          
          <SourceBadge 
            type="TRADITION" 
            text="Located at the perineum, between the anus and the genitals (in the male body)." 
            sourceText="Classical Tantric Texts"
          />
        </div>

        {/* Interactive Body Map Side */}
        <div className="relative h-[800px] w-full max-w-md mx-auto bg-[#050202] rounded-[3rem] overflow-hidden border border-red-900/30 flex justify-center">
          
          {/* The Body Silhouette (using a placeholder high-quality aesthetic image/gradient approach) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0f0f] to-black opacity-80" />
          
          {/* Abstract representation of a human silhouette */}
          <div className="absolute inset-y-10 inset-x-20 bg-white/5 blur-3xl rounded-full" />
          <div className="absolute bottom-20 inset-x-32 top-1/2 bg-red-500/5 blur-3xl rounded-full" />
          
          {/* Silhouette SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-10 scale-150 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16.5 14.5L12 9 7.5 14.5M12 9v9M9.5 22.5l2.5-4.5 2.5 4.5"/>
          </svg>

          {/* The Interactive Container */}
          <div 
            ref={containerRef}
            className="absolute inset-0 z-20 cursor-ns-resize touch-none"
            onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
            onTouchMove={handleDrag}
            onMouseDown={handleDrag}
          >
            {/* The Draggable Line */}
            <div 
              className="absolute left-0 right-0 h-px bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] flex items-center justify-center transition-all duration-75"
              style={{ top: `${sliderPos}%` }}
            >
              {/* The Scanner Node */}
              <div className="w-24 h-1 bg-white/50 blur-[2px] rounded-full absolute" />
              
              {/* Dynamic Label */}
              <div className={`absolute -top-12 px-6 py-2 rounded-full border transition-all duration-300 backdrop-blur-md font-sans tracking-widest uppercase text-sm
                ${isRoot ? 'bg-red-900/80 border-red-500 text-white scale-110 shadow-[0_0_30px_rgba(220,38,38,0.5)]' : 'bg-black/50 border-white/20 text-white/50'}`}
              >
                {getChakraLabel()}
              </div>
            </div>

            {/* If at Root, show the comparison */}
            {isRoot && (
              <div className="absolute bottom-10 left-0 right-0 flex justify-between px-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 w-[45%] text-center">
                  <p className="text-[10px] text-white/40 font-sans uppercase tracking-widest mb-1">Physical Anatomy</p>
                  <p className="text-sm text-white/80">Pelvic Floor / Perineum</p>
                </div>
                <div className="bg-red-900/80 backdrop-blur-md p-4 rounded-xl border border-red-500/50 w-[45%] text-center shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                  <p className="text-[10px] text-red-200/60 font-sans uppercase tracking-widest mb-1">Subtle Body</p>
                  <p className="text-sm text-red-50">Mūlādhāra Center</p>
                </div>
              </div>
            )}
          </div>

          <div className="absolute top-6 text-center w-full z-10">
            <p className="text-white/30 font-sans text-xs tracking-[0.3em] uppercase">Drag to scan</p>
          </div>

        </div>

      </div>
    </section>
  );
};
