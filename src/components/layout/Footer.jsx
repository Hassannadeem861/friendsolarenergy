"use client";

import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { productCategories } from "@/data/products";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-ink-900 text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-5 md:px-8">
        <div className="col-span-2">
          <p className="text-lg font-bold text-white">{company.name}</p>
          <p className="mt-2 max-w-xs text-sm text-white/70">{t.footer.description}</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-md bg-solar-500 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-solar-400"
          >
            {t.footer.getQuote}
          </Link>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">{t.footer.quickLinks}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-solar-400">{t.nav.home}</Link></li>
            <li><Link href="/solar-products" className="hover:text-solar-400">{t.nav.products}</Link></li>
            <li><Link href="/solar-services" className="hover:text-solar-400">{t.nav.services}</Link></li>
            <li><Link href="/about-us" className="hover:text-solar-400">{t.nav.about}</Link></li>
            <li><Link href="/contact" className="hover:text-solar-400">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">{t.footer.services}</h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 4).map((s) => (
              <li key={s.id}>
                <Link href={`/solar-services/${s.slug}`} className="hover:text-solar-400">
                  {s.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">{t.footer.products}</h3>
          <ul className="space-y-2 text-sm">
            {productCategories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link href={`/solar-products?category=${c.slug}`} className="hover:text-solar-400">
                  {c[locale]}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-3 mt-6 text-sm font-semibold text-white">{t.footer.contact}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href={company.phoneHref} className="flex items-center gap-2 hover:text-solar-400"><Phone className="h-3.5 w-3.5" />{company.phone}</a></li>
            <li><a href={company.emailHref} className="flex items-center gap-2 hover:text-solar-400"><Mail className="h-3.5 w-3.5" />{company.email}</a></li>
            <li><a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-solar-400"><Instagram className="h-3.5 w-3.5" />Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-xs text-white/60 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-solar-400">{t.footer.privacy}</Link>
            <Link href="/terms-conditions" className="hover:text-solar-400">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
