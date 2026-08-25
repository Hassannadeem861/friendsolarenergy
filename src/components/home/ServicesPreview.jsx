"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { services } from "@/data/services";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ServicesPreview() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={t.servicesPreview.eyebrow}
          title={t.servicesPreview.heading}
          subtitle={t.servicesPreview.subtitle}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 5).map((s) => (
            <Link
              key={s.id}
              href={`/solar-services/${s.slug}`}
              className="rounded-lg border border-ink-900/10 bg-white p-5 transition hover:border-brand-500 hover:shadow-sm"
            >
              <h3 className="font-semibold text-ink-900">{s.title[locale]}</h3>
              <p className="mt-1.5 text-sm text-ink-700">{s.summary[locale]}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solar-services"
            className="inline-block rounded-md bg-solar-500 px-6 py-3 font-semibold text-ink-900 hover:bg-solar-400"
          >
            {t.servicesPreview.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
