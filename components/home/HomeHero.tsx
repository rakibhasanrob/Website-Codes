"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { DynamicType } from "@/components/home/DynamicType";

const titles = [
  "Geospatial Data Analyst",
  "Data Animation & Visualization Expert",
  "Research Enthusiast",
];

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

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakibhasanrob",
    hoverClass: "hover:text-[#0A66C2]",
    icon: (
      <path
        d="M6.94 8.5V18H3.8V8.5h3.14Zm.2-2.93c0 .92-.69 1.67-1.77 1.67h-.02c-1.05 0-1.73-.75-1.73-1.67 0-.94.7-1.67 1.77-1.67s1.73.73 1.75 1.67ZM20.2 12.55V18h-3.13v-5.1c0-1.28-.46-2.15-1.6-2.15-.88 0-1.4.6-1.63 1.18-.08.2-.1.48-.1.76V18H10.6s.04-8.75 0-9.5h3.14v1.35c.42-.65 1.17-1.58 2.86-1.58 2.08 0 3.6 1.36 3.6 4.28Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rakibhasanrob",
    hoverClass: "hover:text-[#1877F2]",
    icon: <path d="M14.2 8.4h2.2V5.2h-2.6c-3.1 0-3.8 2.03-3.8 3.7v1.9H8v3.14h2v5.86h3.14V13.94h2.55l.4-3.14h-2.95V9.2c0-.6.2-.8 1.06-.8Z" fill="currentColor" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rakibhasanrob",
    hoverClass: "hover:text-[#E4405F]",
    icon: (
      <>
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/rakibhasanrob",
    hoverClass: "hover:text-black dark:hover:text-white",
    icon: (
      <path
        d="M12 4a8 8 0 0 0-2.53 15.59c.4.08.55-.17.55-.38v-1.33c-2.23.48-2.7-.95-2.7-.95-.36-.92-.9-1.17-.9-1.17-.73-.5.06-.49.06-.49.82.06 1.24.84 1.24.84.7 1.2 1.83.85 2.28.65.07-.52.28-.86.5-1.06-1.78-.2-3.66-.9-3.66-3.96 0-.88.32-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .68-.22 2.2.82A7.43 7.43 0 0 1 12 7.8c.68 0 1.36.1 2 .28 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.93.08 2.13.52.56.83 1.27.83 2.15 0 3.07-1.88 3.76-3.67 3.96.29.24.54.73.54 1.48v2.2c0 .21.15.47.56.38A8 8 0 0 0 12 4Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/rakibhasanrob",
    hoverClass: "hover:text-[#1DBF73]",
    icon: <path d="M12 4.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM7 10.4h2v7.8h3.1v-7.8h2.2V8H12v-.6c0-.8.35-1.2 1.15-1.2H15V3.8h-2.4c-2.35 0-3.6 1.35-3.6 3.65V8H7v2.4Z" fill="currentColor" />,
  },
  {
    label: "Email",
    href: "mailto:contact@rakibhasan.rf.gd",
    hoverClass: "hover:text-[#2563EB]",
    icon: (
      <>
        <rect x="3.5" y="6.5" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.8 8.4 12 13l7.2-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
] as const;

export function HomeHero() {
  const [effectMode, setEffectMode] = useState<EffectMode>("ember");

  useEffect(() => {
    const saved = window.localStorage.getItem("hero-effect");
    const valid = effectButtons.some((item) => item.mode === saved);
    const next = valid ? (saved as EffectMode) : "ember";
    setEffectMode(next);
    if (!saved) window.localStorage.setItem("hero-effect", "ember");
  }, []);

  function handleEffectChange(mode: EffectMode) {
    setEffectMode(mode);
    window.localStorage.setItem("hero-effect", mode);
  }

  return (
    <Section className="relative py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-75">
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

      <div className="relative overflow-visible rounded-3xl border border-white/10 bg-surface-elevated/20 px-5 py-10 shadow-2xl shadow-black/20 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="absolute -right-14 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
          <div className="group flex items-end gap-1 rounded-2xl border border-[rgb(var(--ink-muted)/0.28)] bg-surface-elevated/80 px-2 py-2 backdrop-blur">
            {effectButtons.map((item) => {
              const active = item.mode === effectMode;
              return (
                <button
                  key={item.mode}
                  type="button"
                  onClick={() => handleEffectChange(item.mode)}
                  className={`dock-item relative inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted transition-all duration-200 hover:-translate-y-1 hover:scale-125 ${
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

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Portfolio</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">Rakib Hasan</h1>
            <p className="mt-5 text-lg text-ink-muted sm:text-xl">
              <DynamicType words={titles} typingSpeed={130} deletingSpeed={70} pauseMs={2100} />
            </p>
            <p className="mt-6 max-w-xl text-ink-muted">
              My work focuses on data analytics, geospatial science, and research to explore real-world problems and support better policy-making.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/work" variant="outline" className="border-accent/55 bg-surface-elevated/70">
                Explore work
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="mx-auto w-full max-w-md">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
              <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-[rgb(var(--ink-muted)/0.25)] bg-surface-elevated shadow-2xl shadow-black/30 sm:h-80 sm:w-80">
                <Image src="/my_pic1.jpeg" alt="Rakib Hasan portrait" width={420} height={420} className="h-full w-full object-cover" priority />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={item.label}
                    title={item.label}
                    className={`group inline-flex h-10 items-center overflow-hidden rounded-full border border-[rgb(var(--ink-muted)/0.28)] bg-surface-elevated/60 text-ink-muted transition-all duration-300 hover:w-auto hover:pr-3 ${item.hoverClass}`}
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                        {item.icon}
                      </svg>
                    </span>
                    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:ml-1.5 group-hover:max-w-32 group-hover:opacity-100">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-20 mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
          <div className="flex items-end gap-1 rounded-2xl border border-[rgb(var(--ink-muted)/0.28)] bg-surface-elevated/80 px-2 py-2 backdrop-blur">
            {effectButtons.map((item) => {
              const active = item.mode === effectMode;
              return (
                <button
                  key={`${item.mode}-mobile`}
                  type="button"
                  onClick={() => handleEffectChange(item.mode)}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted transition-all duration-200 hover:-translate-y-1 hover:scale-110 ${
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
      </div>
    </Section>
  );
}
