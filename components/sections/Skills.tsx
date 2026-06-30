"use client";

import { useReveal } from "@/lib/useReveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const headerRef = useReveal();
  const gridRef   = useReveal(true); // stagger children

  return (
    <section
      id="skills"
      className="border-t border-[var(--border-default)]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-content mx-auto px-6 py-20">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-10"
        >
          <p className="text-label text-muted uppercase tracking-wide-label mb-3">Skills</p>
          <h2
            id="skills-heading"
            className="text-h1 font-medium text-primary tracking-tight-h1 mb-2"
          >
            Technical stack
          </h2>
          <p className="text-body text-secondary max-w-md">
            Languages, frameworks, and tools I work with regularly — grouped by
            domain, not seniority.
          </p>
        </div>

        {/* Skills grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="reveal bg-card border border-[var(--border-default)] rounded-lg p-5 hover:border-[var(--border-strong)] transition-colors duration-150"
            >
              <p className="text-label text-muted uppercase tracking-wide-label mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-small text-secondary bg-raise border border-[var(--border-default)] rounded-sm px-2 py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
