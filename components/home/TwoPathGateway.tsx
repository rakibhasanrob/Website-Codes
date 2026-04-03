"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/ui/Button";

export function TwoPathGateway() {
  return (
    <Section className="mt-20 sm:mt-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <Card className="group flex h-full flex-col items-start justify-between bg-gradient-to-br from-surface-elevated/80 to-[rgb(var(--accent)/0.05)] transition-all hover:border-[rgb(var(--accent)/0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
            <div>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(var(--accent)/0.15)] text-2xl shadow-inner shadow-white/10 transition-transform duration-300 group-hover:scale-110">
                🎓
              </div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Academic & Research
              </h2>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Exploring my research, education, GIS work, and academic projects.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/research" variant="primary">
                Explore My Research
              </ButtonLink>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-full"
        >
          <Card className="group flex h-full flex-col items-start justify-between bg-gradient-to-br from-surface-elevated/80 to-[rgb(var(--accent)/0.05)] transition-all hover:border-[rgb(var(--accent)/0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
            <div>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(var(--accent)/0.15)] text-2xl shadow-inner shadow-white/10 transition-transform duration-300 group-hover:scale-110">
                💼
              </div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Real World Projects
              </h2>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Explore my real world projects.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/work" variant="primary">
                View My Projects
              </ButtonLink>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
