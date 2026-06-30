"use client";

import { useReveal } from "@/lib/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      className="bg-alt border-t border-[var(--border-default)]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-content mx-auto px-6 py-20">
        {/* Section label */}
        <p className="text-label text-muted uppercase tracking-wide-label mb-3">About</p>

        {/* Grid: avatar + text */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-16 items-start"
        >
          {/* Left — avatar block */}
          <div className="flex flex-col items-start md:items-center gap-4">
            {/* Avatar placeholder — replace src with real photo */}
            <div
              className="w-24 h-24 rounded-full bg-[var(--color-sky-tint)] border border-[var(--border-default)] flex items-center justify-center text-[28px] font-medium text-[var(--color-sky-text)] select-none"
              aria-hidden="true"
            >
              AK
            </div>
            <div className="flex flex-col gap-1 md:items-center">
              <span className="text-small font-medium text-primary">Alex Kim</span>
              <span className="text-small text-muted">Auckland, New Zealand</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Year 3", "BSc CS", "GPA 3.9"].map((tag) => (
                <span
                  key={tag}
                  className="text-label uppercase tracking-wide-label border border-[var(--border-default)] rounded-pill px-2.5 py-1 text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — narrative */}
          <div>
            <h2
              id="about-heading"
              className="text-h1 font-medium text-primary tracking-tight-h1 mb-5"
            >
              A bit about me
            </h2>
            <div className="space-y-4 text-body text-secondary leading-relaxed">
              <p>
                I&rsquo;m a third-year Computer Science student who loves turning
                complex problems into simple, reliable software. My work spans the
                full stack — from designing REST APIs and managing database schemas
                to optimising React frontends for performance and accessibility. I
                bring the same care to both ends.
              </p>
              <p>
                Outside of code, I&rsquo;m into competitive programming, hiking, and
                reading about distributed systems. I actively contribute to
                open-source projects and run the technical side of UoA&rsquo;s CS
                Society, where I organise workshops and hackathon prep sessions for
                300+ members.
              </p>
              <p>
                I&rsquo;m actively looking for a summer 2025 internship where I can
                contribute to real product challenges, learn from experienced
                engineers, and ship things people actually use.
              </p>
            </div>

            {/* Detail chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "📍 Auckland, NZ",
                "Available June 2025",
                "Willing to relocate",
                "Open to remote",
              ].map((item) => (
                <span
                  key={item}
                  className="text-small border border-[var(--border-default)] rounded-pill px-3 py-1 text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
