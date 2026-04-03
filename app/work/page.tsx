import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { ProjectsContent } from "@/components/work/ProjectsContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${site.name}'s portfolio — data animations, map visualizations, interactive dashboards, GIS analysis, and more.`,
};

export default function WorkPage() {
  return (
    <>
      <Section>
        <header className="mb-12 sm:mb-16 text-center">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-ink-muted text-balance">
            Things I&apos;ve made — maps, dashboards, animations, and visualizations across different projects.
          </p>
        </header>
      </Section>
      <ProjectsContent />
    </>
  );
}
