import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, CircleStop, Flame } from 'lucide-react';
import { CinematicBackdrop } from '../components/CinematicBackdrop';
import { WorldChrome } from '../components/WorldChrome';

export const RamResonanceSection: React.FC = () => {
  const [held, setHeld] = useState(false);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => { if (!held) return; const id = window.setInterval(() => setSeconds(v => Math.min(12, v + .1)), 100); return () => window.clearInterval(id); }, [held]);
  const speak = useCallback(() => { if (typeof window === 'undefined' || !('speechSynthesis' in window)) return; window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance('Ram'); u.rate = .65; u.pitch = .8; u.volume = .35; window.speechSynthesis.speak(u); }, []);
  return (
    <WorldChrome number="43" eyebrow="BĪJA / CONTEMPLATION" title="Rāṃ becomes a focal point." subtitle="In later tantric chakra systems, Rāṃ is the seed syllable associated with Maṇipūra. Use the sound as a contemplative anchor, not as proof of measurable energetic activation." image="ram" tone="gold">
      <div className="relative min-h-[620px] rounded-[2rem] border border-amber-200/10 bg-black/40 overflow-hidden p-6 md:p-10">
        <CinematicBackdrop image="ram" tone="gold" vignette={0.94} />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.div animate={{ scale: held ? [1, 1.06, 1] : 1 }} transition={{ duration: 1.4, repeat: Infinity }} className="relative w-64 h-64 rounded-full flex items-center justify-center">
            {Array.from({ length: 5 }, (_, i) => <motion.div key={i} animate={{ scale: held ? [1, 1.8 + i * .15] : 1, opacity: held ? [0.38, 0] : .08 }} transition={{ duration: 2.8 + i * .22, repeat: Infinity }} className="absolute rounded-full border border-amber-200/25" style={{ inset: `${i * 9}%` }} />)}
            <div className="absolute inset-[24%] rounded-full bg-[radial-gradient(circle,rgba(255,249,226,.96),rgba(255,170,42,.65)_28%,rgba(198,49,9,.16)_68%,transparent_72%)]" />
            <span className="relative z-10 font-serif text-7xl text-amber-50">रं</span>
          </motion.div>
          <div className="font-mono text-[10px] tracking-[.45em] uppercase text-amber-200/40 mt-4">RĀṂ · {seconds.toFixed(1)}s</div>
          <div className="flex gap-3 mt-8"><button onPointerDown={() => { setHeld(true); speak(); }} onPointerUp={() => setHeld(false)} onPointerLeave={() => setHeld(false)} className="px-6 py-4 rounded-full border border-amber-200/25 bg-amber-300/[.05] text-amber-100/80 text-xs uppercase tracking-[.25em] flex items-center gap-3"><Volume2 size={15} /> Hold & resonate</button><button onClick={() => { setHeld(false); setSeconds(0); if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }} className="px-5 py-4 rounded-full border border-white/8 text-white/35 hover:text-white/65"><CircleStop size={15} /></button></div>
          <div className="mt-8 flex items-center gap-2 text-[9px] uppercase tracking-[.24em] text-white/25"><Flame size={12} /> contemplative practice</div>
        </div>
      </div>
    </WorldChrome>
  );
};
