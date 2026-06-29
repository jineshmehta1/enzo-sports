import fs from 'fs';
import path from 'path';

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const replacements = [
    // Padding
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bpy-20\b/g, 'py-10 md:py-20'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bpy-24\b/g, 'py-12 md:py-24'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bpy-32\b/g, 'py-16 md:py-32'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bpx-16\b/g, 'px-8 md:px-16'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bpx-20\b/g, 'px-8 md:px-20'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bpx-24\b/g, 'px-8 md:px-24'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bp-16\b/g, 'p-8 md:p-16'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bp-20\b/g, 'p-10 md:p-20'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bp-24\b/g, 'p-12 md:p-24'],

    // Gap
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bgap-12\b/g, 'gap-6 md:gap-12'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bgap-16\b/g, 'gap-8 md:gap-16'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bgap-20\b/g, 'gap-10 md:gap-20'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bgap-24\b/g, 'gap-12 md:gap-24'],

    // Text Sizes
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\btext-5xl\b/g, 'text-4xl md:text-5xl'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\btext-6xl\b/g, 'text-4xl md:text-6xl'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\btext-7xl\b/g, 'text-5xl md:text-7xl'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\btext-8xl\b/g, 'text-5xl md:text-8xl'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\btext-\[15rem\]\b/g, 'text-7xl md:text-[15rem]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\btext-\[20rem\]\b/g, 'text-8xl md:text-[20rem]'],

    // Dimensions
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bw-\[300px\]\b/g, 'w-64 md:w-[300px]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bw-\[400px\]\b/g, 'w-72 md:w-[400px]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bw-\[500px\]\b/g, 'w-80 md:w-[500px]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bw-\[600px\]\b/g, 'w-96 md:w-[600px]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bw-\[800px\]\b/g, 'w-full md:w-[800px]'],
    
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bh-\[300px\]\b/g, 'h-64 md:h-[300px]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bh-\[400px\]\b/g, 'h-72 md:h-[400px]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bh-\[500px\]\b/g, 'h-80 md:h-[500px]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bh-\[600px\]\b/g, 'h-96 md:h-[600px]'],
    [/(?<!\b(?:sm|md|lg|xl|2xl|hover|focus):)\bh-\[800px\]\b/g, 'h-[400px] md:h-[800px]'],
  ];

  for (const [regex, replacement] of replacements) {
    content = content.replace(regex, replacement);
  }

  // Handle double replacements safely (e.g. text-4xl md:text-4xl md:text-5xl)
  // This can happen if the file already had 'md:text-5xl text-5xl', we don't want to create weird classes.
  // Actually, our negative lookbehind prevents prefix matches, but let's just make sure.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Responsive updated: ' + filePath);
  }
};

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (['node_modules', '.next', '.git', 'public'].includes(file)) continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
};

walk('./app');
walk('./components');
