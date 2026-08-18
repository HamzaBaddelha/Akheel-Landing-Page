import Image from "next/image";
import type { Locale } from "@/lib/content";

export function Logo({ light = false, locale = "en", footer = false }: { light?: boolean; locale?: Locale; footer?: boolean }) {
  const source = light
    ? "/logo/Akheel Logo@4x.png"
    : locale === "ar"
      ? "/logo/Akheel Ar Logo@4x.png"
      : "/logo/Akheel Logo _@4x.png";
  const dimensions = !light && locale === "ar" ? { width: 1687, height: 678 } : { width: 2612, height: 938 };
  return (
    <span className={`logo ${footer ? "logo-footer" : "logo-header"}`} aria-label="Akheel Travel">
      <Image src={source} alt="" {...dimensions} priority={!footer} sizes={footer ? "210px" : "150px"} />
    </span>
  );
}
