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
    <>
      <Section>
        <header className="mb-12 sm:mb-16 text-center">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Research Portfolio
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-ink-muted text-balance">
            My research work — field reports, GIS projects, and the academic stuff I&apos;ve been part of.
          </p>
        </header>
      </Section>
      <ResearchPageContent />
    </>
  );
}
