"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CTASection from "@/components/shared/CTASection";

export default function AboutPageClient() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  return (
    <>
      <Breadcrumb items={[{ name: a.title }]} />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:px-8 md:py-14">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-ink-900/5">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&fm=webp&w=900&q=75"
            alt="Solar panels installed on a rooftop"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-ink-900 md:text-3xl">{a.title}</h1>

          <div className="mt-8 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-brand-700">{a.experienceHeading}</h2>
            <p className="mt-2 text-ink-700">{a.experienceBody}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-brand-700">{a.missionHeading}</h2>
            <p className="mt-2 text-ink-700">{a.missionBody}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-brand-700">{a.offerHeading}</h2>
            <p className="mt-2 text-ink-700">{a.offerBody}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-brand-700">{a.trustHeading}</h2>
            <p className="mt-2 text-ink-700">{a.trustBody}</p>
          </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
