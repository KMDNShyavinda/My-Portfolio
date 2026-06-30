"use client";

import { useState, useRef, FormEvent } from "react";
import { useReveal } from "@/lib/useReveal";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const headerRef = useReveal();
  const bodyRef   = useReveal();

  const [state, setState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-alt border-t border-[var(--border-default)]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-content mx-auto px-6 py-20">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-10"
        >
          <p className="text-label text-muted uppercase tracking-wide-label mb-3">Contact</p>
          <h2
            id="contact-heading"
            className="text-h1 font-medium text-primary tracking-tight-h1 mb-2"
          >
            Let&rsquo;s talk
          </h2>
          <p className="text-body text-secondary max-w-md">
            I&rsquo;m actively looking for summer 2025 internship roles in software
            engineering. If you&rsquo;re working on something interesting — my inbox
            is always open.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className="reveal grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Left — direct links */}
          <div className="flex flex-col gap-4">
            <ContactLink
              href="mailto:alex.kim@email.com"
              label="Send email"
              value="alex.kim@email.com"
              icon={<MailIcon />}
            />
            <ContactLink
              href="https://linkedin.com/in/alexkim"
              label="LinkedIn profile"
              value="linkedin.com/in/alexkim"
              icon={<LinkedInIcon />}
              external
            />
            <ContactLink
              href="https://github.com/alexkim"
              label="GitHub profile"
              value="github.com/alexkim"
              icon={<GitHubIcon />}
              external
            />
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 px-4 py-3.5 rounded-lg bg-[var(--text-primary)] text-[var(--surface-page)] hover:opacity-85 active:scale-[0.97] transition-all duration-120"
              aria-label="Download résumé PDF"
            >
              <DownloadIcon />
              <span className="text-small font-medium">Download résumé</span>
            </a>
            <p className="text-small text-muted mt-2">
              I typically respond within 24–48 hours.
            </p>
          </div>

          {/* Right — contact form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            aria-label="Send a message"
            className="flex flex-col gap-4 bg-card border border-[var(--border-default)] rounded-lg p-6"
          >
            <p className="text-h3 font-medium text-primary mb-1">Send a message</p>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-small font-medium text-secondary">
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                aria-required="true"
                placeholder="Your name"
                className="px-3 py-2.5 rounded-[6px] bg-raise border border-[var(--border-default)] text-small text-primary placeholder:text-muted focus:outline-none focus:border-[var(--color-slate)] focus:ring-2 focus:ring-[var(--color-sky-tint)] transition-colors duration-120"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-small font-medium text-secondary">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-required="true"
                placeholder="you@company.com"
                className="px-3 py-2.5 rounded-[6px] bg-raise border border-[var(--border-default)] text-small text-primary placeholder:text-muted focus:outline-none focus:border-[var(--color-slate)] focus:ring-2 focus:ring-[var(--color-sky-tint)] transition-colors duration-120"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-small font-medium text-secondary">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                rows={5}
                placeholder="What's on your mind?"
                className="px-3 py-2.5 rounded-[6px] bg-raise border border-[var(--border-default)] text-small text-primary placeholder:text-muted focus:outline-none focus:border-[var(--color-slate)] focus:ring-2 focus:ring-[var(--color-sky-tint)] transition-colors duration-120 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={state === "sending" || state === "success"}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[8px] bg-[var(--text-primary)] text-[var(--surface-page)] text-small font-medium hover:opacity-85 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-120"
            >
              {state === "sending" ? (
                <>
                  <SpinnerIcon />
                  Sending…
                </>
              ) : state === "success" ? (
                "Message sent ✓"
              ) : (
                "Send message"
              )}
            </button>

            {state === "error" && (
              <p role="alert" className="text-small text-red-500">
                Something went wrong. Please email me directly at alex.kim@email.com.
              </p>
            )}
            {state === "success" && (
              <p role="status" className="text-small text-[var(--color-sage)]">
                Thanks — I&rsquo;ll get back to you within 24–48 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function ContactLink({
  href, label, value, icon, external,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex items-center gap-3 px-4 py-3.5 rounded-lg bg-card border border-[var(--border-default)] text-secondary hover:text-primary hover:border-[var(--border-strong)] transition-all duration-120"
    >
      <span className="text-muted flex-shrink-0">{icon}</span>
      <span className="text-small">{value}</span>
    </a>
  );
}

/* ── Icons ── */
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}
function SpinnerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="animate-spin">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  );
}
