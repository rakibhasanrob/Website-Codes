"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import Link from "next/link";
import { type ReactNode } from "react";

// Colorful SVG representations for Core Skills
const IconDataAnalysis = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <rect x="3" y="14" width="4" height="6" fill="#4F46E5" rx="1" />
    <rect x="10" y="8" width="4" height="12" fill="#06B6D4" rx="1" />
    <rect x="17" y="4" width="4" height="16" fill="#F59E0B" rx="1" />
  </svg>
);
const IconGeo = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <circle cx="12" cy="12" r="9" fill="#10B981" fillOpacity="0.2" />
    <path d="M12 3a9 9 0 000 18A9 9 0 0012 3z" fill="#0EA5E9" />
    <path d="M5 10c2 1 4 0 6-2s2-3 4-2 3 3 5 2" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);
const IconStats = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <polyline points="3,17 9,11 15,14 21,5" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="11" r="2.5" fill="#F59E0B" />
    <circle cx="15" cy="14" r="2.5" fill="#3B82F6" />
    <circle cx="21" cy="5" r="2.5" fill="#10B981" />
  </svg>
);
const IconViz = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <path d="M12 2v10l8.5 5A10 10 0 1012 2z" fill="#8B5CF6" />
    <path d="M12 2v10l8.5 5A10 10 0 0012 2z" fill="#C4B5FD" />
    <path d="M14 13l8.5-5A10 10 0 0012 2v10h2z" fill="#F43F5E" />
  </svg>
);
const IconAnim = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <rect x="2" y="5" width="20" height="14" fill="#334155" rx="2" />
    <polygon points="10,8 16,12 10,16" fill="#10B981" />
    <line x1="2" y1="9" x2="4" y2="9" stroke="#64748B" strokeWidth="2" />
    <line x1="2" y1="15" x2="4" y2="15" stroke="#64748B" strokeWidth="2" />
    <line x1="20" y1="9" x2="22" y2="9" stroke="#64748B" strokeWidth="2" />
    <line x1="20" y1="15" x2="22" y2="15" stroke="#64748B" strokeWidth="2" />
  </svg>
);
const IconResearch = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <path d="M9 3v8l-4 8h14l-4-8V3" fill="#D8B4FE" stroke="#9333EA" strokeWidth="2" strokeLinejoin="round" />
    <path d="M7 15h10" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="15" r="1.5" fill="#9333EA" />
    <circle cx="10" cy="17" r="1" fill="#9333EA" />
  </svg>
);
const IconML = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <rect x="4" y="4" width="16" height="16" rx="4" fill="#E2E8F0" />
    <circle cx="9" cy="9" r="2.5" fill="#3B82F6" />
    <circle cx="15" cy="9" r="2.5" fill="#EF4444" />
    <circle cx="12" cy="15" r="2.5" fill="#10B981" />
    <path d="M9 11l3 4l3-4" stroke="#64748B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Colorful SVG representations for Tools
const IconPython = () => (
  <svg viewBox="0 0 128 128" className="h-full w-full">
    <path fill="#3776AB" d="M64 12c-26.6 0-30.8 11.5-30.8 11.5l.1 11.6h31.4v4H32c-15.6 0-20.9 9.8-19.9 22.1 1 12 6.5 21.6 20.9 21.6h5.8v-11s-1.1-13 11.8-13h23s12.5-1.2 12.5-12.8V33s1.7-21-22.1-21zm-15.3 16.5c2.8 0 5 2.2 5 5 0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5 0-2.8 2.2-5 5-5z" />
    <path fill="#FFD43B" d="M63 115.9c26.6 0 30.8-11.5 30.8-11.5l-.1-11.6H62.3v-4h32.7c15.6 0 20.9-9.8 19.9-22.1-1-12-6.5-21.6-20.9-21.6h-5.8v11s1.1 13-11.8 13h-23s-12.5 1.2-12.5 12.8v13.5s-1.7 21 22.1 21zm15.3-16.5c-2.8 0-5-2.2-5-5 0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5 0 2.8-2.2 5-5 5z" />
  </svg>
);
const IconPowerBI = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <rect x="3" y="14" width="5" height="8" fill="#E6C839" />
    <rect x="9" y="8" width="5" height="14" fill="#F2C811" />
    <rect x="15" y="2" width="5" height="20" fill="#F9A825" />
  </svg>
);
const IconArcGIS = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <circle cx="12" cy="12" r="10" fill="#005C9E" />
    <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="#2B93D2" strokeWidth="1.5" />
    <path d="M2 12h20" stroke="#2B93D2" strokeWidth="1.5" />
  </svg>
);
const IconQGIS = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <circle cx="12" cy="12" r="9" fill="#88C245" />
    <circle cx="12" cy="12" r="5" fill="#3D5028" />
    <path d="M15 15l4 4" stroke="#88C245" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
