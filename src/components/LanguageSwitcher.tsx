import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="fixed top-6 right-6 z-[9999] flex items-center bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
      <Globe size={16} className="text-white/70 mr-3" />
      <select
        value={i18n.language}
        onChange={changeLanguage}
        className="bg-transparent text-white/90 text-sm font-sans uppercase tracking-widest outline-none cursor-pointer appearance-none pr-4"
      >
        <option value="en" className="bg-black text-white">EN</option>
        <option value="hi" className="bg-black text-white">HI</option>
        <option value="mr" className="bg-black text-white">MR</option>
        <option value="te" className="bg-black text-white">TE</option>
        <option value="gu" className="bg-black text-white">GU</option>
      </select>
    </div>
  );
};
