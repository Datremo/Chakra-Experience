import React from 'react';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import type { ChakraData } from '../../../../data/chakras';

interface EndingSectionProps {
  onClose: () => void;
  chakra: ChakraData;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onClose, chakra }) => {
  return (
    <section className="min-h-screen py-32 px-6 bg-black relative flex items-center justify-center overflow-hidden">
      
      {/* Intense core that slowly fades upward */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="w-24 h-24 mx-auto mb-8 relative flex items-center justify-center">
            {/* Pulsing Sun */}
            <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute inset-4 bg-amber-500 rounded-full" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-45">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="black" strokeWidth="2" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-amber-50 mb-6 tracking-wide drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            The Fire is Steady
          </h1>
          <p className="text-xl md:text-2xl text-amber-200/60 font-light italic max-w-2xl mx-auto leading-relaxed">
            You have forged the raw material of impulse into the focused heat of agency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="font-sans text-sm tracking-[0.3em] text-amber-500/50 uppercase mb-12">
            The heart awaits the warmth.
          </p>

          <button
            onClick={onClose}
            className="group relative px-8 py-4 bg-black border border-amber-500/30 rounded-full hover:bg-amber-900/20 hover:border-amber-500 transition-all duration-500 flex items-center gap-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <span className="relative z-10 font-sans tracking-[0.2em] uppercase text-sm text-amber-100 group-hover:text-amber-500 transition-colors">
              Ascend to Anāhata
            </span>
            <LogOut size={16} className="relative z-10 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
