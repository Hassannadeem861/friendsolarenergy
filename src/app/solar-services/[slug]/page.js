import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.title.en,
    description: service.summary.en,
    alternates: { canonical: `/solar-services/${service.slug}` },
    openGraph: {
      title: `${service.title.en} | Friend Solar Energy`,
      description: service.summary.en,
      url: `/solar-services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: "Solar Services", href: "/solar-services" },
    { name: service.title.en, href: `/solar-services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
