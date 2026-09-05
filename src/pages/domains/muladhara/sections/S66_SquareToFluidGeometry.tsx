import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S66_SquareToFluidGeometry: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(66); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex flex-col items-center justify-center p-8 bg-black overflow-hidden">
      
      <div className="z-10 flex items-center justify-center mb-16">
        {/* Geometric Transformation */}
        <motion.div 
            className="w-48 h-48 border-4 border-orange-500"
            whileInView={{ borderRadius: ['0%', '20%', '50%'], rotate: 90, scale: 1.2, borderColor: '#fb923c' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </div>

      <div className="z-10 text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-widest uppercase">
            Square <span className="text-orange-500 italic lowercase mx-2">to</span> Circle
        </h2>
        <p className="text-orange-200/60 text-lg font-light leading-relaxed">
            The rigid geometric earth square of Mūlādhāra rounds out, preparing to become the fluid silver crescent of the sacral waters.
        </p>
      </div>
    </div>
  );
};