"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type EffectMode = "none" | "plexus" | "galaxy" | "ember" | "snow";

const effectButtons: { mode: EffectMode; label: string; icon: ReactNode }[] = [
  {
    mode: "none",
    label: "No effects",
    icon: <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
  },
  {
    mode: "plexus",
    label: "Plexus",
    icon: (
      <>
        <circle cx="6" cy="7" r="1.8" fill="currentColor" />
        <circle cx="18" cy="8" r="1.8" fill="currentColor" />
        <circle cx="12" cy="17" r="1.8" fill="currentColor" />
        <path d="M7.6 7.8 16.4 8.3M7.2 8.7l3.8 6.8m6.4-6.4-4.2 6.3" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
  },
  {
    mode: "galaxy",
    label: "Galaxy",
    icon: (
      <>
        <circle cx="12" cy="12" r="1.9" fill="currentColor" />
        <path d="M4 12c2-4 6-6 8-6s6 2 8 6c-2 4-6 6-8 6s-6-2-8-6Z" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    mode: "ember",
    label: "Ember",
    icon: (
      <path
        d="M12.5 3.5c1.9 3-1.5 4.9.4 7.1 1.2 1.3 3.1.7 3.1 3 0 2.8-2.1 4.9-5 4.9-3 0-5.1-2.1-5.1-4.9 0-3 2.8-4.4 4.2-6.6.8-1.3.8-2.3 2.4-3.5Z"
        fill="currentColor"
      />
    ),
  },
  {
    mode: "snow",
    label: "Snowfall",
    icon: (
      <>
        <path d="M12 4v16M4 12h16M6.7 6.7l10.6 10.6M17.3 6.7 6.7 17.3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </>
    ),
  },
];

export function BackgroundEffects() {
  const [effectMode, setEffectMode] = useState<EffectMode>("galaxy");
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("hero-effect");
    const valid = effectButtons.some((item) => item.mode === saved);
    const next = valid ? (saved as EffectMode) : "galaxy";
    setEffectMode(next);
    if (!saved) window.localStorage.setItem("hero-effect", "galaxy");

    // Detect theme for effect colour adaptation
    const checkTheme = () => setIsLight(document.documentElement.classList.contains("light"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  function handleEffectChange(mode: EffectMode) {
    setEffectMode(mode);
    window.localStorage.setItem("hero-effect", mode);
  }

  // ── Colour tokens driven by current theme ──────────────────────────
  // Dark:  Sage #8EA58C  |  Light: Moss #738A6E
  const accentOpacity     = isLight ? 0.18 : 0.28;  // radial glow base
  const particleOpacity   = isLight ? 0.55 : 0.75;  // peak particle opacity
  const glowBlob          = isLight ? "rgb(115 138 110" : "rgb(142 165 140"; // no closing )

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-surface transition-colors duration-500">

        {/* ══════════════ PLEXUS ══════════════ */}
        {effectMode === "plexus" ? (
          <>
            {/* Wide ambient glow blobs */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 55% 45% at 18% 22%, ${glowBlob} / ${accentOpacity}), transparent 100%),
                             radial-gradient(ellipse 45% 55% at 82% 78%, ${glowBlob} / ${accentOpacity * 0.8}), transparent 100%)`,
              }}
            />
            <div
              className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px]"
              style={{ background: `${glowBlob} / ${accentOpacity * 0.6})` }}
            />
            <div
              className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full blur-[100px]"
              style={{ background: `${glowBlob} / ${accentOpacity * 0.5})` }}
            />

            {/* Subtle grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, rgb(var(--accent)/0.07) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgb(var(--accent)/0.07) 1px, transparent 1px)`,
                backgroundSize: "4rem 4rem",
                maskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, #000 20%, transparent 100%)",
              }}
            />

            {/* Floating geometric shapes */}
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.div
                key={`geo-${i}`}
                className="absolute"
                style={{
                  left: `${5 + (i * 13) % 83}%`,
                  top: `${5 + (i * 19) % 83}%`,
                  width: `${50 + (i % 5) * 35}px`,
                  height: `${50 + (i % 5) * 35}px`,
                  border: `1px solid ${glowBlob} / ${isLight ? 0.25 : 0.35})`,
                  background: `${glowBlob} / ${isLight ? 0.05 : 0.08})`,
                  clipPath:
                    i % 3 === 0
                      ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                      : i % 3 === 1
                        ? "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
                        : "polygon(50% 0%, 100% 100%, 0% 100%)",
                }}
                animate={{
                  y: [0, -70, 0],
                  x: [0, 50, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.65, 0.3],
                }}
                transition={{
                  duration: 18 + i * 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />
            ))}

            {/* Bright accent dots at polygon vertices */}
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={`dot-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${(i * 11) % 96}%`,
                  top: `${(i * 17) % 96}%`,
                  width: `${3 + (i % 3)}px`,
                  height: `${3 + (i % 3)}px`,
                  background: `${glowBlob} / ${particleOpacity})`,
                  boxShadow: `0 0 ${6 + (i % 4) * 3}px ${glowBlob} / ${particleOpacity * 0.8})`,
                }}
                animate={{ opacity: [0.25, particleOpacity, 0.25], scale: [0.8, 1.3, 0.8] }}
                transition={{ duration: 2.5 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                aria-hidden="true"
              />
            ))}
          </>
        ) : null}

        {/* ══════════════ GALAXY ══════════════ */}
        {effectMode === "galaxy" ? (
          <>
            {/* Dual nebula glow */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 60% 50% at 25% 45%, ${glowBlob} / ${accentOpacity + 0.05}), transparent 55%),
                             radial-gradient(ellipse 50% 60% at 75% 20%, ${glowBlob} / ${accentOpacity * 0.7}), transparent 45%)`,
              }}
            />

            {/* Distant static stars — small & faint */}
            {Array.from({ length: 55 }).map((_, i) => (
              <motion.span
                key={`bg-star-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${(i * 7 + 3) % 100}%`,
                  top: `${(i * 13 + 5) % 100}%`,
                  width: "1.5px",
                  height: "1.5px",
                  background: `${glowBlob} / ${isLight ? 0.45 : 0.5})`,
                }}
                animate={{ opacity: [0.1, isLight ? 0.55 : 0.65, 0.1] }}
                transition={{ duration: 2.5 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.3 }}
                aria-hidden="true"
              />
            ))}

            {/* Mid-layer drifting stars */}
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.span
                key={`mid-star-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${(i * 11 + 2) % 100}%`,
                  top: `${(i * 17 + 8) % 100}%`,
                  width: "2px",
                  height: "2px",
                  background: `${glowBlob} / ${particleOpacity - 0.1})`,
                  boxShadow: `0 0 4px ${glowBlob} / ${particleOpacity * 0.6})`,
                }}
                animate={{
                  y: [0, -110],
                  x: [0, (i % 2 === 0 ? 1 : -1) * 35],
                  opacity: [0, particleOpacity - 0.1, 0],
                }}
                transition={{
                  duration: 10 + (i % 10),
                  repeat: Infinity,
                  ease: "linear",
                  delay: (i % 6) * 1.5,
                }}
                aria-hidden="true"
              />
            ))}

            {/* Foreground accent stars — bright & glowing */}
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.span
                key={`fg-star-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${(i * 19 + 5) % 100}%`,
                  top: `${(i * 23 + 10) % 100}%`,
                  width: `${3 + (i % 3)}px`,
                  height: `${3 + (i % 3)}px`,
                  background: `${glowBlob} / ${particleOpacity})`,
                  boxShadow: `0 0 ${8 + (i % 4) * 4}px ${glowBlob} / ${particleOpacity * 0.7}), 0 0 2px ${glowBlob} / ${particleOpacity})`,
                }}
                animate={{
                  y: [0, -150],
                  x: [0, (i % 2 === 0 ? 1 : -1) * 50],
                  opacity: [0, particleOpacity, 0],
                }}
                transition={{
                  duration: 7 + (i % 8),
                  repeat: Infinity,
                  ease: "linear",
                  delay: (i % 5) * 1.2,
                }}
                aria-hidden="true"
              />
            ))}

            {/* Shooting star trails */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                className="absolute h-px"
                style={{
                  left: `${(i * 29) % 80}%`,
                  top: `${(i * 23) % 50}%`,
                  width: `${60 + i * 20}px`,
                  background: `linear-gradient(to right, transparent, ${glowBlob} / ${particleOpacity * 0.9}), transparent)`,
                  transform: "rotate(-35deg)",
                }}
                animate={{ opacity: [0, 1, 0], x: [0, 120], y: [0, 70] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeIn",
                  delay: 3 + i * 4.5,
                  repeatDelay: 8 + i * 3,
                }}
                aria-hidden="true"
              />
            ))}
          </>
        ) : null}

        {/* ══════════════ EMBER ══════════════ */}
        {effectMode === "ember" ? (
          <>
            {/* Bottom heat glow */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 70% 40% at 20% 95%, ${glowBlob} / ${accentOpacity + 0.1}), transparent 50%),
                             radial-gradient(ellipse 60% 35% at 80% 90%, ${glowBlob} / ${accentOpacity * 0.8}), transparent 45%)`,
              }}
            />

            {/* Large slow embers */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={`big-ember-${i}`}
                className="absolute rounded-md"
                style={{
                  left: `${5 + (i * 7) % 88}%`,
                  bottom: `${(i % 5) * 3}%`,
                  width: `${5 + (i % 4) * 3}px`,
                  height: `${5 + (i % 4) * 3}px`,
                  background: `${glowBlob} / ${isLight ? 0.55 : 0.7})`,
                  boxShadow: `0 0 ${10 + (i % 3) * 6}px ${glowBlob} / ${isLight ? 0.5 : 0.65})`,
                  borderRadius: `${2 + (i % 3)}px`,
                }}
                animate={{
                  y: [0, -(180 + (i % 5) * 40)],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 12)],
                  opacity: [0, isLight ? 0.65 : 0.85, 0],
                  rotate: [0, (i % 2 === 0 ? 90 : -60)],
                  scale: [1, 0.4],
                }}
                transition={{
                  duration: 3.5 + (i % 4) * 0.7,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.22,
                }}
                aria-hidden="true"
              />
            ))}

            {/* Small fast sparks */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.span
                key={`spark-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${4 + (i * 5) % 90}%`,
                  bottom: `${(i % 6) * 2}%`,
                  width: "3px",
                  height: "3px",
                  background: `${glowBlob} / ${particleOpacity})`,
                  boxShadow: `0 0 6px ${glowBlob} / ${particleOpacity * 0.8})`,
                }}
                animate={{
                  y: [0, -(100 + (i % 6) * 25)],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (10 + (i % 5) * 8)],
                  opacity: [0, particleOpacity, 0],
                  scale: [1.2, 0.3],
                }}
                transition={{
                  duration: 2.2 + (i % 4) * 0.45,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.13,
                }}
                aria-hidden="true"
              />
            ))}

            {/* Ambient ember glow orbs */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`glow-orb-${i}`}
                className="absolute rounded-full blur-2xl"
                style={{
                  left: `${10 + i * 18}%`,
                  bottom: "0%",
                  width: `${80 + i * 30}px`,
                  height: `${80 + i * 30}px`,
                  background: `${glowBlob} / ${isLight ? 0.18 : 0.28})`,
                }}
                animate={{
                  opacity: [0.4, 0.9, 0.4],
                  scaleY: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + i * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                aria-hidden="true"
              />
            ))}
          </>
        ) : null}

        {/* ══════════════ SNOWFALL ══════════════ */}
        {effectMode === "snow" ? (
          <>
            {/* Cool overhead glow */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 80% 40% at 50% -5%, ${glowBlob} / ${accentOpacity * 0.9}), transparent 60%)`,
              }}
            />

            {/* Large slow snowflakes */}
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={`big-snow-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${3 + (i * 5) % 93}%`,
                  top: `${-8 - (i % 5) * 12}%`,
                  width: `${5 + (i % 4) * 2}px`,
                  height: `${5 + (i % 4) * 2}px`,
                  background: `${glowBlob} / ${isLight ? 0.55 : 0.72})`,
                  boxShadow: `0 0 ${6 + (i % 3) * 4}px ${glowBlob} / ${isLight ? 0.45 : 0.6})`,
                }}
                animate={{
                  y: [0, 520],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (15 + (i % 5) * 8)],
                  opacity: [0, isLight ? 0.65 : 0.82, isLight ? 0.5 : 0.7, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 6 + (i % 5) * 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.25,
                }}
                aria-hidden="true"
              />
            ))}

            {/* Medium snowflakes */}
            {Array.from({ length: 22 }).map((_, i) => (
              <motion.span
                key={`med-snow-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${2 + (i * 4) % 95}%`,
                  top: `${-5 - (i % 6) * 8}%`,
                  width: "3px",
                  height: "3px",
                  background: `${glowBlob} / ${isLight ? 0.5 : 0.68})`,
                }}
                animate={{
                  y: [0, 460],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 6)],
                  opacity: [0, particleOpacity - 0.1, particleOpacity - 0.15, 0],
                }}
                transition={{
                  duration: 7.5 + (i % 5) * 1.0,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
                aria-hidden="true"
              />
            ))}

            {/* Fine snow dust */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.span
                key={`dust-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${(i * 3) % 99}%`,
                  top: `${-3 - (i % 4) * 5}%`,
                  width: "1.5px",
                  height: "1.5px",
                  background: `${glowBlob} / ${isLight ? 0.38 : 0.52})`,
                }}
                animate={{
                  y: [0, 400],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (5 + (i % 3) * 5)],
                  opacity: [0, isLight ? 0.45 : 0.6, 0],
                }}
                transition={{
                  duration: 9 + (i % 6) * 0.8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.15,
                }}
                aria-hidden="true"
              />
            ))}
          </>
        ) : null}

      </div>

      {/* ══ Desktop dock (right side) ══ */}
      <div className="fixed right-3 top-1/2 z-50 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-[rgb(var(--ink-muted)/0.18)] bg-surface-elevated/85 px-1.5 py-3 backdrop-blur-md shadow-sm">
          {effectButtons.map((item) => {
            const active = item.mode === effectMode;
            return (
              <button
                key={item.mode}
                type="button"
                onClick={() => handleEffectChange(item.mode)}
                className={`dock-item relative inline-flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-200 hover:-translate-x-1 hover:scale-150 ${
                  active
                    ? "bg-accent/25 text-accent shadow-sm"
                    : "text-ink-muted hover:bg-accent/15 hover:text-accent"
                }`}
                title={item.label}
                aria-label={item.label}
                aria-pressed={active}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                  {item.icon}
                </svg>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══ Mobile dock (bottom) ══ */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:hidden">
        <div className="flex items-center gap-1.5 rounded-2xl border border-[rgb(var(--ink-muted)/0.18)] bg-surface-elevated/85 px-3 py-1.5 backdrop-blur-md shadow-sm">
          {effectButtons.map((item) => {
            const active = item.mode === effectMode;
            return (
              <button
                key={`${item.mode}-mobile`}
                type="button"
                onClick={() => handleEffectChange(item.mode)}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-1 hover:scale-125 ${
                  active
                    ? "bg-accent/25 text-accent shadow-sm"
                    : "text-ink-muted hover:bg-accent/15 hover:text-accent"
                }`}
                title={item.label}
                aria-label={item.label}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                  {item.icon}
                </svg>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
