import React, { useState } from 'react';

const CHALLENGES = [
  { id: 'WALK', title: 'The Barefoot Walk', desc: 'Walk outside barefoot for 10 minutes. Notice the temperature, texture, and density of the ground.' },
  { id: 'SPACE', title: 'The Chaotic Corner', desc: 'Pick one messy corner of your home. Clean it and organize it today. Create order.' },
  { id: 'FOOD', title: 'The Root Meal', desc: 'Cook and eat a meal featuring root vegetables (potatoes, carrots, beets). Eat it without looking at a screen.' },
  { id: 'MONEY', title: 'The Honest Audit', desc: 'Look at your bank account and spending for the last month. Do not judge it. Just look at the reality of your resources.' }
];

export const IntegrationSection: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);

  return (
    <section id="integration" className="min-h-screen py-32 px-6 flex items-center justify-center relative bg-[#020101]">
      
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">The Next 24 Hours</h2>
          <h1 className="text-5xl md:text-7xl mb-8 text-white">The Integration Experiment</h1>
          <p className="text-xl text-white/50 mb-12 italic max-w-2xl mx-auto">
            Reading about grounding does not ground you. Only action does. Select one experiment to complete within the next 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CHALLENGES.map(challenge => (
            <div 
              key={challenge.id}
              onClick={() => setSelectedChallenge(challenge.id)}
              className={`cursor-pointer p-8 rounded-2xl border transition-all duration-300
                ${selectedChallenge === challenge.id 
                  ? 'bg-red-900/30 border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.2)]' 
                  : 'bg-black/50 border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
            >
              <h3 className="text-2xl text-red-100 mb-4">{challenge.title}</h3>
              <p className="text-white/70 leading-relaxed">{challenge.desc}</p>
            </div>
          ))}
        </div>

        {selectedChallenge && (
          <div className="bg-red-900/10 border border-red-900/30 p-8 rounded-2xl text-center animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-red-400 font-sans tracking-widest uppercase text-sm mb-4">Commitment Made</h3>
            <p className="text-xl text-white">Do not move on until you have mentally committed to when and how you will do this today.</p>
          </div>
        )}

      </div>
    </section>
  );
};
