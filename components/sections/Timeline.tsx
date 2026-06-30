"use client";

import { useReveal } from "@/lib/useReveal";
import { timeline, type TimelineCategory } from "@/data/timeline";
import { cn } from "@/lib/utils";

const CATEGORY_STYLES: Record<
  TimelineCategory,
  { label: string; bg: string; text: string }
> = {
  work:      { label: "Work",      bg: "bg-[var(--color-sky-tint)]",  text: "text-[var(--color-sky-text)]" },
  education: { label: "Education", bg: "bg-[var(--color-teal-bg)]",   text: "text-[var(--color-teal-text)]" },
  award:     { label: "Award",     bg: "bg-[var(--color-amber-bg)]",   text: "text-[var(--color-amber-text)]" },
};

export default function Timeline() {
  const headerRef = useReveal();
  const listRef   = useReveal(true);

  return (
    <section
      id="timeline"
      className="border-t border-[var(--border-default)]"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-content mx-auto px-6 py-20">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-12"
        >
          <p className="text-label text-muted uppercase tracking-wide-label mb-3">Timeline</p>
          <h2
            id="timeline-heading"
            className="text-h1 font-medium text-primary tracking-tight-h1 mb-2"
          >
            Experience, education &amp; achievements
          </h2>
          <p className="text-body text-secondary max-w-lg">
            The full picture — work, study, and recognition in one chronological view.
          </p>
        </div>

        {/* Timeline list */}
        <ol
          ref={listRef as React.RefObject<HTMLOListElement>}
          className="relative pl-6 border-l border-[var(--border-stronger)]"
          aria-label="Career timeline"
        >
          {timeline.map((item) => {
            const cat = CATEGORY_STYLES[item.category];
            return (
              <li
                key={item.id}
                className="reveal relative pb-10 pl-8 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute -left-[21px] top-[5px] w-[10px] h-[10px] rounded-full border-2 transition-transform duration-200",
                    item.current
                      ? "bg-[var(--color-slate)] border-[var(--color-slate)] scale-110"
                      : "bg-page border-[var(--border-stronger)]"
                  )}
                  aria-hidden="true"
                />

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-small text-muted font-mono">{item.date}</span>
                  <span
                    className={cn(
                      "text-[11px] font-medium px-2 py-0.5 rounded-sm",
                      cat.bg,
                      cat.text
                    )}
                  >
                    {cat.label}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-[var(--color-sage)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage)] animate-pulse-dot" aria-hidden="true" />
                      Current
                    </span>
                  )}
                </div>

                {/* Org + Role */}
                <h3 className="text-h3 font-medium text-primary mb-0.5">{item.org}</h3>
                <p className="text-small text-secondary mb-3">
                  {item.role}
                  {item.location && (
                    <span className="text-muted"> · {item.location}</span>
                  )}
                </p>

                {/* Bullets */}
                <ul className="space-y-1" aria-label={`Details for ${item.org}`}>
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-small text-secondary"
                    >
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-muted flex-shrink-0" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
