import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TruthSpectrumSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2); // Start at "True"

  const steps = [
    { label: 'Deception', desc: 'Active falsehood.', color: 'border-red-500/50 text-red-400 bg-red-950/20', fill: 'bg-red-500' },
    { label: 'Partial', desc: 'Omitting critical context to shape narrative.', color: 'border-orange-500/50 text-orange-400 bg-orange-950/20', fill: 'bg-orange-500' },
    { label: 'Factual', desc: 'Technically accurate, but perhaps raw or blunt.', color: 'border-white/30 text-white/80 bg-white/5', fill: 'bg-white' },
    { label: 'Necessary', desc: 'Is this factual information actually useful right now?', color: 'border-cyan-500/50 text-cyan-400 bg-cyan-950/20', fill: 'bg-cyan-400' },
    { label: 'Kind', desc: 'Truth delivered with care for the recipient.', color: 'border-emerald-500/50 text-emerald-400 bg-emerald-950/20', fill: 'bg-emerald-400' }
  ];

  return (
    <section className="min-h-screen py-32 flex flex-col items-center justify-center relative px-6">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">The Filter</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Is it True? Is it Necessary? Is it Kind?</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* The Track */}
        <div className="relative w-full h-2 bg-white/10 rounded-full mb-16">
          <motion.div 
            className="absolute top-0 left-0 h-full rounded-full transition-colors duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            animate={{ backgroundColor: steps[activeStep].fill.replace('bg-', '') }}
            // We use standard tailwind classes below for the dot instead to ensure it works
          />
          <div 
            className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${steps[activeStep].fill}`}
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
          
          {/* Stops */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-1">
            {steps.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-6 h-6 rounded-full -ml-3 flex items-center justify-center bg-black border-2 transition-colors ${
                  i <= activeStep ? 'border-transparent' : 'border-white/20 hover:border-white/50'
                }`}
              >
                {i <= activeStep && (
                  <div className={`w-3 h-3 rounded-full ${steps[activeStep].fill}`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Labels & Descriptions */}
        <div className="flex w-full justify-between text-center relative h-32">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="w-1/5 flex flex-col items-center cursor-pointer group"
              onClick={() => setActiveStep(i)}
            >
              <span className={`font-sans text-[10px] md:text-xs tracking-widest uppercase mb-4 transition-colors ${
                i === activeStep ? step.color.split(' ')[1] : 'text-white/30 group-hover:text-white/60'
              }`}>
                {step.label}
              </span>
              
              <AnimatePresence>
                {i === activeStep && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute top-12 w-full max-w-sm left-1/2 -translate-x-1/2 p-4 border rounded-xl ${step.color} backdrop-blur-sm`}
                  >
                    <p className="font-light text-sm">{step.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
