import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CampaignHeader } from "@/components/CampaignHeader";
import { BrandShape } from "@/components/BrandShape";
import { LeadForm } from "@/components/LeadForm";
import { Logo } from "@/components/Logo";
import { MobileActions } from "@/components/MobileActions";
import { Reveal } from "@/components/Reveal";
import { TrackedLink } from "@/components/TrackedLink";
import { ViewTracker } from "@/components/ViewTracker";
import { getContent, isLocale, locales, type Locale } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const c = getContent(raw);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://akheel.net";
  const url = `${base}/${raw}/campaign/morocco`;
  return {
    metadataBase: new URL(base), title: c.metaTitle, description: c.metaDescription,
    alternates: { canonical: url, languages: { ar: `${base}/ar/campaign/morocco`, en: `${base}/en/campaign/morocco`, fr: `${base}/fr/campaign/morocco`, "x-default": `${base}/ar/campaign/morocco` } },
    openGraph: { title: c.metaTitle, description: c.metaDescription, url, siteName: "Akheel Travel", type: "website", locale: raw === "ar" ? "ar_SA" : raw === "fr" ? "fr_FR" : "en_US", images: [{ url: "/images/morocco-hero.png", width: 1664, height: 936, alt: c.hero.imageAlt }] },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription, images: ["/images/morocco-hero.png"] },
  };
}

export default async function MoroccoCampaignPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const whatsapp = whatsappUrl(locale);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://akheel.net";
  const structuredData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "TravelAgency", "@id": `${base}/#organization`, name: "Akheel Travel", url: base },
      { "@type": "WebPage", "@id": `${base}/${locale}/campaign/morocco#webpage`, url: `${base}/${locale}/campaign/morocco`, name: c.metaTitle, description: c.metaDescription, inLanguage: locale, about: { "@type": "Country", name: "Morocco" }, isPartOf: { "@id": `${base}/#organization` } },
    ],
  };
  return (
    <>
      <ViewTracker locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <CampaignHeader locale={locale} labels={c.nav} whatsapp={whatsapp} />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-shade" />
          <div className="shell hero-grid">
            <Reveal className="hero-copy">
              <span className="eyebrow">{c.hero.eyebrow}</span>
              <h1 id="hero-title">{c.hero.title}</h1>
              <p>{c.hero.body}</p>
              <div className="hero-actions"><TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="button">{c.hero.primary}</TrackedLink><TrackedLink href={whatsapp} event="click_whatsapp" locale={locale} className="link-arrow">{c.hero.secondary}<span aria-hidden="true">↗</span></TrackedLink></div>
              <p className="trust-note"><span className="starburst" aria-hidden="true">✦</span>{c.hero.trust}</p>
            </Reveal>
            <div className="hero-media"><Image src={c.images.hero} alt={c.hero.imageAlt} fill priority sizes="100vw" className="hero-image" /></div>
            <div className="hero-form" id="lead-form"><LeadForm copy={c.form} locale={locale} /></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Benefits"><div className="shell trust-grid">{c.trust.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div></section>

        <section className="story section-pad">
          <BrandShape className="story-shape" />
          <div className="shell">
            <Reveal className="section-heading story-heading"><span className="eyebrow">{c.story.eyebrow}</span><h2>{c.story.title}</h2><p>{c.story.body}</p></Reveal>
            <div className="story-layout">
              <div className="story-visual"><Image src={c.images.desert} alt={c.inspirations.items[0].alt} fill sizes="(min-width: 900px) 48vw, 100vw" /></div>
              <div className="timeline">{c.story.stops.map((stop, index) => <Reveal key={stop.n} className="timeline-stop" delay={index * .04}><span className="timeline-number">{stop.n}</span><div><p className="timeline-place">{stop.place}</p><h3>{stop.title}</h3><p>{stop.copy}</p></div></Reveal>)}</div>
            </div>
          </div>
        </section>

        <section className="inspirations section-pad" id="inspirations">
          <BrandShape tone="orange" className="inspirations-shape" />
          <div className="shell"><Reveal className="section-heading"><span className="eyebrow">{c.inspirations.eyebrow}</span><h2>{c.inspirations.title}</h2></Reveal>
            <div className="journey-list">{c.inspirations.items.map((item, index) => <article className="journey" key={item.title}>
              <Reveal className="journey-image"><Image src={c.images[item.image]} alt={item.alt} fill sizes="(min-width: 900px) 50vw, 100vw" /></Reveal>
              <Reveal className="journey-copy"><span className="journey-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p><p className="locations">{item.locations}</p><div className="journey-meta"><span>{c.inspirations.duration}</span><strong>{item.days}</strong></div><TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="text-cta">{c.inspirations.customize}<span aria-hidden="true">↗</span></TrackedLink></Reveal>
            </article>)}</div>
          </div>
        </section>

        <section className="why section-pad"><div className="shell why-grid"><Reveal><span className="eyebrow">{c.why.eyebrow}</span><h2>{c.why.title}</h2></Reveal><Reveal><p className="why-lead">{c.why.body}</p><ul>{c.why.points.map((point) => <li key={point}><span aria-hidden="true">✦</span>{point}</li>)}</ul></Reveal></div></section>

        <section className="process section-pad"><BrandShape tone="mist" className="process-shape" /><div className="shell"><Reveal className="section-heading"><span className="eyebrow">{c.process.eyebrow}</span><h2>{c.process.title}</h2></Reveal><div className="process-grid">{c.process.steps.map((step, index) => <Reveal key={step.title} className="process-step" delay={index * .08}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></Reveal>)}</div></div></section>

        <section className="experience-band section-pad"><BrandShape tone="mist" className="experience-shape" /><div className="shell"><Reveal><span className="eyebrow">{c.experiences.eyebrow}</span><h2>{c.experiences.title}</h2></Reveal><div className="experience-list">{c.experiences.items.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}</div></div></section>

        <section className="faq section-pad"><div className="shell faq-grid"><Reveal className="faq-title"><span className="eyebrow">{c.faq.eyebrow}</span><h2>{c.faq.title}</h2></Reveal><div className="faq-list">{c.faq.items.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="closing"><Image src={c.images.coast} alt={c.closing.imageAlt} fill sizes="100vw" /><div className="closing-shade"/><Reveal className="shell closing-copy"><span className="starburst large" aria-hidden="true">✦</span><h2>{c.closing.title}</h2><p>{c.closing.body}</p><div className="hero-actions"><TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="button button-light">{c.hero.primary}</TrackedLink><TrackedLink href={whatsapp} event="click_whatsapp" locale={locale} className="link-arrow light">{c.hero.secondary}<span aria-hidden="true">↗</span></TrackedLink></div><p className="trust-note">{c.hero.trust}</p></Reveal></section>
      </main>
      <footer className="footer"><div className="shell footer-grid"><div><Logo light locale={locale} footer/><p>{c.footer.note}</p></div><nav aria-label="Footer"><a href="https://akheel.net/">{c.nav.main}</a><a href="https://akheel.net/contact">{c.nav.contact}</a><a href="https://akheel.net/privacy">{c.nav.privacy}</a><a href="https://akheel.net/terms">{c.nav.terms}</a></nav><div className="footer-languages">{locales.map((item) => <Link key={item} href={`/${item}/campaign/morocco`} hrefLang={item}>{getContent(item).langName}</Link>)}</div></div><div className="shell copyright"><p>{c.footer.copyright}</p><span>Morocco social campaign</span></div></footer>
      <MobileActions locale={locale} primary={c.hero.primary} secondary={c.nav.whatsapp} whatsapp={whatsapp} />
    </>
  );
}
