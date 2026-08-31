import React from 'react';

interface EndingSectionProps {
  onExit: () => void;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onExit }) => {
  return (
    <section id="end" className="min-h-screen py-32 px-6 flex items-center justify-center relative bg-black">
      
      {/* Background Mandala fade-out */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[80vw] h-[80vw] border-[1px] border-red-500 rounded-full" />
        <div className="absolute w-[80vw] h-[80vw] border-[1px] border-red-500 rotate-45" />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        
        <h2 className="font-sans text-red-700 tracking-[0.5em] uppercase text-xs mb-12">The Foundation is Set</h2>
        
        <h1 className="text-6xl md:text-8xl mb-8 text-white font-light">
          You are supported.
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/40 mb-24 italic font-serif max-w-2xl mx-auto leading-relaxed">
          "A tree that reaches for the heavens must first sink its roots into the dark earth."
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          
          <button 
            onClick={onExit}
            className="group relative px-12 py-6 border border-white/20 hover:border-red-500 rounded-full transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 font-sans tracking-[0.2em] uppercase text-sm text-white/70 group-hover:text-white transition-colors">
              Return to Journey Map
            </span>
          </button>

        </div>
        
      </div>
    </section>
  );
};
