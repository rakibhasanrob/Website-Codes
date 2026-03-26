"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const education = [
  {
    degree: "Bachelor of Science in Geography and Environment",
    period: "September 2023 – Present",
    institution: "Jagannath University",
    grade: "CGPA: 3.90*/4.00",
    logo: "/jnu.png",
    link: "https://jnu.ac.bd/",
  },
  {
    degree: "Higher Secondary Education (Science)",
    period: "April 2019 – November 2021",
    institution: "Motijheel Government Boys' School and College",
    grade: "GPA: 5.00/5.00",
    logo: "/moti.png",
    link: "https://mgbhs.edu.bd/",
  },
];

const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "SQL", "JavaScript"],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
  },
  {
    label: "Geospatial",
    items: ["ArcGIS Pro", "QGIS", "Google Earth Engine"],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></svg>
    ),
  },
  {
    label: "Data Tools",
    items: ["Power BI", "Excel"],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
    ),
  },
  {
    label: "Visualization",
    items: ["Matplotlib", "Plotly"],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>
    ),
  },
];

const certifications = [
  "Google Data Analytics Professional Certificate",
  "Data Analysis Using Python (University of Pennsylvania)",
  "GIS Specialization (University of Toronto)",
  "Prompt Engineering (Vanderbilt University)",
  "Microsoft Career Essentials in Data Analysis",
];

const activities = [
  {
    org: "United Nations Volunteers",
    position: "Volunteer",
    period: "June 2024 – December 2025",
    logo: "/un.png",
    certPics: ["/uncertificate.png"],
    link: "https://www.unv.org/",
  },
  {
    org: "Jagannath University Geospatial Club",
    position: "Asst. Research and Workshop Secretary",
    period: "Feb 2025 – Present",
    logo: "/jugc.png",
    certPics: [],
    link: "https://www.linkedin.com/company/geospatialclub/posts/?feedView=all",
  },
  {
    org: "Youth Empowerment in Climate Action Platform",
    position: "Mover",
    period: "June 2024 – November 2025",
    logo: "/yecap.png",
    certPics: ["/yecapcer1.png", "/yecapcer2.png"],
    link: "https://www.yecap-ap.org/",
  },
  {
    org: "Bangladesh Mathematical Olympiad",
    position: "Academic Member & Mover",
    period: "February 2024 – March 2025",
    logo: "/bmo.png",
    certPics: ["/bmopic1.png", "/bmopic2.png"],
    link: "https://matholympiad.org.bd/",
  },
  {
    org: "Green Voice - Jagannath University Branch",
    position: "Volunteer",
    period: "November 2023 – Present",
    logo: "/gvm.png",
    certPics: ["/gvmpic.png"],
    link: "https://greenvoicebd.com/",
  },
];

/* ------------------------------------------------------------------ */
/*  Accordion                                                          */
/* ------------------------------------------------------------------ */

