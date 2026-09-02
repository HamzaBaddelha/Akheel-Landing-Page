import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CampaignHeader } from "@/components/CampaignHeader";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HeroVideo } from "@/components/HeroVideo";
import { BrandShape } from "@/components/BrandShape";
import { Logo } from "@/components/Logo";
import { MobileActions } from "@/components/MobileActions";
import { MoroccoJourneys } from "@/components/MoroccoJourneys";
import { Reveal } from "@/components/Reveal";
import { ReservationForm } from "@/components/ReservationForm";
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
    openGraph: { title: c.metaTitle, description: c.metaDescription, url, siteName: "Akheel Travel", type: "website", locale: raw === "ar" ? "ar_SA" : raw === "fr" ? "fr_FR" : "en_US", images: [{ url: "/images/morocco-hero-optimized.jpg", width: 1280, height: 730, alt: c.hero.imageAlt }] },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription, images: ["/images/morocco-hero-optimized.jpg"] },
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
      <CampaignHeader locale={locale} labels={{ cta: c.nav.cta }} />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <Image src={c.images.hero} alt="" fill priority fetchPriority="high" unoptimized sizes="100vw" className="hero-image" />
            <HeroVideo />
          </div>
          <div className="hero-shade" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{c.hero.eyebrow}</span>
              <div className="hero-marketing" dir={c.dir}>
                <h1 id="hero-title">{c.hero.title}</h1>
                <p>{c.hero.body}</p>
              </div>
              <div className="hero-actions"><TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="button">{c.hero.primary}</TrackedLink></div>
              <p className="trust-note">{c.hero.trust}</p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Benefits"><div className="shell trust-grid">{c.trust.map((item, index) => {
          return <div className="trust-card" key={item}>
            <div className="trust-card-content"><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>
          </div>;
        })}</div></section>

        <MoroccoJourneys inspirations={c.inspirations} locale={locale} />

        <ReservationForm copy={c.reservation} locale={locale} />

        <section className="process section-pad"><BrandShape tone="mist" className="process-shape" /><div className="shell"><Reveal className="section-heading"><span className="eyebrow">{c.process.eyebrow}</span><h2>{c.process.title}</h2></Reveal><div className="process-grid">{c.process.steps.map((step, index) => <Reveal key={step.title} className="process-step" delay={index * .08}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></Reveal>)}</div></div></section>

        <section className="faq section-pad"><div className="shell faq-grid"><Reveal className="faq-title"><h2>{c.faq.title}</h2></Reveal><div className="faq-list">{c.faq.items.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="closing"><Image src={c.images.coast} alt={c.closing.imageAlt} fill sizes="100vw" /><div className="closing-shade"/><Reveal className="shell closing-copy"><h2>{c.closing.title}</h2><p>{c.closing.body}</p><div className="hero-actions"><TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="button button-light">{c.hero.primary}</TrackedLink></div><p className="trust-note">{c.hero.trust}</p></Reveal></section>
      </main>
      <footer className="footer"><div className="shell footer-grid"><div><Logo light locale={locale} footer/><p>{c.footer.note}</p></div><nav aria-label="Footer"><a href="#lead-form">{c.nav.contact}</a></nav><div className="footer-languages">{locales.map((item) => <Link key={item} href={`/${item}/campaign/morocco`} hrefLang={item}>{getContent(item).langName}</Link>)}</div></div><div className="shell copyright"><p>{c.footer.copyright}</p><span>Morocco social campaign</span></div></footer>
      <FloatingWhatsApp href={whatsapp} locale={locale} label={c.nav.whatsapp} />
      <MobileActions locale={locale} primary={c.hero.primary} />
    </>
  );
}
