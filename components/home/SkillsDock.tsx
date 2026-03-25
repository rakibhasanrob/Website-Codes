"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/Button";

const coreSkills = [
  { name: "Data Analysis", icon: "📊" },
  { name: "Geospatial Analysis", icon: "🌍" },
  { name: "Statistical Analysis", icon: "📈" },
  { name: "Interactive Data Visualization", icon: "🖥️" },
  { name: "Web Data Animation", icon: "🎞️" },
  { name: "Research", icon: "🔬" },
  { name: "Machine Learning", icon: "🤖" },
];

const tools = [
  { name: "Python", icon: "🐍" },
  { name: "Power BI", icon: "📉" },
  { name: "ArcGIS Pro", icon: "🗺️" },
  { name: "QGIS", icon: "🌐" },
  { name: "Google Earth Engine", icon: "🛰️" },
  { name: "JavaScript", icon: "⚡" },
];

function Dock({ items, title }: { items: { name: string; icon: string }[]; title: string }) {
  return (
    <div className="mb-14 flex flex-col items-center">
      <h3 className="mb-6 font-display text-xl font-medium text-ink-muted">
        {title}
      </h3>
      {/* The Dock Base */}
      <div className="relative flex flex-wrap justify-center gap-3 rounded-[2rem] border border-white/[0.1] bg-surface-elevated/40 px-6 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:gap-5 sm:px-8 sm:py-5">
        {/* Dock inner glass reflection */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.5, y: -12, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="group relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-surface-elevated to-surface shadow-md ring-1 ring-white/[0.15] sm:h-20 sm:w-20 transition-all duration-300 hover:shadow-2xl hover:shadow-[rgb(var(--accent)/0.3)]"
          >
            <span className="text-3xl filter drop-shadow-md sm:text-4xl">
              {item.icon}
            </span>
            {/* macOS Dock style tooltip */}
            <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 scale-0 whitespace-nowrap rounded-md bg-surface-elevated/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-xl ring-1 ring-white/10 transition-all duration-200 group-hover:scale-100 backdrop-blur-md">
              {item.name}
              {/* Tooltip triangle indicator */}
              <div className="absolute left-1/2 -bottom-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-surface-elevated/95 ring-1 ring-white/10 border-t-0 border-l-0" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function SkillsDock() {
  return (
    <Section className="mt-20 sm:mt-28 mb-20 z-10 relative">
      <div className="mb-14 text-center">
        <h2 className="font-display text-3xl font-semibold text-ink">Skills & Tools</h2>
        <p className="mt-3 text-ink-muted max-w-2xl mx-auto">
          The core methodologies and dedicated software I use to bring complex data to life.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        <Dock title="Core Skills" items={coreSkills} />
        <Dock title="Tools" items={tools} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex justify-center"
      >
        <ButtonLink href="/skills" variant="primary">
          View All Skills
        </ButtonLink>
      </motion.div>
    </Section>
  );
}
