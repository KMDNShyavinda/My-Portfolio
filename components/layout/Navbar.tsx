"use client";

import { useEffect, useState, useCallback } from "react";
import { useTheme } from "@/lib/useTheme";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive]   = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  // Update scrolled state for backdrop blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-page/80 backdrop-blur-md border-b border-[var(--border-default)]"
          : "bg-page border-b border-transparent"
      )}
    >
      <nav
        className="max-w-content mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="text-[15px] font-medium text-primary tracking-[-0.3px] hover:opacity-70 transition-opacity duration-120"
          aria-label="Alex Kim — back to top"
        >
          Alex Kim
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                className={cn(
                  "px-3 py-1.5 rounded-[8px] text-[13px] transition-all duration-120",
                  isActive
                    ? "text-primary font-medium bg-raise"
                    : "text-secondary hover:text-primary hover:bg-raise"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-[var(--border-default)] text-secondary hover:text-primary hover:bg-raise transition-all duration-120"
          >
            {theme === "light" ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-[var(--text-primary)] text-[var(--surface-page)] text-[13px] font-medium hover:opacity-85 active:scale-[0.97] transition-all duration-120"
          >
            <DownloadIcon />
            Résumé
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-[var(--border-default)] text-secondary"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-[var(--border-default)] text-secondary"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-page z-40 flex flex-col p-6 gap-2">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                className={cn(
                  "px-4 py-3 rounded-lg text-[15px] transition-all duration-120",
                  isActive
                    ? "text-primary font-medium bg-raise"
                    : "text-secondary hover:text-primary hover:bg-raise"
                )}
              >
                {label}
              </a>
            );
          })}
          <div className="mt-4 pt-4 border-t border-[var(--border-default)]">
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[var(--text-primary)] text-[var(--surface-page)] text-[15px] font-medium"
            >
              <DownloadIcon />
              Download résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
