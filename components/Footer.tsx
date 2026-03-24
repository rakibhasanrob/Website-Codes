import Link from "next/link";
import { site } from "@/lib/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, hoverClass: "hover:text-[#0A66C2]" },
  { label: "Facebook", href: site.social.facebook, hoverClass: "hover:text-[#1877F2]" },
  { label: "Instagram", href: site.social.instagram, hoverClass: "hover:text-[#E4405F]" },
  { label: "GitHub", href: site.social.github, hoverClass: "hover:text-black dark:hover:text-white" },
  { label: "Fiverr", href: site.social.fiverr, hoverClass: "hover:text-[#1DBF73]" },
  { label: "Email", href: `mailto:${site.email}`, hoverClass: "hover:text-[#2563EB]" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/[0.06] bg-surface-elevated/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-ink-muted">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full border border-[rgb(var(--ink-muted)/0.28)] bg-surface/65 px-4 py-2 text-sm text-ink-muted transition-colors ${item.hoverClass}`}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
