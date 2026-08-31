import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InnerObserverSection: React.FC = () => {
  const [thoughts, setThoughts] = useState<{id: number, text: string, labeled: boolean, type: string}[]>([]);
  const [nextId, setNextId] = useState(0);

  const thoughtPool = [
    { text: "I'm not doing this right.", type: "judgment" },
    { text: "What's for dinner?", type: "planning" },
    { text: "My neck hurts.", type: "sensation" },
    { text: "I should have said something else yesterday.", type: "memory" },
    { text: "This is taking too long.", type: "impatience" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        const randomThought = thoughtPool[Math.floor(Math.random() * thoughtPool.length)];
        setThoughts(prev => [...prev, { id: nextId, text: randomThought.text, labeled: false, type: randomThought.type }]);
        setNextId(prev => prev + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [nextId]);

  // Remove thoughts after they float away
  useEffect(() => {
    const cleanup = setInterval(() => {
      setThoughts(prev => prev.filter(t => !t.labeled));
    }, 10000);
    return () => clearInterval(cleanup);
  }, []);

  const handleLabel = (id: number) => {
    setThoughts(prev => prev.map(t => t.id === id ? { ...t, labeled: true } : t));
  };

  return (
    <section className="min-h-screen py-12 md:py-24 flex flex-col items-center justify-center relative px-6 bg-[#000103] overflow-hidden">
      
      <div className="text-center z-10 mb-16 pointer-events-none">
        <h2 className="font-sans text-sm tracking-[0.4em] text-indigo-500/70 uppercase mb-4">The Witness</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90">The Inner Observer</h1>
        <p className="text-white/50 font-light mt-4 text-sm max-w-md mx-auto">
          You cannot stop thoughts. But you can observe them passing. Click a thought to label it and watch it dissolve.
        </p>
      </div>

      <div className="w-full max-w-4xl h-[60vh] relative border border-white/10 rounded-3xl bg-white/[0.02] overflow-hidden">
        
        <AnimatePresence>
          {thoughts.map(thought => (
            !thought.labeled && (
              <motion.div
                key={thought.id}
                initial={{ opacity: 0, x: -100, y: Math.random() * 300 + 50 }}
                animate={{ opacity: 1, x: window.innerWidth > 768 ? 800 : 300 }}
                exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                transition={{ duration: 8, ease: "linear" }}
                className="absolute cursor-pointer"
                onClick={() => handleLabel(thought.id)}
              >
                <div className="px-6 py-3 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-200 text-sm font-light backdrop-blur-sm hover:bg-indigo-800/60 transition-colors">
                  {thought.text}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Labeled Feedback */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
          <p className="text-white/30 font-sans text-xs tracking-widest uppercase">
            Labeling detaches the observer from the observed.
          </p>
        </div>

      </div>
    </section>
  );
};
