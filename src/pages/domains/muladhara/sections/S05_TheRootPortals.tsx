import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

const PORTALS = [
  { id: 'body', title: 'The Body Axis', subtitle: 'Where it resides' },
  { id: 'maps', title: 'The Two Maps', subtitle: 'Physical vs Subtle' },
  { id: 'mandala', title: 'The Mandala', subtitle: 'Geometry & Sound' },
  { id: 'earth', title: 'The Living Earth', subtitle: 'Element & Sense' },
  { id: 'human', title: 'A Human Life', subtitle: 'Safety & Survival' },
  { id: 'truth', title: 'The Truth Room', subtitle: 'Sources & Myths' }
];

export const S05_TheRootPortals: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  useEffect(() => { if (inView) reachWorld(5); }, [inView, reachWorld]);

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-black py-24 z-10 pointer-events-auto">
      <h3 className="text-3xl font-serif text-white mb-2">The Architecture of the Root</h3>
      <p className="text-slate-500 mb-16 tracking-widest uppercase text-sm">Explore the facets</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl px-6">
        {PORTALS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onHoverStart={() => setHovered(p.id)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => {
                const el = document.getElementById(p.id === 'body' ? 'act2' : p.id === 'maps' ? 'act2' : p.id === 'mandala' ? 'act3' : p.id === 'earth' ? 'act5' : p.id === 'human' ? 'act6' : 'act9');
                el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative h-48 border border-white/10 rounded-xl overflow-hidden cursor-pointer bg-slate-900/30 backdrop-blur-sm"
          >
            <div className={`absolute inset-0 bg-red-900/20 transition-opacity duration-500 ${hovered === p.id ? 'opacity-100' : 'opacity-0'}`} />
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
              <span className="text-red-400 text-xs tracking-widest uppercase mb-1 font-bold">{p.subtitle}</span>
              <h4 className="text-xl font-serif text-white group-hover:text-red-100 transition-colors">{p.title}</h4>
            </div>
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -rotate-45 group-hover:rotate-0">
              <span className="text-white text-lg">↓</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};