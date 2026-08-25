"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-800 py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="text-2xl font-bold md:text-3xl">{t.finalCta.heading}</h2>
        <p className="mt-3 text-brand-100/90">{t.finalCta.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/solar-products"
            className="rounded-md bg-solar-500 px-6 py-3 font-semibold text-ink-900 hover:bg-solar-400"
          >
            {t.finalCta.ctaProducts}
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
          >
            {t.finalCta.ctaServices}
          </Link>
        </div>
      </div>
    </section>
  );
}
