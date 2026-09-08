import { motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { Media } from '../lib/content';
import { ratioOf, sizeOf } from '../lib/images';
import { EASE_PHOTO } from '../lib/motion';
import { useLightbox } from './Lightbox';

const MEDIA_CLASS =
  'block h-full w-full saturate-[0.85] transition-[filter] duration-[600ms] ease-photo group-hover:saturate-100';

/**
 * Clip mudo en bucle. `preload="none"`: no se descarga nada hasta que la sección
 * entra en pantalla, y se pausa al salir. Con reduced-motion se queda en el póster.
 */
function Clip({ media, fit }: { media: Extract<Media, { kind: 'video' }>; fit: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    // En pestaña de fondo el navegador rechaza play(); hay que reintentar al volver.
    const sync = () => {
      if (inView && document.visibilityState === 'visible') void el.play().catch(() => {});
      else el.pause();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, [inView, reduced]);

  return (
    <video
      ref={ref}
      src={media.src}
      poster={media.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={media.alt}
      className={`${MEDIA_CLASS} ${fit}`}
    />
  );
}

/**
 * Foto o clip de producto, dentro de una tarjeta que abre el visor a pantalla
 * completa. Por defecto la tarjeta adopta la proporción real de la foto: no se
 * recorta nada. `ratio` fuerza una caja fija (filas que deben quedar alineadas),
 * y entonces el contenido se ajusta dentro sin recortar ni deformar.
 *
 * El tratamiento saturate(.85) va en CSS —no horneado en el archivo— porque en
 * hover tiene que poder volver a saturate(1).
 */
export function MediaCard({
  media,
  group,
  index = 0,
  className = '',
  rounded = 'rounded-[5px]',
  ratio,
}: {
  media: Media;
  /** Conjunto por el que se navega en el visor. Por defecto, solo esta pieza. */
  group?: Media[];
  index?: number;
  className?: string;
  rounded?: string;
  /** Proporción fija de la caja (ancho/alto). Sin ella manda la foto. */
  ratio?: number;
}) {
  const reduced = useReducedMotion();
  const openLightbox = useLightbox();
  const size = media.kind === 'image' ? sizeOf(media.src) : undefined;
  const boxRatio = ratio ?? (media.kind === 'image' ? ratioOf(media.src) : 2 / 3);
  const fit = ratio ? 'object-contain' : 'object-cover';

  return (
    <motion.button
      type="button"
      onClick={() => openLightbox(group ?? [media], index)}
      aria-label={`Ver en grande: ${media.alt}`}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      transition={{ duration: 0.6, ease: EASE_PHOTO }}
      style={{ aspectRatio: boxRatio }}
      className={`group relative block w-full cursor-zoom-in overflow-hidden bg-white/[0.03] p-0 focus-visible:outline-1 focus-visible:outline-bone focus-visible:outline-offset-[3px] ${rounded} ${className}`}
    >
      {media.kind === 'video' ? (
        <Clip media={media} fit={fit} />
      ) : (
        <img
          src={media.src}
          alt={media.alt}
          width={size?.w}
          height={size?.h}
          loading="lazy"
          decoding="async"
          className={`${MEDIA_CLASS} ${fit}`}
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute right-2 top-2 font-mono text-[13px] leading-none text-bone opacity-0 transition-opacity duration-300 ease-ui group-hover:opacity-90 group-focus-visible:opacity-90"
      >
        ⤢
      </span>
    </motion.button>
  );
}
