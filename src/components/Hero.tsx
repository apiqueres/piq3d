import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Fragment, useRef } from 'react';
import { HERO } from '../lib/content';
import { EASE_REVEAL } from '../lib/motion';
import { useIsDesktop } from '../lib/useIsDesktop';
import { ArrowLink } from './links';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const parallax = isDesktop && !reduced;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Índice global de palabra: manda el orden de entrada, no la línea.
  let wordIndex = -1;

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-[clamp(20px,2.2vw,32px)] sm:px-8 xl:px-10"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <picture className="block h-full w-full">
          <source media="(max-width: 767px)" srcSet="hero-mobile.webp" />
          <motion.img
            src="hero.webp"
            alt=""
            style={parallax ? { scale, y } : undefined}
            className="h-full w-full object-cover object-center will-change-transform"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-linear-to-t from-bg from-15% via-bg/75 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-bg/90 via-transparent to-transparent" />
        {/* Velo superior: el nav es midgray y el tercio alto de la foto es claro. */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-bg/85 to-transparent" />
      </div>

      <div className="grid items-end gap-x-0 gap-y-[clamp(28px,4vw,64px)] pb-[clamp(36px,5vw,80px)] lg:grid-cols-[repeat(32,minmax(0,1fr))]">
        <h1 className="m-0 font-display text-[clamp(56px,9.4vw,180px)] font-light leading-[0.9] tracking-[-0.01em] text-white lg:col-span-20">
          {HERO.headline.map((line, li) => (
            <span key={li} className="block">
              {line.map((word) => {
                wordIndex += 1;
                const i = wordIndex;
                return (
                  <Fragment key={word}>
                    <motion.span
                      className="inline-block"
                      initial={reduced ? { opacity: 0 } : { opacity: 0.15, y: '0.15em' }}
                      animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      transition={
                        reduced
                          ? { duration: 0.15 }
                          : { duration: 0.9, ease: EASE_REVEAL, delay: i * 0.09 }
                      }
                    >
                      {word}
                    </motion.span>{' '}
                  </Fragment>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={reduced ? { duration: 0.15 } : { duration: 0.9, ease: EASE_REVEAL, delay: 0.45 }}
          className="m-0 max-w-[34ch] font-mono text-[clamp(14px,1vw,17px)] leading-[1.7] text-bone-2 lg:col-start-[23] lg:col-span-10"
        >
          {HERO.aside}
        </motion.p>
      </div>

      <div className="flex items-center justify-between gap-5 border-t border-bone/15 pt-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
        <span>{HERO.copyright}</span>
        <div className="flex items-center gap-3.5">
          <span aria-hidden className="relative block h-[26px] w-px overflow-hidden">
            {!reduced && (
              <motion.span
                className="absolute left-0 top-0 block h-3 w-px bg-red"
                animate={{ y: ['-65%', '0%', '65%'], opacity: [0, 1, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </span>
          <ArrowLink
            href={HERO.cta.href}
            arrow="↓"
            className="text-bone"
            labelClassName="text-[11px] uppercase tracking-[0.12em]"
          >
            {HERO.cta.label}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
