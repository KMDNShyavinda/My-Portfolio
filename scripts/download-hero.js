import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = 'https://raw.githubusercontent.com/KMDNShyavinda/restaurant/main/frontend/src/assets/hero.png';
const outDir = path.join(__dirname, '..', 'public', 'images');
const outPath = path.join(outDir, 'maison-ceylon-hero.png');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

console.log('Downloading', url);

const res = await fetch(url);
if (!res.ok) {
  console.error('Failed to download image, status code:', res.status);
  process.exit(1);
}

const arrayBuffer = await res.arrayBuffer();
fs.writeFileSync(outPath, Buffer.from(arrayBuffer));
console.log('Saved to', outPath);
