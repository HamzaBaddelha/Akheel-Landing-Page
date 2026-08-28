import type { CampaignContent, Locale } from "@/lib/content";
import { BrandShape } from "./BrandShape";
import { JourneyImageSlider } from "./JourneyImageSlider";
import { Reveal } from "./Reveal";
import { TrackedLink } from "./TrackedLink";

type Props = {
  inspirations: CampaignContent["inspirations"];
  locale: Locale;
};

const journeySlides = [
  ["/images/sahara.webp", "/images/sahara-2.webp", "/images/sahara-3.webp"],
  ["/images/atlas-1.webp", "/images/atlas-2.webp", "/images/atlas-3.webp", "/images/atlas-4.webp", "/images/atlas-5.webp"],
  ["/images/atlantic-blue-north.webp", "/images/atlantic-blue-north-2.webp"],
] as const;

export function MoroccoJourneys({ inspirations, locale }: Props) {
  return (
    <section className="morocco-journeys section-pad" id="inspirations" aria-labelledby="journey-inspirations-title">
      <BrandShape tone="orange" className="morocco-journeys-shape" />
      <div className="shell unified-journeys-shell">
        <div className="journey-section-intro">
          <h2 className="journey-section-title" id="journey-inspirations-title">{inspirations.title}</h2>
          <p className="journey-section-copy">{inspirations.intro}</p>
        </div>

        <div className="journey-list">
          {inspirations.items.map((item, index) => {
            const sliderImages = journeySlides[index];
            return <article className="journey" key={item.title}>
              <Reveal className="journey-image">
                <JourneyImageSlider
                  images={sliderImages}
                  alt={item.alt}
                  sizes="(min-width: 1100px) 52vw, (min-width: 761px) 50vw, 100vw"
                  locale={locale}
                />
              </Reveal>
              <Reveal className="journey-copy">
                <span className="journey-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <p className="locations">{item.locations}</p>
                <div className="journey-meta"><span>{inspirations.duration}</span><strong>{item.days}</strong></div>
                <TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="text-cta">{inspirations.customize}<span aria-hidden="true">↗</span></TrackedLink>
              </Reveal>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
