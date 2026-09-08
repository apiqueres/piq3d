import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLenis } from 'lenis/react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import type { Media } from '../lib/content';
import { fullOf } from '../lib/images';
import { EASE_UI } from '../lib/motion';

type OpenFn = (items: Media[], index: number) => void;

const LightboxContext = createContext<OpenFn>(() => {});

export function useLightbox() {
  return useContext(LightboxContext);
}

type State = { items: Media[]; index: number } | null;

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(null);
  const reduced = useReducedMotion();
  const lenis = useLenis();
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);

  const open = useCallback<OpenFn>((items, index) => {
    restoreFocus.current = document.activeElement as HTMLElement | null;
    setState({ items, index });
  }, []);

  const close = useCallback(() => {
    setState(null);
    restoreFocus.current?.focus();
  }, []);

  const step = useCallback((delta: number) => {
    setState((s) => (s ? { ...s, index: (s.index + delta + s.items.length) % s.items.length } : s));
  }, []);

  // Mientras el visor está abierto no se scrollea el fondo.
  useEffect(() => {
    if (!state) return;
    lenis?.stop();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
      lenis?.start();
    };
  }, [state, lenis, close, step]);

  const current = state?.items[state.index];
  // Sin ancho impuesto, la foto se ve a tamaño original y solo se reduce si no
  // cabe en la ventana. `max-w/max-h` conservan la proporción.
  const full = current?.kind === 'image' ? fullOf(current.src) : null;
  const many = (state?.items.length ?? 0) > 1;
  const value = useMemo(() => open, [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {state && current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.15 : 0.3, ease: EASE_UI }}
            className="fixed inset-0 z-50 flex flex-col bg-bg/97 backdrop-blur-2xl"
            onClick={close}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray sm:px-8">
              <span>{many ? `${state.index + 1} / ${state.items.length}` : ''}</span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="group flex items-center gap-2 text-bone transition-colors duration-300 ease-ui hover:text-red focus-visible:outline-1 focus-visible:outline-bone focus-visible:outline-offset-[3px]"
              >
                CERRAR
                <span aria-hidden className="text-base leading-none">
                  ×
                </span>
              </button>
            </div>

            <div
              className="flex min-h-0 flex-1 items-center justify-center px-5 pb-5 sm:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {current.kind === 'video' ? (
                <video
                  key={current.src}
                  src={current.src}
                  poster={current.poster}
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay={!reduced}
                  aria-label={current.alt}
                  className="h-auto max-h-full w-auto max-w-full rounded-[5px] object-contain"
                />
              ) : (
                <motion.img
                  key={current.src}
                  src={full?.src ?? current.src}
                  alt={current.alt}
                  width={full?.w || undefined}
                  height={full?.h || undefined}
                  initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: EASE_UI }}
                  className="h-auto max-h-full w-auto max-w-full rounded-[5px] object-contain"
                />
              )}
            </div>

            <div
              className="flex items-center justify-between gap-4 px-5 pb-6 sm:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="m-0 max-w-[60ch] font-mono text-[11px] leading-relaxed text-midgray">
                {current.alt}
              </p>
              {many && (
                <div className="flex shrink-0 gap-5 font-mono text-[11px] uppercase tracking-[0.12em]">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Anterior"
                    className="text-bone transition-colors duration-300 ease-ui hover:text-red focus-visible:outline-1 focus-visible:outline-bone focus-visible:outline-offset-[3px]"
                  >
                    ← ANT
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Siguiente"
                    className="text-bone transition-colors duration-300 ease-ui hover:text-red focus-visible:outline-1 focus-visible:outline-bone focus-visible:outline-offset-[3px]"
                  >
                    SIG →
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
