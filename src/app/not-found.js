"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-brand-700">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink-900">{t.notFound.heading}</h1>
      <p className="mt-2 text-ink-700">{t.notFound.body}</p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-solar-500 px-6 py-3 font-semibold text-ink-900 hover:bg-solar-400"
      >
        {t.notFound.cta}
      </Link>
    </div>
  );
}
