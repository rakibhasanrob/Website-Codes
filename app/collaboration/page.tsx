import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { CollaborationContent } from "@/components/collaboration/CollaborationContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collaboration",
  description: `Collaborate with ${site.name} on data analytics, geospatial analysis, research visualizations, and more.`,
};

export default function CollaborationPage() {
  return (
    <>
      <Section>
        <header className="mb-10 mt-8 sm:mb-14 sm:mt-12 text-center">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Let&apos;s Collaborate
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-ink-muted text-balance">
            I&apos;m open to working with researchers, students, and organizations on data, GIS, and research projects.
          </p>
        </header>
      </Section>
      <CollaborationContent />
    </>
  );
}
