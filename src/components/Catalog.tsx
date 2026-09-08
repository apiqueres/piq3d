import type { Category } from '../lib/content';
import { CATALOG, asImages } from '../lib/content';
import { ArrowLink } from './links';
import { MediaCard } from './MediaCard';
import { Reveal, Stagger, StaggerItem } from './Reveal';
import { Grid32, Section } from './Section';

/** Bloque de texto de una categoría. */
function Copy({ item }: { item: Category }) {
  return (
    <Reveal>
      <p className="m-0 mb-4 font-mono text-[clamp(12px,0.83vw,16px)] text-midgray">{item.index}</p>
      <ArrowLink
        href={`#${item.id}`}
        className="mb-6 gap-4"
        labelClassName="font-display text-[clamp(38px,3.3vw,64px)] font-light leading-[0.9] tracking-[-0.0125em] text-bone"
        arrowClassName="text-[clamp(18px,1.4vw,26px)]"
      >
        {item.title}
      </ArrowLink>
      <p className="m-0 max-w-[52ch] font-mono text-[clamp(15px,1vw,18px)] leading-[1.75] text-pretty text-bone-2">
        {item.body}
      </p>
    </Reveal>
  );
}

/** Foto grande + rejilla de miniaturas. El visor recorre toda la categoría. */
function Gallery({ item, alignEnd }: { item: Category; alignEnd?: boolean }) {
  const group = asImages([item.lead, ...item.thumbs]);
  return (
    <Stagger
      className={`flex w-full max-w-[560px] flex-col gap-2.5 ${alignEnd ? 'lg:ml-auto' : ''}`}
    >
      <StaggerItem>
        <MediaCard media={group[0]} group={group} index={0} />
      </StaggerItem>
      <StaggerItem>
        {/* Alineadas arriba: cada foto conserva su alto real, sin recortes. */}
        <div className="grid grid-cols-3 items-start gap-2.5 sm:grid-cols-4">
          {group.slice(1).map((thumb, i) => (
            <MediaCard
              key={thumb.src}
              media={thumb}
              group={group}
              index={i + 1}
              rounded="rounded-[4px]"
            />
          ))}
        </div>
      </StaggerItem>
    </Stagger>
  );
}

export function Catalog() {
  return (
    <Section id="catalogo">
      <p className="m-0 mb-[clamp(40px,5vw,80px)] font-mono text-[11px] uppercase tracking-[0.12em] text-midgray">
        Catálogo
      </p>

      {CATALOG.map((item, i) => {
        // Zigzag: en las impares el texto pasa a la derecha y la galería a la izquierda.
        const textLeft = i % 2 === 0;
        return (
          <Grid32
            key={item.id}
            id={item.id}
            className={`items-center gap-y-[clamp(32px,4vw,80px)] ${i > 0 ? 'mt-[clamp(90px,12vw,200px)]' : ''}`}
          >
            <div
              className={
                textLeft
                  ? 'lg:col-start-2 lg:col-span-13 lg:row-start-1'
                  : 'lg:col-start-[18] lg:col-span-13 lg:row-start-1'
              }
            >
              <Copy item={item} />
            </div>
            <div
              className={
                textLeft
                  ? 'lg:col-start-[18] lg:col-span-13 lg:row-start-1'
                  : 'lg:col-start-2 lg:col-span-13 lg:row-start-1'
              }
            >
              <Gallery item={item} alignEnd={textLeft} />
            </div>
          </Grid32>
        );
      })}
    </Section>
  );
}
