"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function TestimonialCard({ testimonial }) {
  const { t, locale } = useLanguage();

  return (
    <div className="flex h-full flex-col rounded-lg border border-ink-900/10 bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full bg-ink-900/10">
          <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-700">{testimonial.location}</p>
        </div>
        {testimonial.isSample && (
          <span className="ml-auto rounded bg-ink-900/5 px-2 py-0.5 text-[10px] font-medium text-ink-700">
            {t.testimonials.sampleLabel}
          </span>
        )}
      </div>

      <div className="mt-3 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? "fill-solar-500 text-solar-500" : "text-ink-900/15"}`}
          />
        ))}
      </div>

      <p className="mt-3 flex-1 text-sm text-ink-700">"{testimonial.quote[locale]}"</p>

      {testimonial.projectType && (
        <p className="mt-4 text-xs font-medium text-brand-700">{testimonial.projectType[locale]}</p>
      )}
    </div>
  );
}
