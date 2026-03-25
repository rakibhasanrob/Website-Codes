"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/Button";

const researchProjects = [
  {
    type: "Academic Field Report",
    title: "Physical and Socio-economic Status: A Case Study on Kuakata and Nearby Areas, Kalapara Upazila, Patuakhali District",
    image: "/report2024.png",
    link: "/research",
  },
  {
    type: "Academic Field Report",
    title: "Socio-Economic, Physical, Mechanical and Chemical Profile of Sundarbans Mangrove Ecosystem and Surroundings",
    image: "/report2025.png",
    link: "/research",
  },
];

export function TopResearch() {
  return (
    <Section className="mt-20 sm:mt-28">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-semibold text-ink">Top Research</h2>
        <p className="mt-2 text-ink-muted">A selection of my best academic and field studies.</p>
      </div>
      
      {/* Horizontal Scroll Gallery */}
      <div className="flex gap-6 overflow-x-auto py-6 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {researchProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex w-[85vw] sm:w-[350px] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-elevated/40 shadow-lg backdrop-blur-md transition-all hover:border-[rgb(var(--accent)/0.3)] hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/95 to-transparent" />
            </div>
            <div className="relative flex flex-1 flex-col justify-between p-6 -mt-20 z-10">
              <div>
                <span className="inline-block rounded-full bg-[rgb(var(--accent)/0.2)] px-3 py-1 text-xs font-semibold text-accent backdrop-blur-md shadow-sm">
                  {project.type}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink leading-snug">
                  {project.title}
                </h3>
              </div>
              <Link href={project.link} className="mt-6 inline-flex items-center text-sm font-bold text-accent transition-colors hover:text-accent-dim">
                Read more
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
        
        {/* Explore More Card at end of scroll */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex w-[85vw] sm:w-[300px] shrink-0 snap-center items-center justify-center rounded-2xl border-2 border-dashed border-white/[0.15] bg-surface-elevated/10 p-6 transition-colors hover:border-[rgb(var(--accent)/0.4)] hover:bg-surface-elevated/20"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--accent)/0.15)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h3 className="mb-5 font-display text-lg font-semibold text-ink">Want to see more?</h3>
            <ButtonLink href="/research" variant="primary">
              Explore More
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
