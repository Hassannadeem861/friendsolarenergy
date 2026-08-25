"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

// items: [{ name: "Solar Products", href: "/solar-products" }, ...] — last item has no href.
export default function Breadcrumb({ items }) {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink-900/10 bg-ink-900/[0.02]">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 py-3 text-sm text-ink-700 md:px-8">
        <li className="flex items-center gap-1">
          <Link href="/" className="hover:text-brand-700">{t.common.breadcrumbHome}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1">
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-700">{item.name}</Link>
            ) : (
              <span className="font-medium text-ink-900" aria-current="page">{item.name}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