const IconGEE = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <path d="M12 2L2 22h20L12 2z" fill="#4285F4" />
    <circle cx="12" cy="14" r="4" fill="#34A853" />
    <circle cx="18" cy="18" r="2" fill="#FBBC05" />
  </svg>
);
const IconJS = () => (
  <svg viewBox="0 0 24 24" className="h-full w-full bg-[#F7DF1E] rounded-sm">
    <path d="M11.6 17.6c-.3-1.1-.9-1.6-2.2-1.6-1.5 0-2.3 1-2.3 2.5 0 1.6.9 2.4 2.5 2.4 1.7 0 2.6-1.1 2.8-2.6h2c-.3 2.7-2.1 4.3-4.8 4.3-3 0-4.6-1.8-4.6-4.3 0-2.5 1.7-4.3 4.4-4.3 2.4 0 4.1 1.4 4.4 3.6h-2.2zm7.4 2.8c-1.1.9-2.5 1.3-4.1 1.3-3 0-4.6-1.8-4.6-4.3h2.1c0 1.6.8 2.5 2.5 2.5.9 0 1.6-.4 1.6-1 0-.6-.5-1-2-1.4-2.4-.6-3.8-1.5-3.8-3.4 0-2 1.5-3.5 3.9-3.5 1.6 0 2.9.5 3.8 1.4l-1.4 1.6c-.7-.6-1.5-.9-2.4-.9-.8 0-1.4.3-1.4.9 0 .5.4.8 1.8 1.2 2.7.7 4 1.7 4 3.6 0 2.1-1.6 3.6-4 3.6h.1z" fill="#000" />
  </svg>
);

type DockItemType = {
  name?: string;
  icon?: ReactNode;
  isDivider?: boolean;
  isLink?: boolean;
  href?: string;
};

const mergedDock: DockItemType[] = [
  // Core Skills
  { name: "Data Analysis", icon: <IconDataAnalysis /> },
  { name: "Geospatial Analysis", icon: <IconGeo /> },
  { name: "Statistical Analysis", icon: <IconStats /> },
  { name: "Interactive Data Visualization", icon: <IconViz /> },
  { name: "Web Data Animation", icon: <IconAnim /> },
  { name: "Research", icon: <IconResearch /> },
  { name: "Machine Learning", icon: <IconML /> },
  
  // Divider
  { isDivider: true },
  
  // Tools
  { name: "Python", icon: <IconPython /> },
  { name: "Power BI", icon: <IconPowerBI /> },
  { name: "ArcGIS Pro", icon: <IconArcGIS /> },
  { name: "QGIS", icon: <IconQGIS /> },
  { name: "Google Earth Engine", icon: <IconGEE /> },
  { name: "JavaScript", icon: <IconJS /> },
  
  // Link Button
  { name: "View All Skills", isLink: true, href: "/about#accordion-education", icon: <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg> },
];

export function SkillsDock() {
  return (
    <Section className="mt-20 sm:mt-28 mb-20 z-10 relative">
      {/* Centered Heading */}
      <div className="mb-14 text-center">
        <h2 className="font-display text-3xl font-semibold text-ink">Skills & Tools</h2>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="flex justify-center" 
      >
        <div className="relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-3xl border border-white/[0.1] bg-surface-elevated/40 px-3 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          {mergedDock.map((item, index) => {
            // Divider
            if (item.isDivider) {
              return <div key={index} className="mx-1 h-8 w-[1.5px] rounded-full bg-white/10 sm:h-10" />;
            }

            const isLinkCard = item.isLink;

            const BaseContent = (
              <motion.div
                whileHover={{ scale: 1.5, y: -10, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 600, damping: 20 }}
                className={`group relative flex h-10 w-10 sm:h-12 sm:w-12 cursor-pointer items-center justify-center rounded-xl sm:rounded-2xl transition-all duration-100 hover:shadow-2xl ${
                  isLinkCard
                    ? "bg-accent/10 text-accent ring-1 ring-accent"
                    : "bg-surface-elevated text-ink ring-1 ring-white/[0.15] hover:shadow-[rgb(var(--accent)/0.3)] shadow-inner"
                }`}
              >
                {/* Responsive padding inside icon wrappers for non-buttons */}
                <div className={`filter drop-shadow-md w-full h-full flex items-center justify-center ${isLinkCard ? "p-3" : "p-2.5"}`}>
                  {item.icon}
                </div>
                
                {/* Tooltip */}
                <div className={`pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-0 whitespace-nowrap rounded-md px-3 py-1 text-xs font-semibold shadow-xl ring-1 ring-white/10 transition-all duration-150 group-hover:scale-100 backdrop-blur-md ${isLinkCard ? "bg-accent text-surface" : "bg-surface-elevated/95 text-ink"}`}>
                  {item.name}
                  <div className={`absolute left-1/2 -bottom-1 h-2 w-2 -translate-x-1/2 rotate-45 ring-1 ring-white/10 border-t-0 border-l-0 ${isLinkCard ? "bg-accent" : "bg-surface-elevated/95"}`} />
                </div>
              </motion.div>
            );

            if (isLinkCard && item.href) {
              return (
                <Link key={index} href={item.href} aria-label={item.name}>
                  {BaseContent}
                </Link>
              );
            }

            return <div key={index}>{BaseContent}</div>;
          })}
        </div>
      </motion.div>
    </Section>
  );
}
