import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About Us",
  description:
    "Friend Solar Energy has 10+ years of experience in the solar industry, now offering products and installation services online across Pakistan.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us | Friend Solar Energy",
    description: "10+ years of experience in the solar industry.",
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  return <AboutPageClient />;
}
