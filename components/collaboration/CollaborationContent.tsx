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
    image: "/colab_pic/Data Animation.svg",
    link: "/work?category=data-animation",
  },
  {
    title: "Map Animation",
    description: "Dynamic, animated maps that reveal spatial patterns and geographic narratives.",
    image: "/colab_pic/Map Animation.svg",
    link: "/work?category=map-animation",
  },
  {
    title: "Interactive Dashboards",
    description: "Real-time, filterable dashboards for business intelligence and performance tracking.",
    image: "/colab_pic/Interactive Dashboards.jpg",
    link: "/work?category=dashboards",
  },
  {
    title: "Business Visualizations",
    description: "Clear, impactful charts and infographics that translate complex business data into clarity.",
    image: "/colab_pic/Business Visualizations.svg",
    link: "/work?category=business-visuals",
  },
  {
    title: "Research Visualizations",
    description: "Publication-ready figures, statistical plots, and scientific data visualizations.",
    image: "/colab_pic/Research Visualizations.svg",
    link: "/work?category=research-visuals",
  },
  {
    title: "GIS & Remote Sensing",
    description: "Spatial analysis, satellite imagery processing, and environmental mapping solutions.",
    image: "/colab_pic/GIS & Remote Sensing.png",
    link: "/work?category=gis-maps",
  },
  {
    title: "Interactive Web Maps",
    description: "Web-based interactive mapping experiences with custom layers and user interaction.",
    image: "/colab_pic/Interactive Web Maps.jpg",
    link: "/work?category=web-maps",
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



/* ─── Component ─────────────────────────────────────── */

export function CollaborationContent() {
  return (
    <>
      {/* ═══════ WAYS TO COLLABORATE ═══════ */}
      <Section className="mt-10 sm:mt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Ways to Collaborate
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collaborationTypes.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                className="group relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl shadow-xl shadow-black/10"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 group-hover:saturate-150 group-hover:contrast-125"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-xl font-bold text-white shadow-black drop-shadow-md decoration-accent group-hover:underline underline-offset-4 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90 line-clamp-3">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/40 bg-black/40 px-4 py-2 text-sm font-semibold text-accent backdrop-blur-sm transition-all hover:bg-accent/20 hover:text-white"
                  >
                    View Related Projects
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-accent/40 rounded-2xl pointer-events-none" />
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
              Worked with a diverse range of clients including startups, small businesses, and independent professionals.
            </p>
          </motion.div>

          {/* Marquee scroll */}
          <motion.div
            variants={fadeIn}
            className="relative mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-elevated/40 py-10 shadow-xl backdrop-blur-md"
          >
            {/* Decorative edge gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[rgb(30,30,30,0.8)] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[rgb(30,30,30,0.8)] to-transparent z-10" />

            <div className="flex w-full overflow-hidden">
              <motion.div
                className="flex shrink-0 items-center gap-16 px-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {[...companies, ...companies].map((company, i) => (
                  <div key={`${company.name}-${i}`} className="flex shrink-0 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={`/Companies I have worked with/${company.file}`}
                      alt={company.name}
                      width={160}
                      height={80}
                      className="max-h-12 w-auto object-contain sm:max-h-14 opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
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
              Whether it&apos;s a research collab, a quick freelance project, or just an interesting idea you want to talk through — feel free to reach out.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" variant="primary" className="px-8 py-3.5 text-base">
                Get in Touch
              </ButtonLink>
              <ButtonLink href="/about" variant="outline" className="px-8 py-3.5 text-base">
                Know more about me
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
