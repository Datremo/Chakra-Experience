import React, { useState, useRef } from 'react';
import { SourceBadge } from '../components/SourceBadge';
import { useSvadhisthanaData } from '../../../../data/svadhisthanaData';

export const LocationSection: React.FC = () => {
  const svadhisthanaData = useSvadhisthanaData();
  const [sliderPos, setSliderPos] = useState(100); 
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    let pos = ((clientY - rect.top) / rect.height) * 100;
    pos = Math.max(5, Math.min(95, pos));
    setSliderPos(pos);
  };

  const getChakraLabel = () => {
    if (sliderPos < 95) return "Mūlādhāra (Root)";
    return "";
  };

  const isSacral = sliderPos >= 55 && sliderPos < 75;
  const isSolar = sliderPos >= 45 && sliderPos < 55;
  const isRoot = sliderPos >= 75 && sliderPos < 95;

  return (
    <section id="location" className="min-h-screen py-32 px-6 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div>
          <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Location</h2>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight font-serif text-orange-50">Where is it?</h1>
          
          <div className="space-y-6 text-xl leading-loose text-orange-100/70 mb-12">
            <p>
              Drag the scanner down the body. Notice the vertical relationship between the Root, the Sacral, and the Solar Plexus.
            </p>
            <div className="bg-orange-900/10 border-l-4 border-orange-500 p-6 mt-8 rounded-r-xl">
              <p className="text-orange-200 italic">
                "{svadhisthanaData.location.note}"
              </p>
            </div>
          </div>
          
          <SourceBadge 
            type="TRADITION" 
            text={svadhisthanaData.location.traditional}
            sourceText="Classical Tantric Texts"
          />
          <br />
          <SourceBadge 
            type="MODERN" 
            text={svadhisthanaData.location.modern}
          />
        </div>

        <div className="relative h-[800px] w-full max-w-md mx-auto bg-[#050a14] rounded-[3rem] overflow-hidden border border-orange-900/30 flex justify-center">
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1420] to-black opacity-80" />
          
          <div className="absolute inset-y-10 inset-x-20 bg-white/5 blur-3xl rounded-full" />
          {/* Subtle glow for Sacral area */}
          <div className="absolute bottom-[30%] inset-x-32 h-32 bg-orange-500/10 blur-3xl rounded-full" />
          
          <svg className="absolute inset-0 w-full h-full opacity-10 scale-150 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Simple silhouette placeholder */}
            <path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16.5 14.5L12 9 7.5 14.5M12 9v9M9.5 22.5l2.5-4.5 2.5 4.5"/>
          </svg>

          <div 
            ref={containerRef}
            className="absolute inset-0 z-20 cursor-ns-resize touch-none"
            onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
            onTouchMove={handleDrag}
            onMouseDown={handleDrag}
          >
            <div 
              className="absolute left-0 right-0 h-px bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,1)] flex items-center justify-center transition-all duration-75"
              style={{ top: `${sliderPos}%` }}
            >
              <div className="w-24 h-1 bg-white/50 blur-[2px] rounded-full absolute" />
              
              <div className={`absolute -top-12 px-6 py-2 rounded-full border transition-all duration-300 backdrop-blur-md font-sans tracking-widest uppercase text-sm whitespace-nowrap
                ${isSacral ? 'bg-orange-900/80 border-orange-500 text-white scale-110 shadow-[0_0_30px_rgba(249,115,22,0.5)]' 
                  : isSolar ? 'bg-yellow-900/80 border-yellow-500 text-white scale-110 shadow-[0_0_30px_rgba(234,179,8,0.5)]'
                  : isRoot ? 'bg-red-900/80 border-red-500 text-white scale-110 shadow-[0_0_30px_rgba(220,38,38,0.5)]'
                  : 'bg-black/50 border-white/20 text-white/50'}`}
              >
                {getChakraLabel()}
              </div>
            </div>

            {isSacral && (
              <div className="absolute bottom-10 left-0 right-0 flex justify-between px-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 w-[45%] text-center">
                  <p className="text-[10px] text-white/40 font-sans uppercase tracking-widest mb-1">Physical Anatomy</p>
                  <p className="text-sm text-white/80">Lower Abdomen / Pelvis</p>
                </div>
                <div className="bg-orange-900/80 backdrop-blur-md p-4 rounded-xl border border-orange-500/50 w-[45%] text-center shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <p className="text-[10px] text-orange-200/60 font-sans uppercase tracking-widest mb-1">Subtle Body</p>
                  <p className="text-sm text-orange-50">Svādhiṣṭhāna Center</p>
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
