import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactActions } from "@/components/contact/ContactActions";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — email and social links.`,
};

export default function ContactPage() {
  return (
    <Section>
      <PageHeader
        title="Contact"
        description="Reach out for collaborations, speaking, or opportunities. Update addresses in lib/site.ts."
      />
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <Card>
          <h2 className="font-display text-xl font-semibold text-ink">Direct</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Prefer email? Click below or use the form — it opens a draft in your mail app.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex text-lg font-medium text-accent hover:underline"
          >
            {site.email}
          </a>
          <ContactActions />
        </Card>
        <Card>
          <h2 className="font-display text-xl font-semibold text-ink">Elsewhere</h2>
          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-ink transition hover:border-accent/30 hover:text-accent"
              >
                GitHub
                <span aria-hidden>→</span>
              </Link>
            </li>
            <li>
              <Link
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-ink transition hover:border-accent/30 hover:text-accent"
              >
                LinkedIn
                <span aria-hidden>→</span>
              </Link>
            </li>
            <li>
              <Link
                href={site.social.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-ink transition hover:border-accent/30 hover:text-accent"
              >
                Google Scholar
                <span aria-hidden>→</span>
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
