import { WORKSHOP } from '../lib/content';
import { LitHeading } from './LitHeading';
import { MediaCard } from './MediaCard';
import { Stagger, StaggerItem } from './Reveal';
import { Section } from './Section';

const MEDIA = WORKSHOP.steps.map((step) => step.media);

export function Workshop() {
  return (
    <Section labelledBy="taller">
      <div className="relative mb-[clamp(56px,6vw,96px)] flex flex-col items-center text-center">
        <p className="m-0 mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
          {WORKSHOP.label}
        </p>
        <LitHeading id="taller" className="text-[clamp(64px,8.3vw,160px)]">
          {WORKSHOP.title}
        </LitHeading>
      </div>

      <Stagger className="grid grid-cols-1 gap-[clamp(20px,2.2vw,32px)] sm:grid-cols-2 lg:grid-cols-4">
        {WORKSHOP.steps.map((step, i) => (
          <StaggerItem key={step.index}>
            <MediaCard media={step.media} group={MEDIA} index={i} ratio={2 / 3} />
            <p className="mt-[18px] mb-2 font-mono text-[clamp(12px,0.83vw,15px)] text-midgray">
              {step.index}
            </p>
            <h3 className="m-0 mb-2.5 font-display text-[clamp(22px,1.7vw,30px)] font-light leading-none text-bone">
              {step.title}
            </h3>
            <p className="m-0 font-mono text-[13px] leading-[1.65] text-pretty text-midgray">
              {step.body}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
