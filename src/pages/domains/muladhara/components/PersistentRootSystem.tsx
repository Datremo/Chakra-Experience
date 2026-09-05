import React, { useContext } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ScrollContext } from '../MuladharaDomain';
import { useMuladharaJourney } from '../context/MuladharaJourneyContext';

export const PersistentRootSystem = () => {
  const scrollContainerRef = useContext(ScrollContext);
  const { state } = useMuladharaJourney();

  if (!scrollContainerRef) return null;

  // Global scroll drives the root system's growth directly.
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  
  // Smooth out the scroll for drawing lines
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Parallax subtle sway
  const sway = useTransform(smoothProgress, [0, 1], [-20, 20]);
  const breathe = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.02, 1]);

  // Map the single 0-1 scroll progress to different phases of the root drawing
  // Phase 1: 0 to 0.2
  // Phase 2: 0.2 to 0.4
  // Phase 3: 0.4 to 0.6
  // Phase 4: 0.6 to 0.8
  // Phase 5: 0.8 to 1.0
  const draw1 = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const draw2 = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const draw3 = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
  const draw4 = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
  const draw5 = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  const op2 = useTransform(smoothProgress, [0.15, 0.2], [0, 1]);
  const op3 = useTransform(smoothProgress, [0.35, 0.4], [0, 1]);
  const op4 = useTransform(smoothProgress, [0.55, 0.6], [0, 1]);
  const op5 = useTransform(smoothProgress, [0.75, 0.8], [0, 0.8]);

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-0 flex justify-center overflow-hidden"
      style={{ x: sway, scale: breathe }}
    >
      <svg 
        viewBox="0 0 1000 3000" 
        className="w-full h-auto min-h-[150vh] md:min-h-[300vh] max-w-5xl mix-blend-screen opacity-50"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <filter id="glowRoot">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Phase 1: Arrival Faint Root */}
        <motion.path
          d="M500,0 C500,300 480,500 520,800 C560,1100 450,1500 500,2000"
          fill="transparent"
          stroke="#450a0a"
          strokeWidth="8"
          style={{ pathLength: draw1 }}
          filter="url(#glowRoot)"
        />

        {/* Phase 2: Mandala Geometric Roots */}
        <motion.path
          d="M520,800 L400,900 L600,1000 L450,1100 Z"
          fill="transparent"
          stroke="#7f1d1d"
          strokeWidth="4"
          style={{ pathLength: draw2, opacity: op2 }}
        />

        {/* Phase 3: Earth Organic Branching */}
        <motion.path
          d="M450,1100 C300,1300 200,1600 100,2000 M550,1100 C700,1300 800,1600 900,2000"
          fill="transparent"
          stroke="#991b1b"
          strokeWidth="5"
          style={{ pathLength: draw3, opacity: op3 }}
          filter="url(#glowRoot)"
        />

        {/* Phase 4: Human Life / Connections */}
        <motion.path
          d="M200,1600 C150,1700 300,1800 250,1900 M800,1600 C850,1700 700,1800 750,1900 M500,2000 C400,2200 600,2400 500,2700 M100,2000 L50,2200 M900,2000 L950,2200"
          fill="transparent"
          stroke="#b91c1c"
          strokeWidth="3"
          strokeDasharray="4 8"
          style={{ pathLength: draw4, opacity: op4 }}
        />

        {/* Phase 5: Integration Luminous Network (Deep dense branching) */}
        <motion.path
          d="M50,2200 C0,2500 100,2800 50,3000 M950,2200 C1000,2500 900,2800 950,3000 M500,2700 C300,2800 700,2900 500,3000 M250,1900 C100,2100 400,2300 250,2800 M750,1900 C900,2100 600,2300 750,2800"
          fill="transparent"
          stroke="#ef4444"
          strokeWidth="2"
          style={{ pathLength: draw5, opacity: op5 }}
          filter="url(#glowRoot)"
        />
      </svg>
    </motion.div>
  );
};
