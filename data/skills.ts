export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "Java", "C", "SQL", "Bash"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "FastAPI", "REST", "GraphQL", "Redis"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "SQLite", "Supabase", "Prisma"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "Docker", "GitHub Actions", "Linux", "Vercel"],
  },
  {
    label: "CS Concepts",
    skills: ["Algorithms", "OS", "Networking", "Distributed Systems", "Compilers"],
  },
  {
    label: "Currently learning",
    skills: ["Rust", "Kubernetes", "ML fundamentals"],
  },
];
