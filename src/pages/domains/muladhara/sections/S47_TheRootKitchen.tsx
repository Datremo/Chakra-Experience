import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const hotspots = [
  { id: 'rootveg', x: 75, y: 85, title: "Root Vegetables", desc: "Potatoes, carrots, beets. They grow in the dark, dense soil and provide slow-burning, stable energy." },
  { id: 'protein', x: 45, y: 65, title: "Dense Proteins", desc: "Lentils, beans, heavy stews. They require energy to digest, pulling blood and focus down into the body." },
  { id: 'spices', x: 25, y: 75, title: "Earthy Spices", desc: "Turmeric, cumin, garlic. Warming elements that stimulate physical digestion and physical presence." },
  { id: 'fire', x: 68, y: 50, title: "The Hearth", desc: "Fire transforms raw nature into nourishment. Cooking is the primal act of survival and safety." },
];

export const S47_TheRootKitchen: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => {
    if (inView) reachWorld(47);
  }, [inView, reachWorld]);

  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  return (
    <div ref={containerRef} className="min-h-screen w-full relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/muladhara/root_kitchen.jpg" 
            alt="The Root Kitchen" 
            className={`w-full h-full object-cover transition-all duration-1000 ${activeSpot ? 'scale-105 blur-sm opacity-60' : 'scale-100 blur-none opacity-80'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        {/* Messaging */}
        <div className="absolute top-12 left-0 right-0 z-10 text-center px-6 pointer-events-none drop-shadow-2xl">
          <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full text-xs tracking-widest uppercase text-white/80 bg-black/30 backdrop-blur-sm">
            Evidence
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 uppercase tracking-wider drop-shadow-lg">
            The Root Kitchen
          </h2>
          <p className="text-white text-lg font-light max-w-2xl mx-auto drop-shadow-md bg-black/30 p-4 rounded-xl backdrop-blur-sm">
            Nourishment is physical. You cannot meditate away malnutrition. <br/>
            Hover over the elements of a grounding diet.
          </p>
        </div>

        {/* Interactive Hotspots */}
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto w-full h-full">
          {hotspots.map((spot) => (
            <div 
              key={spot.id}
              className="absolute"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onMouseEnter={() => setActiveSpot(spot.id)}
              onMouseLeave={() => setActiveSpot(null)}
            >
              <div className="relative group cursor-pointer">
                {/* Hotspot Pulse */}
                <div className="absolute inset-0 rounded-full bg-amber-500/30 animate-ping" />
                <div className="w-8 h-8 rounded-full border-2 border-amber-500 bg-black/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                
                {/* Tooltip Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ 
                    opacity: activeSpot === spot.id ? 1 : 0, 
                    y: activeSpot === spot.id ? 0 : 10,
                    scale: activeSpot === spot.id ? 1 : 0.95,
                    pointerEvents: activeSpot === spot.id ? 'auto' : 'none'
                  }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 bg-slate-900/90 backdrop-blur-md border border-amber-900/50 p-4 rounded-xl shadow-2xl"
                >
                  <h3 className="text-amber-500 font-serif text-xl mb-2">{spot.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{spot.desc}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};