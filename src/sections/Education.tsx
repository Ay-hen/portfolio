import {
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Container } from "../components/ui/Container";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { educationByLang } from "../data/education";
import type { EducationEntry } from "../types";

const ROW_HEIGHT_DESKTOP = 300;
const ROW_HEIGHT_MOBILE = 360;

export function Education() {
  const { lang, t } = useLanguage();
  const reducedMotion = useReducedMotion();

  const isCoarsePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const parallaxEnabled = !reducedMotion && !isCoarsePointer;

  // Latest degree first -> oldest degree last.
  // Make sure educationByLang itself is ordered newest -> oldest.
  const education = useMemo(() => educationByLang[lang], [lang]);
  const n = education.length;

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 55%"],
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const lightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const lightY = useTransform(mouseY, (v) => `${v * 100}%`);

  const sceneRotateY = useSpring(
    useTransform(mouseX, [0, 1], [-2.2, 2.2]),
    {
      stiffness: 80,
      damping: 20,
    }
  );

  const sceneRotateX = useSpring(
    useTransform(mouseY, [0, 1], [1.8, -1.8]),
    {
      stiffness: 80,
      damping: 20,
    }
  );

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!parallaxEnabled || !sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  // Position milestones from top to bottom.
  //
  // Layout:
  // 1st degree -> LEFT
  // 2nd degree -> RIGHT
  // 3rd degree -> CENTER
  //
  // If there are more entries, the pattern repeats:
  // LEFT -> RIGHT -> CENTER -> LEFT -> RIGHT -> CENTER...
  const points = useMemo(() => {
    const positions = [35, 115, 35];

    return education.map((_, i) => {
      const y = n === 1 ? 50 : 8 + (i / (n - 1)) * 84;
      const x = positions[i % positions.length];

      return { x, y };
    });
  }, [education, n]);

  const pathD = useMemo(() => {
    return points
      .map((p, i) => {
        if (i === 0) {
          return `M ${p.x} ${p.y}`;
        }

        const prev = points[i - 1];
        const midY = (prev.y + p.y) / 2;

        return `C ${prev.x} ${midY}, ${p.x} ${midY}, ${p.x} ${p.y}`;
      })
      .join(" ");
  }, [points]);

  const containerHeight =
    n * (isCoarsePointer ? ROW_HEIGHT_MOBILE : ROW_HEIGHT_DESKTOP);

  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--muted) 1px, transparent 1px), linear-gradient(90deg, var(--muted) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {!reducedMotion &&
          Array.from({ length: 10 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full blur-2xl"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                width: 6 + (i % 3) * 4,
                height: 6 + (i % 3) * 4,
                background:
                  i % 2 === 0
                    ? "var(--color-primary-light)"
                    : "var(--color-mint)",
                opacity: 0.12,
              }}
              animate={{
                y: [0, -14, 0],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 6 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}

        {parallaxEnabled && (
          <motion.div
            aria-hidden
            className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              left: lightX,
              top: lightY,
              background:
                "radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%)",
              opacity: 0.1,
            }}
          />
        )}
      </div>

      <Container>
        <div className="mb-14 text-center sm:mb-20">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-primary-light)] uppercase">
            {t("education.eyebrow")}
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
            {t("education.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-md text-[15px] text-[var(--muted)]">
            {t("education.subtitle")}
          </p>
        </div>

        <div
          ref={sectionRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="relative mx-auto max-w-4xl"
          style={{
            perspective: "1400px",
            height: containerHeight,
          }}
        >
          <motion.div
            style={
              parallaxEnabled
                ? {
                    rotateX: sceneRotateX,
                    rotateY: sceneRotateY,
                    transformStyle: "preserve-3d",
                  }
                : undefined
            }
            className="relative h-full w-full"
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="edu-path-glow"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--color-mint)"
                  />

                  <stop
                    offset="100%"
                    stopColor="var(--color-primary-light)"
                  />
                </linearGradient>
              </defs>

              <path
                d={pathD}
                fill="none"
                stroke="var(--border)"
                strokeWidth={0.35}
                vectorEffect="non-scaling-stroke"
              />

              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#edu-path-glow)"
                strokeWidth={0.45}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{
                  pathLength: reducedMotion ? 1 : pathProgress,
                }}
              />
            </svg>

            {education.map((edu, i) => (
              <Milestone
                key={edu.id}
                edu={edu}
                index={i}
                point={points[i]}
                reducedMotion={reducedMotion}
                parallaxEnabled={parallaxEnabled}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Milestone({
  edu,
  index,
  point,
  reducedMotion,
  parallaxEnabled,
}: {
  edu: EducationEntry;
  index: number;
  point: { x: number; y: number };
  reducedMotion: boolean;
  parallaxEnabled: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const [active, setActive] = useState(false);

  const alignRight = point.x >= 50;

  function handleCardMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!parallaxEnabled || !cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();

    const relX =
      (e.clientX - rect.left) / rect.width - 0.5;

    const relY =
      (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: relX * 10,
      y: -relY * 10,
    });
  }

  function handleCardLeave() {
    setTilt({
      x: 0,
      y: 0,
    });
  }

  return (
    <div
      className="absolute left-1/2 w-[92%] -translate-x-1/2 sm:w-[46%]"
      style={{
        top: `${point.y}%`,
        ...(typeof window !== "undefined" &&
        window.innerWidth >= 640
          ? {
              left: `${point.x}%`,
              transform: "translate(-50%, -50%)",
            }
          : {
              transform: "translate(-50%, -50%)",
            }),
      }}
    >
      <motion.div
        ref={cardRef}
        onPointerMove={handleCardMove}
        onPointerLeave={handleCardLeave}
        onViewportEnter={() => setActive(true)}
        onViewportLeave={() => setActive(false)}
        initial={
          reducedMotion
            ? undefined
            : {
                opacity: 0,
                y: 40,
                scale: 0.94,
              }
        }
        whileInView={
          reducedMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
                scale: 1,
              }
        }
        viewport={{
          once: true,
          margin: "-15%",
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 18,
        }}
        style={{
          transformStyle: "preserve-3d",

          transform: parallaxEnabled
            ? `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(${active ? 14 : 0}px)`
            : undefined,

          transition:
            "transform 300ms ease, box-shadow 300ms ease",

          boxShadow: active
            ? "0 20px 60px -20px var(--color-primary-light)"
            : "0 8px 30px -18px rgba(0,0,0,0.4)",
        }}
        className={`relative rounded-xl border p-7 backdrop-blur-md sm:p-9 ${
          active
            ? "border-[var(--color-primary-light)]/60 bg-[var(--surface)]/85"
            : "border-[var(--border)] bg-[var(--surface)]/60 opacity-70"
        }`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
          style={{
            opacity: active ? 0.15 : 0,
            background:
              "radial-gradient(140px circle at 30% 20%, var(--color-primary-light), transparent 70%)",
          }}
        />

        <div className="flex items-start gap-4">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors"
            style={{
              borderColor: active
                ? "var(--color-primary-light)"
                : "var(--border)",

              color: active
                ? "var(--color-primary-light)"
                : "var(--muted)",

              boxShadow: active
                ? "0 0 16px -2px var(--color-primary-light)"
                : "none",
            }}
          >
            <GraduationCap size={18} />
          </span>

          <div className="min-w-0">
            <p className="font-mono text-xs text-[var(--muted)]">
              {edu.period}
            </p>

            <h3 className="mt-2 font-[family-name:var(--font-display)] text-[16px] font-semibold leading-relaxed text-[var(--text)]">
              {edu.degree}
            </h3>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
          {edu.institution} — {edu.location}
        </p>
      </motion.div>

      {/* path node */}
      <motion.span
        aria-hidden
        className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full"
        style={
          {
            [alignRight ? "left" : "right"]: "-10px",

            background: active
              ? "var(--color-primary-light)"
              : "var(--border)",

            boxShadow: active
              ? "0 0 12px 2px var(--color-primary-light)"
              : "none",
          } as React.CSSProperties
        }
        animate={
          !reducedMotion && active
            ? {
                scale: [1, 1.35, 1],
              }
            : undefined
        }
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}