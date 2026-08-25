import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/data/company";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Friend Solar Energy | Solar Products & Installation in Pakistan",
    template: "%s | Friend Solar Energy",
  },
  description:
    "Friend Solar Energy — 10+ years of solar industry experience. Shop solar panels, inverters, and batteries, or request professional solar installation across Pakistan.",
  icons: {
    icon: "/images/solar-logo.webp",
    shortcut: "/images/solar-logo.webp",
    apple: "/images/solar-logo.webp",
  },
  openGraph: {
    type: "website",
    siteName: "Friend Solar Energy",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
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
