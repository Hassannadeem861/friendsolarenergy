"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-md border border-ink-900/10 p-1 text-xs font-semibold">
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "rounded px-2 py-1",
          locale === "en" ? "bg-brand-600 text-white" : "text-ink-700"
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("ur")}
        className={cn(
          "rounded px-2 py-1",
          locale === "ur" ? "bg-brand-600 text-white" : "text-ink-700"
        )}
        aria-pressed={locale === "ur"}
      >
        اردو
      </button>
    </div>
  );
}
