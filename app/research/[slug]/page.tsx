import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { getResearchBySlug, researchItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return researchItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.summary,
    openGraph: { title: item.title, description: item.summary },
  };
}

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) notFound();

  return (
    <Section>
      <nav className="mb-8 text-sm text-ink-muted" aria-label="Breadcrumb">
        <Link href="/research" className="hover:text-accent">
          Research
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
                Open external resource
              </ButtonLink>
            </div>
          ) : null}
        </header>
        <Card>
          <div className="aspect-video rounded-xl bg-gradient-to-br from-accent/20 to-surface-elevated ring-1 ring-white/5" />
          <div className="mt-8 max-w-none">
            <h2 className="font-display text-xl font-semibold text-ink">Overview</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Replace this block with abstract, motivation, methods, and results. You can later
              move long-form content to MDX or CMS if needed.
            </p>
            <h2 className="mt-10 font-display text-xl font-semibold text-ink">Citation</h2>
            <p className="mt-3 font-mono text-sm text-ink-muted">
              Your Name. ({item.year ?? "Year"}). {item.title}. <em>Venue</em>.
            </p>
          </div>
        </Card>
        <p className="mt-10 text-center text-sm text-ink-muted">
          Questions?{" "}
          <Link href="/contact" className="font-medium text-accent hover:underline">
            Contact {site.name.split(" ")[0] ?? site.name}
          </Link>
        </p>
      </article>
    </Section>
  );
}
