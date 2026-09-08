import { TESTIMONIALS } from '../lib/content';
import { LitHeading } from './LitHeading';
import { Reveal, Stagger, StaggerItem } from './Reveal';
import { Grid32, Section } from './Section';

export function Testimonials() {
  return (
    <Section id="valoraciones" labelledBy="valoraciones-titulo">
      <Grid32 className="mb-[clamp(56px,6vw,96px)] items-end gap-y-[clamp(40px,5vw,80px)]">
        <div className="relative lg:col-start-2 lg:col-span-16">
          <p className="m-0 mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
            {TESTIMONIALS.label}
          </p>
          <LitHeading id="valoraciones-titulo" className="text-[clamp(64px,8.3vw,160px)]">
            {TESTIMONIALS.title}
          </LitHeading>
        </div>
        <Reveal className="lg:col-start-[22] lg:col-span-10">
          <p className="m-0 font-display text-[clamp(40px,4vw,80px)] font-extralight leading-none text-red">
            {TESTIMONIALS.score}
          </p>
          <p className="mt-2 mb-0 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
            {TESTIMONIALS.scoreCaption}
          </p>
        </Reveal>
      </Grid32>

      <Stagger className="grid grid-cols-1 gap-[clamp(20px,2.2vw,32px)] md:grid-cols-3">
        {TESTIMONIALS.points.map((point) => (
          <StaggerItem key={point.tag}>
            <div className="corner-marks flex h-full min-h-[clamp(240px,20vw,320px)] flex-col justify-between gap-9 rounded-[5px] bg-white/[0.03] p-[clamp(24px,2.4vw,36px)]">
              <p className="m-0 font-display text-[clamp(20px,1.7vw,30px)] font-light leading-[1.25] tracking-[-0.01em] text-pretty text-bone">
                {point.text}
              </p>
              <p className="m-0 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
                {point.tag}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-[clamp(48px,5vw,80px)] border-t border-bone/15 pt-[clamp(24px,2.4vw,36px)]">
        <p className="m-0 mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
          {TESTIMONIALS.clientsLabel}
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-2 p-0">
          {TESTIMONIALS.clients.map((client, i) => (
            <li key={client} className="font-mono text-[12px] text-bone-2">
              {client}
              {/* El separador va detrás: si fuera delante quedaría abriendo línea. */}
              {i < TESTIMONIALS.clients.length - 1 && (
                <span aria-hidden className="ml-4 text-midgray">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
