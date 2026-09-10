import React from 'react';
import { motion } from 'framer-motion';
import { WorldFrame } from '../components/WorldFrame';

export const FireToLightSection: React.FC = () => <WorldFrame eyebrow="29 — INTEGRATION" title="The fire no longer needs to prove itself." copy="Its job is complete. What began as heat becomes clarity: directed, steady, useful light." scene="sun">
  <div className="relative max-w-5xl mx-auto min-h-[460px] rounded-[2rem] overflow-hidden border border-amber-100/10 bg-black/20 flex items-center justify-center">
    <motion.div initial={{scale:.65,opacity:.25}} whileInView={{scale:1.25,opacity:.85}} transition={{duration:2.4}} className="absolute w-64 h-64 rounded-full bg-[radial-gradient(circle,#fff9dc 0%,#ffd06a 22%,rgba(255,172,54,.35)_45%,transparent_72%)] shadow-[0_0_160px_rgba(255,201,102,.22)]"/>
    <div className="relative z-10 text-center max-w-xl"><div className="text-[11px] tracking-[.34em] uppercase text-amber-100/40">fire → light</div><p className="mt-6 font-serif text-3xl md:text-5xl text-amber-50 leading-tight">“Power is not how hard you burn. Power is how consciously you direct heat.”</p></div>
  </div>
</WorldFrame>;
