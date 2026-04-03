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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-surface transition-colors duration-500">
        {effectMode === "plexus" ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.1),transparent_40%)]" />
            <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-accent/10 blur-[100px] opacity-60 mix-blend-screen" />
            <div className="absolute bottom-[20%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-accent-dim/10 blur-[100px] opacity-60 mix-blend-screen" />
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--ink-muted),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--ink-muted),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
            
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`geo-${i}`}
                className="absolute border border-[rgb(var(--ink-muted),0.15)] bg-[rgb(var(--surface-elevated),0.3)] backdrop-blur-md"
                style={{
                  left: `${5 + (i * 17) % 85}%`,
                  top: `${5 + (i * 23) % 85}%`,
                  width: `${60 + (i % 4) * 40}px`,
                  height: `${60 + (i % 4) * 40}px`,
                  clipPath: i % 2 === 0 
                    ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
                    : i % 3 === 0 
                      ? "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
                      : "polygon(50% 0%, 100% 100%, 0% 100%)",
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 40, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 25 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        ) : null}
        {effectMode === "galaxy" ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(30,64,175,0.25),transparent_50%),radial-gradient(ellipse_at_70%_20%,rgba(14,165,233,0.15),transparent_40%)]" />
            
            {/* Distant static stars */}
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.span
                key={`bg-star-${i}`}
                className="absolute rounded-full bg-[rgb(var(--fx-particle))]"
                style={{ left: `${(i * 7) % 100}%`, top: `${(i * 13) % 100}%`, width: '1px', height: '1px' }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 3 + (i % 5), repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
            ))}
            
            {/* Mid drifting stars */}
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.span
                key={`mid-star-${i}`}
                className="absolute rounded-full bg-[rgb(var(--fx-particle))]"
                style={{ left: `${(i * 11) % 100}%`, top: `${(i * 17) % 100}%`, width: '1.5px', height: '1.5px' }}
                animate={{ 
                  y: [0, -80], 
                  x: [0, 30],
                  opacity: [0, 0.6, 0] 
                }}
                transition={{ 
                  duration: 15 + (i % 10), 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: (i % 5) * 2
                }}
                aria-hidden="true"
              />
            ))}

            {/* Foreground faster stars */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.span
                key={`fg-star-${i}`}
                className="absolute rounded-full bg-accent"
                style={{ left: `${(i * 19) % 100}%`, top: `${(i * 23) % 100}%`, width: `${2 + (i % 2)}px`, height: `${2 + (i % 2)}px` }}
                animate={{ 
                  y: [0, -120], 
                  x: [0, 45],
                  opacity: [0, 0.9, 0] 
                }}
                transition={{ 
                  duration: 10 + (i % 8), 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: (i % 4) * 1.5
                }}
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(186,230,253,0.15),transparent_52%)]" />
            {Array.from({ length: 34 }).map((_, i) => (
              <motion.span
                key={`snow-${i}`}
                className="absolute rounded-full bg-[rgb(var(--fx-particle))]"
                style={{ left: `${4 + (i * 3) % 94}%`, top: `${-12 - (i % 4) * 14}%`, width: `${3 + (i % 3)}px`, height: `${3 + (i % 3)}px` }}
                animate={{ y: [0, 460], x: [0, i % 2 === 0 ? 12 : -10], opacity: [0, 0.85, 0] }}
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
