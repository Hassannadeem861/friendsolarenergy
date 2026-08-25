"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { productCategories } from "@/data/products";
import { cn } from "@/lib/utils";

export default function CategoryFilter({ activeSlug }) {
  const { t, locale } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/solar-products"
        className={cn(
          "rounded-full border px-4 py-1.5 text-sm font-medium",
          !activeSlug
            ? "border-brand-700 bg-brand-700 text-white"
            : "border-ink-900/15 text-ink-700 hover:border-brand-500"
        )}
      >
        {t.productsPage.allCategories}
      </Link>
      {productCategories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/solar-products?category=${cat.slug}`}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium",
            activeSlug === cat.slug
              ? "border-brand-700 bg-brand-700 text-white"
              : "border-ink-900/15 text-ink-700 hover:border-brand-500"
          )}
        >
          {cat[locale]}
        </Link>
      ))}
    </div>
  );
}
