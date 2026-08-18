import "@/app/globals.css";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/content";
import { gtSuper, lyonArabic, neueHaas } from "@/app/fonts";

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}><body className={`${gtSuper.variable} ${neueHaas.variable} ${lyonArabic.variable}`}>{children}</body></html>;
}
