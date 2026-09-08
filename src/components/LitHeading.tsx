import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { ReactNode } from 'react';
import { useRef } from 'react';

/**
 * Titular gigante que se "enciende" al subir: de gris al 25 % a crema plena,
 * interpolado contra el progreso de scroll del propio elemento.
 */
export function LitHeading({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(155, 155, 155, 0.25)', 'rgba(228, 226, 216, 1)'],
  );

  // El contenedor del titular debe ir posicionado (`relative`): useScroll lo
  // necesita para medir bien el offset.
  return (
    <motion.h2
      ref={ref}
      id={id}
      style={reduced ? { color: 'var(--color-bone)' } : { color }}
      className={`font-display font-light leading-[0.9] tracking-[-0.01em] ${className}`}
    >
      {children}
    </motion.h2>
  );
}
