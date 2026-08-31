import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SourceBadge } from '../components/SourceBadge';

const ROOMS = [
  {
    title: 'VEDA',
    description: 'The ancient sacrificial and poetic texts.',
    says: 'Describes a cosmic person (Puruṣa) and mentions early subtle body concepts like channels (nāḍīs), but does not contain the 7-chakra system.',
    doesNotSay: 'Does not mention Sahasrāra, chakras as we know them, or Kundalinī.',
    relatesTo: 'Provides the foundational philosophy of a cosmic connection at the crown of the head (the path of the sun/gods).',
    primary: 'Ṛgveda, Atharvaveda',
    scholarship: 'Universally agreed by scholars that the detailed chakra system post-dates the Vedas by over a millennium.'
  },
  {
    title: 'UPANIṢAD',
    description: 'The philosophical dialogues.',
    says: 'Describes the suṣumṇā channel reaching the crown of the head, through which the soul (Ātman) can exit at death for liberation.',
    doesNotSay: 'Still does not detail the 7-chakra system or a "thousand-petalled lotus" as an energetic center.',
    relatesTo: 'Introduces the crown (brahmarandhra) as the ultimate exit point for the realized practitioner.',
    primary: 'Taittirīya Upaniṣad, Chāndogya Upaniṣad',
    scholarship: 'The concept of the crown as a spiritual aperture is solidified here, laying the groundwork for later Tantra.'
  },
  {
    title: 'YOGA',
    description: 'Patañjali and the classical system.',
    says: 'Mentions concentration (dhāraṇā) on various body parts, including the "light in the head" to perceive perfected beings.',
    doesNotSay: 'Does not use the 7-chakra system or describe Sahasrāra. Classical Yoga focuses on isolating consciousness (kaivalya).',
    relatesTo: 'The practice of internal focus on the crown area begins to be codified.',
    primary: 'Yoga Sūtras of Patañjali',
    scholarship: 'Often mistakenly conflated with Tantric chakras, classical Yoga is an independent, older philosophical school.'
  },
  {
    title: 'TANTRA',
    description: 'The esoteric ritual and subtle-body traditions.',
    says: 'Explicitly maps the subtle body, defining chakras, Kundalinī, and the thousand-petalled lotus as the seat of Śiva.',
    doesNotSay: 'Does not describe chakras as psychological personality traits or emotional healing centers.',
    relatesTo: 'This is the actual origin of the Sahasrāra concept—the destination of the ascending goddess Kundalinī.',
    primary: 'Kubjikāmata Tantra, Ṣaṭ-cakra-nirūpaṇa',
    scholarship: 'Tantra introduced the visualization of colorful lotuses and syllables as tools for ritual installation (nyāsa).'
  },
  {
    title: 'HAṬHA YOGA',
    description: 'The physical and energetic practices.',
    says: 'Focuses on manipulating prāṇa to awaken Kundalinī and force it up the central channel to the crown.',
    doesNotSay: 'Does not focus on "balancing" chakras for worldly success; the goal is extreme bodily transformation and liberation.',
    relatesTo: 'Provides the physical technologies (mudrās, bandhas) intended to reach the Sahasrāra state.',
    primary: 'Haṭhapradīpikā, Śiva Saṃhitā',
    scholarship: 'Haṭha yoga adopted and modified Tantric subtle body maps to focus heavily on energetic mechanics.'
  },
  {
    title: 'VEDĀNTA',
    description: 'The philosophy of non-dual reality.',
    says: 'Asserts that Ātman (individual self) and Brahman (ultimate reality) are identical.',
    doesNotSay: 'Does not generally concern itself with subtle body mechanics or chakra visualization.',
    relatesTo: 'The non-dual state experienced at Sahasrāra is often described using Vedāntic terminology (Brahmajñāna).',
    primary: 'Śaṅkara\'s commentaries',
    scholarship: 'Later texts often blended Vedāntic non-dualism with Tantric energy maps, creating a hybrid philosophy.'
  },
  {
    title: 'MODERN CHAKRA CULTURE',
    description: 'The 20th-century psychological adaptation.',
    says: 'Maps chakras to psychological development, emotional healing, endocrine glands, and self-actualization.',
    doesNotSay: 'Rarely acknowledges the ritual, deity-focused, or strictly liberation-oriented goals of the original Tantras.',
    relatesTo: 'Reinterprets Sahasrāra as "cosmic consciousness," "connection to the universe," or "higher self."',
    primary: 'Works of C.W. Leadbeater, Carl Jung, Anodea Judith',
    scholarship: 'A fascinating synthesis of Western occultism, Jungian psychology, and translated Indian texts.'
  }
];

