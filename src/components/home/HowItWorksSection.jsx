"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/shared/SectionHeading";

export default function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading eyebrow={t.howItWorks.eyebrow} title={t.howItWorks.heading} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="relative rounded-lg border border-ink-900/10 bg-white p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-solar-500 text-sm font-bold text-ink-900">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1.5 text-sm text-ink-700">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
