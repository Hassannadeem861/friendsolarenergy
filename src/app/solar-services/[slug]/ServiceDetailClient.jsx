"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function ServiceDetailClient({ service }) {
  const { t, locale } = useLanguage();

  return (
    <>
      <Breadcrumb
        items={[
          { name: t.servicesPage.title, href: "/solar-services" },
          { name: service.title[locale] },
        ]}
      />

      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-ink-900 md:text-3xl">{service.title[locale]}</h1>
        <p className="mt-3 text-ink-700">{service.summary[locale]}</p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-solar-600">
          {t.servicesPage.suitableFor}
        </p>
        <p className="text-ink-800">{service.suitableFor[locale]}</p>

        {service.benefits?.[locale]?.length > 0 && (
          <div className="mt-6">
            <h2 className="font-semibold text-ink-900">{t.servicesPage.benefits}</h2>
            <ul className="mt-2 space-y-2">
              {service.benefits[locale].map((b) => (
                <li key={b} className="flex items-start gap-2 text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/923152288402?text=${encodeURIComponent(
              `Hi, I'd like to request: ${service.title.en}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-solar-500 px-6 py-3 font-semibold text-ink-900 hover:bg-solar-400"
          >
            {t.servicesPage.requestService}
          </a>
          <Link
            href="/contact"
            className="rounded-md border border-ink-900/20 px-6 py-3 font-semibold text-ink-900 hover:bg-ink-900/5"
          >
            {t.servicesPage.getConsultation}
          </Link>
        </div>
      </section>
    </>
  );
}
