import { useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { getConstellationLayout } from "./layout";
import { skillIconMap } from "./skillIcons";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useLanguage } from "../../i18n/LanguageContext";
import type { SkillNode } from "../../types";

export function SkillConstellation({
  onSelect,
  selectedId,
}: {
  onSelect: (node: SkillNode) => void;
  selectedId: string | null;
}) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const layout = useMemo(() => getConstellationLayout(), []);
  const sceneRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isCoarsePointer =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const parallaxEnabled = !reducedMotion && !isCoarsePointer;

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!parallaxEnabled || !sceneRef.current || !tiltRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = relX * 14;
    const rotateX = -relY * 14;
    tiltRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handlePointerLeave() {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={sceneRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative mx-auto aspect-square w-full max-w-[560px] select-none"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={tiltRef}
        className="relative h-full w-full transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* connecting lines */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {layout.map(({ node, x, y, colorVar }) => {
            const active = hoveredId === node.id || selectedId === node.id;
            return (
              <line
                key={node.id}
                x1={50}
                y1={50}
                x2={x}
                y2={y}
                stroke={colorVar}
                strokeWidth={active ? 0.5 : 0.22}
                opacity={active ? 0.75 : 0.18}
                style={{ transition: "opacity 200ms ease, stroke-width 200ms ease" }}
              />
            );
          })}
        </svg>

        {/* core */}
        <div
          className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]"
          style={{ left: "50%", top: "50%" }}
        >
          <span
            aria-hidden="true"
            className={`absolute inset-0 rounded-full bg-[var(--color-primary)] blur-xl ${
              reducedMotion ? "opacity-60" : "animate-[core-pulse_3.2s_ease-in-out_infinite]"
            }`}
          />
          <span className="relative font-mono text-[10px] font-medium tracking-wide text-[var(--text)]">
            {t("skills.core")}
          </span>
        </div>

        {/* nodes */}
        {layout.map(({ node, x, y, colorVar, floatDuration, floatDelay, floatAmplitude }) => {
          const Icon = skillIconMap[node.icon];
          const isActive = hoveredId === node.id || selectedId === node.id;
          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                style={
                  reducedMotion
                    ? undefined
                    : ({
                        "--float-amp": `-${floatAmplitude}px`,
                        animation: `skill-float ${floatDuration}s ease-in-out ${floatDelay}s infinite`,
                      } as React.CSSProperties)
                }
              >
                <button
                  type="button"
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(node.id)}
                  onBlur={() => setHoveredId(null)}
                  onClick={() => onSelect(node)}
                  aria-label={node.name}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border bg-[var(--surface)] transition-transform duration-200 sm:h-12 sm:w-12"
                  style={{
                    borderColor: isActive ? colorVar : "var(--border)",
                    transform: isActive ? "scale(1.22)" : "scale(1)",
                    boxShadow: isActive ? `0 0 18px -2px ${colorVar}` : "none",
                  }}
                >
                  {Icon && (
                    <Icon
                      size={17}
                      className="sm:h-5 sm:w-5"
                      style={{ color: isActive ? colorVar : "var(--muted)" }}
                    />
                  )}

                  <span
                    role="tooltip"
                    className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-1 font-mono text-[10px] text-[var(--text)] opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    {node.name}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
