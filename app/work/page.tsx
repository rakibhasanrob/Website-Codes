import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Section } from "@/components/Section";
import { workItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work Portfolio",
  description: `Selected professional and product work by ${site.name}.`,
};

export default function WorkPage() {
  return (
    <Section>
      <PageHeader
        title="Work portfolio"
        description="Case studies, shipped products, and collaborations. Detail pages are ready for screenshots, stack notes, and outcomes."
      />
      <PortfolioGrid items={workItems} basePath="/work" />
    </Section>
  );
}
