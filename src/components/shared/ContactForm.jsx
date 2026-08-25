"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  requirementType: "Buy Solar Products",
  propertyType: "",
  usage: "",
  interest: "",
  message: "",
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to real backend/email service (e.g. API route + email provider).
    console.log("Quote request submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-brand-50 p-6 text-brand-800">
        <p className="font-semibold">{t.form.successTitle}</p>
        <p className="mt-1 text-sm">{t.form.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <Field label={t.form.fullName} name="fullName" value={form.fullName} onChange={handleChange} required />
      <Field label={t.form.phone} name="phone" value={form.phone} onChange={handleChange} required type="tel" />
      <Field label={t.form.email} name="email" value={form.email} onChange={handleChange} type="email" />
      <Field label={t.form.city} name="city" value={form.city} onChange={handleChange} />

      <div>
        <label className="mb-1 block text-sm font-medium">{t.form.requirementType}</label>
        <select
          name="requirementType"
          value={form.requirementType}
          onChange={handleChange}
          className="w-full rounded-md border border-ink-900/20 px-3 py-2"
        >
          {t.form.requirementOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <Field label={t.form.propertyType} name="propertyType" value={form.propertyType} onChange={handleChange} placeholder={t.form.propertyTypePlaceholder} />
      <Field label={t.form.usage} name="usage" value={form.usage} onChange={handleChange} placeholder={t.form.usagePlaceholder} />
      <Field label={t.form.interest} name="interest" value={form.interest} onChange={handleChange} />

      <div className="md:col-span-2">
        <label className="mb-1 block text-sm font-medium">{t.form.message}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-md border border-ink-900/20 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="md:col-span-2 rounded-md bg-solar-500 px-6 py-3 font-semibold text-ink-900 hover:bg-solar-400"
      >
        {t.form.submit}
      </button>
    </form>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <input {...props} className="w-full rounded-md border border-ink-900/20 px-3 py-2" />
    </div>
  );
}
