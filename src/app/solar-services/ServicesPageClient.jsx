"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { services } from "@/data/services";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ServiceCard from "@/components/services/ServiceCard";
import CTASection from "@/components/shared/CTASection";

export default function ServicesPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <Breadcrumb items={[{ name: t.servicesPage.title }]} />
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-ink-900 md:text-3xl">{t.servicesPage.title}</h1>
        <p className="mt-2 max-w-2xl text-ink-700">{t.servicesPage.subtitle}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
