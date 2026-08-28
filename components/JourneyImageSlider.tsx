"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: readonly string[];
  alt: string;
  sizes: string;
};

export function JourneyImageSlider({ images, alt, sizes }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || images.length < 2) return;
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <div className="journey-slider">
      <Image
        key={images[activeImage]}
        src={images[activeImage]}
        alt={alt}
        fill
        sizes={sizes}
        className="journey-slide is-active"
      />
    </div>
  );
}
