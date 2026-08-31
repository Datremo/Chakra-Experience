import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ObservatoryField: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById('ajna-scroll-container');
    if (!container) return;

    const handleScroll = () => {
      const totalHeight = container.scrollHeight - container.clientHeight;
      const currentScroll = container.scrollTop;
      const progress = currentScroll / totalHeight;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        backgroundColor: `rgba(${Math.max(0, 10 - scrollProgress * 10)}, ${Math.max(0, 5 - scrollProgress * 5)}, ${Math.max(0, 30 - scrollProgress * 25)}, 1)` // Deep indigo/violet to pitch black
      }}
    >
      {/* Dynamic Stars / Dust */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen transition-opacity duration-1000" style={{ opacity: (1 - scrollProgress * 0.9) * 0.5 }}>
        {Array.from({ length: 30 }).map((_, i) => {
          const fadeThreshold = Math.random();
          const isVisible = scrollProgress < fadeThreshold;
          const size = Math.random() * 1.5 + 0.5;

          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: isVisible ? Math.random() * 0.3 + 0.1 : 0,
                scale: isVisible ? Math.random() * 0.5 + 0.8 : 0,
                y: isVisible ? [0, Math.random() * -20 - 10, 0] : 0,
              }}
              transition={{ 
                opacity: { duration: 2 },
                y: { duration: Math.random() * 5 + 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bg-indigo-200/50 rounded-full"
              style={{
                width: size + 'px',
                height: size + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          );
        })}
      </div>

      {/* Majestic Spinning Mandala Overlays */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 mix-blend-screen" style={{ opacity: (1 - scrollProgress) * 0.15 }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[1px] border-indigo-500/20 rounded-full flex items-center justify-center"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-full h-full border-[1px] border-indigo-400/10 rounded-full"
              style={{ transform: `rotate(${i * 30}deg) scale(0.95)` }}
            />
          ))}
          {Array.from({ length: 2 }).map((_, i) => (
            <div 
              key={`petal-${i}`}
              className="absolute w-full h-[30%] border-[1px] border-indigo-300/15 rounded-full"
              style={{ transform: `rotate(${i * 90}deg)` }}
            />
          ))}
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-[1px] border-violet-500/10 rounded-full flex items-center justify-center"
        >
           {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={`inner-${i}`}
              className="absolute w-full h-full border-[1px] border-violet-400/10 rounded-[100%_0_100%_0]"
              style={{ transform: `rotate(${i * 60}deg)` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Deep Mystical Core Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full blur-[120px] md:blur-[180px] mix-blend-screen"
        style={{
          background: `radial-gradient(circle, rgba(79,70,229,${0.15 - scrollProgress * 0.15}) 0%, rgba(139,92,246,${0.05 - scrollProgress * 0.05}) 40%, transparent 70%)`
        }}
      />
    </div>
  );
};
