const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/KMDNShyavinda/restaurant/main/frontend/src/assets/hero.png';
const outDir = path.join(__dirname, '..', 'public', 'images');
const outPath = path.join(outDir, 'maison-ceylon-hero.png');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

console.log('Downloading', url);

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error('Failed to download image, status code:', res.statusCode);
    process.exit(1);
  }

  const file = fs.createWriteStream(outPath);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved to', outPath);
  });
}).on('error', (err) => {
  console.error('Download error:', err.message);
});
