import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BreathField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Subtle parallax effect on the background based on scroll
  const yOffset = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityOffset = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.6]);

  // A slow, organic breathing rhythm for the ambient gradient
  // Expand -> Pause -> Release -> Rest
  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#05120C]">
      
      {/* Base Breathing Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{ y: yOffset, opacity: opacityOffset }}
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(6, 78, 59, 0.2) 0%, rgba(2, 44, 34, 0.4) 40%, rgba(5, 18, 12, 1) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, rgba(4, 120, 87, 0.3) 50%, rgba(5, 18, 12, 1) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(6, 78, 59, 0.2) 0%, rgba(2, 44, 34, 0.4) 40%, rgba(5, 18, 12, 1) 100%)',
          ],
        }}
        transition={{
          duration: 12, // 12-second breath cycle
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.4, 1] // Expand (40%), Release (60%)
        }}
      />

      {/* Floating Particles (Pollen/Seeds) */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-100/50 blur-[1px]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, Math.random() * 0.8 + 0.2, 0],
              scale: [1, Math.random() * 2 + 1, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Very subtle volumetric light rays */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[120%] h-[120%] bg-[conic-gradient(from_90deg_at_50%_0%,rgba(16,185,129,0)_0%,rgba(16,185,129,0.03)_10%,rgba(16,185,129,0)_20%)] origin-top"
        animate={{
          rotate: [-2, 2, -2],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Global Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_100%)]" />

    </div>
  );
};
