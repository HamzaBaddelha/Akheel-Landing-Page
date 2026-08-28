"use client";

import { useEffect, useState } from "react";

export function HeroVideo() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const staticHero = window.matchMedia("(max-width: 760px), (prefers-reduced-motion: reduce)");
    if (staticHero.matches) return;

    let idleId: number | undefined;
    let timerId: number | undefined;
    const revealVideo = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      } else {
        timerId = setTimeout(() => setReady(true), 1500) as unknown as number;
      }
    };

    if (document.readyState === "complete") revealVideo();
    else window.addEventListener("load", revealVideo, { once: true });

    return () => {
      window.removeEventListener("load", revealVideo);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  if (!ready) return null;

  return (
    <video className="hero-video" autoPlay muted loop playsInline preload="none" aria-hidden="true">
      <source src="/images/marrakech-hero.mp4" type="video/mp4" />
    </video>
  );
}
