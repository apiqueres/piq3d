import type { ReactNode } from 'react';

const FOCUS =
  'focus-visible:outline-1 focus-visible:outline-bone focus-visible:outline-offset-[3px]';

/**
 * Link con flecha: en hover el texto avanza 4 px, la flecha 8 px y pasa a rojo.
 * La flecha es decorativa; el destino lo dice el texto.
 */
export function ArrowLink({
  href,
  children,
  arrow = '↗',
  className = '',
  labelClassName = '',
  arrowClassName = '',
  external = false,
}: {
  href: string;
  children: ReactNode;
  arrow?: string;
  className?: string;
  labelClassName?: string;
  arrowClassName?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-baseline gap-2 ${FOCUS} ${className}`}
    >
      <span
        className={`inline-block transition-transform duration-300 ease-ui group-hover:translate-x-1 group-focus-visible:translate-x-1 ${labelClassName}`}
      >
        {children}
      </span>
      <span
        aria-hidden
        className={`inline-block opacity-40 transition duration-300 ease-ui group-hover:translate-x-2 group-hover:text-red group-hover:opacity-100 group-focus-visible:translate-x-2 group-focus-visible:text-red group-focus-visible:opacity-100 ${arrowClassName}`}
      >
        {arrow}
      </span>
    </a>
  );
}

/**
 * Link con subrayado de 1 px que entra deslizándose desde la izquierda.
 * Activo = rojo y subrayado fijo.
 */
export function UnderlineLink({
  href,
  children,
  active = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-current={active ? 'true' : undefined}
      className={`group relative overflow-hidden pb-[5px] transition-colors duration-300 ease-ui ${
        active ? 'text-red' : 'text-midgray hover:text-bone'
      } ${FOCUS} ${className}`}
    >
      {children}
      <span
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-px transition-transform duration-300 ease-ui ${
          active
            ? 'translate-x-0 bg-red'
            : '-translate-x-[101%] bg-bone/30 group-hover:translate-x-0 group-focus-visible:translate-x-0'
        }`}
      />
    </a>
  );
}
