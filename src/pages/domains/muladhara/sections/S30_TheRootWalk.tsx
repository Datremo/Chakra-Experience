import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const TEXTURES = [
  { id: 'soil', label: 'Bare Soil', color: 'from-[#3e2723] to-black', img: '/assets/muladhara/textures/bare_soil.jpg' },
  { id: 'grass', label: 'Damp Grass', color: 'from-[#1b5e20] to-black', img: '/assets/muladhara/textures/damp_grass.jpg' },
  { id: 'stone', label: 'River Stone', color: 'from-[#37474f] to-black', img: '/assets/muladhara/textures/river_stone.jpg' },
  { id: 'wood', label: 'Ancient Wood', color: 'from-[#4e342e] to-black', img: '/assets/muladhara/textures/ancient_wood.jpg' },
];

export const S30_TheRootWalk: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(30); }, [inView, reachWorld]);

  const [activeTexture, setActiveTexture] = useState(TEXTURES[0]);

  return (
    <div ref={ref} className="min-h-screen w-full flex items-center justify-center p-8 z-10 pointer-events-auto relative overflow-hidden">
      
      {/* Dynamic Background */}
      <motion.div 
        className={`absolute inset-0 z-0 bg-gradient-to-b ${activeTexture.color} opacity-80`}
        animate={{ backgroundImage: `url(${activeTexture.img}), linear-gradient(to bottom, transparent, black)` }}
        style={{ backgroundSize: 'cover', backgroundBlendMode: 'overlay', transition: 'background-image 0.5s ease' }}
      />
      
      <div className="max-w-4xl w-full z-10 flex flex-col md:flex-row gap-12 bg-black/30 backdrop-blur-md p-12 rounded-3xl border border-white/10">
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-serif text-white mb-6">The Root Walk</h3>
          <p className="text-slate-300 mb-8 leading-relaxed">
            The sense associated with Mūlādhāra is smell. The action is excretion (releasing to the earth). The physical practice of grounding often begins in the feet.
          </p>
          <p className="text-slate-400 text-sm">
            Hover or tap to shift the ground beneath you. Notice how your body responds to the imagined texture and temperature.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
          {TEXTURES.map((t) => (
            <button
              key={t.id}
              onMouseEnter={() => setActiveTexture(t)}
              onClick={() => setActiveTexture(t)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 ${activeTexture.id === t.id ? 'border-white bg-white/10 text-white pl-8' : 'border-white/10 text-slate-500 hover:border-white/30 hover:text-slate-300'}`}
            >
              <span className="font-serif tracking-widest text-lg">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};