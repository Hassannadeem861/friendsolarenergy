"use client";

import { PlayCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

// Supports instagram / youtube / self-hosted references without embedding
// third-party iframes by default (keeps page fast) — links out to the source.
export default function VideoTestimonial({ video }) {
  const { locale } = useLanguage();

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-lg border border-ink-900/10 bg-white p-5 transition hover:shadow-md"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white transition group-hover:bg-brand-600">
        <PlayCircle className="h-7 w-7" />
      </span>
      <div>
        <p className="font-medium text-ink-900">{video.caption[locale]}</p>
        <p className="text-xs uppercase tracking-wide text-ink-700">
          {video.type === "instagram" ? "Instagram Reel" : video.type === "youtube" ? "YouTube" : "Video"}
        </p>
      </div>
    </a>
  );
}
