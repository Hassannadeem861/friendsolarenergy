import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Friend Solar Energy.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Privacy Policy" }]} />
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-ink-900 md:text-3xl">Privacy Policy</h1>
        <p className="mt-4 text-ink-700">
          Placeholder legal page. Replace this content with Friend Solar Energy's actual
          privacy policy — covering what information is collected via the quote/contact form,
          how it is used and stored, and how customers can request its removal.
        </p>
      </section>
    </>
  );
}
