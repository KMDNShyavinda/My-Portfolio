export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: "web" | "systems" | "ml" | "tools";
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: "complete" | "wip";
};

export const projects: Project[] = [
  {
    id: "studysync",
    title: "StudySync",
    description:
      "Real-time collaborative study scheduler with calendar sync and a built-in Pomodoro timer. Used by 200+ students at UoA.",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    category: "web",
    github: "https://github.com/alexkim/studysync",
    demo: "https://studysync.vercel.app",
    featured: true,
    status: "complete",
  },
  {
    id: "tinydb",
    title: "TinyDB",
    description:
      "A lightweight embedded key-value store written in C with WAL-based crash recovery and B-tree indexing. Zero dependencies.",
    stack: ["C", "B-tree", "WAL", "POSIX"],
    category: "systems",
    github: "https://github.com/alexkim/tinydb",
    featured: true,
    status: "complete",
  },
  {
    id: "lecturesum",
    title: "LectureSum",
    description:
      "Upload a lecture recording, get back timestamped summaries and spaced-repetition flashcards. Powered by Whisper and GPT-4o.",
    stack: ["Python", "FastAPI", "OpenAI", "React"],
    category: "ml",
    github: "https://github.com/alexkim/lecturesum",
    demo: "https://lecturesum.vercel.app",
    featured: true,
    status: "complete",
  },
  {
    id: "git-standup",
    title: "git-standup",
    description:
      "CLI that generates a standup summary from your git commits across all local repos. 800+ downloads on PyPI.",
    stack: ["Python", "Click", "PyPI"],
    category: "tools",
    github: "https://github.com/alexkim/git-standup",
    featured: true,
    status: "complete",
  },
  {
    id: "pricepulse",
    title: "PricePulse",
    description:
      "Price tracker with email alerts for NZ e-commerce sites. Scrapes daily, stores history, renders interactive charts.",
    stack: ["React", "Node.js", "PostgreSQL", "Playwright"],
    category: "web",
    github: "https://github.com/alexkim/pricepulse",
    demo: "https://pricepulse.vercel.app",
    status: "complete",
  },
  {
    id: "minishell",
    title: "MiniShell",
    description:
      "Unix shell supporting pipes, redirection, background jobs, and signal handling. Written as a systems programming coursework project.",
    stack: ["C", "POSIX", "Linux"],
    category: "systems",
    github: "https://github.com/alexkim/minishell",
    status: "complete",
  },
];
