import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface LogLine {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  status: number;
  note: string;
}

const METHOD_COLOR: Record<LogLine["method"], string> = {
  GET: "text-[var(--color-mint)]",
  POST: "text-[var(--color-primary-light)]",
  PUT: "text-[var(--color-signal)]",
  DELETE: "text-[#e0685f]",
};

// Reflects the kind of endpoints actually built across the CV's projects
// (banking APIs, e-commerce, booking, JWT auth) — not literal production
// traffic, just a stylistic nod to the real work.
const LOG: LogLine[] = [
  { method: "POST", path: "/api/auth/login", status: 200, note: "JWT issued" },
  { method: "GET", path: "/api/accounts/{id}", status: 200, note: "45ms" },
  { method: "POST", path: "/api/transactions", status: 201, note: "created" },
  { method: "GET", path: "/api/products?page=1", status: 200, note: "cached" },
  { method: "PUT", path: "/api/bookings/{id}", status: 200, note: "updated" },
  { method: "GET", path: "/api/dashboard/summary", status: 200, note: "32ms" },
];

export function ApiConsole() {
  const reducedMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reducedMotion ? LOG.length : 0);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCount(LOG.length);
      return;
    }
    const interval = setInterval(() => {
      setVisibleCount((count) => (count >= LOG.length ? 1 : count + 1));
    }, 950);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="w-full max-w-md rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/20">
      <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e0685f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-mint)]" />
        <span className="ml-3 font-mono text-[11px] text-[var(--muted)]">
          api.log
        </span>
      </div>
      <div className="min-h-[220px] space-y-2 p-4 font-mono text-[12px] leading-relaxed">
        {LOG.slice(0, visibleCount).map((line, i) => (
          <div key={`${line.path}-${i}`} className="flex items-baseline gap-2">
            <span className={`w-11 shrink-0 font-medium ${METHOD_COLOR[line.method]}`}>
              {line.method}
            </span>
            <span className="text-[var(--text)]">{line.path}</span>
            <span className="text-[var(--muted)]">
              {line.status} · {line.note}
            </span>
          </div>
        ))}
        <span className="inline-block h-3.5 w-1.5 animate-blink bg-[var(--color-primary-light)]" />
      </div>
    </div>
  );
}
