import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { VIEWPORT } from '../lib/motion';
import { useMotionSet } from '../lib/useMotionSet';

type Props = { children: ReactNode; className?: string };

/** Bloque que se revela solo al entrar en viewport. */
export function Reveal({ children, className }: Props) {
  const { item } = useMotionSet();
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Contenedor de varios hijos <StaggerItem/> encadenados. */
export function Stagger({ children, className }: Props) {
  const { group } = useMotionSet();
  return (
    <motion.div
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Props) {
  const { item } = useMotionSet();
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
