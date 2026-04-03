/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Section } from "@/components/Section";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const researchInterests = [
  {
    title: "Disaster Management & Risk Reduction",
    img: "/research_pic/noaa-rxlx9Yi0298-unsplash.jpg", 
  },
  {
    title: "Environmental Monitoring & Assessment",
    img: "/research_pic/pexels-tomfisk-9708019 (1).jpg", 
  },
  {
    title: "Natural Hazard Risk Analysis",
    img: "/research_pic/2186.jpg", 
  },
  {
    title: "Machine Learning",
    img: "/research_pic/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg", 
  },
  {
    title: "GIS & Geospatial Analysis",
    img: "/research_pic/rut-miit-FUwxDsG33kc-unsplash.jpg", 
  },
];

const academicProjects = [
  {
    title: "Physical and Socio-economic Status: A Case Study on Kuakata and Nearby Areas, Kalapara Upazila, Patuakhali District",
    image: "/report2024.png",
    link: "https://drive.google.com/file/d/1ksexDeNPvZokiBLHQOWnjIrvwzaXaINC/view?usp=sharing",
    desc: "A comprehensive case study exploring the physical and socio-economic dynamics of the Kuakata coastal region, analyzing geographic vulnerabilities and community resilience.",
  },
  {
    title: "Socio-Economic, Physical, Mechanical and Chemical Profile of Sundarbans Mangrove Ecosystem and Surroundings",
    image: "/report2025.png",
    link: "https://drive.google.com/file/d/1HSkjbqJBpRv38E64IZhW2jhee_bdIHTF/view?usp=sharing",
    desc: "An in-depth analysis detailing the mechanical, chemical, and socio-economic intersections within the Sundarbans mangrove ecosystem to quantify environmental transformations.",
  },
];

const researchPositions = [
  {
    org: "Jagannath University Geospatial Club",
    role: "Assistant Research & Workshop Secretary",
    period: "February 2025 – Present",
    logo: "/1739167983191.jpg",
    link: "https://www.linkedin.com/company/geospatialclub/posts/?feedView=all",
  },
];

const mapImages = [
  "/GIS_RS/LST 2.png",
  "/GIS_RS/LULC.png",
  "/GIS_RS/Layout.jpg",
  "/GIS_RS/Layout2.png",
  "/GIS_RS/Layout3.png",
  "/GIS_RS/Layout4.png",
  "/GIS_RS/SAVI.png",
  "/GIS_RS/Terrian and Temperature Interaction.png",
  "/GIS_RS/layout1.jpg",
];

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */

export function ResearchPageContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="space-y-32 pb-24">
      
      {/* 1. Research Interests */}
      <Section>
        <div className="mb-10 text-center sm:text-left border-b border-white/[0.08] pb-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Research Interests
          </h2>
          <p className="mt-3 text-ink-muted text-lg">Key domains shaping my investigative approach to environmental and spatial intelligence.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl shadow-xl shadow-black/10"
            >
              <Image
                src={interest.img}
                alt={interest.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 group-hover:saturate-150 group-hover:contrast-125"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-bold text-white shadow-black drop-shadow-md decoration-accent group-hover:underline underline-offset-4 line-clamp-2">
                  {interest.title}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-accent/40 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 2. Academic Projects */}
      <Section>
        <div className="mb-10 border-b border-white/[0.08] pb-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl text-center sm:text-left">
            Academic Projects
          </h2>
          <p className="mt-3 text-ink-muted text-lg text-center sm:text-left">Highlighting extensive field studies and technical research reports.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {academicProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-surface-elevated/40 shadow-2xl backdrop-blur-xl transition-all hover:border-[rgb(var(--accent)/0.3)] hover:shadow-[rgb(var(--accent)/0.15)] hover:-translate-y-1"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-64 w-full sm:h-72 border-b border-white/[0.05] bg-black/20 overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-ink leading-snug line-clamp-3">
                  {project.title}
                </h3>
                <p className="mt-4 text-ink-muted leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="mt-8 pt-4 border-t border-white/[0.06]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[rgb(var(--accent)/0.12)] px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-surface shadow-inner shadow-white/5"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v14M8 12l4 4 4-4M4 22h16" />
                    </svg>
                    View Full Report
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. Publications */}
      <Section>
        <div className="mb-10 text-center sm:text-left border-b border-white/[0.08] pb-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Publications
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-white/[0.15] bg-surface-elevated/20 p-8 text-center"
        >
          <div className="text-ink-muted">
            <svg className="mx-auto h-8 w-8 mb-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <p className="text-lg font-medium">Publications will be added here in the future.</p>
          </div>
        </motion.div>
      </Section>

      {/* 4. GIS & RS Maps Gallery */}
      <Section>
        <div className="mb-10 border-b border-white/[0.08] pb-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl text-center sm:text-left">
            GIS &amp; Remote Sensing Maps
          </h2>
          <p className="mt-3 text-ink-muted text-lg text-center sm:text-left">
            A visual portfolio of exploratory mapping and geospatial visualizations.
          </p>
        </div>

        {/* Masonry gallery grid */}
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {mapImages.map((src) => {
            const alt = src.split("/").pop()?.replace(/\.(png|jpg|jpeg)$/i, "").replace(/[-_]/g, " ") ?? "GIS Map";
            return (
              <div
                key={src}
                className="group mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-white/[0.06] bg-surface-elevated/40 shadow-md transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                onClick={() => setLightboxSrc(src)}
              >
                <div className="relative">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[rgb(var(--accent)/0.12)] px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-surface shadow-inner shadow-white/5"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            View all GIS & Remote Sensing Maps
          </Link>
        </div>
      </Section>

      {/* 5. Research Positions */}
      <Section>
        <div className="mb-10 text-center sm:text-left border-b border-white/[0.08] pb-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Research Positions
          </h2>
        </div>
        <div className="max-w-3xl space-y-6">
          {researchPositions.map((pos, i) => (
            <motion.div
              key={pos.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-[rgb(var(--accent)/0.15)] bg-gradient-to-r from-surface-elevated/80 to-[rgb(var(--accent)/0.05)] p-5 sm:p-6 shadow-xl backdrop-blur-md transition-all hover:border-[rgb(var(--accent)/0.4)] hover:shadow-[rgb(var(--accent)/0.1)]"
            >
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center transition-transform hover:scale-110">
                <Image
                  src={pos.logo}
                  alt={pos.org}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain filter drop-shadow-md"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-display text-xl font-bold text-ink mb-1">
                  {pos.org}
                </h3>
                <p className="text-base font-medium text-accent">
                  {pos.role}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-start gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-surface-elevated/80 px-3.5 py-1 text-sm font-medium text-ink-muted border border-white/5 shadow-sm">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    {pos.period}
                  </span>
                  <a
                    href={pos.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-surface"
                  >
                    View Network
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Subtle organizational decorative badge */}
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none -translate-y-1/4 translate-x-1/4 select-none blur-sm">
                <svg className="h-48 w-48 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Global Lightbox for Maps */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl"
            onClick={() => setLightboxSrc(null)}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px" }}
          >
            {/* Close button — absolutely pinned to viewport corner */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
              className="absolute right-5 top-5 sm:right-8 sm:top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 border border-white/20 z-[210]"
              aria-label="Close lightbox"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image wrapper — stops click propagation, constrains size */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "min(90vw, 1100px)",
                maxHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={lightboxSrc}
                alt="Enlarged GIS Map"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  width: "auto",
                  height: "auto",
                  display: "block",
                  borderRadius: "12px",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
