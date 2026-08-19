export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-primary-light)] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-inherit sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
