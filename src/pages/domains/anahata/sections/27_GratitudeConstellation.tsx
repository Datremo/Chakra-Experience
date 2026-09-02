import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  label: string;
}

export const GratitudeConstellationSection: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isInputting, setIsInputting] = useState(false);
  const [tempPos, setTempPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (isInputting) return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    // Clamp so the input card stays fully visible within container
    const x = Math.max(80, Math.min(rect.width - 80, rawX));
    const y = Math.max(120, Math.min(rect.height - 60, rawY));

    setTempPos({ x, y });
    setIsInputting(true);
  };

  const handleAddStar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setIsInputting(false);
      return;
    }

    setStars([...stars, {
      id: Date.now(),
      x: tempPos.x,
      y: tempPos.y,
      label: inputValue.trim()
    }]);

    setInputValue('');
    setIsInputting(false);
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010202] overflow-hidden">
      
      <div className="text-center mb-16 z-20 max-w-2xl pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Expansion</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Constellation of Gratitude</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          Click anywhere in the dark sky to add a star for someone or something that has opened your heart.
        </p>
      </div>

      <div 
        ref={containerRef}
        onClick={handleCanvasClick}
        className="absolute inset-0 z-10 cursor-crosshair"
      >
        {/* Draw connections between stars if there's more than one */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {stars.map((star, i) => {
            if (i === 0) return null;
            const prevStar = stars[i - 1];
            return (
              <motion.line
                key={`line-${star.id}`}
                x1={prevStar.x}
                y1={prevStar.y}
                x2={star.x}
                y2={star.y}
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            );
          })}
        </svg>

        {/* Render Stars */}
        <AnimatePresence>
          {stars.map(star => (
            <motion.div
              key={star.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute flex flex-col items-center"
              style={{ left: star.x, top: star.y, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-1.5 h-1.5 bg-emerald-100 rounded-full shadow-[0_0_10px_#6ee7b7]" />
              <span className="mt-2 text-[10px] font-sans tracking-widest text-emerald-100/40 uppercase whitespace-nowrap">
                {star.label}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input UI */}
        <AnimatePresence>
          {isInputting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute z-30"
              style={{ left: tempPos.x, top: tempPos.y, transform: 'translate(-50%, -100%)' }}
              onClick={e => e.stopPropagation()} // Prevent closing immediately
            >
              <form onSubmit={handleAddStar} className="flex flex-col items-center bg-black/80 p-3 rounded-xl border border-emerald-900/50 backdrop-blur-md -mt-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Name..."
                  className="bg-transparent border-b border-emerald-500/50 text-emerald-100 text-sm font-sans tracking-widest text-center focus:outline-none focus:border-emerald-300 w-32 pb-1 mb-3"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button type="button" onClick={() => setIsInputting(false)} className="text-[10px] text-white/40 uppercase hover:text-white/80">Cancel</button>
                  <button type="submit" className="text-[10px] text-emerald-400 uppercase hover:text-emerald-300">Add Star</button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
