"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Locale } from "@/lib/content";

type Props = {
  images: readonly string[];
  alt: string;
  sizes: string;
  locale: Locale;
};

const labels = {
  ar: "انتقل إلى الصورة",
  en: "Go to image",
  fr: "Aller à l’image",
} as const;

export function JourneyImageSlider({ images, alt, sizes, locale }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  function goToSlide(index: number) {
    const nextIndex = (index + images.length) % images.length;
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({ left: nextIndex * slider.clientWidth, behavior: "smooth" });
    setActiveImage(nextIndex);
  }

  function syncActiveSlide() {
    const slider = sliderRef.current;
    if (!slider || slider.clientWidth === 0) return;
    const nextIndex = Math.round(slider.scrollLeft / slider.clientWidth);
    setActiveImage(Math.min(images.length - 1, Math.max(0, nextIndex)));
  }

  const goToLabel = labels[locale];

  return (
    <div className="journey-slider-shell">
      <div className="journey-slider" ref={sliderRef} onScroll={syncActiveSlide} dir="ltr">
        {images.map((image, index) => (
          <div className="journey-slide" key={image}>
            <Image src={image} alt={index === 0 ? alt : ""} fill sizes={sizes} />
          </div>
        ))}
      </div>
      {images.length > 1 && <>
        <div className="journey-slider-dots">
          {images.map((image, index) => (
            <button
              className={`journey-slider-dot ${index === activeImage ? "is-active" : ""}`}
              type="button"
              key={image}
              onClick={() => goToSlide(index)}
              aria-label={`${goToLabel} ${index + 1}`}
              aria-current={index === activeImage ? "true" : undefined}
            />
          ))}
        </div>
      </>}
    </div>
  );
}
