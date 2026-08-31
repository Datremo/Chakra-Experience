import React from 'react';

interface IntegrationProps {
  onClose: () => void;
}

export const IntegrationSection: React.FC<IntegrationProps> = ({ onClose }) => {
  return (
    <section className="min-h-[50vh] py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-black text-center border-t border-white/5">
      
      <h2 className="font-sans text-xs tracking-[0.4em] text-white/30 uppercase mb-8">Integration</h2>
      
      <p className="text-white/50 font-light text-sm max-w-md mx-auto leading-relaxed mb-12">
        You have explored the mechanism of your own mind. You have seen how it constructs reality, and how to look past those constructs. Carry this quiet clarity with you.
      </p>

      <button 
        onClick={onClose}
        className="px-8 py-3 rounded-full border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-sans text-xs tracking-widest uppercase transition-all"
      >
        Return to Journey
      </button>
      
    </section>
  );
};
