"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { testimonials, videoTestimonials } from "@/data/testimonials";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "./TestimonialCard";
import VideoTestimonial from "./VideoTestimonial";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink-900/[0.02] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.heading}
          subtitle={t.testimonials.subtitle}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((tm) => (
            <TestimonialCard key={tm.id} testimonial={tm} />
          ))}
        </div>

        {videoTestimonials.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-ink-900">{t.videoTestimonials.heading}</h3>
            <p className="mt-1 text-sm text-ink-700">{t.videoTestimonials.subtitle}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {videoTestimonials.map((v) => (
                <VideoTestimonial key={v.id} video={v} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
