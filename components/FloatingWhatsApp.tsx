import type { Locale } from "@/lib/content";
import { TrackedLink } from "./TrackedLink";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp({ href, locale, label }: { href: string; locale: Locale; label: string }) {
  return (
    <TrackedLink href={href} event="click_whatsapp" locale={locale} className="floating-whatsapp">
      <WhatsAppIcon />
      <span className="sr-only">{label}</span>
    </TrackedLink>
  );
}
