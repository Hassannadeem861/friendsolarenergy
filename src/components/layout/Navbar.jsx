"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Friend Solar Energy home">
          <Image
            src="/images/solar-logo.webp"
            alt="Friend Solar Energy"
            width={80}
            height={80}
            priority
            className="h-14 w-14 object-contain md:h-20 md:w-20"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-ink-800 hover:text-brand-600"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="rounded-md bg-solar-500 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-solar-400"
          >
            {t.nav.getQuote}
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/10 px-4 pb-4 md:hidden">
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="block py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="rounded-md bg-solar-500 px-4 py-2 text-sm font-semibold text-ink-900"
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
