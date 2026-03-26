import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PersonalIntro } from "@/components/about/PersonalIntro";
import { ResumeSection } from "@/components/about/ResumeSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — background, education, skills, and experience in geography, data analysis, and geospatial tools.`,
};

export default function AboutPage() {
  return (
    <Section>
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          About
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-lg text-ink-muted text-balance">
          A closer look at who I am, my journey, and what drives my work in data and spatial analysis.
        </p>
      </div>
      <PersonalIntro />
      <ResumeSection />
    </Section>
  );
}
