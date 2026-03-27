import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collaboration",
  description: `Collaborate with ${site.name} on geospatial and data analysis projects.`,
};

export default function CollaborationPage() {
  return (
    <Section>
      <PageHeader
        title="Collaboration"
        description="I am always open to exploring new research ideas, data projects, and technical partnerships."
      />
      <div className="mx-auto max-w-3xl mt-12 space-y-8 text-ink-muted text-lg leading-relaxed mb-24">
        <p>
          Collaboration is at the heart of meaningful data analysis and research. I believe that bringing together diverse expertise leads to more robust insights and impactful solutions.
        </p>
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-surface-elevated/40 p-6 shadow-xl backdrop-blur-md sm:p-10">
          <h3 className="text-2xl font-display font-semibold text-ink mb-8 border-b border-white/10 pb-4">How We Can Work Together</h3>
          <ul className="space-y-8">
            <li className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-surface-elevated text-2xl shadow-inner shadow-white/10">
                🎓
              </div>
              <div>
                <strong className="text-ink font-semibold text-xl mb-2 block">Academic Research</strong>
                Partnering on papers, field studies, or exploratory models involving spatial analysis, statistical interpretation, or environmental science.
              </div>
            </li>
            <li className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-surface-elevated text-2xl shadow-inner shadow-white/10">
                📊
              </div>
              <div>
                <strong className="text-ink font-semibold text-xl mb-2 block">Data Storytelling</strong>
                Crafting interactive dashboards, choropleth maps, and data animations to clearly communicate your dataset to diverse, non-technical audiences.
              </div>
            </li>
            <li className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-surface-elevated text-2xl shadow-inner shadow-white/10">
                ⚙️
              </div>
              <div>
                <strong className="text-ink font-semibold text-xl mb-2 block">Tool & Workflow Development</strong>
                Building out automated Python data pipelines or conceptualizing custom GIS tools that specifically align with your unique project needs.
              </div>
            </li>
          </ul>
        </div>
        <p className="mt-12 text-lg font-medium text-ink-muted text-center max-w-2xl mx-auto rounded-xl bg-surface-elevated/20 p-6 border-dashed border border-white/10">
          If you are seeking a passionate analytical eye or spatial perspective for an upcoming initiative, feel free to <a href="/contact" className="text-accent hover:text-accent-dim transition-colors underline underline-offset-4 decoration-accent/40 font-semibold">contact me</a>. I deeply value transparent communication and professional partnerships.
        </p>
      </div>
    </Section>
  );
}
