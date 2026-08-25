import { company, siteConfig } from "@/data/company";

// Organization schema — no fake ratings/addresses included.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteConfig.url,
    telephone: company.phone,
    email: company.email,
    sameAs: [company.instagramUrl],
  };
}

export function faqPageSchema(faqs, locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer[locale],
      },
    })),
  };
}

export function productSchema(product, locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title[locale],
    description: product.shortDescription[locale],
    image: `${siteConfig.url}${product.image}`,
    ...(product.brand ? { brand: product.brand } : {}),
    // No fabricated aggregateRating or offers.price when data is unavailable.
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}
