import sharp from 'sharp';
const mk = async (nom, w, h, fond) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="${fond}"/>
  ${[0.3,0.55,0.8].map(y=>`<rect x="${w*0.06}" y="${h*y}" width="${w*0.88}" height="${h*0.012}" fill="#121212" opacity=".7"/>`).join('')}
  ${Array.from({length:12},(_,i)=>`<rect x="${w*0.08 + (i%4)*w*0.22}" y="${h*(0.3+Math.floor(i/4)*0.25)-h*0.16}" width="${w*0.18}" height="${h*0.15}" rx="6" fill="${['#fff','#d9d8d4','#2B3CF0','#FFE14A'][i%4]}" opacity=".85"/>`).join('')}</svg>`;
  for (const lw of [640, 1280, 1600]) await sharp(Buffer.from(svg)).resize(lw).webp({ quality: 70 }).toFile(`assets/images/grok/${nom}-${lw}.webp`);
};
await mk('atelier', 1500, 1000, '#E2E1DC');
await mk('imprimerie', 1500, 1000, '#E2E1DC');
await mk('croquis', 1500, 1000, '#E2E1DC');
await mk('rayon-vide', 1600, 900, '#E2E1DC');
console.log('provisoires ok');
