import { PRINCIPLES } from '../lib/content';
import { LitHeading } from './LitHeading';
import { Reveal } from './Reveal';
import { Grid32, Section } from './Section';

export function Principles() {
  return (
    <Section labelledBy="principios">
      <Grid32 className="gap-y-16">
        <div className="relative lg:col-start-2 lg:col-span-11">
          <LitHeading
            id="principios"
            className="text-[clamp(64px,8.3vw,160px)] lg:sticky lg:top-1/3"
          >
            {PRINCIPLES.title}
          </LitHeading>
        </div>

        <div className="flex flex-col gap-[clamp(80px,10vw,160px)] pt-[clamp(0px,4vw,60px)] lg:col-start-[17] lg:col-span-14">
          {PRINCIPLES.items.map((item) => (
            <Reveal key={item.index}>
              <p className="m-0 mb-4 font-mono text-[clamp(12px,0.83vw,16px)] text-midgray">
                {item.index}
              </p>
              <h3 className="m-0 mb-5 font-display text-[clamp(28px,2.4vw,44px)] font-light leading-none tracking-[-0.0125em] text-bone">
                {item.title}
              </h3>
              <p className="m-0 mb-9 max-w-[52ch] font-mono text-[clamp(15px,1vw,18px)] leading-[1.75] text-pretty text-bone-2">
                {item.body}
              </p>
              <p className="m-0 font-display text-[clamp(40px,4vw,80px)] font-extralight leading-none text-red">
                {item.figure}
              </p>
              <p className="mt-2.5 mb-0 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
                {item.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </Grid32>
    </Section>
  );
}
