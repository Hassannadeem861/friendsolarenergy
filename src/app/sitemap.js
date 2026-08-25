import { siteConfig } from "@/data/company";
import { products } from "@/data/products";
import { services } from "@/data/services";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/solar-products",
    "/solar-services",
    "/about-us",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${siteConfig.url}/solar-products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/solar-services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
