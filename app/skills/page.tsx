import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { skillGroups } from "@/lib/skills";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical skills and tools used by ${site.name}.`,
};

export default function SkillsPage() {
  return (
    <Section>
      <PageHeader
        title="Skills"
        description="Grouped capabilities you can edit in lib/skills.ts. Swap items for your real stack and add proficiency later if you want."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <Card key={group.title} className="flex flex-col">
            <h2 className="font-display text-lg font-semibold text-ink">{group.title}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-surface/60 px-3 py-1 text-sm text-ink-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
