import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParticleUnity: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const particles = Array.from({ length: 400 });

  return (
    <div ref={containerRef} className="relative w-full h-[150vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {particles.map((_, i) => {
          // Initial scattered positions
          const initX = (Math.random() - 0.5) * 1000;
          const initY = (Math.random() - 0.5) * 1000;

          // Target grid/circle positions (unity)
          const angle = i * 137.5; // Golden angle
          const radius = Math.sqrt(i) * 10;
          const targetX = Math.cos(angle * Math.PI / 180) * radius;
          const targetY = Math.sin(angle * Math.PI / 180) * radius;

          // Back to scattered
          const finalX = (Math.random() - 0.5) * 800;
          const finalY = (Math.random() - 0.5) * 800;

          const x = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [initX, targetX, targetX, finalX]);
          const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [initY, targetY, targetY, finalY]);
          const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ x, y, opacity }}
            />
          );
        })}
        
        <motion.div 
          className="absolute max-w-xl text-center px-6"
          style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]) }}
        >
          <p className="text-3xl font-serif text-white tracking-widest leading-loose mb-8">
            Unity does not require the erasure of difference.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
