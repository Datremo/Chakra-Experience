import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MeaningSection: React.FC = () => {
  const [trail, setTrail] = useState<{x: number, y: number, id: number}[]>([]);

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setTrail(t => [...t.slice(-20), { x, y, id: Date.now() }]);
  };

  return (
    <section 
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      className="h-screen w-full relative bg-black overflow-hidden flex flex-col items-center justify-center cursor-crosshair touch-none"
    >
      
      <div className="absolute top-12 md:top-32 text-center w-full z-30 pointer-events-none px-6">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4 drop-shadow-md">World 42</h2>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
        <AnimatePresence>
          {trail.map((dot) => (
            <motion.div
              key={dot.id}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-8 h-8 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_70%)] mix-blend-screen -translate-x-1/2 -translate-y-1/2"
              style={{ left: dot.x, top: dot.y }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute z-20 flex flex-col items-center text-center pointer-events-none px-6 w-full">
        <h1 className="text-4xl md:text-7xl font-serif text-white/10 tracking-widest mb-6">
          MEANING
        </h1>
        <p className="font-serif italic text-xl md:text-3xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_10px_black] bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10 leading-relaxed">
          The universe has no inherent meaning.<br/>
          It is a blank canvas.<br/>
          <span className="text-white font-bold not-italic">You</span> are the one who paints meaning onto it.
        </p>
      </div>
      
    </section>
  );
};
