"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { useLanguage } from "@/hooks/useLanguage";

export default function FAQAccordion() {
  const { locale } = useLanguage();

  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-ink-900/10">
      {faqs.map((faq) => (
        <Accordion.Item key={faq.id} value={faq.id} className="py-2">
          <Accordion.Trigger className="group flex w-full items-center justify-between py-3 text-left font-medium text-ink-900">
            {faq.question[locale]}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="pb-3 text-sm text-ink-700">
            {faq.answer[locale]}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
