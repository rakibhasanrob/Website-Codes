import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { getWorkBySlug, workItems } from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.summary,
    openGraph: { title: item.title, description: item.summary },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  return (
    <Section>
      <nav className="mb-8 text-sm text-ink-muted" aria-label="Breadcrumb">
        <Link href="/work" className="hover:text-accent">
          Work
        </Link>
        <span className="mx-2 opacity-50">/</span>
        <span className="text-ink">{item.title}</span>
      </nav>
      <article>
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 text-xs text-ink-muted">
            {item.year ? (
              <span className="rounded-md bg-white/5 px-2 py-0.5">{item.year}</span>
            ) : null}
            {item.role ? (
              <span className="rounded-md bg-white/5 px-2 py-0.5">{item.role}</span>
            ) : null}
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{item.summary}</p>
          {item.href ? (
            <div className="mt-8">
              <ButtonLink href={item.href} target="_blank" rel="noopener noreferrer">
                View live / case study
              </ButtonLink>
            </div>
          ) : null}
        </header>
        <Card>
          <div className="aspect-video rounded-xl bg-gradient-to-br from-accent/15 to-surface-elevated ring-1 ring-white/5" />
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Problem
              </h2>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                What needed solving — replace with your framing.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Approach
              </h2>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                Process, stack, and tradeoffs you navigated.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Outcome
              </h2>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                Metrics, learnings, or qualitative impact.
              </p>
            </div>
          </div>
        </Card>
        <p className="mt-10 text-center text-sm text-ink-muted">
          <Link href="/contact" className="font-medium text-accent hover:underline">
            Discuss a similar project
          </Link>
        </p>
      </article>
    </Section>
  );
}
