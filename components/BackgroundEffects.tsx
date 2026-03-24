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

  useEffect(() => {
    const saved = window.localStorage.getItem("hero-effect");
    const valid = effectButtons.some((item) => item.mode === saved);
    const next = valid ? (saved as EffectMode) : "galaxy";
    setEffectMode(next);
    if (!saved) window.localStorage.setItem("hero-effect", "galaxy");
  }, []);

  function handleEffectChange(mode: EffectMode) {
    setEffectMode(mode);
    window.localStorage.setItem("hero-effect", mode);
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-75">
        {effectMode === "plexus" ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.36),transparent_48%),radial-gradient(circle_at_80%_90%,rgba(14,165,233,0.3),transparent_44%)]" />
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={`plex-${i}`}
                className="absolute h-2 w-2 rounded-full bg-accent/85"
                style={{ left: `${6 + (i * 5) % 90}%`, top: `${8 + (i * 7) % 82}%` }}
                animate={{ opacity: [0.2, 1, 0.3], scale: [0.8, 1.25, 0.85] }}
                transition={{ duration: 2.6 + (i % 4) * 0.55, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
            ))}
          </>
        ) : null}
        {effectMode === "galaxy" ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,rgba(30,64,175,0.4),transparent_46%),radial-gradient(circle_at_82%_75%,rgba(56,189,248,0.25),transparent_40%)]" />
            {Array.from({ length: 38 }).map((_, i) => (
              <motion.span
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{ left: `${5 + (i * 3) % 93}%`, top: `${8 + (i * 7) % 82}%`, width: `${2 + (i % 2)}px`, height: `${2 + (i % 2)}px` }}
                animate={{ opacity: [0.2, 1, 0.25], scale: [0.9, 1.4, 0.9] }}
                transition={{ duration: 2.1 + (i % 5) * 0.6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
            ))}
          </>
        ) : null}
        {effectMode === "ember" ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,rgba(249,115,22,0.38),transparent_45%),radial-gradient(circle_at_72%_84%,rgba(239,68,68,0.32),transparent_42%)]" />
            {Array.from({ length: 28 }).map((_, i) => (
              <motion.span
                key={`ember-${i}`}
                className="absolute h-2.5 w-2.5 rounded-sm bg-orange-400/80"
                style={{ left: `${7 + (i * 4) % 89}%`, bottom: `${(i % 5) * 4}%` }}
                animate={{ y: [0, -130 - (i % 4) * 22], opacity: [0, 0.95, 0], rotate: [0, 30, 70] }}
                transition={{ duration: 3.4 + (i % 4) * 0.55, repeat: Infinity, ease: "easeOut", delay: i * 0.12 }}
                aria-hidden="true"
              />
            ))}
          </>
        ) : null}
        {effectMode === "snow" ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(186,230,253,0.3),transparent_52%)]" />
            {Array.from({ length: 34 }).map((_, i) => (
              <motion.span
                key={`snow-${i}`}
                className="absolute rounded-full bg-white/90"
                style={{ left: `${4 + (i * 3) % 94}%`, top: `${-12 - (i % 4) * 14}%`, width: `${3 + (i % 3)}px`, height: `${3 + (i % 3)}px` }}
                animate={{ y: [0, 460], x: [0, i % 2 === 0 ? 12 : -10], opacity: [0.2, 1, 0.35] }}
                transition={{ duration: 5 + (i % 4) * 0.85, repeat: Infinity, ease: "linear", delay: i * 0.18 }}
                aria-hidden="true"
              />
            ))}
          </>
        ) : null}
      </div>

      <div className="fixed right-3 top-1/2 z-50 -translate-y-1/2 hidden lg:block">
        <div className="group flex flex-col items-center gap-1.5 rounded-2xl border border-[rgb(var(--ink-muted)/0.28)] bg-surface-elevated/80 px-1.5 py-3 backdrop-blur-md shadow-xl shadow-black/20">
          {effectButtons.map((item) => {
            const active = item.mode === effectMode;
            return (
              <button
                key={item.mode}
                type="button"
                onClick={() => handleEffectChange(item.mode)}
                className={`dock-item relative inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg text-ink-muted transition-all duration-200 hover:-translate-x-1 hover:scale-150 ${
                  active ? "bg-accent/20 text-accent" : "hover:text-accent"
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
      
      {/* Mobile controller (bottom) */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:hidden">
        <div className="flex items-center gap-1.5 rounded-2xl border border-[rgb(var(--ink-muted)/0.28)] bg-surface-elevated/80 px-3 py-1.5 backdrop-blur-md shadow-xl shadow-black/20">
          {effectButtons.map((item) => {
            const active = item.mode === effectMode;
            return (
              <button
                key={`${item.mode}-mobile`}
                type="button"
                onClick={() => handleEffectChange(item.mode)}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-ink-muted transition-all duration-200 hover:-translate-y-1 hover:scale-125 ${
                  active ? "bg-accent/20 text-accent" : "hover:text-accent"
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
