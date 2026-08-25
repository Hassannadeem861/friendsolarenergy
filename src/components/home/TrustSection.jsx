"use client";

import { Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-ink-900/10 bg-white py-14">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center md:px-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <Award className="h-6 w-6" />
        </span>
        <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">{t.trust.heading}</h2>
        <p className="max-w-2xl text-ink-700">{t.trust.body}</p>
      </div>
    </section>
  );
}
