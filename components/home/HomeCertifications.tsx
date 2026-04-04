"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

const topCertifications = [
  {
    title: "GIS, Mapping, and Spatial Analysis",
    issuer: "University of Toronto",
    logo: "/certificate_jobsimu/university_of_toronto_logo.jpg",
  },
  {
    title: "Data Analysis Using Python",
    issuer: "University of Pennsylvania",
    logo: "/certificate_jobsimu/university_of_pennsylvania_logo.jpg",
  },
  {
    title: "Geospatial Analysis with ArcGIS",
    issuer: "University of California, Davis",
    logo: "/certificate_jobsimu/uc_davis_logo.jpg",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    logo: "/certificate_jobsimu/google_logo.jpg",
  },
];

export function HomeCertifications() {
  return (
    <Section className="mt-20 sm:mt-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-2 text-ink-muted">Recognized by leading institutions and organizations.</p>
        </div>
        <Link 
          href="/about#accordion-certifications"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated/50 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-accent/10 hover:border-[rgb(var(--accent)/0.3)] hover:text-accent"
        >
          View All Certifications
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {topCertifications.map((cert, i) => (
          <Link
            href="/about#accordion-certifications"
            key={cert.title}
            className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-elevated/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-[rgb(var(--accent)/0.3)] hover:bg-surface-elevated/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-[0_0_15px_rgba(var(--accent),0.1)]"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col h-full items-start"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white/10 p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[rgb(var(--accent)/0.15)]">
                <Image
                  src={cert.logo}
                  alt={cert.issuer}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-ink leading-snug line-clamp-2 mb-1 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-ink-muted">
                  {cert.issuer}
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-accent/0 transition-opacity duration-300 group-hover:text-accent/100">
                View Details <span className="ml-1">→</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
