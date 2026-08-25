"use client";

import { useLanguage } from "@/hooks/useLanguage";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const { t } = useLanguage();

  if (!products.length) {
    return <p className="py-12 text-center text-ink-700">{t.productsPage.noProducts}</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
