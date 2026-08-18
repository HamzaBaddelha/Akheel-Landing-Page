"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { getCountries, getCountryCallingCode, isValidPhoneNumber, type CountryCode } from "libphonenumber-js";
import type { CampaignContent, Locale } from "@/lib/content";
import { track } from "@/lib/analytics";
import { BrandShape } from "./BrandShape";

type FormCopy = CampaignContent["form"];
type FormValues = Record<string, string | string[] | boolean>;

const initialValues: FormValues = {
  name: "", countryCode: "SA", phone: "", destination: "Morocco", month: "", travelers: "", budget: "", duration: "", adults: "", children: "0", styles: [], hotel: "", services: [], notes: "", language: "", consent: false, website: "",
};

export function LeadForm({ copy, locale }: { copy: FormCopy; locale: Locale }) {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [attribution, setAttribution] = useState<Record<string, string>>({});
  const started = useRef(false);
  const startedAt = useRef(Date.now());
  const reduced = useReducedMotion();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];
    setAttribution(Object.fromEntries(keys.map((key) => [key, params.get(key) || ""]).concat([["landingPath", window.location.pathname], ["referrer", document.referrer]])));
  }, []);

  function begin() {
    if (!started.current) { started.current = true; track("start_lead_form", { locale }); }
  }

  function update(name: string, value: string | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function toggle(name: "styles" | "services", value: string) {
    setValues((current) => {
      const list = current[name] as string[];
      return { ...current, [name]: list.includes(value) ? list.filter((item) => item !== value) : [...list, value] };
    });
  }

  function validateStepOne() {
    const next: Record<string, string> = {};
    for (const key of ["name", "phone", "month", "travelers", "budget"]) if (!String(values[key]).trim()) next[key] = copy.errors.required;
    const phone = toInternationalPhone(String(values.countryCode), String(values.phone));
    if (values.phone && (!phone || !isValidPhoneNumber(phone))) next.phone = copy.errors.phone;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    begin();
    if (!validateStepOne()) return;
    track("complete_lead_form_step_1", { locale, destination: "Morocco" });
    setStep(2);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    begin();
    const next: Record<string, string> = {};
    for (const key of ["duration", "adults", "hotel", "language"]) if (!String(values[key]).trim()) next[key] = copy.errors.required;
    if (!values.consent) next.consent = copy.errors.consent;
    if (Object.keys(next).length) { setErrors(next); return; }
    setStatus("submitting");
    try {
      const phone = toInternationalPhone(String(values.countryCode), String(values.phone));
      const response = await fetch("/api/leads/campaign", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, phone, ...attribution, locale, startedAt: startedAt.current }) });
      if (!response.ok) throw new Error("Submission rejected");
      setStatus("success");
      track("submit_lead_success", { locale, destination: "Morocco" });
    } catch {
      setStatus("error");
      track("submit_lead_error", { locale, destination: "Morocco" });
    }
  }

  if (status === "success") return <div className="form-success" role="status"><span className="success-mark" aria-hidden="true">✓</span><h3>{copy.successTitle}</h3><p>{copy.successBody}</p></div>;

  const transition = reduced ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };
  return (
    <form className="lead-form" onSubmit={submit} onFocus={begin} noValidate>
      <BrandShape className="form-brand-shape" />
      <div className="form-heading"><div><span className="eyebrow">{copy.eyebrow}</span><h2>{copy.title}</h2><p>{copy.intro}</p></div><span className="step-count">{copy.step} {step} {copy.of} 2</span></div>
      <div className="progress" aria-hidden="true"><span style={{ transform: `scaleX(${step / 2})` }} /></div>
      <div className="sr-only" aria-live="polite">{status === "error" ? copy.error : Object.values(errors).filter(Boolean).join(". ")}</div>
      <AnimatePresence mode="wait" initial={false}>
        {step === 1 ? (
          <motion.div className="form-grid" key="step-1" initial={reduced ? false : { opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={reduced ? undefined : { opacity: 0, x: 16 }} transition={transition}>
            <Field label={copy.labels.name} name="name" value={String(values.name)} error={errors.name} onChange={update} autoComplete="name" />
            <PhoneField copy={copy} locale={locale} country={String(values.countryCode)} phone={String(values.phone)} error={errors.phone} onChange={update} />
            <Field label={copy.labels.destination} name="destination" value="Morocco" onChange={update} disabled />
            <Field label={copy.labels.month} name="month" value={String(values.month)} error={errors.month} onChange={update} type="month" />
            <Select label={copy.labels.travelers} name="travelers" value={String(values.travelers)} error={errors.travelers} onChange={update} options={["1", "2", "3", "4", "5", "6+"]} prompt={copy.options.select} />
            <Select label={copy.labels.budget} name="budget" value={String(values.budget)} error={errors.budget} onChange={update} options={copy.options.budget} prompt={copy.options.select} />
            <button className="button form-next" type="button" onClick={goNext}>{copy.next}<span aria-hidden="true">→</span></button>
          </motion.div>
        ) : (
          <motion.div className="form-grid" key="step-2" initial={reduced ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={reduced ? undefined : { opacity: 0, x: -16 }} transition={transition}>
            <Select label={copy.labels.duration} name="duration" value={String(values.duration)} error={errors.duration} onChange={update} options={copy.options.duration} prompt={copy.options.select} />
            <Select label={copy.labels.adults} name="adults" value={String(values.adults)} error={errors.adults} onChange={update} options={["1", "2", "3", "4", "5", "6+"]} prompt={copy.options.select} />
            <Select label={copy.labels.children} name="children" value={String(values.children)} onChange={update} options={["0", "1", "2", "3", "4+"]} prompt={copy.options.select} />
            <Select label={copy.labels.hotel} name="hotel" value={String(values.hotel)} error={errors.hotel} onChange={update} options={copy.options.hotel} prompt={copy.options.select} />
            <ChoiceGroup label={copy.labels.styles} name="styles" values={values.styles as string[]} options={copy.options.styles} onToggle={toggle} />
            <ChoiceGroup label={copy.labels.services} name="services" values={values.services as string[]} options={copy.options.services} onToggle={toggle} />
            <label className="field field-wide"><span>{copy.labels.notes}</span><textarea name="notes" rows={3} value={String(values.notes)} onChange={(e) => update("notes", e.target.value)} maxLength={1000} /></label>
            <Select label={copy.labels.language} name="language" value={String(values.language)} error={errors.language} onChange={update} options={copy.options.languages} prompt={copy.options.select} />
            <label className={`consent field-wide ${errors.consent ? "has-error" : ""}`}><input type="checkbox" checked={Boolean(values.consent)} onChange={(e) => update("consent", e.target.checked)} /><span>{copy.privacy}</span></label>
            {errors.consent && <p className="field-error field-wide">{errors.consent}</p>}
            <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" name="website" value={String(values.website)} onChange={(e) => update("website", e.target.value)} /></label>
            {status === "error" && <p className="submit-error field-wide" role="alert">{copy.error}</p>}
            <div className="form-buttons field-wide"><button className="text-button" type="button" onClick={() => setStep(1)}>← {copy.back}</button><button className="button" type="submit" disabled={status === "submitting"}>{status === "submitting" ? copy.submitting : copy.submit}</button></div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function toInternationalPhone(country: string, nationalNumber: string) {
  try {
    const callingCode = getCountryCallingCode(country as CountryCode);
    const digits = nationalNumber.replace(/\D/g, "").replace(/^0+/, "");
    return digits ? `+${callingCode}${digits}` : "";
  } catch {
    return "";
  }
}

function PhoneField({ copy, locale, country, phone, error, onChange }: { copy: FormCopy; locale: Locale; country: string; phone: string; error?: string; onChange: (name: string, value: string) => void }) {
  const [hasHydrated, setHasHydrated] = useState(false);
  useEffect(() => setHasHydrated(true), []);
  const displayNames = hasHydrated ? new Intl.DisplayNames([locale], { type: "region" }) : null;
  const countries = getCountries()
    .map((code) => ({ code, name: displayNames?.of(code) || code, callingCode: getCountryCallingCode(code) }))
    .sort((a, b) => hasHydrated ? a.name.localeCompare(b.name, locale) : a.code.localeCompare(b.code));
  return (
    <fieldset className={`field phone-field ${error ? "has-error" : ""}`}>
      <legend>{copy.labels.phone}</legend>
      <div className="phone-control">
        <select name="countryCode" value={country} onChange={(event) => onChange("countryCode", event.target.value)} aria-label={copy.labels.countryCode} autoComplete="tel-country-code">
          {countries.map((item) => <option key={item.code} value={item.code}>{item.name} (+{item.callingCode})</option>)}
        </select>
        <input name="phone" value={phone} onChange={(event) => onChange("phone", event.target.value)} inputMode="tel" autoComplete="tel-national" dir="ltr" aria-invalid={Boolean(error)} aria-describedby={error ? "field-phone-error" : undefined} />
      </div>
      {error && <small id="field-phone-error" className="field-error">{error}</small>}
    </fieldset>
  );
}

function Field({ label, name, value, error, onChange, ...props }: { label: string; name: string; value: string; error?: string; onChange: (name: string, value: string) => void } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "name">) {
  const id = `field-${name}`;
  return <label className={`field ${error ? "has-error" : ""}`} htmlFor={id}><span>{label}</span><input id={id} name={name} value={value} onChange={(e) => onChange(name, e.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} {...props} />{error && <small id={`${id}-error`} className="field-error">{error}</small>}</label>;
}

function Select({ label, name, value, error, onChange, options, prompt }: { label: string; name: string; value: string; error?: string; onChange: (name: string, value: string) => void; options: readonly string[]; prompt: string }) {
  const id = `field-${name}`;
  return <label className={`field ${error ? "has-error" : ""}`} htmlFor={id}><span>{label}</span><select id={id} name={name} value={value} onChange={(e) => onChange(name, e.target.value)} aria-invalid={Boolean(error)}><option value="">{prompt}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>{error && <small className="field-error">{error}</small>}</label>;
}

function ChoiceGroup({ label, name, values, options, onToggle }: { label: string; name: "styles" | "services"; values: string[]; options: readonly string[]; onToggle: (name: "styles" | "services", value: string) => void }) {
  return <fieldset className="choice-group field-wide"><legend>{label}</legend><div>{options.map((option) => <label key={option}><input type="checkbox" name={name} value={option} checked={values.includes(option)} onChange={() => onToggle(name, option)} /><span>{option}</span></label>)}</div></fieldset>;
}
