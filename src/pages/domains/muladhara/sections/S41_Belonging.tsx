import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

interface Particle { x: number; y: number; id: number; connected: boolean; }

export const S41_Belonging: React.FC = () => {
  const { reachWorld } = useMuladharaJourney();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (inView) reachWorld(41); }, [inView, reachWorld]);

  const [user, setUser] = useState({ x: 50, y: 50 });
  const [others] = useState<Particle[]>([
    { x: 20, y: 30, id: 1, connected: false },
    { x: 75, y: 25, id: 2, connected: false },
    { x: 60, y: 70, id: 3, connected: false },
    { x: 30, y: 75, id: 4, connected: false },
  ]);

  const getDist = (a: {x:number,y:number}, b: {x:number,y:number}) => Math.hypot(a.x-b.x, a.y-b.y);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setUser({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  }, []);

  return (
    <div ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center bg-black z-10 pointer-events-auto">
      <h3 className="text-4xl font-serif text-white mb-4 text-center">Belonging</h3>
      <p className="text-slate-500 text-sm text-center max-w-md mb-8 px-6">Move toward the lights. Notice how connection alters isolation.</p>

      <div className="relative w-full max-w-lg h-96 bg-black border border-slate-900 rounded-2xl overflow-hidden cursor-crosshair" onMouseMove={handleMove}>
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {others.map(o => {
            const d = getDist(user, o);
            const opacity = Math.max(0, 1 - d / 40);
            return opacity > 0 ? <line key={o.id} x1={`${user.x}%`} y1={`${user.y}%`} x2={`${o.x}%`} y2={`${o.y}%`} stroke={`rgba(255,200,100,${opacity * 0.5})`} strokeWidth="1" /> : null;
          })}
        </svg>

        {/* Other lights */}
        {others.map(o => {
          const d = getDist(user, o);
          const connected = d < 30;
          return (
            <motion.div key={o.id} className="absolute rounded-full"
              style={{ left: `${o.x}%`, top: `${o.y}%`, transform: 'translate(-50%,-50%)' }}
              animate={{ width: connected ? 20 : 10, height: connected ? 20 : 10, backgroundColor: connected ? '#fbbf24' : '#374151', boxShadow: connected ? '0 0 20px rgba(251,191,36,0.6)' : 'none' }}
              transition={{ duration: 0.3 }}
            />
          );
        })}

        {/* User */}
        <motion.div className="absolute rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]"
          style={{ left: `${user.x}%`, top: `${user.y}%`, transform: 'translate(-50%,-50%)', width: 14, height: 14 }}
          animate={{ boxShadow: ['0 0 15px rgba(255,255,255,0.4)', '0 0 30px rgba(255,255,255,0.8)', '0 0 15px rgba(255,255,255,0.4)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <p className="text-slate-700 text-xs mt-4 tracking-widest uppercase">Move to connect</p>
    </div>
  );
};