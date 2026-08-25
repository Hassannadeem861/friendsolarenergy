import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for Friend Solar Energy.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Terms & Conditions" }]} />
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-ink-900 md:text-3xl">Terms & Conditions</h1>
        <p className="mt-4 text-ink-700">
          Placeholder legal page. Replace this content with Friend Solar Energy's actual
          terms covering product orders, service requests, pricing, and liability.
        </p>
      </section>
    </>
  );
}
