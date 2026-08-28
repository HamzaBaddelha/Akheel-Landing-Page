import Image from "next/image";
import type { Locale } from "@/lib/content";

export function Logo({ light = false, locale = "en", footer = false }: { light?: boolean; locale?: Locale; footer?: boolean }) {
  const source = light
    ? "/logo/akheel-light.png"
    : locale === "ar"
      ? "/logo/akheel-ar.png"
      : "/logo/akheel-en.png";
  const dimensions = !light && locale === "ar" ? { width: 1687, height: 678 } : { width: 2612, height: 938 };
  return (
    <span className={`logo ${footer ? "logo-footer" : "logo-header"}`}>
      <Image src={source} alt="Akheel Travel" {...dimensions} priority={!footer} unoptimized sizes={footer ? "210px" : "150px"} />
    </span>
  );
}
