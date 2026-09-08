/**
 * Genera las imágenes de /public a partir de los originales de /assets y /uploads.
 *
 * Dos reglas:
 *  - Nunca se recorta. Cada foto conserva su proporción original; la tarjeta se
 *    adapta a la foto, no al revés.
 *  - Ningún asset servido pasa de 300 KB (baja la calidad en pasos hasta cumplirlo).
 *
 * De cada foto salen dos versiones: la de tarjeta (lado largo 1000 px) y la del
 * visor a pantalla completa (lado largo 1600 px). Las medidas reales de cada
 * archivo se escriben en src/lib/image-manifest.json para que la tarjeta pueda
 * reservar el hueco exacto y no haya saltos de layout.
 *
 * El tratamiento de color saturate(.85) NO se hornea aquí: lo aplica el CSS, que
 * necesita poder volver a saturate(1) en hover.
 */
import sharp from 'sharp';
import { mkdir, readdir, copyFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT = 'public';
const MANIFEST = 'src/lib/image-manifest.json';
const CARD_MAX = 1000;
const FULL_MAX = 1600;
const MAX_KB = 300;
// La versión del visor solo se descarga cuando alguien abre la foto en grande,
// así que se le deja algo más de margen antes de sacrificar calidad.
const MAX_KB_FULL = 450;

/** publicPath → { w, h, full, fw, fh } */
const manifest = {};

const publicPath = (dest) => dest.slice(OUT.length + 1).split(path.sep).join('/');

async function emit(src, dest, maxSide, quality, limitKb = MAX_KB) {
  await mkdir(path.dirname(dest), { recursive: true });
  let q = quality;
  for (;;) {
    const info = await sharp(src)
      .resize({ width: maxSide, height: maxSide, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: q })
      .toFile(dest);
    const kb = (await stat(dest)).size / 1024;
    if (kb <= limitKb || q <= 45) {
      console.log(`  ${path.basename(dest)}  ${info.width}×${info.height}  ${kb.toFixed(0)}KB  q${q}`);
      return info;
    }
    q -= 8;
  }
}

/** Escribe la pareja tarjeta + visor y la anota en el manifiesto. */
async function photo(src, destBase) {
  const card = await emit(src, `${destBase}.webp`, CARD_MAX, 80);
  const full = await emit(src, `${destBase}-full.webp`, FULL_MAX, 82, MAX_KB_FULL);
  manifest[publicPath(`${destBase}.webp`)] = {
    w: card.width,
    h: card.height,
    full: publicPath(`${destBase}-full.webp`),
    fw: full.width,
    fh: full.height,
  };
}

async function passthrough(src, dest, { measure = false } = {}) {
  await mkdir(path.dirname(dest), { recursive: true });
  await copyFile(src, dest);
  const kb = (await stat(dest)).size / 1024;
  if (measure) {
    const m = await sharp(dest).metadata();
    manifest[publicPath(dest)] = { w: m.width, h: m.height, full: null, fw: m.width, fh: m.height };
    console.log(`  ${path.basename(dest)}  ${m.width}×${m.height}  ${kb.toFixed(0)}KB  (copia)`);
  } else {
    console.log(`  ${path.basename(dest)}  ${kb.toFixed(0)}KB  (copia)`);
  }
}

// Hero: ya recortado, tratado y optimizado. Solo se copia.
console.log('== hero');
await passthrough('uploads/hero.webp', `${OUT}/hero.webp`);
await passthrough('uploads/hero-mobile.webp', `${OUT}/hero-mobile.webp`);

// Trofeos: llegaron ya exportados a 800×1000 y por debajo del límite. Se copian
// tal cual, así que su versión de visor es el mismo archivo.
console.log('== trofeos');
for (const f of await readdir('assets/catalogo')) {
  if (f.endsWith('.webp')) {
    await passthrough(`assets/catalogo/${f}`, `${OUT}/img/trofeos/${f}`, { measure: true });
  }
}

const groups = {
  medallas: {
    dir: 'assets/medallas',
    files: [
      ['medallaconfondo.jpeg', 'valencia-xiques'],
      'ch-sueca.jpeg',
      'ajedrez-sueca.jpeg',
      'sense-limits.jpeg',
      'valencia-xiques-reverso.jpg',
    ],
  },
  merch: {
    dir: 'assets/merchandising',
    files: ['01_llaveros_club.png', '02_figuritas.png', '03_llaveros.png', '05_pin_falla.png', '06_imanes.png', 'imanes_regalo.png'],
  },
  qr: {
    dir: 'assets/qr',
    files: ['sushiroom.jpeg', 'cocobeach.jpeg', 'el-niu.jpeg', 'ca-quintin.jpeg'],
  },
};

for (const [name, { dir, files }] of Object.entries(groups)) {
  console.log(`== ${name}`);
  for (const entry of files) {
    const [f, slug] = Array.isArray(entry) ? entry : [entry, null];
    const base =
      slug ?? f.replace(/\.[^.]+$/, '').replace(/^\d+_/, '').replace(/_/g, '-').toLowerCase();
    await photo(path.join(dir, f), `${OUT}/img/${name}/${base}`);
  }
}

// Taller: los vídeos van tal cual (H.264 ya comprimido; recodificar sin ffmpeg no
// es posible y pasarlos a GIF los multiplicaría por diez). Se sirven con
// preload="none" y solo arrancan cuando la sección entra en pantalla.
console.log('== taller');
const CLIPS = { 'diseño.mp4': 'diseno.mp4', 'produccion.mp4': 'produccion.mp4', 'entrega.mp4': 'entrega.mp4' };
for (const [src, dest] of Object.entries(CLIPS)) {
  await passthrough(`assets/procesofabricacion/${src}`, `${OUT}/taller/${dest}`);
}
await photo('assets/procesofabricacion/prototipo.jpeg', `${OUT}/taller/prototipo`);
// Pósters: fotograma de cada clip, extraído con canvas. Cartel mientras carga el
// vídeo e imagen fija con prefers-reduced-motion.
for (const n of ['diseno', 'produccion', 'entrega']) {
  await passthrough(`assets/procesofabricacion/${n}-poster.webp`, `${OUT}/taller/${n}-poster.webp`);
}

// Favicon a partir del logo.
console.log('== favicon');
await sharp('assets/logo.png')
  .resize(180, 180, { fit: 'contain', background: { r: 21, g: 21, b: 21, alpha: 1 } })
  .png()
  .toFile(`${OUT}/favicon.png`);
console.log(`  favicon.png  ${((await stat(`${OUT}/favicon.png`)).size / 1024).toFixed(0)}KB`);

const ordered = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(MANIFEST, `${JSON.stringify(ordered, null, 2)}\n`, 'utf8');
console.log(`\n${MANIFEST}: ${Object.keys(ordered).length} imágenes`);
