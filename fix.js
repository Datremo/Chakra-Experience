import fs from 'fs';
import path from 'path';

const replaceInFile = (file, regex, replacement) => {
  const p = path.join('d:/Downloads/Chakras', file);
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf-8');
    fs.writeFileSync(p, content.replace(regex, replacement));
  }
};

// JournalEntry unused
replaceInFile('src/components/JournalEntry.tsx', /\{ chakraId, promptId, prompt \}/, '{ prompt }');

// LivingSun unused
replaceInFile('src/pages/domains/manipura/components/LivingSun.tsx', /useAnimation, useInView/, '');
replaceInFile('src/pages/domains/manipura/components/LivingSun.tsx', /import \{ useManipuraData \} from '..\/..\/..\/..\/data\/manipuraData';\n/, '');

// TheExit unused
replaceInFile('src/pages/domains/manipura/rooms/TheExit.tsx', /\{ chakra, setSunMode, onClose \}/, '{ setSunMode, onClose }');

// Muladhara unused
replaceInFile('src/pages/domains/muladhara/MuladharaDomain.tsx', /\{ chakra, onClose \}/, '{ onClose }');
replaceInFile('src/pages/domains/muladhara/sections/Ending.tsx', /import \{ motion \} from 'framer-motion';\n/, '');
replaceInFile('src/pages/domains/muladhara/sections/EvidenceAndMyths.tsx', /\{ motion, AnimatePresence \}/, '{ motion }');
replaceInFile('src/pages/domains/muladhara/sections/Location.tsx', /\{ useEffect, useState \}/, '{ useState }');
replaceInFile('src/pages/domains/muladhara/sections/Name.tsx', /const \[hoveredPart, setHoveredPart\] = useState<string \| null>\(null\);/, '');

// Svadhisthana implicitly any fixes
replaceInFile('src/pages/domains/svadhisthana/sections/Balance.tsx', /\.map\(\(item, i\) =>/, '.map((item: any, i: number) =>');
replaceInFile('src/pages/domains/svadhisthana/sections/EvidenceAndMyths.tsx', /\.map\(\(myth, i\) =>/, '.map((myth: any, i: number) =>');
replaceInFile('src/pages/domains/svadhisthana/sections/HistoricalOrigin.tsx', /\.map\(\(node, idx\) =>/, '.map((node: any, idx: number) =>');
replaceInFile('src/pages/domains/svadhisthana/sections/Journal.tsx', /\.map\(\(_, i\) =>/, '.map((_: any, i: number) =>');
replaceInFile('src/pages/domains/svadhisthana/sections/MandalaExplorer.tsx', /\.map\(\(syllable, i\) =>/, '.map((syllable: any, i: number) =>');
replaceInFile('src/pages/domains/svadhisthana/sections/Name.tsx', /\.map\(\(part, idx\) =>/, '.map((part: any, idx: number) =>');
replaceInFile('src/pages/domains/svadhisthana/sections/Pleasure.tsx', /\.map\(\(item, i\) =>/, '.map((item: any, i: number) =>');
replaceInFile('src/pages/domains/svadhisthana/sections/RealLifeExperiment.tsx', /\.map\(\(task, i\) =>/, '.map((task: any, i: number) =>');
replaceInFile('src/pages/domains/svadhisthana/sections/Relationships.tsx', /\.map\(\(prompt, i\) =>/, '.map((prompt: any, i: number) =>');

console.log('Fixes applied.');
