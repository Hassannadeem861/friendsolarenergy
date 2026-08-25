"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { company } from "@/data/company";

export default function ProductDetailClient({ product }) {
  const { t, locale } = useLanguage();

  return (
    <>
      <Breadcrumb
        items={[
          { name: t.productsPage.title, href: "/solar-products" },
          { name: product.title[locale] },
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:px-8">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-ink-900/5">
          <Image
            src={product.image}
            alt={product.title[locale]}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-ink-900 md:text-3xl">{product.title[locale]}</h1>
          <p className="mt-3 text-ink-700">{product.description[locale]}</p>

          <p className="mt-4 text-xl font-semibold text-brand-700">
            {product.price ? `Rs. ${product.price}` : t.productsPage.requestPrice}
          </p>

          {product.specifications?.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold text-ink-900">Specifications</h2>
              <ul className="mt-2 divide-y divide-ink-900/10 text-sm">
                {product.specifications.map((spec) => (
                  <li key={spec.label} className="flex justify-between py-2">
                    <span className="text-ink-700">{spec.label}</span>
                    <span className="font-medium text-ink-900">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/923152288402?text=${encodeURIComponent(
                `Hi, I'm interested in: ${product.title.en}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-solar-500 px-6 py-3 font-semibold text-ink-900 hover:bg-solar-400"
            >
              {t.productsPage.orderNow}
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-ink-900/20 px-6 py-3 font-semibold text-ink-900 hover:bg-ink-900/5"
            >
              {t.productsPage.requestQuote}
            </Link>
          </div>

          {product.isSample && (
            <p className="mt-4 rounded-md bg-solar-50 px-4 py-3 text-xs text-solar-800">
              {t.productsPage.sampleNotice}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
