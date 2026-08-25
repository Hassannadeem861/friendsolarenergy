"use client";

import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { company } from "@/data/company";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactForm from "@/components/shared/ContactForm";

export default function ContactPageClient() {
  const { t } = useLanguage();
  const c = t.contactPage;

  return (
    <>
      <Breadcrumb items={[{ name: c.title }]} />

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-ink-900 md:text-3xl">{c.title}</h1>
        <p className="mt-2 max-w-xl text-ink-700">{c.subtitle}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <a
              href={company.phoneHref}
              className="flex items-center gap-3 rounded-lg border border-ink-900/10 p-4 hover:border-brand-500"
            >
              <Phone className="h-5 w-5 text-brand-700" />
              <div>
                <p className="text-xs text-ink-700">{c.callUs}</p>
                <p className="font-medium text-ink-900">{company.phone}</p>
              </div>
            </a>

            <a
              href={company.emailHref}
              className="flex items-center gap-3 rounded-lg border border-ink-900/10 p-4 hover:border-brand-500"
            >
              <Mail className="h-5 w-5 text-brand-700" />
              <div>
                <p className="text-xs text-ink-700">{c.emailUs}</p>
                <p className="font-medium text-ink-900">{company.email}</p>
              </div>
            </a>

            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-ink-900/10 p-4 hover:border-brand-500"
            >
              <MessageCircle className="h-5 w-5 text-brand-700" />
              <div>
                <p className="font-medium text-ink-900">{c.whatsapp}</p>
              </div>
            </a>

            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-ink-900/10 p-4 hover:border-brand-500"
            >
              <Instagram className="h-5 w-5 text-brand-700" />
              <div>
                <p className="text-xs text-ink-700">{c.followUs}</p>
                <p className="font-medium text-ink-900">Instagram</p>
              </div>
            </a>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
