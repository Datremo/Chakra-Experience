import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TheNatureOfWaterSection: React.FC = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const createRipple = (x: number, y: number) => {
    const id = Date.now() + Math.random();
    setRipples((current) => [...current.slice(-5), { id, x, y }]);
    window.setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id));
    }, 1800);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setCursor({ x, y });

    if (event.pointerType === 'mouse' && event.buttons === 1) {
      createRipple(x, y);
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    createRipple(
      ((event.clientX - rect.left) / rect.width) * 100,
      ((event.clientY - rect.top) / rect.height) * 100,
    );
  };

  return (
    <section
      className="min-h-[100svh] w-full flex flex-col items-center justify-center relative  bg-[#02080b] px-5 py-10 md:py-14 cursor-crosshair"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-55"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(20,184,166,0.30), transparent 38%), radial-gradient(circle at 80% 70%, rgba(14,116,144,0.22), transparent 42%)',
              'radial-gradient(circle at 75% 35%, rgba(20,184,166,0.26), transparent 38%), radial-gradient(circle at 25% 72%, rgba(14,116,144,0.20), transparent 42%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -inset-[20%] opacity-25"
          animate={{ x: ['-2%', '2%', '-2%'], y: ['1%', '-1%', '1%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            backgroundImage:
              'repeating-radial-gradient(ellipse at 50% 65%, rgba(125,211,252,0.35) 0 1px, transparent 2px 28px)',
          }}
        />
        <motion.div
          className="absolute h-[42rem] w-[42rem] rounded-full blur-3xl opacity-20"
          style={{ left: `${cursor.x}%`, top: `${cursor.y}%`, translateX: '-50%', translateY: '-50%' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              initial={{ width: 20, height: 20, opacity: 0.5, borderWidth: 2 }}
              animate={{ width: 520, height: 520, opacity: 0, borderWidth: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/70 shadow-[0_0_30px_rgba(103,232,249,0.2)]"
              style={{ left: `${ripple.x}%`, top: `${ripple.y}%` }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-4xl px-2 text-center select-none">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-orange-300 font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4"
        >
          The Element
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-5 leading-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        >
          Water yields.
          <span className="block text-cyan-100/90">Water remembers the path.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl text-white/75 font-light max-w-2xl mx-auto leading-relaxed"
        >
          In modern interpretations, water becomes a metaphor for adaptability: not surrender, but the ability to change shape without losing direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.35 }}
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-200/20 bg-black/30 px-5 py-3 backdrop-blur-md text-[10px] md:text-xs uppercase tracking-[0.22em] text-cyan-100/70"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
          Move your cursor to disturb the surface
        </motion.div>
      </div>
    </section>
  );
};
