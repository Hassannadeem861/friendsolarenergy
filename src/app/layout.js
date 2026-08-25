import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/data/company";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "Friend Solar Energy",
  title: {
    default: "Friend Solar Energy | Solar Products & Installation in Pakistan",
    template: "%s | Friend Solar Energy",
  },
  description:
    "Friend Solar Energy — 10+ years of solar industry experience. Shop solar panels, inverters, and batteries, or request professional solar installation across Pakistan.",
  keywords: [
    "solar panels Pakistan",
    "solar installation Pakistan",
    "solar inverters",
    "solar batteries",
    "residential solar installation",
    "commercial solar solutions",
  ],
  authors: [{ name: "Friend Solar Energy" }],
  creator: "Friend Solar Energy",
  publisher: "Friend Solar Energy",
  icons: {
    icon: "/images/solar-logo.webp",
    shortcut: "/images/solar-logo.webp",
    apple: "/images/solar-logo.webp",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Friend Solar Energy | Solar Products & Installation in Pakistan",
    description:
      "Shop solar panels, inverters, batteries, and accessories, or get professional solar installation across Pakistan.",
    siteName: "Friend Solar Energy",
    locale: "en_PK",
    url: "/",
    images: [
      {
        url: "/images/solar-logo.webp",
        alt: "Friend Solar Energy solar logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friend Solar Energy | Solar Products & Installation in Pakistan",
    description:
      "Solar products and professional installation for homes and businesses across Pakistan.",
    images: ["/images/solar-logo.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans text-ink-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
