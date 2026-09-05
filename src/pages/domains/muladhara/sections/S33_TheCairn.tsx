import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S33_TheCairn: React.FC = () => {
  const { reachWorld, balanceCairn } = useMuladharaJourney();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const inView = useInView(containerRef, { amount: 0.5 });
  useEffect(() => {
    if (inView) reachWorld(33);
  }, [inView, reachWorld]);

  const [stones, setStones] = useState([
    { id: 1, placed: true, size: 'w-48 h-20', y: 0, x: 0 }, // base
    { id: 2, placed: false, size: 'w-40 h-16', y: -64, x: 150 }, // waiting
    { id: 3, placed: false, size: 'w-32 h-14', y: -110, x: -150 }, // waiting
    { id: 4, placed: false, size: 'w-24 h-12', y: -150, x: 120 } // waiting
  ]);

  const [isBalanced, setIsBalanced] = useState(false);

  const handleDragEnd = (id: number, info: any) => {
    // If the stone is dropped near x:0, snap it. Else let it fall/return.
    const offsetX = info.offset.x;
    if (Math.abs(offsetX) < 40) {
      setStones(prev => {
        const next = prev.map(s => s.id === id ? { ...s, placed: true } : s);
        // Check if all are placed
        if (next.every(s => s.placed)) {
          setIsBalanced(true);
          balanceCairn();
        }
        return next;
      });
    }
  };

  return (
    <div ref={containerRef} className="h-[200vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-slate-950 px-8">
        
        {/* Background Cinematic Image (Blurred) */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/assets/muladhara/balanced_cairn.jpg" 
            alt="Balanced Cairn Background" 
            className="w-full h-full object-cover blur-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/80 to-black/80" />
        </div>

        {/* Messaging */}
        <div className="z-10 w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-200 mb-6 uppercase tracking-wider drop-shadow-xl">
            Physics of Stability
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed bg-black/30 p-6 rounded-xl backdrop-blur-md border border-white/5">
            A balanced cairn relies entirely on finding the center of gravity of each irregular stone. <br/><br/>
            Stability isn\'t about being perfectly symmetrical or rigid. It\'s about letting the weight drop through the center into the earth. <br/><br/>
            <span className="text-amber-500 font-medium">Drag the floating stones into the center to find their balance.</span>
          </p>
        </div>

        {/* The Interactive Cairn */}
        <div className="z-20 w-full md:w-1/2 flex items-center justify-center h-[500px] relative">
          <div className="relative w-full max-w-sm h-full flex flex-col items-center justify-end pb-24">
            
            {/* Center gravity line guide */}
            <div className="absolute top-10 bottom-24 w-px bg-white/10 border-l border-dashed border-white/20" />

            {stones.map((stone, i) => (
              <motion.div
                key={stone.id}
                drag={!stone.placed}
                dragConstraints={{ left: -200, right: 200, top: -300, bottom: 50 }}
                onDragEnd={(e, info) => handleDragEnd(stone.id, info)}
                animate={{
                  x: stone.placed ? 0 : stone.x,
                  y: stone.placed ? 0 : stone.y,
                  scale: stone.placed ? 1 : 1.05
                }}
                className={`absolute bottom-24 ${stone.size} bg-slate-700 rounded-[40%] border-t border-slate-500 border-b-8 border-b-slate-900 shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing backdrop-blur-xl`}
                style={{ 
                  zIndex: 10 - stone.id,
                  marginBottom: stone.placed ? `${(stone.id - 1) * 40}px` : 0 
                }}
              >
                <div className="w-full h-full rounded-[40%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              </motion.div>
            ))}

            {isBalanced && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-0 text-amber-500 tracking-[0.3em] uppercase text-sm font-bold"
              >
                Center Found
              </motion.div>
            )}
            
          </div>
        </div>

      </div>
    </div>
  );
};