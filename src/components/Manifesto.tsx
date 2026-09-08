import { MANIFESTO } from '../lib/content';
import { Section } from './Section';
import { Stagger, StaggerItem } from './Reveal';

export function Manifesto() {
  return (
    <Section className="flex justify-center">
      <Stagger className="w-full max-w-[660px]">
        <StaggerItem>
          <p className="m-0 mb-[clamp(28px,3vw,48px)] font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
            {MANIFESTO.label}
          </p>
        </StaggerItem>
        {MANIFESTO.paragraphs.map((text, i) => (
          <StaggerItem key={i}>
            <p
              className={`m-0 max-w-[52ch] font-mono text-[clamp(15px,1vw,19px)] leading-[1.75] text-pretty ${
                i === 0 ? 'mb-[1.9em] text-bone' : 'text-bone-2'
              }`}
            >
              {text}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
