import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Circle } from 'lucide-react';
import type { ChakraData } from '../../../../data/chakras';

interface EndingSectionProps { onClose: () => void; chakra: ChakraData; }

export const EndingSection: React.FC<EndingSectionProps> = ({ onClose }) => (
  <section className="min-h-screen py-28 px-6 bg-black relative flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(255,177,56,.17),transparent_22%),radial-gradient(ellipse_at_bottom,rgba(245,158,11,.08),transparent_60%)]" />
    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />
    <div className="relative z-10 max-w-4xl text-center">
      <motion.div initial={{ opacity: 0, scale: .75 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto mb-10 w-24 h-24 rounded-full border border-amber-200/20 bg-[radial-gradient(circle,rgba(255,248,224,.9),rgba(255,163,31,.65)_30%,rgba(177,45,7,.12)_70%,transparent_74%)] flex items-center justify-center"><Circle size={22} className="text-amber-50/70" /></motion.div>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-mono text-[10px] tracking-[.4em] uppercase text-amber-300/45 mb-6">Maṇipūra · completed</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-5xl md:text-7xl text-amber-50 leading-[.95]">The fire is steady.</motion.h1>
      <p className="mt-8 text-xl md:text-2xl text-amber-100/55 italic leading-relaxed">Not because it became smaller. Because you learned where to direct it.</p>
      <div className="mt-12 grid md:grid-cols-3 gap-3 max-w-2xl mx-auto text-left"><div className="rounded-2xl border border-white/8 p-5 bg-white/[.02]"><div className="text-[9px] uppercase tracking-[.25em] text-white/25">01</div><div className="mt-2 font-serif text-lg text-white/70">Power → agency</div></div><div className="rounded-2xl border border-white/8 p-5 bg-white/[.02]"><div className="text-[9px] uppercase tracking-[.25em] text-white/25">02</div><div className="mt-2 font-serif text-lg text-white/70">Heat → discernment</div></div><div className="rounded-2xl border border-white/8 p-5 bg-white/[.02]"><div className="text-[9px] uppercase tracking-[.25em] text-white/25">03</div><div className="mt-2 font-serif text-lg text-white/70">Fire → light</div></div></div>
      <div className="mt-14 flex flex-col items-center"><p className="font-mono text-[10px] uppercase tracking-[.32em] text-emerald-200/40 mb-5">Anāhata is next</p><button onClick={onClose} className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-amber-300/30 bg-amber-300/[.04] hover:bg-amber-300/[.09] text-amber-50 text-xs uppercase tracking-[.28em] transition-all"><span>Return to Journey</span><ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button></div>
    </div>
  </section>
);
