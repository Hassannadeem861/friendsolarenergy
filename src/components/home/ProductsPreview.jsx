"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { productCategories } from "@/data/products";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ProductsPreview() {
  const { t, locale } = useLanguage();

  return (
    <section className="bg-ink-900/[0.02] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={t.productsPreview.eyebrow}
          title={t.productsPreview.heading}
          subtitle={t.productsPreview.subtitle}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/solar-products?category=${cat.slug}`}
              className="flex flex-col items-center justify-center rounded-lg border border-ink-900/10 bg-white p-5 text-center text-sm font-medium text-ink-800 transition hover:border-brand-500 hover:text-brand-700"
            >
              {cat[locale]}
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solar-products"
            className="inline-block rounded-md bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-600"
          >
            {t.productsPreview.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
