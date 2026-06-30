export type TimelineCategory = "work" | "education" | "award";

export type TimelineItem = {
  id: string;
  category: TimelineCategory;
  org: string;
  role: string;
  date: string;
  location?: string;
  bullets: string[];
  current?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    id: "datacom-intern",
    category: "work",
    org: "Datacom",
    role: "Software Engineering Intern",
    date: "Jan 2025 – Present",
    location: "Auckland, NZ",
    current: true,
    bullets: [
      "Built an internal CI dashboard that reduced on-call alert noise by 34%",
      "Migrated three legacy REST services to GraphQL with full test coverage",
      "Tech: TypeScript, React, Node.js, PostgreSQL, GitHub Actions",
    ],
  },
  {
    id: "hackuoa-2024",
    category: "award",
    org: "HackUoA 2024",
    role: "1st Place — Best Developer Tool",
    date: "Nov 2024",
    bullets: [
      "Won with git-standup, selected from 48 teams over 24 hours",
      "Judged on technical depth, UX, and real-world utility",
    ],
  },
  {
    id: "xero-contractor",
    category: "work",
    org: "Xero",
    role: "Junior Developer (Contractor)",
    date: "Jul – Oct 2024",
    location: "Remote",
    bullets: [
      "Implemented WCAG 2.1 AA accessibility improvements across three product flows",
      "Wrote Playwright E2E tests covering 80+ user journeys",
      "Tech: React, TypeScript, Playwright",
    ],
  },
  {
    id: "faculty-scholarship",
    category: "award",
    org: "Faculty Excellence Scholarship",
    role: "University of Auckland · NZD 5,000",
    date: "Feb 2024",
    bullets: [
      "Awarded to the top 5% of Faculty of Science students based on academic performance",
    ],
  },
  {
    id: "uoa-cs",
    category: "education",
    org: "University of Auckland",
    role: "BSc Computer Science",
    date: "Mar 2023 – Nov 2026 (expected)",
    location: "Auckland, NZ",
    bullets: [
      "GPA 3.9 / 4.0",
      "Relevant courses: Algorithms, Operating Systems, Distributed Systems, Databases, Compilers",
      "Clubs: CS Society (Tech Lead), Competitive Programming Club",
      "Dean's List: 2023, 2024",
    ],
  },
];
