import React, { useState } from 'react';
import { BookOpen, Fingerprint, FlaskConical } from 'lucide-react';

export type SourceType = 'TRADITION' | 'MODERN' | 'EVIDENCE' | 'SYMBOLIC';

interface SourceBadgeProps {
  type: SourceType;
  text: string;
  sourceText?: string;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({ type, text, sourceText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getBadgeStyle = () => {
    switch (type) {
      case 'TRADITION':
        return { icon: BookOpen, colors: 'bg-amber-900/40 text-amber-300 border-amber-700/50 hover:bg-amber-800/60' };
      case 'MODERN':
        return { icon: Fingerprint, colors: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50 hover:bg-emerald-800/60' };
      case 'EVIDENCE':
        return { icon: FlaskConical, colors: 'bg-blue-900/40 text-blue-300 border-blue-700/50 hover:bg-blue-800/60' };
      case 'SYMBOLIC':
        return { icon: BookOpen, colors: 'bg-purple-900/40 text-purple-300 border-purple-700/50 hover:bg-purple-800/60' };
    }
  };

  const style = getBadgeStyle();
  const Icon = style.icon;

  return (
    <div className="relative inline-block my-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-1 rounded-full text-lg md:text-xl font-sans tracking-widest border transition-all duration-300 ${style.colors}`}
      >
        <Icon size={12} />
        <span>{type}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-72 bg-[#0a0505] border border-red-900/30 p-4 rounded-xl shadow-2xl z-50 text-left font-sans animate-in fade-in slide-in-from-top-2">
          <p className="text-xl text-red-100/90 leading-relaxed mb-3">{text}</p>
          {sourceText && (
            <div className="text-lg md:text-xl text-red-400/70 border-t border-red-900/30 pt-3 mt-3">
              <span className="block uppercase tracking-widest mb-1 text-sm md:text-base">Source</span>
              {sourceText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
