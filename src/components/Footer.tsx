import { CONTACT, FOOTER } from '../lib/content';
import { ArrowLink, UnderlineLink } from './links';

export function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-[clamp(120px,18vw,280px)] scroll-mt-[150px] border-t border-bone/15 px-5 pt-[clamp(40px,5vw,72px)] pb-[clamp(28px,3vw,40px)] sm:px-8 md:scroll-mt-[120px] xl:px-10"
    >
      <div className="grid grid-cols-1 items-start gap-[clamp(32px,4vw,64px)] md:grid-cols-3">
        <div>
          <p className="m-0 font-display text-[clamp(56px,7vw,120px)] font-extralight leading-[0.85] tracking-[-0.02em] text-bone">
            {FOOTER.wordmark}
          </p>
          <p className="mt-[18px] mb-0 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
            {FOOTER.place}
          </p>
        </div>

        <nav aria-label="Legal" className="flex flex-col items-start gap-3">
          {FOOTER.legal.map((l) => (
            <UnderlineLink
              key={l.label}
              href={l.href}
              className="self-start font-ui text-xs uppercase tracking-[0.1em]"
            >
              {l.label}
            </UnderlineLink>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-3">
          <p className="m-0 mb-1 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
            Contacto
          </p>
          <ArrowLink
            href={`mailto:${CONTACT.email}`}
            arrow="→"
            className="text-bone"
            labelClassName="font-mono text-sm tracking-[0.02em]"
          >
            {CONTACT.email}
          </ArrowLink>
          <ArrowLink
            href={CONTACT.phoneHref}
            arrow="→"
            className="text-bone"
            labelClassName="font-mono text-sm tracking-[0.02em]"
          >
            {CONTACT.phone}
          </ArrowLink>
          <ArrowLink
            href={CONTACT.whatsappHref}
            external
            className="text-bone"
            labelClassName="font-mono text-sm tracking-[0.02em]"
          >
            {CONTACT.whatsapp}
          </ArrowLink>
          <ArrowLink
            href={CONTACT.instagramHref}
            external
            className="text-bone"
            labelClassName="font-mono text-sm tracking-[0.02em]"
          >
            {CONTACT.instagram}
          </ArrowLink>
        </div>
      </div>

      <div className="mt-[clamp(48px,5vw,80px)] flex items-center justify-between gap-5 border-t border-bone/15 pt-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
        <span>{FOOTER.copyright}</span>
        <ArrowLink
          href="#top"
          arrow="↑"
          className="text-bone"
          labelClassName="text-[11px] uppercase tracking-[0.12em]"
        >
          {FOOTER.backToTop}
        </ArrowLink>
      </div>
    </footer>
  );
}
