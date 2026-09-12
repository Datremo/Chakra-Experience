import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MEDITATION_STEPS = [
  {
    title: "The Seat",
    text: "Sit with a tall, straight spine. Let the shoulders drop. The geometry of the body must be stable to hold the fire. Bring your attention to the space just above your navel."
  },
  {
    title: "The Spark",
    text: "Imagine a tiny, brilliant spark of ember deep within the solar plexus. With every inhalation, you are not just breathing air; you are pulling oxygen down to feed this spark."
  },
  {
    title: "The Flame",
    text: "With each breath, the spark catches. It becomes a steady, glowing flame. Notice the warmth radiating outward from your center into your stomach, your lower back, your chest."
  },
  {
    title: "The Furnace",
    text: "Throw what you no longer need into this fire. The hesitations, the absorbed criticisms, the stagnant energy. Watch them instantly combust, turning into pure, usable heat."
  },
  {
    title: "The Radiance",
    text: "You are not consumed by this fire; you are powered by it. Let the glow extend to the edges of your skin. A steady, unshakeable center of gravity."
  }
];

export const AgniMeditationSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < MEDITATION_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-[#030101] relative flex items-center justify-center">
      
      {/* Background Aura that grows with each step */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-1000 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.2),transparent_70%)] pointer-events-none"
        style={{ opacity: 0.1 + (currentStep / MEDITATION_STEPS.length) * 0.4 }}
      />

      <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Practice</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-16">Stoking the Fire</h1>

        {/* Meditation Text Area */}
        <div className="min-h-[250px] w-full flex items-center justify-center mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h3 className="text-2xl font-serif text-amber-400 mb-6 tracking-widest uppercase">
                {MEDITATION_STEPS[currentStep].title}
              </h3>
              <p className="text-xl md:text-2xl text-amber-100/80 font-light leading-relaxed">
                {MEDITATION_STEPS[currentStep].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress and Controls */}
        <div className="flex flex-col items-center w-full max-w-sm">
          
          <div className="flex justify-between w-full mb-8">
            {MEDITATION_STEPS.map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 h-1 mx-1 rounded-full transition-colors duration-500
                  ${i <= currentStep ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]' : 'bg-white/10'}
                `} 
              />
            ))}
          </div>

          <div className="flex gap-4 w-full">
            <button 
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex-1 py-4 border rounded-full font-sans tracking-widest text-xs uppercase transition-colors
                ${currentStep === 0 
                  ? 'border-white/10 text-white/20 cursor-not-allowed' 
                  : 'border-white/30 text-white/60 hover:bg-white/5 hover:text-white'}
              `}
            >
              Previous
            </button>
            <button 
              onClick={nextStep}
              disabled={currentStep === MEDITATION_STEPS.length - 1}
              className={`flex-1 py-4 border rounded-full font-sans tracking-widest text-xs uppercase transition-all duration-300
                ${currentStep === MEDITATION_STEPS.length - 1 
                  ? 'bg-amber-900/20 border-amber-500/30 text-amber-500/50 cursor-not-allowed' 
                  : 'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border-amber-500 text-amber-400 hover:bg-amber-900/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]'}
              `}
            >
              Next
            </button>
          </div>
          
        </div>

      </div>
    </section>
  );
};
