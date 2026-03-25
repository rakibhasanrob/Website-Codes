"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/Section";
import { DynamicType } from "@/components/home/DynamicType";
import { ButtonLink } from "@/components/ui/Button";

const titles = [
  "Geospatial Data Analyst",
  "Data Animation & Visualization Expert",
  "Research Enthusiast",
];



const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakibhasanrob",
    hoverClass: "hover:text-[#0A66C2]",
    icon: (
      <path
        d="M6.94 8.5V18H3.8V8.5h3.14Zm.2-2.93c0 .92-.69 1.67-1.77 1.67h-.02c-1.05 0-1.73-.75-1.73-1.67 0-.94.7-1.67 1.77-1.67s1.73.73 1.75 1.67ZM20.2 12.55V18h-3.13v-5.1c0-1.28-.46-2.15-1.6-2.15-.88 0-1.4.6-1.63 1.18-.08.2-.1.48-.1.76V18H10.6s.04-8.75 0-9.5h3.14v1.35c.42-.65 1.17-1.58 2.86-1.58 2.08 0 3.6 1.36 3.6 4.28Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rakibhasanrob",
    hoverClass: "hover:text-[#1877F2]",
    icon: <path d="M14.2 8.4h2.2V5.2h-2.6c-3.1 0-3.8 2.03-3.8 3.7v1.9H8v3.14h2v5.86h3.14V13.94h2.55l.4-3.14h-2.95V9.2c0-.6.2-.8 1.06-.8Z" fill="currentColor" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rakibhasanrob",
    hoverClass: "hover:text-[#E4405F]",
    icon: (
      <>
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/rakibhasanrob",
    hoverClass: "hover:text-black dark:hover:text-white",
    icon: (
      <path
        d="M12 4a8 8 0 0 0-2.53 15.59c.4.08.55-.17.55-.38v-1.33c-2.23.48-2.7-.95-2.7-.95-.36-.92-.9-1.17-.9-1.17-.73-.5.06-.49.06-.49.82.06 1.24.84 1.24.84.7 1.2 1.83.85 2.28.65.07-.52.28-.86.5-1.06-1.78-.2-3.66-.9-3.66-3.96 0-.88.32-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .68-.22 2.2.82A7.43 7.43 0 0 1 12 7.8c.68 0 1.36.1 2 .28 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.93.08 2.13.52.56.83 1.27.83 2.15 0 3.07-1.88 3.76-3.67 3.96.29.24.54.73.54 1.48v2.2c0 .21.15.47.56.38A8 8 0 0 0 12 4Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/rakibhasanrob",
    hoverClass: "hover:text-[#1DBF73]",
    icon: <path d="M12 4.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM7 10.4h2v7.8h3.1v-7.8h2.2V8H12v-.6c0-.8.35-1.2 1.15-1.2H15V3.8h-2.4c-2.35 0-3.6 1.35-3.6 3.65V8H7v2.4Z" fill="currentColor" />,
  },
  {
    label: "Email",
    href: "mailto:contact@rakibhasan.rf.gd",
    hoverClass: "hover:text-[#2563EB]",
    icon: (
      <>
        <rect x="3.5" y="6.5" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.8 8.4 12 13l7.2-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
] as const;

export function HomeHero() {
  return (
    <Section className="relative py-12 sm:py-16 lg:py-20">
      <div className="relative overflow-visible rounded-3xl border border-white/10 bg-surface-elevated/40 px-5 py-10 shadow-2xl shadow-black/20 backdrop-blur-md sm:px-8 sm:py-12 lg:px-10 lg:py-14">

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Portfolio</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">Rakib Hasan</h1>
            <p className="mt-5 text-lg text-ink-muted sm:text-xl">
              <DynamicType words={titles} typingSpeed={130} deletingSpeed={70} pauseMs={2100} />
            </p>
            <p className="mt-6 max-w-xl text-ink-muted">
              My work focuses on data analytics, geospatial science, and research to explore real-world problems and support better policy-making.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" variant="primary">Get in touch</ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                Explore projects
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="mx-auto w-full max-w-md">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
              <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-[rgb(var(--ink-muted)/0.25)] bg-surface-elevated shadow-2xl shadow-black/30 sm:h-80 sm:w-80">
                <Image src="/my_pic1.jpeg" alt="Rakib Hasan portrait" width={420} height={420} className="h-full w-full object-cover" priority />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={item.label}
                    title={item.label}
                    className={`group inline-flex h-10 items-center overflow-hidden rounded-full border border-[rgb(var(--ink-muted)/0.28)] bg-surface-elevated/60 text-ink-muted transition-all duration-300 hover:w-auto hover:pr-3 ${item.hoverClass}`}
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                        {item.icon}
                      </svg>
                    </span>
                    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:ml-1.5 group-hover:max-w-32 group-hover:opacity-100">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
      </div>
      </div>
    </Section>
  );
}
