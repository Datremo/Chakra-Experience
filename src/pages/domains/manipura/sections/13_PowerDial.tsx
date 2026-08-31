import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FireCanvas } from '../components/FireCanvas';

export const PowerDialSection: React.FC = () => {
  const [zone, setZone] = useState<'PASSIVITY' | 'AGENCY' | 'DOMINATION'>('AGENCY');
  
  // 0 to 100 for dial rotation
  const dialValue = useMotionValue(50);
  
  // Transform dial value to fire intensity:
  // 0 (Passivity) -> low intensity
  // 50 (Agency) -> steady medium
  // 100 (Domination) -> erratic high
  const fireIntensity = useTransform(dialValue, [0, 50, 100], [0.1, 1.0, 2.5]);
  const rotation = useTransform(dialValue, [0, 100], [-135, 135]); // Dial needle rotation

  const [displayIntensity, setDisplayIntensity] = useState(1.0);

  useEffect(() => {
    const unsub = dialValue.onChange(v => {
      if (v < 30) setZone('PASSIVITY');
      else if (v > 70) setZone('DOMINATION');
      else setZone('AGENCY');
      
      setDisplayIntensity(fireIntensity.get());
    });
    return unsub;
  }, [dialValue, fireIntensity]);

  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="min-h-screen py-32 px-6 bg-[#030100] relative flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Local Fire Background reacting to dial */}
      <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-60">
        <FireCanvas 
          intensity={displayIntensity} 
          colorMode={zone === 'DOMINATION' ? 'red' : zone === 'PASSIVITY' ? 'amber' : 'orange'} 
          vortex={zone === 'DOMINATION'} // Chaos when domination
        />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        <h2 className="font-sans text-amber-500/80 tracking-[0.3em] uppercase text-sm mb-16">The Measure of Power</h2>

        {/* The Brass Dial */}
        <div className="relative w-72 h-72 mb-16" ref={constraintsRef}>
          
          {/* Dial Base (Brass Texture) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200 via-amber-600 to-amber-900 border-[8px] border-black shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_0_50px_rgba(245,158,11,0.2)] flex items-center justify-center">
            
            {/* Inner Dark Face */}
            <div className="w-[85%] h-[85%] rounded-full bg-[#1a0a00] border-2 border-amber-900/50 shadow-[inset_0_0_20px_black] relative flex items-center justify-center">
              
              {/* Markers */}
              <div className="absolute top-4 font-sans text-[10px] tracking-widest text-amber-500/50">AGENCY</div>
              <div className="absolute bottom-10 left-6 -rotate-45 font-sans text-[10px] tracking-widest text-amber-500/50">PASSIVITY</div>
              <div className="absolute bottom-10 right-4 rotate-45 font-sans text-[10px] tracking-widest text-amber-500/50">DOMINATION</div>
              
              {/* The Needle/Knob (Draggable) */}
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-t from-amber-400 to-yellow-200 shadow-xl border-2 border-amber-900 flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{ rotate: rotation }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                dragElastic={0}
                dragMomentum={false}
                onDrag={(e, info) => {
                  // Map drag x to 0-100
                  const newV = Math.max(0, Math.min(100, 50 + (info.offset.x)));
                  dialValue.set(newV);
                }}
              >
                {/* Pointer Indentation */}
                <div className="absolute top-2 w-2 h-2 rounded-full bg-[#1a0a00] shadow-[inset_0_2px_4px_black]" />
              </motion.div>

            </div>
          </div>

          {/* Glowing Aura based on zone */}
          <div className={`absolute inset-0 rounded-full -z-10 blur-2xl transition-colors duration-1000
            ${zone === 'PASSIVITY' ? 'bg-amber-900/20' : zone === 'AGENCY' ? 'bg-amber-500/40' : 'bg-red-600/60'}
          `} />
        </div>

        {/* Text Updates based on Zone */}
        <div className="h-32 mb-12">
          {zone === 'PASSIVITY' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-amber-200/50">
              <h3 className="text-3xl font-serif mb-4">Passivity</h3>
              <p className="text-xl font-light italic">"The ember waits but never burns."</p>
            </motion.div>
          )}
          {zone === 'AGENCY' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-amber-400">
              <h3 className="text-4xl font-serif mb-4 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Agency</h3>
              <p className="text-2xl font-light italic text-amber-200">"Directed fire transforms."</p>
            </motion.div>
          )}
          {zone === 'DOMINATION' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500">
              <h3 className="text-4xl font-serif mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">Domination</h3>
              <p className="text-2xl font-light italic text-red-300">"Uncontrolled fire consumes."</p>
            </motion.div>
          )}
        </div>

        <motion.p 
          className="text-amber-100/40 tracking-widest text-sm uppercase font-sans border-t border-amber-900/50 pt-8 mt-8"
        >
          More intensity is not necessarily more power.
        </motion.p>

      </div>
    </section>
  );
};
