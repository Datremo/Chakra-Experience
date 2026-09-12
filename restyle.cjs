const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src', 'pages', 'domains', 'manipura', 'sections');

const glassClass = 'bg-amber-900/10 backdrop-blur-md border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.05)]';

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Replace various forms of black background with glassmorphism
            content = content.replace(/bg-black\/\d{2}/g, glassClass);
            content = content.replace(/bg-black(?![\w-])/g, glassClass); // bg-black but not bg-black-something
            content = content.replace(/bg-\[#070200\]/g, glassClass);
            content = content.replace(/bg-\[#0a0500\]/g, glassClass);
            content = content.replace(/bg-gray-900/g, glassClass);
            content = content.replace(/bg-zinc-900/g, glassClass);
            content = content.replace(/bg-slate-900/g, glassClass);
            
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
}

processDirectory(sectionsDir);
console.log('Restyling complete.');
