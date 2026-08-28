import localFont from "next/font/local";

export const gtSuper = localFont({
  src: [{ path: "../public/English/GT-SUPER DISPLAY/GT-Super-Display-Medium-Trial.otf", weight: "500", style: "normal" }],
  variable: "--font-display-en",
  display: "swap",
});

export const neueHaas = localFont({
  src: [
    { path: "../public/English/NEUE Haas Grotsek/NeueHaasDisplayLight.ttf", weight: "300", style: "normal" },
    { path: "../public/English/NEUE Haas Grotsek/NeueHaasDisplayBlack.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-ui-en",
  display: "swap",
});

export const lyonArabic = localFont({
  src: [{ path: "../public/Arabic/Lyon Arabic Display/COMM - Lyon Arabic Display Regular.otf", weight: "400", style: "normal" }],
  variable: "--font-display-ar",
  display: "swap",
  preload: false,
});
