"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.heading} />
        <div className="mt-8">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}
