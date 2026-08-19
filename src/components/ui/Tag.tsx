export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] tracking-wide text-[var(--muted)]">
      {children}
    </span>
  );
}
