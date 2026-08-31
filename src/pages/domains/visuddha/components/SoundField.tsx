import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SoundField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // The space gets deeper and more expansive as you scroll
  const yOffset = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityOffset = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.3]);
  const scaleOffset = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020813]">
      
      {/* Deep Space Background Gradient */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yOffset, opacity: opacityOffset, scale: scaleOffset }}
        animate={{
          background: [
            'radial-gradient(ellipse at 50% 50%, rgba(14, 165, 233, 0.1) 0%, rgba(30, 58, 138, 0.2) 40%, rgba(2, 8, 19, 1) 100%)',
            'radial-gradient(ellipse at 50% 50%, rgba(56, 189, 248, 0.05) 0%, rgba(17, 24, 39, 0.3) 50%, rgba(2, 8, 19, 1) 100%)',
            'radial-gradient(ellipse at 50% 50%, rgba(14, 165, 233, 0.1) 0%, rgba(30, 58, 138, 0.2) 40%, rgba(2, 8, 19, 1) 100%)',
          ],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Luminous Sound Lines (Horizontal waves representing subtle frequency) */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              filter: 'blur(1px)'
            }}
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.1, 0.5, 0.1],
              y: [0, Math.sin(i) * 20, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Slowly drifting stars / particles representing unformed sound */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-blue-100"
            style={{
              width: Math.random() > 0.9 ? '3px' : '1px',
              height: Math.random() > 0.9 ? '3px' : '1px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 4px rgba(224, 242, 254, 0.8)'
            }}
            animate={{
              opacity: [Math.random() * 0.3, Math.random() * 0.8 + 0.2, Math.random() * 0.3],
              scale: [1, Math.random() + 1, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Central Axis subtle glow */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent blur-3xl" />

    </div>
  );
};
