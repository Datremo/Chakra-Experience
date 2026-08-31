import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
}

export const ConnectionNetworkSection: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<{from: number, to: number}[]>([]);

  useEffect(() => {
    // Generate initial nodes in a circle
    const newNodes: Node[] = [];
    const numNodes = 7;
    const radius = 120;
    for (let i = 0; i < numNodes; i++) {
      const angle = (i / numNodes) * Math.PI * 2 - Math.PI / 2;
      newNodes.push({
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      });
    }
    setNodes(newNodes);
  }, []);

  const handleNodeClick = (id: number) => {
    // Connect clicked node to a random other node that it isn't already connected to
    const availableTargets = nodes
      .map(n => n.id)
      .filter(nId => nId !== id && !connections.some(c => (c.from === id && c.to === nId) || (c.from === nId && c.to === id)));
    
    if (availableTargets.length > 0) {
      const target = availableTargets[Math.floor(Math.random() * availableTargets.length)];
      setConnections([...connections, { from: id, to: target }]);
    }
  };

  return (
    <section className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative bg-[#010604] overflow-hidden">
      
      <div className="text-center mb-16 z-10 max-w-2xl">
        <h2 className="font-sans text-sm tracking-[0.4em] text-emerald-500/70 uppercase mb-4">The Web of Being</h2>
        <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-6">Connection & Reciprocity</h1>
        <p className="text-white/50 italic font-light leading-relaxed">
          The heart centre teaches us that we do not exist in isolation. We are nodes in a vast, invisible network of give and take.
        </p>
      </div>

      <div className="relative w-full max-w-2xl h-[400px] flex items-center justify-center z-10">
        
        {/* Draw connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          <g transform="translate(336, 200)"> {/* Center of a 672x400 container, approx */}
            {connections.map((conn, i) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              
              return (
                <motion.line
                  key={`conn-${i}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="rgba(16, 185, 129, 0.4)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              );
            })}
          </g>
        </svg>

        {/* Draw nodes */}
        <div className="absolute inset-0 flex items-center justify-center">
          {nodes.map(node => (
            <motion.button
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center group"
              style={{
                x: node.x,
                y: node.y,
              }}
              whileHover={{ scale: 1.5, backgroundColor: 'rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-300 group-hover:bg-white shadow-[0_0_10px_#6ee7b7]" />
            </motion.button>
          ))}
          
          {/* Central 'Self' Node */}
          <motion.button
            onClick={() => handleNodeClick(-1)}
            className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full bg-emerald-500/40 border border-emerald-300 flex items-center justify-center group shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
          </motion.button>
        </div>

      </div>

      <p className="mt-12 text-[10px] text-emerald-500/40 font-sans tracking-widest uppercase z-10">
        Click the nodes to build connections.
      </p>

    </section>
  );
};
