import "@/app/globals.css";
import Script from "next/script";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/content";
import { gtSuper, lyonArabic, neueHaas } from "@/app/fonts";

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}><body className={`${gtSuper.variable} ${neueHaas.variable} ${lyonArabic.variable}`}>
    {children}
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
      `}
    </Script>
  </body></html>;
}
