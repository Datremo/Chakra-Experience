import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PracticesSection: React.FC = () => {
  const [activePractice, setActivePractice] = useState<'METTA' | 'SILENCE' | null>(null);

  const practices = [
    {
      id: 'METTA',
      title: 'Maitrī / Loving-Kindness',
      time: '10 Minutes',
      steps: [
        'Sit quietly and bring to mind someone you love effortlessly.',
        'Silently repeat: "May you be happy. May you be safe. May you be free from suffering."',
        'Notice the feeling of warmth this generates in your chest.',
        'Now, direct those exact same phrases toward yourself.',
        'Finally, direct them toward someone neutral, and then someone difficult.'
      ]
    },
    {
      id: 'SILENCE',
      title: 'The Silent Witness',
      time: '5 Minutes',
      steps: [
        'Sit comfortably and close your eyes.',
        'Do not try to change your breathing. Just watch it happen.',
        'When a thought arises, do not fight it. Let it pass like a leaf on a river.',
        'Drop your attention into the center of your chest.',
        'Rest in the space between the breaths.'
      ]
    }
  ] as const;

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#020504]">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">Implementation</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Core Practices</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl z-10 mb-16">
        {practices.map((practice) => (
          <button
            key={practice.id}
            onClick={() => setActivePractice(activePractice === practice.id ? null : practice.id as any)}
            className={`flex-1 p-8 rounded-3xl border transition-all text-left group ${
              activePractice === practice.id
                ? 'bg-emerald-900/40 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                : 'bg-black/40 border-white/10 hover:border-emerald-700/50 hover:bg-emerald-950/20'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className={`font-sans tracking-widest text-sm uppercase ${activePractice === practice.id ? 'text-emerald-300' : 'text-emerald-500/70 group-hover:text-emerald-400'}`}>
                {practice.title}
              </h3>
              <span className="text-[10px] font-sans tracking-widest text-white/40 uppercase px-3 py-1 bg-white/5 rounded-full border border-white/10">
                {practice.time}
              </span>
            </div>
            
            <AnimatePresence>
              {activePractice === practice.id && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 space-y-4 overflow-hidden"
                >
                  {practice.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="font-sans text-emerald-500/50 text-xs mt-1">{idx + 1}.</span>
                      <span className="font-serif text-white/70 text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

    </section>
  );
};
