import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { ResearchPageContent } from "@/components/research/ResearchPageContent";

export const metadata: Metadata = {
  title: "Research Portfolio",
  description: `Research interests, academic projects, and maps by ${site.name}.`,
};

export default function ResearchPage() {
  return (
    <div className="pb-16 pt-32">
      <Section className="mb-16 text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Research Portfolio
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-lg text-ink-muted leading-relaxed">
          A centralized showcase of my core academic interests, professional investigations, geospatial mapping portfolios, and organizational research activities.
        </p>
      </Section>
      <ResearchPageContent />
    </div>
  );
}
