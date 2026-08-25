import ServicesPageClient from "./ServicesPageClient";

export const metadata = {
  title: "Solar Services",
  description:
    "Residential, commercial, and industrial solar installation, consultation, and maintenance from Friend Solar Energy — 10+ years of solar industry experience.",
  alternates: { canonical: "/solar-services" },
  openGraph: {
    title: "Solar Services | Friend Solar Energy",
    description: "Professional solar installation, consultation, and maintenance across Pakistan.",
    url: "/solar-services",
  },
};

export default function SolarServicesPage() {
  return <ServicesPageClient />;
}
