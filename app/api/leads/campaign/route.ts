import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  countryCode: z.string().trim().regex(/^[A-Z]{2}$/),
  phone: z.string().trim().regex(/^\+[1-9][0-9]{7,14}$/),
  destination: z.literal("Morocco"),
  month: z.string().trim().min(1).max(30),
  travelers: z.string().trim().min(1).max(10),
  budget: z.string().trim().min(1).max(80),
  duration: z.string().trim().min(1).max(80),
  adults: z.string().trim().min(1).max(10),
  children: z.string().trim().max(10),
  styles: z.array(z.string().trim().max(40)).max(8),
  hotel: z.string().trim().min(1).max(40),
  services: z.array(z.string().trim().max(40)).max(8),
  notes: z.string().trim().max(1000),
  language: z.string().trim().min(1).max(30),
  consent: z.literal(true),
  website: z.string().max(0),
  locale: z.enum(["ar", "en", "fr"]),
  startedAt: z.number().int().positive(),
  utm_source: z.string().trim().max(200).default(""),
  utm_medium: z.string().trim().max(200).default(""),
  utm_campaign: z.string().trim().max(200).default(""),
  utm_content: z.string().trim().max(200).default(""),
  utm_term: z.string().trim().max(200).default(""),
  gclid: z.string().trim().max(250).default(""),
  fbclid: z.string().trim().max(250).default(""),
  landingPath: z.string().trim().max(300),
  referrer: z.string().trim().max(500).default(""),
});

const attempts = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  if (Date.now() - parsed.data.startedAt < 1500) return NextResponse.json({ error: "Invalid submission" }, { status: 400 });

  const webhook = process.env.FORMSPREE_ENDPOINT || process.env.LEADS_WEBHOOK_URL || "https://formspree.io/f/maewlpwr";
  let webhookUrl: URL;
  try { webhookUrl = new URL(webhook); } catch { return NextResponse.json({ error: "Lead service unavailable" }, { status: 503 }); }
  const isLoopback = ["localhost", "127.0.0.1", "::1"].includes(webhookUrl.hostname);
  if (webhookUrl.protocol !== "https:" && process.env.NODE_ENV === "production" && !isLoopback) return NextResponse.json({ error: "Lead service unavailable" }, { status: 503 });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const { website: _honeypot, startedAt: _startedAt, ...lead } = parsed.data;
    void _honeypot; void _startedAt;
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json", "User-Agent": "Akheel-Campaign/1.0" },
      body: JSON.stringify({
        ...lead,
        styles: lead.styles.join(", "),
        services: lead.services.join(", "),
        campaign: "morocco_social_2026",
        receivedAt: new Date().toISOString(),
        _subject: "New Akheel Morocco trip request",
      }),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Lead service rejected request" }, { status: 502 });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Lead service unavailable" }, { status: 502 });
  } finally { clearTimeout(timeout); }
}
