"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

/* ── Direct contact details ─────────────────────────── */

const contactDetails = [
  {
    label: "Email",
    value: "contact@rakibhasan.rf.gd",
    href: "mailto:contact@rakibhasan.rf.gd",
    secondaryValue: "rakibhasanrobben@gmail.com",
    secondaryHref: "mailto:rakibhasanrobben@gmail.com",
    icon: (
      <>
        <rect x="3.5" y="6.5" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.8 8.4 12 13l7.2-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    label: "Phone",
    value: "+880 1987418660",
    href: "tel:+8801987418660",
    icon: (
      <path
        d="M3 5.5a2.5 2.5 0 0 1 2.5-2.5h1.528c.476 0 .904.286 1.085.723l1.083 2.599a1.125 1.125 0 0 1-.3 1.3l-.993.828a.5.5 0 0 0-.125.543 10.052 10.052 0 0 0 5.83 5.83.5.5 0 0 0 .543-.126l.828-.992a1.125 1.125 0 0 1 1.3-.3l2.598 1.082c.438.182.724.61.724 1.086v1.527A2.5 2.5 0 0 1 18.5 19h-1A13.5 13.5 0 0 1 4 5.5h-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
];

/* ── Social links ───────────────────────────────────── */

const socialLinks = [
  {
    label: "GitHub",
    href: site.social.github,
    color: "hover:border-[#333]/50 dark:hover:border-white/30",
    hoverBg: "hover:bg-[#333]/10",
    iconColor: "group-hover:text-white",
    icon: (
      <path
        d="M12 4a8 8 0 0 0-2.53 15.59c.4.08.55-.17.55-.38v-1.33c-2.23.48-2.7-.95-2.7-.95-.36-.92-.9-1.17-.9-1.17-.73-.5.06-.49.06-.49.82.06 1.24.84 1.24.84.7 1.2 1.83.85 2.28.65.07-.52.28-.86.5-1.06-1.78-.2-3.66-.9-3.66-3.96 0-.88.32-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .68-.22 2.2.82A7.43 7.43 0 0 1 12 7.8c.68 0 1.36.1 2 .28 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.93.08 2.13.52.56.83 1.27.83 2.15 0 3.07-1.88 3.76-3.67 3.96.29.24.54.73.54 1.48v2.2c0 .21.15.47.56.38A8 8 0 0 0 12 4Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    color: "hover:border-[#0A66C2]/40",
    hoverBg: "hover:bg-[#0A66C2]/10",
    iconColor: "group-hover:text-[#0A66C2]",
    icon: (
      <path
        d="M6.94 8.5V18H3.8V8.5h3.14Zm.2-2.93c0 .92-.69 1.67-1.77 1.67h-.02c-1.05 0-1.73-.75-1.73-1.67 0-.94.7-1.67 1.77-1.67s1.73.73 1.75 1.67ZM20.2 12.55V18h-3.13v-5.1c0-1.28-.46-2.15-1.6-2.15-.88 0-1.4.6-1.63 1.18-.08.2-.1.48-.1.76V18H10.6s.04-8.75 0-9.5h3.14v1.35c.42-.65 1.17-1.58 2.86-1.58 2.08 0 3.6 1.36 3.6 4.28Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    color: "hover:border-[#1877F2]/40",
    hoverBg: "hover:bg-[#1877F2]/10",
    iconColor: "group-hover:text-[#1877F2]",
    icon: (
      <path
        d="M14.2 8.4h2.2V5.2h-2.6c-3.1 0-3.8 2.03-3.8 3.7v1.9H8v3.14h2v5.86h3.14V13.94h2.55l.4-3.14h-2.95V9.2c0-.6.2-.8 1.06-.8Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    color: "hover:border-[#E4405F]/40",
    hoverBg: "hover:bg-[#E4405F]/10",
    iconColor: "group-hover:text-[#E4405F]",
    icon: (
      <>
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" />
      </>
    ),
  },
];

/* ── Wrapper for animation delay ────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ── Component ──────────────────────────────────────── */

export function ContactInfo() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      {/* ── Direct Contact ───────────────────────────── */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-6 shadow-xl shadow-black/20 backdrop-blur-md"
      >
        <h2 className="font-display text-lg font-semibold text-ink flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </span>
          Direct Contact
        </h2>

        <div className="mt-5 space-y-4">
          {contactDetails.map((item) => (
            <div
              key={item.label}
              className={`group rounded-xl border border-white/[0.06] bg-gradient-to-br ${item.color} p-4 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5`}
            >
              <div className="flex items-start gap-3.5">
                <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface/60 ${item.iconColor} transition-colors`}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                    {item.icon}
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-muted/70">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="mt-1 block truncate text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    {item.value}
                  </a>
                  {item.secondaryValue && (
                    <a
                      href={item.secondaryHref}
                      className="mt-0.5 block truncate text-sm text-ink-muted transition-colors hover:text-accent"
                    >
                      {item.secondaryValue}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Social Media ─────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-6 shadow-xl shadow-black/20 backdrop-blur-md"
      >
        <h2 className="font-display text-lg font-semibold text-ink flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </span>
          Connect on Social
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-surface/40 px-4 py-3 text-ink-muted transition-all duration-300 ${item.color} ${item.hoverBg}`}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-elevated/80 text-ink-muted transition-colors ${item.iconColor}`}>
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 h-[18px] w-[18px]" aria-hidden>
                  {item.icon}
                </svg>
              </span>
              <span className="text-sm font-medium text-ink transition-colors group-hover:text-ink">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── Fiverr CTA ───────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-2xl border border-[#1DBF73]/20 bg-gradient-to-br from-[#1DBF73]/10 via-surface-elevated/60 to-[#1DBF73]/5 p-6 shadow-xl shadow-[#1DBF73]/5 backdrop-blur-md"
      >
        {/* Decorative glow */}
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#1DBF73]/10 blur-3xl" />
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#1DBF73]/8 blur-2xl" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1DBF73]/20 text-[#1DBF73]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  d="M12 4.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM7 10.4h2v7.8h3.1v-7.8h2.2V8H12v-.6c0-.8.35-1.2 1.15-1.2H15V3.8h-2.4c-2.35 0-3.6 1.35-3.6 3.65V8H7v2.4Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <h2 className="font-display text-lg font-semibold text-ink">
              Work With Me on Fiverr
            </h2>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Looking for professional freelance services? I offer GIS mapping,
            data visualization, web development, and more on Fiverr. Let&apos;s
            collaborate and bring your project to life!
          </p>

          <Link
            href={site.social.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#1DBF73] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1DBF73]/25 transition-all duration-300 hover:bg-[#19A463] hover:shadow-[#1DBF73]/35 hover:shadow-xl"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path
                d="M12 4.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM7 10.4h2v7.8h3.1v-7.8h2.2V8H12v-.6c0-.8.35-1.2 1.15-1.2H15V3.8h-2.4c-2.35 0-3.6 1.35-3.6 3.65V8H7v2.4Z"
                fill="currentColor"
              />
            </svg>
            View Fiverr Profile
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
