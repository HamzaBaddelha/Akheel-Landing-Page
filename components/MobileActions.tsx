"use client";

import type { Locale } from "@/lib/content";
import { TrackedLink } from "./TrackedLink";

export function MobileActions({ locale, primary }: { locale: Locale; primary: string }) {
  return <div className="mobile-actions" aria-label="Quick actions"><TrackedLink href="#lead-form" event="click_primary_cta" locale={locale} className="button">{primary}</TrackedLink></div>;
}
