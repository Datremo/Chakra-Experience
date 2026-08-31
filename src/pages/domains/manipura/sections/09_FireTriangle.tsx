import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';

export const FireTriangleSection: React.FC = () => {
  const [activeFace, setActiveFace] = useState(0); // 0, 1, 2
  
  // Motion value for Y rotation
  const rotationY = useMotionValue(0);

  // Determine active face based on rotation (0 to 360 mapped)
  useEffect(() => {
    return rotationY.onChange(v => {
      // Normalize to 0-360 positive
      let normalized = v % 360;
      if (normalized < 0) normalized += 360;
      
      if (normalized > 300 || normalized <= 60) setActiveFace(0);
      else if (normalized > 60 && normalized <= 180) setActiveFace(1); // the right face
      else setActiveFace(2); // the left face
    });
  }, [rotationY]);

  // Auto rotate slowly
  useEffect(() => {
    const controls = animate(rotationY, rotationY.get() - 360, {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    });
    return controls.stop;
  }, [rotationY]);

  const handleDragEnd = (e: any, info: any) => {
    // Stop the manual drag, let it glide a bit
    const current = rotationY.get();
    animate(rotationY, current + info.velocity.x * 0.2, {
      type: "inertia",
      velocity: info.velocity.x,
      power: 0.2
    });
  };

  const faces = [
    { title: 'FIRE / HEAT', type: 'TRADITION', text: 'The ancient tantric mapping of the element of Tejas (fire). The downward-pointing triangle represents active, focused energy.' },
    { title: 'ENERGY / MOTION', type: 'SYMBOLIC', text: 'A visual metaphor for transformation. Heat rises, expanding and accelerating particles into kinetic action.' },
    { title: 'FOCUS / DIRECTION', type: 'MODERN', text: 'Psychological interpretation mapping the triangle to pointed concentration, ambition, and moving toward a goal.' }
  ];

  return (
    <section className="min-h-screen py-32 px-6 bg-[#040000] relative flex items-center justify-center overflow-hidden">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left: 3D Triangle Prism */}
        <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: 1200 }}>
          
          <motion.div
            drag="x"
            onDragEnd={handleDragEnd}
            style={{ rotateY: rotationY, transformStyle: "preserve-3d" }}
            className="relative w-64 h-64 cursor-grab active:cursor-grabbing"
          >
            {/* The 3 faces of the prism. 
                Equilateral triangle base. side = 256. 
                Radius of circumscribed circle (distance from center to vertex) = side / sqrt(3) ~ 147.
                Apothem (distance from center to side) = radius / 2 ~ 73.
            */}
            
            {/* Face 0 (Front initially) */}
            <div 
              className="absolute inset-0 flex items-center justify-center border-2 border-red-500/50 bg-black/80 backdrop-blur-md"
              style={{ transform: 'rotateY(0deg) translateZ(74px)', clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
            >
              <div className="text-red-500 font-serif text-2xl -mt-16">I</div>
            </div>

            {/* Face 1 (Right) */}
            <div 
              className="absolute inset-0 flex items-center justify-center border-2 border-orange-500/50 bg-black/80 backdrop-blur-md"
              style={{ transform: 'rotateY(120deg) translateZ(74px)', clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
            >
              <div className="text-orange-500 font-serif text-2xl -mt-16">II</div>
            </div>

            {/* Face 2 (Left) */}
            <div 
              className="absolute inset-0 flex items-center justify-center border-2 border-amber-500/50 bg-black/80 backdrop-blur-md"
              style={{ transform: 'rotateY(240deg) translateZ(74px)', clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
            >
              <div className="text-amber-500 font-serif text-2xl -mt-16">III</div>
            </div>

            {/* Glowing core inside */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(0px)' }}>
              <div className="w-16 h-16 bg-red-600/50 rounded-full blur-[20px] animate-pulse" />
            </div>

          </motion.div>

          <p className="absolute bottom-10 text-red-500/40 text-xs tracking-[0.2em] uppercase">Drag to rotate the prism</p>
        </div>

        {/* Right: Info Panel */}
        <div className="flex flex-col justify-center">
          <h2 className="font-sans text-red-500/80 tracking-[0.3em] uppercase text-sm mb-4">Geometry</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-red-50 mb-12">The Fire Maṇḍala</h1>

          <div className="space-y-6">
            {faces.map((face, i) => (
              <div 
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-500
                  ${activeFace === i 
                    ? 'bg-red-950/40 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.1)]' 
                    : 'bg-black/40 border-white/5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                  }
                `}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-sans tracking-widest ${activeFace === i ? 'text-red-400' : 'text-white/60'}`}>
                    {face.title}
                  </h3>
                  {activeFace === i && <SourceBadge type={face.type as any} />}
                </div>
                <p className="text-red-100/70 font-light leading-relaxed">
                  {face.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
