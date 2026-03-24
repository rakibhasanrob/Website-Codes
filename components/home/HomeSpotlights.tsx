"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import type { PortfolioItem } from "@/lib/portfolio";

type HomeSpotlightsProps = {
  featuredResearch: PortfolioItem;
  featuredWork: PortfolioItem;
};

export function HomeSpotlights({
  featuredResearch,
  featuredWork,
}: HomeSpotlightsProps) {
  return (
    <Section className="mt-20 sm:mt-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="font-display text-2xl font-semibold text-ink">
            Research spotlight
          </h2>
          <p className="mt-2 text-ink-muted">
            Selected project from your research portfolio.
          </p>
          <Card className="mt-6">
            <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-accent/25 to-surface-elevated ring-1 ring-white/5" />
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              {featuredResearch.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{featuredResearch.summary}</p>
            <Link
              href={`/research/${featuredResearch.slug}`}
              className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
            >
              Read more
            </Link>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h2 className="font-display text-2xl font-semibold text-ink">Work spotlight</h2>
          <p className="mt-2 text-ink-muted">
            Highlight from professional and product work.
          </p>
          <Card className="mt-6">
            <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-accent/15 to-surface-elevated ring-1 ring-white/5" />
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              {featuredWork.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{featuredWork.summary}</p>
            <Link
              href={`/work/${featuredWork.slug}`}
              className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
            >
              View project
            </Link>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
