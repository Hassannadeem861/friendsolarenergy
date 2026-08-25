import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/shared/CTASection";
import { faqPageSchema } from "@/lib/schema";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Friend Solar Energy | Solar Products & Installation in Pakistan",
  description:
    "10+ years of solar industry experience. Shop solar panels, inverters, and batteries, or request professional residential, commercial, and industrial solar installation across Pakistan.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Friend Solar Energy | Solar Products & Installation in Pakistan",
    description:
      "10+ years of solar industry experience. Shop solar products or request professional solar installation.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <HeroSection />
      <TrustSection />
      <ProductsPreview />
      <ServicesPreview />
      <WhyChooseSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
