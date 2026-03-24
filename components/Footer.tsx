import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/[0.06] bg-surface-elevated/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-ink-muted">
          © {year} {site.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-6 text-sm">
          <li>
            <Link
              href={site.social.github}
              className="text-ink-muted transition hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href={site.social.linkedin}
              className="text-ink-muted transition hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href={site.social.scholar}
              className="text-ink-muted transition hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scholar
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
