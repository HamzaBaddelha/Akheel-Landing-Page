"use client";

import type { Locale } from "@/lib/content";
import { TrackedLink } from "./TrackedLink";

export function MobileActions({ locale, primary, secondary, whatsapp }: { locale: Locale; primary: string; secondary: string; whatsapp: string }) {
  return <div className="mobile-actions" aria-label="Quick actions"><TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="button">{primary}</TrackedLink><TrackedLink href={whatsapp} event="click_whatsapp" locale={locale} className="button button-outline">{secondary}</TrackedLink></div>;
}
