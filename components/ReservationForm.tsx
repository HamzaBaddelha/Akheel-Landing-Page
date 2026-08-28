"use client";

import { FormEvent, useState } from "react";
import type { CampaignContent, Locale } from "@/lib/content";
import { Reveal } from "./Reveal";

type Props = {
  copy: CampaignContent["reservation"];
  locale: Locale;
};

export function ReservationForm({ copy, locale }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("https://formspree.io/f/maewlpwr", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="reservation section-pad" id="lead-form" aria-labelledby="reservation-title">
      <div className="shell reservation-layout">
        <Reveal className="reservation-intro">
          <h2 id="reservation-title">{copy.title}</h2>
          <p>{copy.intro}</p>
          <p className="reservation-note">{copy.note}</p>
        </Reveal>

        <Reveal className="reservation-form-wrap">
          {status === "success" ? (
            <div className="reservation-success" role="status" aria-live="polite">
              <span className="reservation-success-mark" aria-hidden="true">✓</span>
              <h3>{copy.successTitle}</h3>
              <p>{copy.successBody}</p>
            </div>
          ) : <form className="reservation-form" onSubmit={submit}>
            <input type="hidden" name="_subject" value="New Morocco consultation request" suppressHydrationWarning />
            <input type="hidden" name="locale" value={locale} suppressHydrationWarning />
            <label className="reservation-field">
              <span>{copy.fullName}</span>
              <input type="text" name="fullName" autoComplete="name" required suppressHydrationWarning />
            </label>
            <label className="reservation-field">
              <span>{copy.phone}</span>
              <input type="tel" name="phone" autoComplete="tel" inputMode="tel" dir="ltr" required suppressHydrationWarning />
            </label>
            <label className="reservation-field reservation-field-wide">
              <span>{copy.destination}</span>
              <input type="text" name="destination" value="Morocco" readOnly suppressHydrationWarning />
            </label>

            <fieldset className="reservation-options reservation-field-wide">
              <legend>{copy.hotelLevel}</legend>
              <div className="hotel-stars">
                {[3, 4, 5].map((stars) => (
                  <label key={stars}>
                    <input type="radio" name="hotelLevel" value={`${stars} stars`} suppressHydrationWarning />
                    <span aria-hidden="true">{"★".repeat(stars)}</span>
                    <span className="sr-only">{stars} {copy.stars}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="reservation-options reservation-field-wide">
              <legend>{copy.travelStyle}</legend>
              <div className="travel-style-options">
                {copy.styles.map((style) => (
                  <label key={style}>
                    <input type="checkbox" name="travelStyle[]" value={style} suppressHydrationWarning />
                    <span>{style}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="reservation-honeypot" aria-hidden="true">
              Website<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" suppressHydrationWarning />
            </label>
            {status === "error" && <p className="reservation-error reservation-field-wide" role="alert">{copy.error}</p>}
            <button className="button reservation-submit reservation-field-wide" type="submit" disabled={status === "submitting"} suppressHydrationWarning>{status === "submitting" ? copy.submitting : copy.submit}</button>
          </form>}
        </Reveal>
      </div>
    </section>
  );
}
