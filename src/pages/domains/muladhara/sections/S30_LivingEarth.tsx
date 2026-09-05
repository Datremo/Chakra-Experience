import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S30_LivingEarth: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => {
    if (inView) reachWorld(30);
  }, [inView, reachWorld]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Interactive Pulse State
  const [pulses, setPulses] = useState<{ id: number, x: number, y: number }[]>([]);

  const handleInteract = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newPulse = { id: Date.now(), x, y };
    setPulses(p => [...p, newPulse]);
    
    // Remove pulse after animation
    setTimeout(() => {
      setPulses(p => p.filter(pulse => pulse.id !== newPulse.id));
    }, 2000);
  };

  return (
    <div ref={containerRef} className="h-[150vh] w-full relative cursor-crosshair">
      <div 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        onClick={handleInteract}
      >
        
        {/* Background Cinematic Image */}
        <motion.div 
          style={{ scale: imgScale }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="/assets/muladhara/living_earth.jpg" 
            alt="Living Earth Macro" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90" />
        </motion.div>

        {/* The Interactive Pulses */}
        {pulses.map(pulse => (
          <motion.div
            key={pulse.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 5 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute rounded-full border border-green-500/50 bg-green-500/10 pointer-events-none mix-blend-screen shadow-[0_0_100px_rgba(34,197,94,0.5)]"
            style={{
              left: pulse.x - 100,
              top: pulse.y - 100,
              width: 200,
              height: 200,
              zIndex: 5
            }}
          />
        ))}

        {/* Messaging */}
        <div className="z-10 text-center max-w-3xl px-6 pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            Living Earth
          </h2>
          <div className="w-px h-12 bg-green-500/50 mx-auto mb-6" />
          <p className="text-slate-200 text-xl md:text-2xl font-light leading-relaxed drop-shadow-xl bg-black/40 p-6 rounded-xl backdrop-blur-sm border border-white/10">
            The earth is not dead rock. It is a dense, vibrating matrix of life, decay, and regeneration. <br/><br/>
            <span className="text-green-400 font-medium">Click anywhere on the soil to send a pulse through the root network.</span>
          </p>
        </div>

      </div>
    </div>
  );
};