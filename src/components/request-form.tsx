"use client";

import { useId, useState, type FormEvent } from "react";
import { business, services } from "@/lib/site";
import { Icon } from "./icons";

type Fields = { name: string; phone: string; location: string; service: string; message: string };
const initial: Fields = { name: "", phone: "", location: "", service: "", message: "" };

export function RequestForm({ initialService = "" }: { initialService?: string }) {
  const id = useId();
  const [values, setValues] = useState<Fields>({ ...initial, service: services.some(s => s.title === initialService) ? initialService : "" });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [draft, setDraft] = useState<{ channel: string; url: string } | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Fields> = {};
    if (values.name.trim().length < 2) nextErrors.name = "Enter your name (at least 2 characters).";
    const phone = values.phone.trim();
    const digits = phone.replace(/\D/g, "");
    if (!/^\+?[\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15) nextErrors.phone = "Enter a phone number with 7–15 digits, including your country code where needed.";
    if (!services.some(s => s.title === values.service)) nextErrors.service = "Choose the service you need.";
    setErrors(nextErrors);
    setDraft(null);
    const first = Object.keys(nextErrors)[0];
    if (first) { document.getElementById(`${id}-${first}`)?.focus(); return; }
    const channel = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value ?? "whatsapp";
    const message = ["New Service Request", "", `Name: ${values.name.trim()}`, `Phone: ${phone}`, `Location: ${values.location.trim() || "Not specified"}`, `Service: ${values.service}`, `Requirement: ${values.message.trim() || "Not specified"}`].join("\n");
    const url = channel === "email"
      ? `mailto:${business.email}?subject=${encodeURIComponent("New Service Request — BMT")}&body=${encodeURIComponent(message)}`
      : `${business.whatsapp}?text=${encodeURIComponent(message)}`;
    setDraft({ channel, url });
    if (channel === "email") window.location.href = url;
    else window.open(url, "_blank", "noopener,noreferrer");
  }

  const field = (key: keyof Fields) => ({
    id: `${id}-${key}`, name: key, value: values[key],
    "aria-invalid": errors[key] ? true as const : undefined,
    "aria-describedby": errors[key] ? `${id}-${key}-error` : undefined,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues({ ...values, [key]: event.target.value });
      setErrors({ ...errors, [key]: undefined }); setDraft(null);
    },
  });
  const error = (key: keyof Fields) => errors[key] && <span className="field-error" id={`${id}-${key}-error`}>{errors[key]}</span>;

  return <section className="request-panel" aria-labelledby={`${id}-title`}>
    <div className="form-heading"><span className="eyebrow">LET&apos;S GET STARTED</span><span className="form-mark"><Icon name="arrow" /></span></div>
    <h2 id={`${id}-title`}>Request water delivery.</h2>
    <p className="form-intro">Tell us what you need. Connect directly with BMT.</p>
    <form onSubmit={submit} noValidate aria-label="Water delivery service request">
      <div className="form-grid">
        <div className="field"><label htmlFor={`${id}-name`}>Your name <span>*</span></label><input {...field("name")} autoComplete="name" placeholder="Full name" required maxLength={100} />{error("name")}</div>
        <div className="field"><label htmlFor={`${id}-phone`}>Phone / WhatsApp <span>*</span></label><input {...field("phone")} type="tel" autoComplete="tel" placeholder="+971 …" required maxLength={30} />{error("phone")}</div>
        <div className="field field-wide"><label htmlFor={`${id}-service`}>Service required <span>*</span></label><select {...field("service")} required><option value="">Select a service</option>{services.map(service => <option key={service.id} value={service.title}>{service.title}</option>)}</select>{error("service")}</div>
        <div className="field field-wide"><label htmlFor={`${id}-location`}>Location / area <span className="optional">optional</span></label><input {...field("location")} autoComplete="address-level2" placeholder="Your area or delivery location" maxLength={160} /></div>
        <div className="field field-wide"><label htmlFor={`${id}-message`}>Your requirement <span className="optional">optional</span></label><textarea {...field("message")} rows={2} placeholder="Water needed, preferred timing or access details" maxLength={700} /></div>
      </div>
      <div className="form-actions"><button className="button button-whatsapp" type="submit" value="whatsapp"><Icon name="chat" />Continue in WhatsApp</button><button className="button button-email" type="submit" value="email"><Icon name="mail" />Email</button></div>
      <p className="form-note">Opens a draft in your app. Review it and press Send to complete your request. Email requires a configured email app.</p>
      <div role="status" aria-live="polite">{draft && <p className="draft-status">Your {draft.channel === "email" ? "email" : "WhatsApp"} draft is ready. Your request has not been sent. <a href={draft.url} target={draft.channel === "email" ? undefined : "_blank"} rel="noopener noreferrer">Open the draft again</a>.</p>}</div>
    </form>
  </section>;
}
