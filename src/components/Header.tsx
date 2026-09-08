import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import type { MotionValue } from 'motion/react';
import { NAV } from '../lib/content';
import { useActiveSection } from '../lib/useActiveSection';
import { UnderlineLink } from './links';

const NAV_IDS = NAV.map((n) => n.id);
const WORDMARK = ['P', 'I', 'Q', '3', 'D'];
const CENTER = (WORDMARK.length - 1) / 2;

/** Una letra del wordmark: parte solapada y se separa al empezar a bajar. */
function Letter({ char, offset, k }: { char: string; offset: number; k: MotionValue<number> }) {
  const x = useTransform(k, (v) => `${(offset * v).toFixed(4)}em`);
  return (
    <motion.span style={{ x }} className="inline-block will-change-transform">
      {char}
    </motion.span>
  );
}

export function Header() {
  const reduced = useReducedMotion();
  const active = useActiveSection(NAV_IDS);
  const { scrollY } = useScroll();

  // k = 1 arriba del todo (letras solapadas) → 0 a partir de 600 px.
  const raw = useTransform(scrollY, [0, 600], [1, 0], { clamp: true });
  const k = useSpring(raw, { stiffness: 140, damping: 26, mass: 0.4 });

  return (
    <header className="fixed inset-x-0 top-0 z-20 flex flex-col items-start gap-2 bg-bg/92 px-5 pt-[clamp(18px,2vw,28px)] pb-3 backdrop-blur-[2px] md:flex-row md:items-baseline md:justify-between md:gap-6 md:bg-transparent md:pb-[clamp(18px,2vw,28px)] md:backdrop-blur-none sm:px-8 xl:px-10">
      <a
        href="#top"
        aria-label="PIQ3D — inicio"
        className="flex font-display text-[clamp(17px,1.4vw,22px)] font-light tracking-[0.02em] text-bone focus-visible:outline-1 focus-visible:outline-bone focus-visible:outline-offset-[3px]"
      >
        {WORDMARK.map((char, i) =>
          reduced ? (
            <span key={i} className="inline-block">
              {char}
            </span>
          ) : (
            <Letter key={i} char={char} offset={-(i - CENTER) * 0.35} k={k} />
          ),
        )}
      </a>

      <nav
        aria-label="Secciones"
        className="flex w-full justify-between gap-2.5 md:w-auto md:justify-end md:gap-[clamp(14px,1.8vw,30px)]"
      >
        {NAV.map((item) => (
          <UnderlineLink
            key={item.id}
            href={`#${item.id}`}
            active={active === item.id}
            className="shrink-0 font-ui text-[10px] font-light uppercase tracking-[0.08em] md:text-xs md:tracking-[0.1em]"
          >
            {item.label}
          </UnderlineLink>
        ))}
      </nav>
    </header>
  );
}
