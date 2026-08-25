"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ServiceCard({ service }) {
  const { t, locale } = useLanguage();

  return (
    <div className="flex flex-col rounded-lg border border-ink-900/10 bg-white p-6">
      <h3 className="text-lg font-semibold text-ink-900">{service.title[locale]}</h3>
      <p className="mt-2 text-sm text-ink-700">{service.summary[locale]}</p>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-solar-600">
        {t.servicesPage.suitableFor}
      </p>
      <p className="text-sm text-ink-800">{service.suitableFor[locale]}</p>

      {service.benefits?.[locale]?.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {service.benefits[locale].map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              {b}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/solar-services/${service.slug}`}
        className="mt-6 inline-block rounded-md bg-brand-700 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-600"
      >
        {t.servicesPage.requestService}
      </Link>
    </div>
  );
}
