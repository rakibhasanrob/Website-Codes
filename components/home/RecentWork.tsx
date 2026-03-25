"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/Button";

const workProjects = [
  {
    type: "Power BI Dashboard",
    title: "Ecommerce Sales Analysis Power BI Dashboard",
    image: "/dashboard1.png",
    link: "/work",
  },
  {
    type: "Excel Dashboard",
    title: "AdventureWorks Sales Analysis Dashboard",
    image: "/dashboard2.png",
    link: "/work",
  },
  {
    type: "Data Animation",
    title: "Scatter Plot Data Animation",
    image: "/Scatter_plot.png",
    link: "/work",
  },
  {
    type: "Map Animation",
    title: "Origin–Destination Flow Map with intensity (heat) layers",
    image: "/flow_map.png",
    link: "/work",
  },
  {
    type: "Map Visualization",
    title: "Choropleth Map with Proportional Symbols",
    image: "/mapvisual1.png",
    link: "/work",
  },
  {
    type: "GIS Map",
    title: "Vegetation Risk Susceptibility Map using XGBoost ML Model",
    image: "/gismap1.png",
    link: "/work",
  },
];

export function RecentWork() {
  return (
    <Section className="mt-20 sm:mt-28 mb-24">
      <div className="mb-12">
        <h2 className="font-display text-3xl font-semibold text-ink">Recent Work Highlights</h2>
        <p className="mt-3 text-ink-muted max-w-2xl">
          Explore interactive dashboards, data animations, and visualizations from real-world projects.
        </p>
      </div>

      {/* Grid Display */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-elevated/40 shadow-lg backdrop-blur-md transition-all hover:border-[rgb(var(--accent)/0.3)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
          >
            <Link href={project.link} className="flex h-full flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized={project.image.endsWith('.gif')}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">
                  {project.type}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent-dim">
                  {project.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-14 flex justify-center"
      >
        <ButtonLink href="/work" variant="primary">
          View All Projects
        </ButtonLink>
      </motion.div>
    </Section>
  );
}
