import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const S53_TheLamChamber: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (inView) reachWorld(53); }, [inView, reachWorld]);

  const [mode, setMode] = useState<'HEAR' | 'CHANT' | 'SILENT'>('HEAR');
  const [taps, setTaps] = useState(0);
  const [wave, setWave] = useState(0);

  const handleTap = () => { setTaps(t => t + 1); setWave(w => w + 1); };

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-black z-10 pointer-events-auto relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(80,0,0,0.3) 0%, transparent 70%)' }} />

      {/* Audio-reactive rings */}
      {mode === 'CHANT' && Array.from({length: 5}).map((_, i) => (
        <motion.div key={`${wave}-${i}`} className="absolute rounded-full border border-red-800/20"
          animate={{ scale: [1, 4], opacity: [0.5, 0] }} transition={{ duration: 3 + i, delay: i * 0.6, repeat: Infinity }}
          style={{ width: 80, height: 80, left: '50%', top: '50%', marginLeft: -40, marginTop: -40 }}
        />
      ))}

      <div className="flex gap-2 mb-12 relative z-10">
        {(['HEAR','CHANT','SILENT'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)}
            className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase border transition-all ${mode === m ? 'bg-red-950 border-red-700 text-white' : 'border-slate-800 text-slate-600 hover:border-slate-600'}`}
          >
            {m}
          </button>
        ))}
      </div>

      <motion.div onClick={mode === 'CHANT' ? handleTap : undefined}
        animate={{ scale: mode === 'CHANT' ? [1, 1.02, 1] : 1 }}
        transition={{ duration: 6, repeat: Infinity }}
        className="relative z-10 cursor-pointer select-none"
      >
        <p className="text-[14rem] leading-none font-serif text-red-600/80 drop-shadow-[0_0_60px_rgba(220,38,38,0.4)]" style={{ fontFamily: 'serif' }}>लं</p>
      </motion.div>

      <div className="relative z-10 text-center mt-8 max-w-md px-8">
        {mode === 'HEAR' && <p className="text-slate-400 text-sm leading-relaxed">Laṃ (pronounced "lum") is the Bīja mantra of Mūlādhāra. In traditional practice, it is used for concentrated meditation on the root center.</p>}
        {mode === 'CHANT' && (
          <div>
            <p className="text-red-400/70 text-sm mb-2">Tap the syllable with each chant</p>
            <p className="text-slate-600 text-2xl font-serif">{taps} × Laṃ</p>
          </div>
        )}
        {mode === 'SILENT' && <p className="text-slate-600 italic text-lg font-serif">"The mantra enters silence, and silence becomes the mantra."</p>}
      </div>
    </div>
  );
};