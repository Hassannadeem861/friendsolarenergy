"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { products, getProductsByCategory } from "@/data/products";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsPageClient({ category }) {
  const { t } = useLanguage();
  const filtered = category ? getProductsByCategory(category) : products;

  return (
    <>
      <Breadcrumb items={[{ name: t.productsPage.title }]} />
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-ink-900 md:text-3xl">{t.productsPage.title}</h1>
        <p className="mt-2 max-w-2xl text-ink-700">{t.productsPage.subtitle}</p>

        <div className="mt-6">
          <CategoryFilter activeSlug={category} />
        </div>

        <div className="mt-8">
          <ProductGrid products={filtered} />
        </div>
      </section>
    </>
  );
}
