import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { productSchema, breadcrumbSchema } from "@/lib/schema";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: product.seo?.title || product.title.en,
    description: product.seo?.description || product.shortDescription.en,
    alternates: { canonical: `/solar-products/${product.slug}` },
    openGraph: {
      title: product.seo?.title || product.title.en,
      description: product.seo?.description || product.shortDescription.en,
      url: `/solar-products/${product.slug}`,
      images: [product.image],
    },
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: "Solar Products", href: "/solar-products" },
    { name: product.title.en, href: `/solar-products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
