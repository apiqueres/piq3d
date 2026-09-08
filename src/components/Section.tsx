import type { ReactNode } from 'react';

/** Ritmo vertical y márgenes laterales comunes a todas las secciones. */
export function Section({
  id,
  children,
  className = '',
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-[150px] px-5 pt-[clamp(120px,18vw,280px)] sm:px-8 md:scroll-mt-[120px] xl:px-10 ${className}`}
    >
      {children}
    </section>
  );
}

/** Rejilla de 32 columnas a partir de lg. Debajo, una sola columna. */
export function Grid32({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`grid scroll-mt-[150px] gap-x-0 md:scroll-mt-[120px] lg:grid-cols-[repeat(32,minmax(0,1fr))] ${className}`}
    >
      {children}
    </div>
  );
}
