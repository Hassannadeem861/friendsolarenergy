"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-lg text-brand-100/90">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/solar-products"
              className="rounded-md bg-solar-500 px-6 py-3 font-semibold text-ink-900 hover:bg-solar-400"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&fm=webp&w=1400&q=75"
            alt="Solar panels installed on a rooftop in Pakistan"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
