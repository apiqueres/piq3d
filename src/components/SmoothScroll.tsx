import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

/** Scroll suave. Se apaga por completo con prefers-reduced-motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
