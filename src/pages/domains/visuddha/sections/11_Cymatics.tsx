import React from 'react';
import { motion } from 'framer-motion';

export const CymaticsSection: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-[#000205]">
      
      {/* Background disclaimer / theme */}
      <div className="absolute top-10 w-full text-center z-10 px-6">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-600 uppercase mb-4">Cymatics</h2>
        <p className="font-sans text-[10px] tracking-widest text-white/30 uppercase max-w-2xl mx-auto">
          "This visualization is inspired by cymatics—the study of visible patterns produced by vibration in materials. It is being used here as an artistic metaphor for Viśuddha, not as evidence of chakra activation."
        </p>
      </div>

      <div className="text-center z-10 mb-16 mt-20">
        <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-4">Sound Can Shape Patterns</h1>
        <p className="text-xl font-light text-cyan-200/50 italic">
          Vibration organizes matter. Expression organizes your life.
        </p>
      </div>

      {/* Spectacular particle geometry */}
      <div className="relative w-full max-w-2xl h-[500px] flex items-center justify-center z-0">
        
        {/* Core glow */}
        <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />

        {/* Dancing Particles */}
        {Array.from({ length: 60 }).map((_, i) => {
          // Math to create a complex mandala-like distribution
          const angle = (i * 137.5) * (Math.PI / 180); // Fibonacci angle
          const radius = Math.sqrt(i) * 20; // Spread out
          
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#22d3ee]"
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileInView={{ 
                x: x, 
                y: y, 
                opacity: [0, 0.8, 1, 0.8],
                scale: [0, 1, 1.5, 1]
              }}
              viewport={{ once: false, margin: "-100px" }}
              animate={{
                // Continuous subtle vibration
                x: [x, x + Math.cos(angle) * 10, x],
                y: [y, y + Math.sin(angle) * 10, y]
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.02
              }}
            />
          );
        })}

        {/* Resonating rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-cyan-400/20"
            style={{ width: `${(i + 1) * 120}px`, height: `${(i + 1) * 120}px` }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.3, 0.1],
              borderColor: ['rgba(34,211,238,0.1)', 'rgba(34,211,238,0.4)', 'rgba(34,211,238,0.1)']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

      </div>

    </section>
  );
};
