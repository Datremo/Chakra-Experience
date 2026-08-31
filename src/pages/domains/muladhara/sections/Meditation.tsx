import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const MeditationSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [reflection, setReflection] = useState<string | null>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive && seconds < 300) { // 5 minutes = 300 seconds
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
      // We don't need to synchronously call setIsActive(false) here.
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getPhaseText = () => {
    if (seconds < 60) return "Arrive. Let the body settle into gravity.";
    if (seconds < 120) return "Feel the body. Notice the points of contact with the floor.";
    if (seconds < 180) return "Feel support. You are held. You do not need to hold yourself up.";
    if (seconds < 240) return "Optional लं. Mentally repeat the syllable on the exhale.";
    if (seconds < 300) return "Stillness. Rest in the foundation.";
    return "The practice is complete.";
  };

  return (
    <section id="practice-meditation" className="min-h-screen py-32 px-6 relative bg-[#0a0505]">
      
      <div className="max-w-4xl mx-auto w-full">
        
        {/* 5-Min Beginner Practice */}
        <div className="text-center mb-32">
          <h2 className="font-sans text-red-500 tracking-[0.3em] uppercase text-sm mb-6">Guided Practice</h2>
          <h1 className="text-5xl md:text-7xl mb-12 text-white">The 5-Minute Anchor</h1>
          
          <div className="bg-[#120505] p-12 rounded-[3rem] border border-red-900/30 flex flex-col items-center justify-center min-h-[400px] shadow-2xl">
            
            <div className="text-8xl font-sans font-light text-red-100 mb-8 tracking-widest">
              {formatTime(seconds)}
            </div>
            
            <motion.div 
              key={getPhaseText()} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-2xl text-red-300 font-serif italic mb-12 h-16"
            >
              "{getPhaseText()}"
              {seconds > 0 && seconds < 300 && (
                <button 
                  onClick={() => {
                    setSeconds(0);
                    setIsActive(false);
                  }}
                  className="block mx-auto mt-4 text-xs tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors"
                >
                  Return
                </button>
              )}
            </motion.div>

            {!isActive && seconds === 0 && (
              <button onClick={() => setIsActive(true)} className="px-12 py-4 bg-red-600 text-white font-sans tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                Begin
              </button>
            )}
            
            {isActive && (
              <button onClick={() => setIsActive(false)} className="px-12 py-4 border border-white/20 text-white/50 font-sans tracking-[0.2em] uppercase rounded-full hover:bg-white/5">
                Pause
              </button>
            )}

            {!isActive && seconds > 0 && seconds < 300 && (
              <button onClick={() => setIsActive(true)} className="px-12 py-4 border border-white/20 text-white font-sans tracking-[0.2em] uppercase rounded-full hover:bg-white/10">
                Resume
              </button>
            )}

            {!isActive && seconds >= 300 && (
              <button onClick={() => { setSeconds(0); setIsActive(true); setReflection(null); }} className="px-12 py-4 bg-red-600 text-white font-sans tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] mt-4">
                Restart
              </button>
            )}

            {!isActive && seconds >= 300 && (
              <div className="mt-8 animate-in fade-in">
                <p className="text-white/60 mb-6 font-sans uppercase tracking-widest text-sm">What did you notice?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['More Settled', 'About the Same', 'More Activated', 'Uncertain'].map(res => (
                    <button key={res} onClick={() => setReflection(res)} className={`px-6 py-2 border rounded-full text-sm transition-colors ${reflection === res ? 'bg-white text-black' : 'border-white/20 text-white/70 hover:bg-white/10'}`}>
                      {res}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Go Deeper (Advanced) */}
        <div className="border-t border-white/10 pt-24">
          <h2 className="text-center font-sans text-white/30 tracking-[0.4em] uppercase mb-16">Go Deeper</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#050101] border border-red-900/20 p-8 rounded-2xl group hover:border-red-500/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl text-white">Mūla Bandha</h3>
                <span className="text-[10px] bg-red-900/50 text-red-200 px-2 py-1 uppercase tracking-widest rounded">Advanced</span>
              </div>
              <p className="text-white/60 mb-6">The "Root Lock". A subtle physical contraction of the pelvic floor to seal and direct internal energy (Prāṇa) upward.</p>
              <div className="text-xs text-red-400 font-sans tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Requires Teacher Guidance →
              </div>
            </div>

            <div className="bg-[#050101] border border-red-900/20 p-8 rounded-2xl group hover:border-red-500/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl text-white">Kundalinī Awakening</h3>
                <span className="text-[10px] bg-red-900/50 text-red-200 px-2 py-1 uppercase tracking-widest rounded">Tantric</span>
              </div>
              <p className="text-white/60 mb-6">The classical visualization and breathing practices designed to rouse the dormant energy at the base of the spine.</p>
              <div className="text-xs text-red-400 font-sans tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Tradition →
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-red-900/10 p-6 rounded-xl border border-red-900/30 text-center">
            <p className="text-red-300 text-sm font-sans">
              <strong>SAFETY NOTE:</strong> Do not force breathing, prolonged breath retention, or aggressive pelvic contractions without appropriate instruction. Stop if something causes distress.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
