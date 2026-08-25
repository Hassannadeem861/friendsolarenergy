"use client";

import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/shared/SectionHeading";

export default function WhyChooseSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={t.whyChoose.eyebrow}
          title={t.whyChoose.heading}
          center={false}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyChoose.items.map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="h-6 w-6 text-solar-400" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm text-brand-100/80">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
