"use client";

import Link from "next/link";
import type { MouseEventHandler, PropsWithChildren } from "react";
import { track } from "@/lib/analytics";

export function TrackedLink({ href, event, locale, className, children, onClick }: PropsWithChildren<{ href: string; event: "click_primary_cta" | "click_whatsapp"; locale: string; className?: string; onClick?: MouseEventHandler<HTMLAnchorElement> }>) {
  return <Link href={href} className={className} onClick={(e) => { track(event, { locale }); onClick?.(e); }}>{children}</Link>;
}
