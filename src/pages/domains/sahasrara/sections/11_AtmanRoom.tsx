import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DoorKey = 'UPANISHADIC' | 'VEDANTIC' | 'MODERN' | 'COMPARATIVE';

const DOORS: Record<DoorKey, { title: string; explanation: string; subtext: string }> = {
  UPANISHADIC: {
    title: 'Upaniṣadic',
    explanation: 'Ātman is the immortal essence, the breath, the silent witness within. It is often described as the size of a thumb dwelling in the heart, yet vaster than the universe.',
    subtext: 'Kaṭha Upaniṣad: "Smaller than the small, greater than the great."'
  },
  VEDANTIC: {
    title: 'Vedāntic',
    explanation: 'In Advaita (non-dual) Vedānta, Ātman is completely identical to Brahman (Absolute Reality). There is no individual soul; the sense of separation is an illusion (māyā).',
    subtext: 'Ayaṃ ātmā brahma ("This Self is Brahman").'
  },
  MODERN: {
    title: 'Modern "Higher Self"',
    explanation: 'Often reinterpreted as a psychological "higher self," an authentic personality, or a guardian spirit that guides you toward your life purpose.',
    subtext: 'Note: This shifts Ātman from an impersonal cosmic principle to a personalized psychological identity.'
  },
  COMPARATIVE: {
    title: 'Comparative',
    explanation: 'Not all Indian traditions accept Ātman. Buddhism explicitly rejects a permanent self (Anātman), arguing that what we call "self" is a changing stream of causes and conditions.',
    subtext: 'The concept of Self is heavily debated, not universally agreed upon.'
  }
};

export const AtmanSection: React.FC = () => {
  const [activeDoor, setActiveDoor] = useState<DoorKey | null>(null);

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center bg-transparent overflow-hidden">
      
      <div className="text-center mb-16 z-20">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/30 mb-4">World 11</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-white tracking-widest mb-6">ĀTMAN</h3>
        <p className="text-white/50 font-light max-w-xl mx-auto italic">
          What is the self that arrives at the crown? The traditions do not give one single answer.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
        {(Object.keys(DOORS) as DoorKey[]).map((key) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDoor(key)}
            className="aspect-[2/3] border border-white/10 rounded-t-full flex flex-col items-center justify-center p-6 cursor-pointer bg-white/5 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all group relative overflow-hidden backdrop-blur-sm"
          >
            {/* Luminous glow on hover */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(216,180,254,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h4 className="font-sans text-sm tracking-[0.2em] text-white/70 uppercase text-center relative z-10 group-hover:text-white transition-colors">
              {DOORS[key].title}
            </h4>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeDoor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl p-6"
            onClick={() => setActiveDoor(null)}
          >
            <motion.div 
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-3xl w-full text-center flex flex-col items-center border border-white/10 bg-white/5 p-12 rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.05)]"
              onClick={e => e.stopPropagation()}
            >
              <h4 className="font-sans text-xs tracking-[0.4em] text-white/40 uppercase mb-8">
                {DOORS[activeDoor].title} Perspective
              </h4>
              <p className="text-2xl md:text-4xl font-serif text-white leading-relaxed mb-8">
                {DOORS[activeDoor].explanation}
              </p>
              <p className="text-white/50 italic font-light mb-16">
                {DOORS[activeDoor].subtext}
              </p>
              
              <button 
                onClick={() => setActiveDoor(null)}
                className="text-xs font-sans tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors"
              >
                [ CLOSE DOOR ]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
