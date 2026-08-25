"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function ProductCard({ product }) {
  const { t, locale } = useLanguage();

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-ink-900/10 bg-white transition hover:shadow-md">
      <div className="relative aspect-square w-full bg-ink-900/5">
        <Image
          src={product.image}
          alt={product.title[locale]}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
        {product.isSample && (
          <span className="absolute left-2 top-2 rounded bg-ink-900/80 px-2 py-0.5 text-[10px] font-medium text-white">
            {t.testimonials.sampleLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-ink-900">{product.title[locale]}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-700">
          {product.shortDescription[locale]}
        </p>
        <div className="mt-3 flex flex-1 items-end justify-between gap-2">
          <span className="text-sm font-medium text-brand-700">
            {product.price ? `Rs. ${product.price}` : t.productsPage.requestPrice}
          </span>
          <Link
            href={`/solar-products/${product.slug}`}
            className="text-sm font-semibold text-solar-600 hover:underline"
          >
            {t.productsPage.viewProduct} →
          </Link>
        </div>
      </div>
    </div>
  );
}
