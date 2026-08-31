import React, { useState } from 'react';

interface JournalEntryProps {
  chakraId: string;
  promptId: string;
  prompt: string;
}

export const JournalEntry: React.FC<JournalEntryProps> = ({ prompt }) => {
  const [entry, setEntry] = useState('');

  return (
    <div className="bg-white/60 p-6 rounded-2xl border border-amber-200 shadow-sm">
      <p className="text-xl font-serif text-amber-900 mb-4">{prompt}</p>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Type your reflections here..."
        className="w-full bg-transparent border-b border-amber-300 focus:border-orange-500 outline-none resize-none font-sans text-amber-900/80 p-2 min-h-[100px]"
      />
    </div>
  );
};
