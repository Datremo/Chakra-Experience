import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const STEPS = [
  { duration: 15, text: 'Feel your feet on the floor.', sub: 'Notice the weight and the pressure.' },
  { duration: 15, text: 'Drop your shoulders.', sub: 'Release the tension held in your neck and jaw.' },
  { duration: 15, text: 'Breathe deep into the belly.', sub: 'Slow the heart rate. Send a signal of safety.' },
  { duration: 15, text: 'Feel the chair or ground beneath you.', sub: 'Something is holding you. You do not have to work for it.' },
];

export const S51_OneMinuteRootReset: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(51); }, [inView, reachWorld]);

  const [active, setActive] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    let interval: number;
    if (active && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime === 45) setStepIndex(1);
          if (newTime === 30) setStepIndex(2);
          if (newTime === 15) setStepIndex(3);
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setActive(false);
    }
    return () => clearInterval(interval);
  }, [active, timeLeft]);

  const start = () => {
    setActive(true);
    setStepIndex(0);
    setTimeLeft(60);
  };

  return (
    <div ref={ref} id="act8" className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* Background Pulse during timer */}
      <motion.div 
        className="absolute inset-0 z-0 bg-red-950 pointer-events-none"
        animate={{ opacity: active ? [0.2, 0.4, 0.2] : 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="z-10 max-w-4xl w-full text-center flex flex-col items-center">
        <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-red-600 mb-8 drop-shadow-lg">Act VIII</h3>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
          Modern Root Practices
        </h2>
        
        {!active && timeLeft === 60 ? (
          <div className="mt-12 flex flex-col items-center">
            <p className="text-slate-400 text-xl font-light mb-12 max-w-2xl leading-relaxed">
              Grounding is not an esoteric concept. It is a biological imperative. Take exactly 60 seconds to reset your nervous system right now.
            </p>
            <button 
              onClick={start} 
              className="px-12 py-6 bg-transparent text-red-500 border border-red-900 rounded-full font-bold uppercase tracking-[0.3em] hover:bg-red-950 hover:border-red-600 transition-all group relative overflow-hidden"
            >
                <span className="relative z-10 group-hover:text-red-300">Begin 60-Second Reset</span>
                <div className="absolute inset-0 bg-red-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-16 w-full">
            <motion.div 
              className="w-48 h-48 rounded-full flex items-center justify-center mb-12 relative"
              animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 0px rgba(220,38,38,0)', '0 0 50px rgba(220,38,38,0.5)', '0 0 0px rgba(220,38,38,0)'] }} 
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
                <span className="text-6xl font-serif text-white drop-shadow-lg">{timeLeft}</span>
                <motion.svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#450a0a" strokeWidth="2" />
                    <motion.circle cx="50" cy="50" r="48" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"
                        initial={{ pathLength: 1 }} animate={{ pathLength: timeLeft / 60 }} transition={{ duration: 1, ease: 'linear' }}
                    />
                </motion.svg>
            </motion.div>
            
            <div className="h-32">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={stepIndex} 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h4 className="text-3xl md:text-5xl text-white font-serif mb-4 tracking-wider">
                            {timeLeft === 0 ? "You are grounded." : STEPS[stepIndex].text}
                        </h4>
                        <p className="text-red-400 text-lg md:text-xl font-light tracking-widest uppercase">
                            {timeLeft === 0 ? "Carry this weight with you." : STEPS[stepIndex].sub}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {timeLeft === 0 && (
                <button 
                    onClick={start} 
                    className="mt-12 px-8 py-3 border border-slate-700 rounded-full text-slate-400 text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                    Reset Again
                </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};