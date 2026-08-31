import React from 'react';
import { MousePointer2, ChevronDown } from 'lucide-react';

interface IntroOverlayProps {
  isIntro: boolean;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ isIntro }) => {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-20 flex flex-col items-center justify-center transition-all duration-1000 ${
        isIntro ? 'opacity-100 bg-black/40 backdrop-blur-sm' : 'opacity-0 bg-transparent'
      }`}
    >
      <div 
        className={`flex flex-col items-center transform transition-all duration-1000 delay-300 ${
          isIntro ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        }`}
      >
        <h3 className="font-sans text-sm tracking-[0.5em] uppercase text-white/50 mb-6">
          The Inner Journey
        </h3>
        <h1 className="font-serif text-6xl md:text-8xl tracking-tighter text-glow text-white drop-shadow-2xl mb-12">
          Awakening
        </h1>
        
        <div className="flex flex-col items-center space-y-4 opacity-70 animate-pulse mt-12">
          <MousePointer2 size={24} className="text-white/80" />
          <p className="font-sans text-xs tracking-widest uppercase text-white/60">
            Scroll to begin
          </p>
          <ChevronDown size={20} className="text-white/40 mt-2" />
        </div>
      </div>
      
      {/* Ambient particles/glows for the intro */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isIntro ? 'opacity-30' : 'opacity-0'}`}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>
    </div>
  );
};
