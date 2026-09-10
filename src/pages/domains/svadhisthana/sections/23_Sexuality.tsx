import React from 'react';
import { motion } from 'framer-motion';

export const SexualitySection: React.FC = () => {
  return (
    <section className="min-h-[100svh] w-full flex items-center justify-center px-5 py-10 md:py-14 relative  bg-[#070a10]">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?q=80&w=1400&auto=format&fit=crop" alt="Two people holding hands" className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(249,115,22,0.14),transparent_42%),linear-gradient(90deg,rgba(4,7,12,0.88),rgba(4,7,12,0.42),rgba(4,7,12,0.75))]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 md:gap-10 items-center">
        <div>
          <p className="text-orange-300 tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4">Desire · Sexuality · Creative Life</p>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-5">Sexuality is part of the current, not the whole river.</h1>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-orange-50/75 font-light max-w-xl">
            <p>Modern wellness systems often make sexuality central to Svādhiṣṭhāna. Classical tantric traditions do include sexual and reproductive symbolism, but the chakra's imagery and practice are broader than sex alone.</p>
            <p>Desire can involve intimacy, pleasure, creativity, connection, and the wish to be known. Sexuality is one human expression of these themes, not a test of whether a chakra is “open.”</p>
          </div>
          <div className="mt-6 rounded-2xl border border-orange-200/15 bg-black/35 backdrop-blur-md px-5 py-4">
            <p className="text-orange-100/75 text-sm leading-relaxed"><strong className="text-orange-200">Important:</strong> chakra concepts are contemplative frameworks. They are not substitutes for sexual-health education, consent education, trauma therapy, or medical care.</p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }}
          className="relative min-h-[430px] md:min-h-[540px] rounded-[2.5rem] overflow-hidden border border-orange-100/15 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
          <img src="https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?q=80&w=1400&auto=format&fit=crop" alt="Hands and connection" className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <motion.div className="absolute inset-8 rounded-[2rem] border border-white/15" animate={{ scale: [1, 1.015, 1], opacity: [0.4, 0.75, 0.4] }} transition={{ duration: 5, repeat: Infinity }} />
          <div className="absolute inset-x-7 bottom-7 md:bottom-10">
            <p className="text-orange-50 text-xl md:text-3xl font-serif italic drop-shadow-2xl">“To flow with another requires first knowing how to hold your own shape.”</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
