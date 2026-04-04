"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const collaborationTypes = [
  {
    title: "Data Anim.",
    fullTitle: "Data Animation",
    description: "Bring datasets to life with motion-based storytelling.",
    image: "/colab_pic/Data Animation.svg",
    link: "/work?category=data-animation",
  },
  {
    title: "Map Anim.",
    fullTitle: "Map Animation",
    description: "Dynamic, animated maps revealing spatial patterns.",
    image: "/colab_pic/Map Animation.svg",
    link: "/work?category=map-animation",
  },
  {
    title: "Dashboards",
    fullTitle: "Interactive Dashboards",
    description: "Real-time, filterable dashboards for performance.",
    image: "/colab_pic/Interactive Dashboards.jpg",
    link: "/work?category=dashboards",
  },
  {
    title: "Biz Viz",
    fullTitle: "Business Visualizations",
    description: "Clear, impactful charts turning data into clarity.",
    image: "/colab_pic/Business Visualizations.svg",
    link: "/work?category=business-visuals",
  },
  {
    title: "Research Viz",
    fullTitle: "Research Visualizations",
    description: "Publication-ready figures and statistical plots.",
    image: "/colab_pic/Research Visualizations.svg",
    link: "/work?category=research-visuals",
  },
  {
    title: "GIS & RS",
    fullTitle: "GIS & Remote Sensing",
    description: "Spatial analysis and imagery processing solutions.",
    image: "/colab_pic/GIS & Remote Sensing.png",
    link: "/work?category=gis-maps",
  },
];

export function HomeCollaboration() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section className="mt-20 sm:mt-28 mb-10">
      <div className="mb-10 text-center sm:text-left border-b border-white/[0.08] pb-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ways to Collaborate
        </h2>
      </div>

      {/* Interactive Accordion Row */}
      <div className="flex flex-col sm:flex-row h-[600px] sm:h-[400px] w-full gap-2 sm:gap-3 mb-24">
        {collaborationTypes.map((item, i) => {
          const isHovered = hoveredIndex === i;
          const isPassive = hoveredIndex !== null && hoveredIndex !== i;
          return (
            <motion.div
              key={item.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg shadow-black/10 border border-white/5"
              initial={false}
              animate={{
                flex: isHovered ? 4 : isPassive ? 0.8 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={item.image}
                alt={item.fullTitle}
                fill
                className={`object-cover transition-all duration-700 ${isHovered ? "scale-105 opacity-90 saturate-150" : "opacity-40 grayscale"}`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-5 ${isHovered ? "min-w-[200px]" : "min-w-0"}`}>
                <div className={`transition-all duration-300 sm:w-max ${isHovered ? "translate-y-0" : "translate-y-2 max-w-full"}`}>
                  <h3 
                    className={`font-display font-bold text-white shadow-black drop-shadow-md transition-all duration-300 ${isHovered ? "text-xl sm:text-2xl mb-2 whitespace-normal" : "text-sm sm:text-base truncate mb-0 opacity-80"} w-full`}
                    style={typeof window !== 'undefined' && window.innerWidth >= 640 && !isHovered ? { writingMode: 'vertical-rl', transform: 'rotate(180deg)' } : {}}
                  >
                    {isHovered ? item.fullTitle : item.title}
                  </h3>
                  
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden sm:max-w-xs"
                  >
                    <p className="text-sm text-white/90 leading-snug line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent"
                    >
                      View Projects
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fiverr Highlight Block - Compact & Subtle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.05] bg-surface-elevated/30 px-6 py-8 backdrop-blur-sm sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-6 text-center md:text-left flex-1">
          {/* Subtle Fiverr Logo */}
          <div className="shrink-0 hidden sm:flex items-center justify-center p-3 rounded-full bg-[#1dbf73]/10 text-[#1dbf73]">
            <svg viewBox="0 0 100 100" className="w-10 h-10" fill="currentColor">
              <path d="M82.6,35.4h-9V21.1h-16v14.3h-10v16.1h10v20.4c0,3.3,2.4,5.9,5.5,5.9h10V61.5h-8.2 v-10h17.8V35.4z M40.7,35.4h-16v16.1h16V35.4z"/>
              <circle cx="21" cy="28.1" r="9"/>
            </svg>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-ink mb-1.5 flex items-center gap-2 justify-center md:justify-start">
              Work With Me on Fiverr
              <span className="sm:hidden text-[#1dbf73]">
                <svg viewBox="0 0 100 100" className="w-5 h-5 inline" fill="currentColor">
                  <path d="M82.6,35.4h-9V21.1h-16v14.3h-10v16.1h10v20.4c0,3.3,2.4,5.9,5.5,5.9h10V61.5h-8.2 v-10h17.8V35.4z M40.7,35.4h-16v16.1h16V35.4z"/>
                  <circle cx="21" cy="28.1" r="9"/>
                </svg>
              </span>
            </h3>
            <p className="text-ink-muted text-sm leading-relaxed max-w-lg">
              Streamlined services & quick turnarounds for data visualization, mapping, and dashboards.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 shrink-0">
          <a 
            href="https://www.fiverr.com/rakibhasanrob" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#1dbf73] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#19a463] hover:shadow-[0_0_15px_rgba(29,191,115,0.4)]"
          >
            Fiverr Profile
          </a>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-surface-elevated/80 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-white/5 hover:border-white/20"
          >
            Direct Contact
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
