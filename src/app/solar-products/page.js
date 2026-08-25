import ProductsPageClient from "./ProductsPageClient";

export const metadata = {
  title: "Solar Products",
  description:
    "Browse solar panels, inverters, batteries, and accessories from Friend Solar Energy — 10+ years of solar industry experience in Pakistan.",
  alternates: { canonical: "/solar-products" },
  openGraph: {
    title: "Solar Products | Friend Solar Energy",
    description: "Browse solar panels, inverters, batteries, and accessories.",
    url: "/solar-products",
  },
};

export default function SolarProductsPage({ searchParams }) {
  return <ProductsPageClient category={searchParams?.category} />;
}
