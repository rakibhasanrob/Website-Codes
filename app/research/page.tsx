import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Section } from "@/components/Section";
import { researchItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research Portfolio",
  description: `Research projects and publications by ${site.name}.`,
};

export default function ResearchPage() {
  return (
    <Section>
      <PageHeader
        title="Research portfolio"
        description="Papers, theses, lab work, and other research outputs. Each card links to a detail page you can extend with PDFs and citations."
      />
      <PortfolioGrid items={researchItems} basePath="/research" />
    </Section>
  );
}
