import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const GraspingExperimentSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [orbPos, setOrbPos] = useState({ x: 50, y: 50 }); // percentages
  const [attempts, setAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });

      // Calculate distance between mouse and orb
      const dx = x - orbPos.x;
      const dy = y - orbPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // If mouse gets too close (within 15%), the orb jumps away
      if (distance < 15) {
        setOrbPos({
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
        });
        setAttempts(prev => prev + 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [orbPos]);

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-black overflow-hidden flex flex-col items-center justify-center">
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 26</h2>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-7xl font-serif text-white/20 tracking-widest text-center">
          TRY TO CATCH IT
        </h1>
        {attempts > 5 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-xl md:text-2xl font-serif italic text-purple-300 max-w-2xl text-center leading-relaxed"
          >
            The more you seek it, the further it retreats. <br/>
            Sahasrāra cannot be grasped by effort. It happens when seeking stops.
          </motion.p>
        )}
      </div>

      {/* The Orb */}
      <motion.div
        animate={{
          left: `${orbPos.x}%`,
          top: `${orbPos.y}%`,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-[0_0_50px_white] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
      />
      
    </section>
  );
};
