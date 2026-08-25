import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact Us / Get a Quote",
  description:
    "Get in touch with Friend Solar Energy for solar products or installation services. Call, WhatsApp, or submit a quote request online.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Friend Solar Energy",
    description: "Call, WhatsApp, or submit a quote request online.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
