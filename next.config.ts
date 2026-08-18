import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    poweredByHeader: false,
    compress: true,
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
    allowedDevOrigins: ["172.31.98.30"],
    images: { formats: ["image/avif", "image/webp"] },
  };
}
