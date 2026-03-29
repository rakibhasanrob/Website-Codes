"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/Button";

/* ─── animation helpers ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── data ──────────────────────────────────────────── */

const collaborationTypes = [
  {
    title: "Data Animation",
    description: "Bring datasets to life with motion-based storytelling and animated data visualizations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 0A1.125 1.125 0 014.5 4.5h15a1.125 1.125 0 011.125 1.125v12.75M6 18.375v-1.5a1.125 1.125 0 011.125-1.125h9.75a1.125 1.125 0 011.125 1.125v1.5m-12 0h12m-12 0a1.125 1.125 0 01-1.125-1.125m12 0a1.125 1.125 0 001.125-1.125m0 0V9.75" />
      </svg>
    ),
    gradient: "from-violet-500/20 to-fuchsia-500/15",
    accentColor: "text-violet-400",
  },
  {
    title: "Map Animation",
    description: "Dynamic, animated maps that reveal spatial patterns and geographic narratives.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    gradient: "from-cyan-500/20 to-blue-500/15",
    accentColor: "text-cyan-400",
  },
  {
    title: "Interactive Dashboards",
    description: "Real-time, filterable dashboards for business intelligence and performance tracking.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    gradient: "from-emerald-500/20 to-teal-500/15",
    accentColor: "text-emerald-400",
  },
  {
    title: "Business Visualizations",
    description: "Clear, impactful charts and infographics that translate complex business data into clarity.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    gradient: "from-amber-500/20 to-orange-500/15",
    accentColor: "text-amber-400",
  },
  {
    title: "Research Visualizations",
    description: "Publication-ready figures, statistical plots, and scientific data visualizations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    gradient: "from-rose-500/20 to-pink-500/15",
    accentColor: "text-rose-400",
  },
  {
    title: "GIS & Remote Sensing",
    description: "Spatial analysis, satellite imagery processing, and environmental mapping solutions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    gradient: "from-sky-500/20 to-indigo-500/15",
    accentColor: "text-sky-400",
  },
  {
    title: "Interactive Web Maps",
    description: "Web-based interactive mapping experiences with custom layers and user interaction.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    gradient: "from-lime-500/20 to-green-500/15",
    accentColor: "text-lime-400",
  },
];

const companies = [
  { name: "AIRE+ Partners", file: "AIRE+ Partners.png" },
  { name: "Buen Capital Partners", file: "Buen Capital Partners.png" },
  { name: "JSX", file: "JSX.png" },
  { name: "North West Place", file: "North West Place.png" },
  { name: "Northwestern Medicine", file: "Northwestern Medicine.png" },
  { name: "The AZEK® Company", file: "The AZEK® Company.png" },
  { name: "Vertical Recruitment", file: "Vertical Recruitment.png" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United States",
    text: "Rakib delivered an outstanding interactive dashboard that transformed our raw sales data into actionable insights. His attention to detail and ability to understand our business needs made the collaboration seamless.",
    flag: "🇺🇸",
  },
  {
    name: "Dr. Ahmed Khan",
    country: "United Kingdom",
    text: "Working with Rakib on our geospatial research project was a fantastic experience. His GIS expertise and data visualization skills elevated our paper significantly. Highly recommended for academic collaborations.",
    flag: "🇬🇧",
  },
  {
    name: "Maria Gonzalez",
    country: "Canada",
    text: "The map animations Rakib created for our environmental report were truly impressive. He communicated clearly throughout the project and delivered everything ahead of schedule.",
    flag: "🇨🇦",
  },
  {
    name: "James Okonkwo",
    country: "Australia",
    text: "Rakib's data storytelling ability is exceptional. He took our complex dataset and turned it into a compelling visual narrative that our stakeholders could easily understand and act upon.",
    flag: "🇦🇺",
  },
];

/* ─── Component ─────────────────────────────────────── */

export function CollaborationContent() {
  return (
    <>
      {/* ═══════ INTRO ═══════ */}
      <Section className="mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-lg leading-relaxed text-ink-muted">
            I work at the intersection of <span className="font-medium text-ink">data analytics</span>,{" "}
            <span className="font-medium text-ink">geospatial science</span>, and{" "}
            <span className="font-medium text-ink">research-driven visualization</span>. Whether you&apos;re a
            researcher exploring spatial patterns, a student building your first dashboard, or an organization
            looking to turn data into actionable stories — I&apos;d love to work together.
          </p>
        </motion.div>
      </Section>

      {/* ═══════ WAYS TO COLLABORATE ═══════ */}
      <Section className="mt-20 sm:mt-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Ways to Collaborate
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              From animated data stories to full-scale GIS analysis — here&apos;s how we can work together.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collaborationTypes.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${item.gradient} p-6 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1`}
              >
                {/* Subtle shine on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-surface/60 ${item.accentColor} shadow-inner shadow-white/5 transition-colors`}>
                    {item.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <Link
                    href="/work"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-dim"
                  >
                    View Related Projects
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ═══════ CLIENTS & ORGANIZATIONS ═══════ */}
      <Section className="mt-20 sm:mt-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Clients &amp; Organizations
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              Worked with a diverse range of clients including startups, local businesses, and independent professionals.
            </p>
          </motion.div>

          {/* Logo cloud */}
          <motion.div
            variants={fadeIn}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-elevated/40 px-6 py-10 shadow-xl backdrop-blur-md sm:px-10 sm:py-14"
          >
            {/* Decorative edge gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface-elevated/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface-elevated/80 to-transparent z-10" />

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {companies.map((company, i) => (
                <motion.div
                  key={company.name}
                  custom={i}
                  variants={fadeUp}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="flex h-20 w-36 items-center justify-center rounded-xl border border-white/[0.06] bg-white/90 p-3 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-accent/10 sm:h-24 sm:w-44 sm:p-4">
                    <Image
                      src={`/Companies I have worked with/${company.file}`}
                      alt={company.name}
                      width={160}
                      height={80}
                      className="max-h-14 w-auto object-contain sm:max-h-16"
                    />
                  </div>
                  <span className="text-xs font-medium text-ink-muted/70 transition-colors group-hover:text-ink-muted">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <Section className="mt-20 sm:mt-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Client Feedback
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              Kind words from people I&apos;ve had the pleasure of working with.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                className="group rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-6 shadow-xl shadow-black/10 backdrop-blur-md transition-all duration-300 hover:border-accent/15 hover:shadow-accent/5"
              >
                {/* Quote icon */}
                <svg className="mb-4 h-8 w-8 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.732-9.57 8.983-10.609L9.978 5.151C7.547 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-sm leading-relaxed text-ink-muted italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg">
                    {t.flag}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ═══════ CALL TO ACTION ═══════ */}
      <Section className="mt-20 mb-20 sm:mt-28 sm:mb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface-elevated via-surface-elevated/80 to-[rgb(var(--accent)/0.15)] px-6 py-16 text-center shadow-2xl backdrop-blur-md sm:px-12 sm:py-20"
        >
          {/* Decorative glows */}
          <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[rgb(var(--accent)/0.25)] blur-3xl pointer-events-none" aria-hidden />
          <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[rgb(var(--accent)/0.15)] blur-3xl pointer-events-none" aria-hidden />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Interested in working together?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
              Whether it&apos;s a research partnership, a data visualization project, or a freelance collaboration —
              I&apos;m always excited to connect and explore new ideas.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" variant="primary" className="px-8 py-3.5 text-base">
                Get in Touch
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
