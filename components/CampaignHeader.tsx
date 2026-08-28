"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/content";
import { Logo } from "./Logo";
import { TrackedLink } from "./TrackedLink";

type Props = { locale: Locale; labels: { cta: string } };

export function CampaignHeader({ locale, labels }: Props) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`campaign-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <Link href={`/${locale}/campaign/morocco`} className="brand-link"><Logo locale={locale} /></Link>
        <nav className="header-actions" aria-label="Campaign navigation">
          <div className="languages" aria-label="Language">
            {(["ar", "en", "fr"] as const).map((item) => <Link key={item} href={`/${item}/campaign/morocco`} hrefLang={item} aria-current={item === locale ? "page" : undefined}>{item.toUpperCase()}</Link>)}
          </div>
          <TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="button button-small">{labels.cta}</TrackedLink>
        </nav>
      </div>
    </header>
  );
}
