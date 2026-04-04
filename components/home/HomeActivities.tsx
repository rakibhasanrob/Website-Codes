"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

const topActivities = [
  {
    org: "United Nations Volunteers",
    position: "Volunteer",
    logo: "/un.png",
  },
  {
    org: "Jagannath University Geospatial Club",
    position: "Asst. Research & Workshop Secretary",
    logo: "/jugc.png",
  },
  {
    org: "Youth Empowerment in Climate Action",
    position: "Mover",
    logo: "/yecap.png",
  },
  {
    org: "Bangladesh Mathematical Olympiad",
    position: "Academic Member & Mover",
    logo: "/bmo.png",
  },
];

export function HomeActivities() {
  return (
    <Section className="mt-20 sm:mt-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Extracurricular Activities
          </h2>
        </div>
        <Link 
          href="/about#accordion-activities"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated/50 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-[rgb(var(--accent)/0.1)] hover:border-[rgb(var(--accent)/0.3)] hover:text-accent"
        >
          View All Activities
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {topActivities.map((act, i) => (
          <Link
            href="/about#accordion-activities"
            key={act.org}
            className="group block relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-surface-elevated/30 to-surface-elevated/10 p-5 backdrop-blur-md transition-all duration-300 hover:border-[rgb(var(--accent)/0.3)] hover:bg-surface-elevated/50 hover:shadow-lg hover:shadow-[0_4px_20px_rgba(var(--accent),0.08)] hover:-translate-y-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 h-full"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10 p-2 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                <Image
                  src={act.logo}
                  alt={act.org}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-sm font-bold text-ink leading-tight truncate mb-1 group-hover:text-accent transition-colors">
                  {act.org}
                </h3>
                <p className="text-xs font-medium text-ink-muted truncate">
                  {act.position}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
