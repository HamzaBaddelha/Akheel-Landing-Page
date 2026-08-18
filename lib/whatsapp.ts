import type { Locale } from "./content";

const messages: Record<Locale, string> = {
  ar: "مرحبًا أخيل، وصلت من حملة رحلات المغرب وأرغب في التحدث مع مختص سفر لتصميم رحلة خاصة. اللغة: العربية.",
  en: "Hello Akheel, I came from the Morocco campaign and would like to speak with a travel specialist about a private journey. Language: English.",
  fr: "Bonjour Akheel, je viens de la campagne Maroc et souhaite parler à un spécialiste pour créer un voyage privé. Langue : français.",
};

export function whatsappUrl(locale: Locale) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(messages[locale])}` : `#lead-form`;
}
