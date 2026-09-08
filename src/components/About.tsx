import { ABOUT } from '../lib/content';
import { LitHeading } from './LitHeading';
import { Reveal } from './Reveal';
import { Grid32, Section } from './Section';

export function About() {
  return (
    <Section>
      <Grid32>
        <Reveal className="lg:col-start-2 lg:col-span-12">
          <p className="m-0 mb-[18px] font-mono text-[clamp(12px,0.83vw,16px)] text-midgray">
            {ABOUT.first.index}
          </p>
          <h2 className="m-0 mb-7 font-display text-[clamp(38px,3.3vw,64px)] font-light leading-[0.9] tracking-[-0.0125em] text-bone">
            {ABOUT.first.title}
          </h2>
          <p className="m-0 mb-8 max-w-[52ch] font-mono text-[clamp(15px,1vw,19px)] leading-[1.75] text-pretty text-bone-2">
            {ABOUT.first.body}
          </p>
          <ul className="m-0 flex max-w-[52ch] list-none flex-col gap-4 p-0">
            {ABOUT.first.bullets.map((b) => (
              <li
                key={b}
                className="grid grid-cols-[18px_1fr] gap-3 font-mono text-[clamp(14px,0.95vw,17px)] leading-[1.6] text-bone"
              >
                <span aria-hidden className="text-midgray">
                  —
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Grid32>

      <Grid32 className="mt-[clamp(90px,12vw,200px)]">
        <Reveal className="relative lg:col-start-[18] lg:col-span-13">
          <p className="m-0 mb-[18px] font-mono text-[clamp(12px,0.83vw,16px)] text-midgray">
            {ABOUT.second.index}
          </p>
          <LitHeading className="m-0 mb-7 text-[clamp(38px,3.3vw,64px)] tracking-[-0.0125em]">
            {ABOUT.second.title[0]}
            <br />
            {ABOUT.second.title[1]}
          </LitHeading>
          <p className="m-0 max-w-[52ch] font-mono text-[clamp(15px,1vw,19px)] leading-[1.75] text-pretty text-bone-2">
            {ABOUT.second.body}
          </p>
        </Reveal>
      </Grid32>
    </Section>
  );
}
