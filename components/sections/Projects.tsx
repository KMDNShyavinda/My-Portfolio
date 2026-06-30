"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

type Filter = "all" | Project["category"];

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All",     value: "all" },
  { label: "Web",     value: "web" },
  { label: "Systems", value: "systems" },
  { label: "ML",      value: "ml" },
  { label: "Tools",   value: "tools" },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");
  const headerRef = useReveal();
  const gridRef   = useReveal(true);

  const visible = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="bg-alt border-t border-[var(--border-default)]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-content mx-auto px-6 py-20">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-label text-muted uppercase tracking-wide-label mb-3">Projects</p>
            <h2
              id="projects-heading"
              className="text-h1 font-medium text-primary tracking-tight-h1 mb-2"
            >
              Featured work
            </h2>
            <p className="text-body text-secondary max-w-md">
              Side projects, coursework, and open-source — things I&rsquo;ve
              actually shipped.
            </p>
          </div>
          <a
            href="https://github.com/alexkim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-small text-accent hover:underline underline-offset-4 flex-shrink-0"
          >
            <GitHubIcon />
            All on GitHub
          </a>
        </div>

        {/* Filter bar */}
        <div
          className="flex flex-wrap gap-2 mb-8"
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={cn("filter-pill", active === value && "active")}
              aria-pressed={active === value}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-body text-muted text-center py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
