"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { DynamicType } from "@/components/home/DynamicType";

const titles = [
  "Geospatial Data Analyst",
  "Research Enthusiast",
  "Interactive Data Animator",
];

const particles = [
  "left-[10%] top-[18%]",
  "left-[30%] top-[70%]",
  "left-[52%] top-[28%]",
  "left-[78%] top-[16%]",
  "left-[90%] top-[62%]",
  "left-[64%] top-[82%]",
];

export function HomeHero() {
  return (
    <Section className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated/20 py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(14,165,233,0.18),transparent_40%)]" />
      </div>

      {particles.map((position, i) => (
        <motion.span
          key={position}
          className={`pointer-events-none absolute ${position} h-1.5 w-1.5 rounded-full bg-accent/70`}
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -10, 0] }}
          transition={{ duration: 3 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Rakib Hasan
          </h1>
          <p className="mt-5 text-lg text-ink-muted sm:text-xl">
            <DynamicType words={titles} />
          </p>
          <p className="mt-6 max-w-xl text-ink-muted">
            I work across data, research, and visual storytelling to build meaningful interactive
            experiences.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="/contact">Get in touch</ButtonLink>
            <ButtonLink href="/work" variant="outline">
              Explore work
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto w-full max-w-md"
        >
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent/20 via-surface-elevated to-surface shadow-2xl shadow-black/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_38%)]" />
            <div className="absolute inset-3 rounded-2xl border border-dashed border-white/25" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-surface/70 px-4 py-3 backdrop-blur-sm">
              <p className="text-sm font-medium text-ink">Your profile image goes here</p>
              <p className="mt-1 text-xs text-ink-muted">
                Add file in public/, then we will wire it to this panel.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
