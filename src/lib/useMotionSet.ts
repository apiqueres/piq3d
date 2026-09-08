import { useReducedMotion } from 'motion/react';
import { reveal, revealReduced, revealStagger, revealStaggerReduced } from './motion';

/**
 * Devuelve el juego de variantes que toca según la preferencia del sistema.
 * Un único punto de decisión para no repetir el condicional en cada bloque.
 */
export function useMotionSet() {
  const reduced = useReducedMotion();
  return {
    reduced: !!reduced,
    item: reduced ? revealReduced : reveal,
    group: reduced ? revealStaggerReduced : revealStagger,
  };
}
