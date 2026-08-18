"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function ViewTracker({ locale }: { locale: string }) {
  useEffect(() => { track("view_campaign_landing", { locale, path: window.location.pathname }); }, [locale]);
  return null;
}
