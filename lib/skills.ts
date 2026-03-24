export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools",
    items: ["Git", "Figma", "VS Code"],
  },
];
