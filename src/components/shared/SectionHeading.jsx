export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-solar-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-ink-700">{subtitle}</p>}
    </div>
  );
}
