import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ActivationAndMythsSection: React.FC = () => {
  const [activeMyth, setActiveMyth] = useState<number | null>(null);

  const myths = [
    {
      id: 1,
      myth: "Opening the Third Eye gives you psychic superpowers.",
      truth: "It gives you clarity, not magic tricks. You will see your own psychological patterns and reality as it is, which is far more useful than reading minds."
    },
    {
      id: 2,
      myth: "Fluoride calcifies the pineal gland and blocks the Third Eye.",
      truth: "While pineal calcification happens with age, the true 'block' to the Third Eye is confirmation bias, ego, and the inability to sit in silence. Do not blame toothpaste for a lack of discipline."
    },
    {
      id: 3,
      myth: "You can force it open in a weekend retreat.",
      truth: "Ājñā opens slowly, through years of rigorous self-inquiry, shadow work, and meditation. Forcing it open without grounding (Muladhara) leads to psychosis, not enlightenment."
    },
    {
      id: 4,
      myth: "It means escaping physical reality.",
      truth: "The opposite. True sight means finally seeing physical reality exactly as it is, without the overlay of your own fears, desires, and stories."
    }
  ];

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000000]">
      
      <div className="text-center z-10 mb-16">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">Deconditioning</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Myth Wall</h1>
      </div>

      <div className="w-full max-w-4xl relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {myths.map(m => (
          <div 
            key={m.id}
            className={`border rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${activeMyth === m.id ? 'bg-indigo-900/20 border-indigo-500/50' : 'bg-white/5 border-white/10 hover:border-indigo-500/30'}`}
            onClick={() => setActiveMyth(activeMyth === m.id ? null : m.id)}
          >
            <div className="p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-sans text-[10px] tracking-widest text-rose-400 uppercase mb-2">Myth</h3>
                <p className={`text-lg font-serif transition-colors ${activeMyth === m.id ? 'text-white/50 line-through' : 'text-white/90'}`}>
                  {m.myth}
                </p>
              </div>
              
              <AnimatePresence>
                {activeMyth === m.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    className="overflow-hidden border-t border-indigo-500/30 pt-4"
                  >
                    <h3 className="font-sans text-[10px] tracking-widest text-emerald-400 uppercase mb-2">Truth</h3>
                    <p className="text-indigo-200 font-light leading-relaxed text-sm">
                      {m.truth}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};
