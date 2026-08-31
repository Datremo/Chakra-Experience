import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TimelineEvent = {
  id: string;
  era: string;
  title: string;
  description: string;
};

const TIMELINE: TimelineEvent[] = [
  {
    id: 'vedic',
    era: '1500 BCE - 500 BCE',
    title: 'Early Yogic Concepts',
    description: 'Vedic and early Upanishadic texts describe internal channels (nāḍīs) and vital winds (prāṇa), but do not yet map out the specific seven-chakra system we know today.'
  },
  {
    id: 'tantric',
    era: '600 CE - 1300 CE',
    title: 'Tantric Subtle-Body Systems',
    description: 'Various Tantric texts develop subtle-body maps. Some systems have 3 chakras, some 5, some 12. The concept of Mūlādhāra as a foundational base begins to crystalize in certain lineages.'
  },
  {
    id: 'medieval',
    era: '1526 CE',
    title: 'Ṣaṭ-cakra-nirūpaṇa',
    description: 'Written by Pūrṇānanda Yati. This text becomes the definitive source for the six-chakra (plus Sahasrāra) system. It codifies the specific colors, deities (Brahmā/Ḍākinī), and the four petals of Mūlādhāra.'
  },
  {
    id: 'translation',
    era: '1919 CE',
    title: 'The Serpent Power',
    description: 'Arthur Avalon (Sir John Woodroffe) publishes an English translation of the Ṣaṭ-cakra-nirūpaṇa. This book introduces the specific seven-chakra system to the Western world, where it becomes the dominant model.'
  },
  {
    id: 'modern',
    era: 'Late 20th Century',
    title: 'Modern Seven-Chakra System',
    description: 'New Age authors blend Arthur Avalon\'s translation with Jungian psychology, assigning psychological traits (security, fear), rainbow colors (red for Root), and musical notes to the chakras.'
  },
  {
    id: 'contemporary',
    era: 'Present Day',
    title: 'Contemporary Wellness',
    description: 'Mūlādhāra is widely interpreted in global wellness as the psychological center of grounding, financial stability, and nervous system regulation (fight-or-flight).'
  }
];

export const OriginTimelineSection: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<string>(TIMELINE[0].id);

  return (
    <section id="origin" className="min-h-screen py-32 px-6 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">Origin</h2>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Where did Chakras come from?</h1>
          <p className="text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto italic">
            The modern rainbow-colored system did not exist unchanged for thousands of years. It evolved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* The Timeline List */}
          <div className="lg:col-span-5 space-y-4">
            {TIMELINE.map((event) => (
              <div 
                key={event.id}
                onClick={() => setActiveEvent(event.id)}
                className={`cursor-pointer p-6 border rounded-2xl transition-all duration-300 font-sans
                  ${activeEvent === event.id 
                    ? 'bg-red-900/20 border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.15)]' 
                    : 'bg-black/50 border-white/5 hover:border-white/20'
                  }`}
              >
                <div className={`text-xs tracking-widest uppercase mb-2 transition-colors ${activeEvent === event.id ? 'text-red-400' : 'text-white/40'}`}>
                  {event.era}
                </div>
                <h3 className={`text-lg transition-colors ${activeEvent === event.id ? 'text-white' : 'text-white/60'}`}>
                  {event.title}
                </h3>
              </div>
            ))}
          </div>

          {/* The Details Pane */}
          <div className="lg:col-span-7 relative flex items-center">
            <AnimatePresence mode="wait">
              {TIMELINE.map((event) => activeEvent === event.id && (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#0f0404] border border-red-900/30 p-12 md:p-16 rounded-[2rem] w-full"
                >
                  <div className="text-red-500 font-sans tracking-[0.2em] uppercase text-sm mb-4">
                    {event.era}
                  </div>
                  <h2 className="text-4xl md:text-5xl mb-8 text-white">{event.title}</h2>
                  <p className="text-xl md:text-2xl leading-loose text-white/70">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
