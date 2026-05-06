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
        className="relative overflow-hidden rounded-3xl border border-[rgb(var(--ink-muted)/0.12)] bg-gradient-to-br from-surface-elevated via-surface-elevated/80 to-accent/10 px-6 py-16 text-center backdrop-blur-sm sm:px-12 sm:py-20"
      >
        {/* Decorative background lights */}
        <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-accent/8 blur-3xl pointer-events-none" aria-hidden />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-5xl">
            Ready to collaborate?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            Got a dataset you don&apos;t know what to do with? Whether it&apos;s a map, a dashboard, or something in between — let&apos;s figure it out together.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" variant="primary" className="px-8 py-3.5 text-base">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
