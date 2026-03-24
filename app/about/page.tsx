import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — background, focus areas, and what drives the work.`,
};

const milestones = [
  { year: "2024", text: "Placeholder: current role or degree milestone." },
  { year: "2022", text: "Placeholder: earlier role, publication, or project." },
  { year: "2020", text: "Placeholder: education or career start." },
];

export default function AboutPage() {
  return (
    <Section>
      <PageHeader
        title="About"
        description="A short introduction you can replace with your story, values, and what you are looking for next."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
        <div className="space-y-8">
          <Card>
            <h2 className="font-display text-xl font-semibold text-ink">Bio</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Replace this paragraph with who you are, the problems you care about, and how you
              like to work. Keep it conversational but specific enough that visitors remember you.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Add a second paragraph for context: industries, domains, or communities you have
              contributed to. Link out to your research and work pages where it helps.
            </p>
          </Card>
          <Card>
            <h2 className="font-display text-xl font-semibold text-ink">Timeline</h2>
            <ol className="mt-6 space-y-6 border-l border-white/10 pl-6">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface" />
                  <span className="text-sm font-semibold text-accent">{m.year}</span>
                  <p className="mt-1 text-ink-muted">{m.text}</p>
                </li>
              ))}
            </ol>
          </Card>
        </div>
        <aside className="space-y-6">
          <Card className="overflow-hidden p-0">
            <div className="aspect-[4/5] bg-gradient-to-b from-accent/30 to-surface-elevated" />
            <div className="p-6">
              <p className="font-display text-lg font-semibold text-ink">{site.name}</p>
              <p className="mt-1 text-sm text-ink-muted">Photo: add yours to public/profile.jpg</p>
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
              Focus
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>Research & experimentation</li>
              <li>Product & interface craft</li>
              <li>Collaboration & mentorship</li>
            </ul>
          </Card>
        </aside>
      </div>
    </Section>
  );
}
