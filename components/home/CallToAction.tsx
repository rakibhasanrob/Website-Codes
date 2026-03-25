"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <Section className="mt-20 mb-20 sm:mt-28 sm:mb-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface-elevated via-surface-elevated/80 to-[rgb(var(--accent)/0.15)] px-6 py-16 text-center shadow-2xl backdrop-blur-md sm:px-12 sm:py-20"
      >
        {/* Decorative background lights */}
        <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[rgb(var(--accent)/0.25)] blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[rgb(var(--accent)/0.15)] blur-3xl pointer-events-none" aria-hidden />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-5xl">
            Ready to collaborate?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            Whether you need intricate geospatial data mapped out or interactive business dashboards brought to life, I&apos;m ready to help you analyze and animate your data.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" variant="primary" className="px-8 py-3.5 text-base">
              Get in Touch
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" className="px-8 py-3.5 text-base shadow-[0_0_15px_rgba(255,255,255,0.03)] border-white/[0.12]">
              See My Projects
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
