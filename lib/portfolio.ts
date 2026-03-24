export type PortfolioItem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string;
  href?: string;
  year?: string;
  role?: string;
};

export const researchItems: PortfolioItem[] = [
  {
    slug: "sample-study-alpha",
    title: "Sample Study: Alpha",
    summary:
      "Placeholder research project. Replace with your paper, thesis chapter, or lab work — link to PDFs or external venues.",
    tags: ["Machine learning", "Publication"],
    year: "2024",
    href: "#",
  },
  {
    slug: "sample-study-beta",
    title: "Sample Study: Beta",
    summary:
      "Second placeholder entry. Use consistent tags so visitors can scan your research themes at a glance.",
    tags: ["HCI", "Qualitative"],
    year: "2023",
  },
];

export const workItems: PortfolioItem[] = [
  {
    slug: "product-redesign",
    title: "Product Redesign",
    summary:
      "Placeholder client or employer project. Summarize impact, stack, and your contribution in one or two lines.",
    tags: ["Next.js", "Design system"],
    year: "2024",
    role: "Lead frontend",
  },
  {
    slug: "data-pipeline",
    title: "Internal Data Pipeline",
    summary:
      "Another sample — swap images in public/ and point href to case studies or live demos when allowed.",
    tags: ["Python", "AWS"],
    year: "2023",
    role: "Full stack",
  },
];

export function getResearchBySlug(slug: string) {
  return researchItems.find((i) => i.slug === slug);
}

export function getWorkBySlug(slug: string) {
  return workItems.find((i) => i.slug === slug);
}
