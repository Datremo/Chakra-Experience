import React from 'react';
import { motion } from 'framer-motion';
import { useVisuddhaData } from '../../../../data/visuddhaData';

export const FoodAndVoiceCareSection: React.FC = () => {
  const data = useVisuddhaData();

  const myths = [
    data.myths.find(m => m.claim.includes('Blue foods')) || data.myths[2],
    data.myths.find(m => m.claim.includes('vocal cords')) || data.myths[0],
    data.myths.find(m => m.claim.includes('thyroid')) || data.myths[1]
  ];

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#01040a]">
      
      <div className="text-center mb-16 z-10">
        <h2 className="font-sans text-sm tracking-[0.4em] text-cyan-500/70 uppercase mb-4">Physical Grounding</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">Voice Care & Realities</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl z-10">
        
        {/* Left: Myths */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-serif text-cyan-400 mb-6">Dispelling Myths</h3>
          
          {myths.map((myth, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-900/30"
            >
              <h4 className="font-sans text-[10px] tracking-widest text-red-400 uppercase mb-2">Claim: {myth.claim}</h4>
              <p className="text-white/70 font-light text-sm">{myth.nuance}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: Actual Voice Care */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-serif text-emerald-400 mb-6">Actual Voice Care</h3>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 hover:bg-emerald-900/20 transition-colors"
          >
            <h4 className="font-sans text-[12px] tracking-widest text-emerald-400 uppercase mb-2">Hydration</h4>
            <p className="text-white/70 font-light text-sm">
              The vocal folds need systemic hydration. Drink water continuously throughout the day, not just right before speaking.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 hover:bg-emerald-900/20 transition-colors"
          >
            <h4 className="font-sans text-[12px] tracking-widest text-emerald-400 uppercase mb-2">Vocal Rest</h4>
            <p className="text-white/70 font-light text-sm">
              If your throat is physically strained, absolute silence is the cure. Whispering actually places more strain on the vocal cords than normal speech.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 hover:bg-emerald-900/20 transition-colors"
          >
            <h4 className="font-sans text-[12px] tracking-widest text-emerald-400 uppercase mb-2">Breath Support</h4>
            <p className="text-white/70 font-light text-sm">
              Voice is carried on breath. Shallow chest breathing leads to vocal fry and throat tension. Power comes from the diaphragm (Manipūra), not the neck.
            </p>
          </motion.div>
        </div>

      </div>

    </section>
  );
};
