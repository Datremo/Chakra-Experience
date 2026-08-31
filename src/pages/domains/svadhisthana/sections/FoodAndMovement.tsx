import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FoodAndMovementSection: React.FC = () => {
  const [activePractice, setActivePractice] = useState<string>('Hip Mobility');

  const practices = [
    { name: 'Hip Mobility', desc: 'Opening the pelvic bowl releases physical tension commonly held in the sacral area.' },
    { name: 'Walking', desc: 'Rhythmic, gentle movement that coordinates breath and body without intense strain.' },
    { name: 'Dance', desc: 'Free-form dancing without choreography encourages emotional and physical fluidity.' },
    { name: 'Gentle Flow Yoga', desc: 'Vinyasa or fluid yoga sequences that emphasize transitions rather than static holds.' }
  ];

  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center relative bg-[#060402]">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Food Section */}
        <div>
          <h2 className="font-sans text-orange-400 tracking-[0.3em] uppercase text-sm mb-6">Nourishment</h2>
          <h1 className="text-4xl md:text-5xl mb-8 font-serif text-white">The Water Table</h1>
          
          <div className="bg-black/40 border border-orange-900/30 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl opacity-10">🍊</div>
            <p className="text-lg text-white/70 mb-6 font-light">
              Modern New Age systems often associate orange foods and liquids with the Sacral Chakra. While there is no scientific mechanism where a carrot "activates" a chakra, hydration and diverse nutrients support ordinary physical health.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { name: 'Water', icon: '💧' }, 
                { name: 'Melons', icon: '🍉' }, 
                { name: 'Oranges', icon: '🍊' }, 
                { name: 'Nuts', icon: '🥜' }, 
                { name: 'Seeds', icon: '🌻' }, 
                { name: 'Healthy Fats', icon: '🥑' }
              ].map(f => (
                <span key={f.name} className="flex items-center space-x-2 px-4 py-2 bg-orange-900/20 text-orange-200 border border-orange-500/20 rounded-full text-sm font-sans hover:bg-orange-900/40 transition-colors cursor-default">
                  <span>{f.icon}</span>
                  <span>{f.name}</span>
                </span>
              ))}
            </div>
            <p className="text-sm text-orange-400/80 italic border-t border-orange-900/30 pt-4">
              Associations should not be confused with scientifically demonstrated chakra mechanisms.
            </p>
          </div>
        </div>

        {/* Movement Section */}
        <div>
          <h2 className="font-sans text-teal-400 tracking-[0.3em] uppercase text-sm mb-6">Somatic Release</h2>
          <h1 className="text-4xl md:text-5xl mb-8 font-serif text-white">Fluid Movement</h1>
          
          <div className="relative h-[300px] flex items-center justify-center">
            {/* The interactive wheel/list */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.1),transparent_60%)]" />
            
            <div className="flex flex-col space-y-4 w-full z-10">
              {practices.map(p => (
                <div 
                  key={p.name}
                  onClick={() => setActivePractice(p.name)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                    activePractice === p.name ? 'bg-teal-900/40 border-teal-500 text-teal-50' : 'bg-black/50 border-white/5 text-white/50 hover:bg-white/5 hover:text-white/80'
                  }`}
                >
                  <h3 className="font-sans tracking-widest uppercase text-sm mb-2">{p.name}</h3>
                  {activePractice === p.name && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-sm text-teal-100/70 font-light">
                      {p.desc}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-teal-500/60 mt-4 italic text-center">
            Grounding / Body-Awareness / Flow-Oriented Practice
          </p>
        </div>

      </div>
    </section>
  );
};
