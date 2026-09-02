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

      const triggerEscape = () => {
        setOrbPos({
          x: Math.random() * 70 + 15,
          y: Math.random() * 60 + 20,
        });
        setAttempts(prev => prev + 1);
      };

      // If pointer gets too close (within 16%), the orb jumps away
      if (distance < 16) {
        triggerEscape();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      const y = ((e.touches[0].clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });

      const dx = x - orbPos.x;
      const dy = y - orbPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 18) {
        setOrbPos({
          x: Math.random() * 70 + 15,
          y: Math.random() * 60 + 20,
        });
        setAttempts(prev => prev + 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [orbPos]);

  const handleOrbTap = () => {
    setOrbPos({
      x: Math.random() * 70 + 15,
      y: Math.random() * 60 + 20,
    });
    setAttempts(prev => prev + 1);
  };

  return (
    <section ref={containerRef} className="h-screen w-full relative bg-[#090014] overflow-hidden flex flex-col items-center justify-center">
      
      <div className="absolute top-12 md:top-28 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-xs sm:text-sm font-sans tracking-[0.4em] uppercase text-purple-300/80 mb-3 drop-shadow-md">World 26</h2>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white/30 tracking-widest text-center">
          TRY TO CATCH IT
        </h1>
        {attempts > 3 && (
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl font-serif italic text-purple-200 max-w-2xl text-center leading-relaxed drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            The more you grasp, the further it retreats. <br/>
            Sahasrāra cannot be conquered by force. It awakens when the reaching ceases.
          </motion.p>
        )}
      </div>

      {/* The Elusive Orb */}
      <motion.div
        onClick={handleOrbTap}
        onTouchStart={handleOrbTap}
        animate={{
          left: `${orbPos.x}%`,
          top: `${orbPos.y}%`,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-[0_0_60px_#f5d0fe,0_0_100px_#c084fc] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer active:scale-90 transition-transform"
      />
      
    </section>
  );
};
