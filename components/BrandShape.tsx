import Image from "next/image";

export function BrandShape({ tone, className = "" }: { tone: "orange" | "mist"; className?: string }) {
  const source = tone === "mist"
    ? "/brand-shape/brand-mist.jpg"
    : "/brand-shape/brand-orange.jpg";
  return <Image className={`brand-shape ${className}`} src={source} alt="" aria-hidden="true" width={1584} height={1666} sizes="320px" />;
}
