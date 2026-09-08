import manifest from './image-manifest.json';

type Entry = { w: number; h: number; full: string | null; fw: number; fh: number };

const SIZES = manifest as Record<string, Entry>;

/**
 * Medidas reales de cada imagen generada. Con ellas la tarjeta reserva el hueco
 * exacto: nada se recorta, nada se deforma y no hay saltos de layout al cargar.
 */
export function sizeOf(src: string): Entry | undefined {
  return SIZES[src];
}

/** Proporción de la foto, para `aspect-ratio`. 4:5 si el archivo no está en el manifiesto. */
export function ratioOf(src: string): number {
  const entry = SIZES[src];
  return entry ? entry.w / entry.h : 0.8;
}

/** Versión grande sin recortar para el visor; si no existe, la propia de la tarjeta. */
export function fullOf(src: string): { src: string; w: number; h: number } {
  const entry = SIZES[src];
  if (!entry) return { src, w: 0, h: 0 };
  return { src: entry.full ?? src, w: entry.fw, h: entry.fh };
}
