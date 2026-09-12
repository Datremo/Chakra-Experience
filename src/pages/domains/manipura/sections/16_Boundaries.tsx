import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const BoundariesSection: React.FC = () => {
  const [boundarySize, setBoundarySize] = useState(50); // 0 to 100
  const [status, setStatus] = useState<'TOO_SMALL' | 'BALANCED' | 'TOO_LARGE'>('BALANCED');

  useEffect(() => {
    if (boundarySize < 30) setStatus('TOO_SMALL');
    else if (boundarySize > 70) setStatus('TOO_LARGE');
    else setStatus('BALANCED');
  }, [boundarySize]);

  // Generate external pressure particles
  const [particles, setParticles] = useState<any[]>([]);
  useEffect(() => {
    const labels = ["CRITICISM", "URGENCY", "OPINIONS", "DEMANDS", "EXPECTATIONS"];
    const p = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      label: labels[i % labels.length],
      angle: (i / 15) * Math.PI * 2,
      distance: 250 + Math.random() * 100, // Initial distance from center
      speed: 0.5 + Math.random() * 0.5
    }));
    setParticles(p);
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 bg-[#040200] relative flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-4">Protection</h2>
        <h1 className="text-4xl md:text-5xl font-serif text-amber-50 mb-16">The Architecture of 'No'</h1>

        {/* Visualizer */}
        <div className="relative w-[400px] h-[400px] mb-12 flex items-center justify-center">
          
          {/* External Environment (Pressure) */}
          <div className="absolute inset-0">
            {particles.map(p => {
              // Calculate position based on boundary
              // If boundary is small, particles get very close (distance shrinks)
              // If boundary is large, they are pushed far out
              
              let effectiveDistance = p.distance;
              if (status === 'TOO_SMALL') {
                effectiveDistance = 40 + Math.random() * 50; // Invading the core
              } else if (status === 'TOO_LARGE') {
                effectiveDistance = 200 + Math.random() * 100; // Pushed very far
              } else {
                effectiveDistance = 120 + Math.random() * 80; // Held at healthy distance
              }

              const x = Math.cos(p.angle) * effectiveDistance;
              const y = Math.sin(p.angle) * effectiveDistance;

              return (
                <motion.div
                  key={p.id}
                  animate={{ x, y }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2
                    ${status === 'TOO_SMALL' ? 'opacity-80' : status === 'TOO_LARGE' ? 'opacity-10' : 'opacity-40'}
                  `}
                >
                  <div className={`w-2 h-2 rounded-full shadow-[0_0_10px_white]
                    ${status === 'TOO_SMALL' ? 'bg-red-400' : 'bg-gray-400'}
                  `} />
                  <span className="text-[8px] font-sans tracking-widest text-white/50">{p.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* The Boundary Circle */}
          <motion.div
            animate={{ 
              width: 100 + boundarySize * 2.5, 
              height: 100 + boundarySize * 2.5,
              borderColor: status === 'BALANCED' ? 'rgba(245, 158, 11, 0.6)' : status === 'TOO_SMALL' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255, 255, 255, 0.1)',
              borderWidth: status === 'BALANCED' ? '4px' : '1px'
            }}
            transition={{ type: 'spring', damping: 20 }}
            className="absolute border-dashed rounded-full flex items-center justify-center bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] backdrop-blur-[2px]"
          />

          {/* Central Flame */}
          <div className="absolute flex items-center justify-center">
            <motion.div 
              animate={{ 
                scale: status === 'TOO_SMALL' ? [1, 0.8, 1.2, 0.7] : status === 'TOO_LARGE' ? 0.6 : [1, 1.05, 1],
                opacity: status === 'TOO_LARGE' ? 0.4 : 1,
                filter: status === 'TOO_SMALL' ? 'blur(10px)' : 'blur(4px)'
              }}
              transition={{ duration: status === 'TOO_SMALL' ? 0.5 : 2, repeat: Infinity }}
              className={`w-16 h-16 rounded-full transition-colors duration-1000
                ${status === 'TOO_SMALL' ? 'bg-red-600' : status === 'TOO_LARGE' ? 'bg-amber-900/50' : 'bg-amber-500'}
              `}
            />
            {status === 'BALANCED' && (
              <div className="absolute w-8 h-8 bg-yellow-200 rounded-full blur-[2px]" />
            )}
          </div>

        </div>

        {/* Status Text */}
        <div className="h-32 mb-8 w-full max-w-md">
          {status === 'TOO_SMALL' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400">
              <h3 className="text-3xl font-serif mb-2">Porous Boundary</h3>
              <p className="text-lg font-light text-red-200/70">External demands flood in. The fire is overwhelmed and unstable.</p>
            </motion.div>
          )}
          {status === 'BALANCED' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-amber-400">
              <h3 className="text-3xl font-serif mb-2">Clear Boundary</h3>
              <p className="text-lg font-light text-amber-100/70">A boundary is not a wall; it is a semi-permeable membrane. The fire burns steady.</p>
            </motion.div>
          )}
          {status === 'TOO_LARGE' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-gray-400">
              <h3 className="text-3xl font-serif mb-2">Rigid Wall</h3>
              <p className="text-lg font-light text-gray-500">Over-protection leads to isolation. The fire slowly suffocates alone.</p>
            </motion.div>
          )}
        </div>

        {/* Slider Control */}
        <div className="w-full max-w-md bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] p-6 rounded-2xl border border-amber-900/30">
          <label className="block text-xs font-sans tracking-[0.2em] uppercase text-amber-500/60 mb-4 text-left">
            Adjust Boundary Strength
          </label>
          <input 
            type="range" 
            min="0" max="100" 
            value={boundarySize}
            onChange={(e) => setBoundarySize(Number(e.target.value))}
            className="w-full appearance-none bg-amber-900/30 h-2 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>

        <p className="mt-16 text-xl text-amber-200/50 font-serif italic max-w-2xl">
          "Healthy power knows exactly where it ends and another begins."
        </p>

      </div>
    </section>
  );
};
