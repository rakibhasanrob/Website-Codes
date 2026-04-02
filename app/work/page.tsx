import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
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
        <PageHeader
          title="Projects"
          description="Explore my work across data animation, interactive dashboards, GIS mapping, and research visualizations."
        />
      </Section>
      <ProjectsContent />
    </>
  );
}
