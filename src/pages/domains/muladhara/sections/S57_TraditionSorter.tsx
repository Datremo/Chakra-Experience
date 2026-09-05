import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S57_TraditionSorter: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  useEffect(() => { if (inView) reachWorld(57); }, [inView, reachWorld]);

  const [activeTab, setActiveTab] = useState<'Tantrik' | 'NewAge' | 'Somatic'>('Tantrik');

  const content = {
    Tantrik: {
        title: "Tāntrik Yoga (Original)",
        text: "In the original Sanskrit texts (c. 10th-16th centuries), Mūlādhāra is NOT about 'money, family, or physical health'. It is strictly an esoteric focal point for meditation. It is the sleeping place of Kuṇḍalinī, symbolized by a red four-petaled lotus, a yellow square, and a downward-pointing triangle. You do not 'heal' it; you pierce it."
    },
    NewAge: {
        title: "Western New Age (Modern)",
        text: "In the 20th century, Carl Jung and Western authors mapped Maslow's hierarchy of needs onto the chakras. Here, the root became psychological: associated with survival, money, tribal belonging, and physical safety. This is a modern psychological framework, not ancient scripture."
    },
    Somatic: {
        title: "Biological / Somatic (Science)",
        text: "Neurobiologically, 'root' energy maps perfectly to the brainstem and the Autonomic Nervous System. Grounding the root is the physiological act of moving out of sympathetic survival mode (fight/flight) and into ventral vagal safety (calm/digest)."
    }
  };

  return (
    <div ref={ref} id="act9" className="min-h-screen w-full relative flex items-center justify-center p-8 bg-black overflow-hidden">
      <div className="z-10 max-w-6xl w-full">
        <h3 className="text-sm font-bold tracking-[0.5em] uppercase text-red-700 mb-8 text-center drop-shadow-lg">Act IX : The Truth Room</h3>
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-16 text-center uppercase tracking-widest drop-shadow-2xl">
          Sorting the Traditions
        </h2>
        
        <p className="text-slate-400 text-xl text-center mb-16 max-w-3xl mx-auto font-light">
          Before you can activate the root, you must know <span className="font-serif italic text-red-400">which root</span> you are talking about. The internet mixes these three paradigms into a confusing mess. We separate them here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {(['Tantrik', 'NewAge', 'Somatic'] as const).map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-4 border font-bold uppercase tracking-widest text-sm transition-all duration-500 ${activeTab === tab ? 'bg-red-950/80 border-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.3)]' : 'bg-black border-white/10 text-slate-500 hover:border-white/30'}`}
                >
                    {tab}
                </button>
            ))}
        </div>

        <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-12 md:p-16 border-l-4 border-red-600 bg-red-950/10 backdrop-blur-md"
        >
            <h4 className="text-3xl font-serif text-white mb-6 tracking-wider">{content[activeTab].title}</h4>
            <p className="text-slate-300 text-xl font-light leading-relaxed">{content[activeTab].text}</p>
        </motion.div>
      </div>
    </div>
  );
};