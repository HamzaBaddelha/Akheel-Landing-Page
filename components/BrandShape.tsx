import Image from "next/image";

export function BrandShape({ tone = "olive", className = "" }: { tone?: "olive" | "orange" | "mist"; className?: string }) {
  const source = tone === "mist"
    ? "/brand-shape/Asset 13@3x-100.jpg"
    : tone === "orange"
      ? "/brand-shape/Asset 12@3x-100.jpg"
      : "/brand-shape/Asset 11@3x-100.jpg";
  return <Image className={`brand-shape ${className}`} src={source} alt="" aria-hidden="true" width={1584} height={1666} sizes="320px" />;
}