function AccordionItem({
  title,
  icon,
  children,
  defaultOpen = false,
  id,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-surface-elevated/60 shadow-xl shadow-black/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-accent/15 hover:shadow-accent/5">
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen((v) => !v)}
        className="flex w-full items-center gap-3 p-5 sm:p-6 text-left transition hover:bg-white/[0.03]"
        aria-expanded={isOpen}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
          {icon}
        </span>
        <span className="flex-1 font-display text-lg font-semibold text-ink">
          {title}
        </span>
        <svg
          className={`h-5 w-5 text-ink-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Image Lightbox                                                     */
/* ------------------------------------------------------------------ */

function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          className="h-auto max-h-[85vh] w-auto object-contain"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
          aria-label="Close"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function ResumeSection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="resume-overview" className="mb-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex flex-wrap items-end gap-4 justify-between">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Overview
          </h2>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-surface shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-dim hover:shadow-accent/30 hover:scale-[1.03] active:scale-[0.97]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <AccordionItem
            id="accordion-education"
            title="Education"
            defaultOpen={true}
            icon={
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            }
          >
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-xl border border-white/[0.06] bg-surface/50 p-4 transition-all duration-300 hover:border-accent/20 hover:bg-surface/80 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10 p-1.5">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-base font-semibold text-ink leading-snug">
                            {edu.degree}
                          </h3>
                          <p className="mt-0.5 text-sm text-ink-muted">
                            {edu.institution}
                          </p>
                        </div>
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-1 rounded-full border border-white/10 bg-surface-elevated/80 px-3 py-1 text-xs font-medium text-ink-muted transition-all duration-300 hover:border-accent/30 hover:text-accent hover:scale-105 hover:shadow-md"
                        >
                          Visit
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                        <span className="inline-flex items-center gap-1">
                          <svg className="h-3.5 w-3.5 text-accent/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-accent font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AccordionItem
            id="accordion-skills"
            title="Skills"
            defaultOpen={true}
            icon={
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            }
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-xl border border-white/[0.06] bg-surface/50 p-4 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-accent/80">{group.icon}</span>
                    <span className="text-sm font-semibold text-ink">
                      {group.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-surface-elevated/80 px-3 py-1 text-xs font-medium text-ink-muted transition-all duration-200 hover:border-accent/30 hover:text-ink hover:bg-accent/10 hover:scale-105"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent/20 hover:border-accent/50 hover:scale-[1.03] active:scale-[0.97]"
              >
                View All My Skills
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </AccordionItem>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <AccordionItem
            id="accordion-certifications"
            title="Certifications"
            defaultOpen={true}
            icon={
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            }
          >
            <ul className="space-y-2.5">
              {certifications.map((cert, i) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-surface/50 px-4 py-3 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm text-ink-muted leading-relaxed">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link
                href="/skills#certifications"
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent/20 hover:border-accent/50 hover:scale-[1.03] active:scale-[0.97]"
              >
                View Full Certifications
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </AccordionItem>
        </motion.div>

        {/* Extracurricular Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AccordionItem
            id="accordion-activities"
            title="Extracurricular Activities"
            defaultOpen={true}
            icon={
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          >
            <div className="space-y-4">
              {activities.map((act) => (
                <div
                  key={act.org}
                  className="rounded-xl border border-white/[0.06] bg-surface/50 p-4 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex gap-4">
                    {/* Logo */}
                    <a
                      href={act.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10 p-1.5 transition-transform duration-300 hover:scale-110"
                    >
                      <Image
                        src={act.logo}
                        alt={act.org}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </a>
                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h4 className="font-display text-base font-semibold text-ink leading-snug">
                            {act.org}
                          </h4>
                          <p className="text-sm text-accent/80 font-medium">
                            {act.position}
                          </p>
                        </div>
                        <a
                          href={act.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-1 rounded-full border border-white/10 bg-surface-elevated/80 px-3 py-1 text-xs font-medium text-ink-muted transition-all duration-300 hover:border-accent/30 hover:text-accent hover:scale-105 hover:shadow-md"
                        >
                          Visit
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      </div>
                      <p className="mt-1 flex items-center gap-1 text-xs text-ink-muted">
                        <svg className="h-3.5 w-3.5 text-accent/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        {act.period}
                      </p>
                    </div>
                  </div>

                  {/* Certificates / Extra Pics */}
                  {act.certPics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {act.certPics.map((pic) => (
                        <button
                          key={pic}
                          type="button"
                          onClick={() => setLightboxSrc(pic)}
                          className="group relative overflow-hidden rounded-lg border border-white/[0.08] w-20 h-14 sm:w-24 sm:h-16 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:scale-105"
                        >
                          <Image
                            src={pic}
                            alt="Certificate"
                            fill
                            className="object-cover transition group-hover:scale-105"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <circle cx="11" cy="11" r="8" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                              <line x1="11" y1="8" x2="11" y2="14" />
                              <line x1="8" y1="11" x2="14" y2="11" />
                            </svg>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AccordionItem>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <Lightbox
            src={lightboxSrc}
            alt="Certificate preview"
            onClose={() => setLightboxSrc(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
