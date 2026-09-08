import type { Variants } from 'motion/react';

export const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;
export const EASE_UI = [0.65, 0, 0.35, 1] as const;
export const EASE_PHOTO = [0.33, 1, 0.68, 1] as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_REVEAL },
  },
};

export const revealStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** Con reduced-motion no hay desplazamiento: solo un fade de 150 ms. */
export const revealReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.15 } },
};

export const revealStaggerReduced: Variants = {
  hidden: {},
  show: {},
};

/** El disparo al 85 % del viewport del original. */
export const VIEWPORT = { once: true, amount: 0.15 } as const;
