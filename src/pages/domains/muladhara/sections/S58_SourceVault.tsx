import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S58_SourceVault: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(58); }, [inView, reachWorld]);

  return (
    <div ref={ref} className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      
      {/* Ancient Truth Room Yantra Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 mix-blend-luminosity"
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 4 }}
        style={{ backgroundImage: 'url(/assets/muladhara/cinematic/truth_room_yantra.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-0" />
      
      <div className="z-10 max-w-4xl text-center">
        <h3 className="text-5xl md:text-7xl font-serif text-red-500 mb-10 uppercase tracking-widest drop-shadow-2xl">
            The Source Vault
        </h3>
        
        <div className="bg-black/30 p-12 md:p-16 rounded-[2rem] border border-red-900/50 backdrop-blur-md shadow-2xl">
            <h4 className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-6">Şaṭcakranirūpaṇa (1577 CE)</h4>
            <p className="text-slate-200 text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                "Here dwells the Goddess Kundalini... She is the receptacle of that continuous stream of ambrosia which flows from the Bliss absolute. By Her radiance it is that the whole of this Universe is illumined."
            </p>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
                The ancient texts did not view the root as a broken psychological state to be "healed." It is viewed as a dormant powerhouse of absolute reality waiting to be awakened. 
            </p>
        </div>
      </div>
    </div>
  );
};