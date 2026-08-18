"use client";

type CampaignEvent = "view_campaign_landing" | "click_primary_cta" | "click_whatsapp" | "start_lead_form" | "complete_lead_form_step_1" | "submit_lead_success" | "submit_lead_error";
type SafeProperties = Record<string, string | number | boolean | undefined>;

declare global { interface Window { dataLayer?: Record<string, unknown>[] } }

export function track(event: CampaignEvent, properties: SafeProperties = {}) {
  if (typeof window === "undefined" || navigator.doNotTrack === "1") return;
  const consent = window.localStorage.getItem("akheel_analytics_consent");
  if (consent === "denied") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, campaign: "morocco_social_2026", ...properties });
}
