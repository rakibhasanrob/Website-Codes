import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
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
        <PageHeader
          title="Let's Collaborate"
          description="Open to partnerships in data analytics, geospatial science, and research-driven projects with researchers, students, and organizations."
        />
      </Section>
      <CollaborationContent />
    </>
  );
}
