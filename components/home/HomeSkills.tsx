"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";

const skillGroups = [
  {
    label: "Core Competencies",
    items: ["Data Analysis", "Geospatial Analysis", "Statistical Analysis", "Data Visualization", "Research & Problem Solving"],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    ),
  },
  {
    label: "Programming",
    items: ["Python", "SQL", "JavaScript"],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
  },
  {
    label: "Geospatial",
    items: ["ArcGIS Pro", "QGIS", "Google Earth Engine"],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></svg>
    ),
  },
  {
    label: "Data Tools",
    items: ["Power BI", "Excel", "Google Looker Studio"],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
    ),
  },
  {
    label: "Visualization",
    items: ["Matplotlib", "Plotly", "D3.js", "Mapbox"],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>
    ),
  },
];

export function HomeSkills() {
  return (
    <Section className="mt-4 sm:mt-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group rounded-2xl border border-white/[0.08] bg-surface-elevated/30 p-6 backdrop-blur-md transition-all hover:border-[rgb(var(--accent)/0.4)] hover:bg-surface-elevated/60 hover:shadow-xl hover:shadow-[0_0_20px_rgba(var(--accent),0.1)] hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--accent)/0.12)] text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-[rgb(var(--accent)/0.2)]">
                {group.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                {group.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-surface-elevated/80 px-3 py-1.5 text-sm font-medium text-ink-muted transition-all duration-300 hover:border-[rgb(var(--accent)/0.4)] hover:bg-[rgb(var(--accent)/0.05)] hover:text-ink hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
