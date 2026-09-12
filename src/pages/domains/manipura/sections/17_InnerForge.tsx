import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FireCanvas } from '../components/FireCanvas';

type Material = {
  id: string;
  label: string;
  status: 'ORBITING' | 'IN_FORGE' | 'FORGED';
  forgedLabel?: string;
  forgedAction?: string;
};

const INITIAL_MATERIALS: Material[] = [
  { id: 'm1', label: 'FEAR', status: 'ORBITING' },
  { id: 'm2', label: 'ANGER', status: 'ORBITING' },
  { id: 'm3', label: 'DOUBT', status: 'ORBITING' },
  { id: 'm4', label: 'FAILURE', status: 'ORBITING' },
  { id: 'm5', label: 'AMBITION', status: 'ORBITING' },
];

export const InnerForgeSection: React.FC = () => {
  const [materials, setMaterials] = useState<Material[]>(INITIAL_MATERIALS);
  const [activeMaterial, setActiveMaterial] = useState<Material | null>(null);
  
  const forgeRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: any, info: any, item: Material) => {
    if (!forgeRef.current) return;
    
    // Simple hit detection for the central forge (radius ~ 100)
    // We check if the dragged item's center is near the viewport center
    const forgeRect = forgeRef.current.getBoundingClientRect();
    const forgeCenter = {
      x: forgeRect.left + forgeRect.width / 2,
      y: forgeRect.top + forgeRect.height / 2
    };

    const dist = Math.hypot(event.clientX - forgeCenter.x, event.clientY - forgeCenter.y);
    
    if (dist < 150) {
      // Dropped into forge
      setMaterials(prev => prev.map(m => m.id === item.id ? { ...m, status: 'IN_FORGE' } : m));
      setActiveMaterial(item);
    }
  };

  const processMaterial = (action: 'KEEP' | 'CHANGE' | 'RELEASE' | 'ACT') => {
    if (!activeMaterial) return;

    let forgedLabel = activeMaterial.label;
    
    // Alchemy logic
    if (action === 'RELEASE') forgedLabel = '(Ash)';
    else if (action === 'ACT') {
      if (activeMaterial.label === 'FEAR') forgedLabel = 'PREPARATION';
      else if (activeMaterial.label === 'ANGER') forgedLabel = 'BOUNDARY';
      else if (activeMaterial.label === 'DOUBT') forgedLabel = 'QUESTION';
      else if (activeMaterial.label === 'FAILURE') forgedLabel = 'DATA';
      else if (activeMaterial.label === 'AMBITION') forgedLabel = 'PURPOSE';
      else forgedLabel = `DIRECTED ${activeMaterial.label}`;
    }
    else if (action === 'CHANGE') {
       forgedLabel = `REFINED ${activeMaterial.label}`;
    }

    setMaterials(prev => prev.map(m => 
      m.id === activeMaterial.id ? { ...m, status: 'FORGED', forgedLabel, forgedAction: action } : m
    ));
    setActiveMaterial(null);
  };

  const allDone = materials.every(m => m.status === 'FORGED');

  return (
    <section className="min-h-screen py-32 px-6 relative flex items-center justify-center overflow-hidden">
      
      {/* Background Forge Fire */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        <FireCanvas intensity={activeMaterial ? 2 : 1} vortex={true} colorMode="orange" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <p className="inline-block px-3 py-1 mb-4 border border-amber-500/30 text-amber-500/50 rounded-full font-sans text-[10px] tracking-widest uppercase">
            Modern Reflective Exercise
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-amber-100 mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            The Inner Forge
          </h1>
          <p className="text-xl text-amber-200/60 font-light italic">
            Drag raw material into the fire.
          </p>
        </div>

        {/* Forge Arena */}
        <div className="relative w-full max-w-3xl h-[500px] flex items-center justify-center border border-amber-900/20 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] rounded-[3rem] shadow-2xl backdrop-blur-sm">
          
          {/* Central Crucible */}
          <div 
            ref={forgeRef}
            className="absolute w-64 h-64 rounded-full flex items-center justify-center"
          >
            <div className={`absolute inset-0 rounded-full transition-all duration-1000 
              ${activeMaterial ? 'border-4 border-amber-500 bg-amber-900/40 shadow-[inset_0_0_50px_rgba(245,158,11,0.5),0_0_50px_rgba(245,158,11,0.8)]' : 'border-2 border-dashed border-amber-500/50 bg-amber-900/20 shadow-[inset_0_0_30px_rgba(245,158,11,0.2)] animate-pulse'}
            `} />
            <div className="absolute w-32 h-32 bg-amber-500/20 blur-xl rounded-full animate-pulse" />
            
            {/* Forge Action Prompt */}
            <AnimatePresence>
              {activeMaterial && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute z-30 flex flex-col items-center justify-center p-8 bg-black/70 backdrop-blur-xl border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)] rounded-2xl min-w-[300px]"
                >
                  <p className="text-sm font-sans tracking-widest text-amber-500/60 uppercase mb-2">Raw Material</p>
                  <h3 className="text-3xl font-serif text-amber-100 mb-6">{activeMaterial.label}</h3>
                  
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <button onClick={() => processMaterial('KEEP')} className="p-3 border border-white/10 hover:bg-white/5 rounded-lg text-xs tracking-widest uppercase">Keep</button>
                    <button onClick={() => processMaterial('RELEASE')} className="p-3 border border-gray-500/30 hover:bg-gray-500/10 text-gray-400 rounded-lg text-xs tracking-widest uppercase">Release</button>
                    <button onClick={() => processMaterial('CHANGE')} className="p-3 border border-amber-500/30 hover:bg-amber-500/10 text-amber-300 rounded-lg text-xs tracking-widest uppercase col-span-2">Change</button>
                    <button onClick={() => processMaterial('ACT')} className="p-3 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-lg text-xs tracking-widest uppercase col-span-2 shadow-[0_0_15px_rgba(245,158,11,0.5)]">Turn to Action</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Raw Materials (Orbiting) */}
          {materials.filter(m => m.status === 'ORBITING').map((item, i, arr) => {
            const angle = (i / arr.length) * Math.PI * 2;
            const radius = 200;
            const startX = Math.cos(angle) * radius;
            const startY = Math.sin(angle) * radius;

            return (
              <motion.div
                key={item.id}
                drag
                dragMomentum={false}
                onDragEnd={(e, info) => handleDragEnd(e, info, item)}
                initial={{ x: startX, y: startY }}
                animate={activeMaterial ? { opacity: 0.2 } : { opacity: 1 }}
                className="absolute z-20 cursor-grab active:cursor-grabbing px-6 py-3 bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)] border border-amber-900/50 rounded-full shadow-lg backdrop-blur-sm hover:border-amber-500/50 hover:bg-amber-900/30 transition-colors"
                style={{ touchAction: "none" }}
              >
                <span className="font-sans text-sm tracking-widest uppercase text-amber-100">{item.label}</span>
              </motion.div>
            );
          })}

          {/* Forged Results */}
          {materials.filter(m => m.status === 'FORGED').map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, x: -280 + (i % 2) * 560, y: -150 + (i * 40) }}
              className="absolute z-10 px-4 py-2 border-b border-amber-500/30 text-amber-200/80"
            >
              <span className="font-sans text-xs tracking-widest uppercase text-amber-500/50 mr-2">{item.label} →</span>
              <span className={`font-serif text-lg ${item.forgedAction === 'RELEASE' ? 'text-gray-500' : 'text-amber-300'}`}>
                {item.forgedLabel}
              </span>
            </motion.div>
          ))}

        </div>

        {/* Completion State */}
        <AnimatePresence>
          {allDone && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 text-center"
            >
              <p className="text-2xl font-serif text-amber-400 italic mb-4">
                "What you do with the material is what matters."
              </p>
              <button 
                onClick={() => setMaterials(INITIAL_MATERIALS)}
                className="text-xs font-sans tracking-widest uppercase text-amber-500/50 hover:text-amber-400 underline underline-offset-4"
              >
                Reset Forge
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
