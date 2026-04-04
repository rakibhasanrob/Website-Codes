"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

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

export function HomeResearchInterests() {
  return (
    <Section className="mt-20 sm:mt-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Research Interests
          </h2>
          <p className="mt-3 text-ink-muted max-w-2xl text-lg">Exploring the intersection of spatial data, natural environments, and predictive modeling.</p>
        </div>
        <Link 
          href="/research"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-surface-elevated/80 border border-white/10 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-[rgb(var(--accent)/0.1)] hover:border-[rgb(var(--accent)/0.3)] hover:text-accent hover:scale-105"
        >
          View Research Portfolio
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {researchInterests.map((interest, i) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative h-44 w-full overflow-hidden rounded-2xl shadow-lg shadow-black/10 transition-transform duration-500 hover:-translate-y-2"
          >
            <Image
              src={interest.img}
              alt={interest.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 group-hover:saturate-150"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-base font-bold text-white shadow-black drop-shadow-md leading-snug line-clamp-3">
                {interest.title}
              </h3>
            </div>
            <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-[rgb(var(--accent)/0.5)] rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