export const SacredLibrarySection: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-32 px-6 relative flex flex-col items-center justify-center overflow-hidden bg-[#130026]">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-white/50 mb-4">World 04</h2>
        <h3 className="text-4xl md:text-6xl font-serif text-white tracking-widest">The Sacred Library</h3>
        <p className="mt-6 text-white/50 font-light max-w-2xl mx-auto">
          The concept of the crown did not emerge from a single ancient text. It evolved across millennia. Enter the library to understand the layers of history.
        </p>
      </div>

      {/* Circular Menu */}
      <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center mb-12">
        <div className="absolute inset-0 border border-white/5 rounded-full md:rounded-[100%] scale-75 opacity-20 pointer-events-none" />
        <div className="absolute inset-0 border border-purple-500/20 rounded-full md:rounded-[100%] scale-90 opacity-10 pointer-events-none" />
        
        <div className="relative z-10 flex flex-wrap justify-center gap-4 max-w-3xl">
          {ROOMS.map((room, index) => (
            <motion.button
              key={room.title}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveRoom(index)}
              className="px-6 py-4 border border-purple-400/30 rounded-full bg-[#0b001a]/50 backdrop-blur-sm text-white/80 font-sans tracking-[0.2em] text-sm uppercase transition-colors hover:text-white"
            >
              {room.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Room Modal */}
      <AnimatePresence>
        {activeRoom !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b001a]/95 backdrop-blur-lg p-4 overflow-y-auto"
            onClick={() => setActiveRoom(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="max-w-3xl w-full bg-[#0a0a0a] border border-purple-500/20 rounded-2xl p-8 md:p-12 text-left my-auto relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveRoom(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 tracking-wide">
                {ROOMS[activeRoom].title}
              </h2>
              <p className="text-white/50 font-sans uppercase tracking-widest text-sm mb-12 border-b border-purple-500/20 pb-6">
                {ROOMS[activeRoom].description}
              </p>

              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-sans tracking-[0.3em] text-emerald-400/80 uppercase mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400/50" />
                    What this tradition actually says
                  </h4>
                  <p className="text-white/80 font-light leading-relaxed pl-5 border-l border-purple-500/20">
                    {ROOMS[activeRoom].says}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-sans tracking-[0.3em] text-red-400/80 uppercase mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400/50" />
                    What it does NOT say
                  </h4>
                  <p className="text-white/80 font-light leading-relaxed pl-5 border-l border-purple-500/20">
                    {ROOMS[activeRoom].doesNotSay}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-sans tracking-[0.3em] text-blue-400/80 uppercase mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400/50" />
                    Relation to Sahasrāra
                  </h4>
                  <p className="text-white/80 font-light leading-relaxed pl-5 border-l border-purple-500/20">
                    {ROOMS[activeRoom].relatesTo}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-purple-500/20">
                  <div>
                    <h4 className="text-xs font-sans tracking-[0.3em] text-white/40 uppercase mb-2">Primary Sources</h4>
                    <p className="text-white/60 font-serif italic">
                      {ROOMS[activeRoom].primary}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-sans tracking-[0.3em] text-white/40 uppercase mb-2">Scholarly Context</h4>
                    <p className="text-white/60 font-light text-sm">
                      {ROOMS[activeRoom].scholarship}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
