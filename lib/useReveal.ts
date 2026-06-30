"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the "visible" class
 * is added, triggering the CSS reveal transition.
 *
 * Stagger: each direct child gets an increasing delay
 * (60ms × index) so siblings animate in sequence.
 */
export function useReveal(stagger = false) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.classList.add("visible");
      if (stagger) {
        el.querySelectorAll<HTMLElement>(":scope > *").forEach((child) => {
          child.classList.add("visible");
        });
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              const children = el.querySelectorAll<HTMLElement>(":scope > *");
              children.forEach((child, i) => {
                child.style.transitionDelay = `${i * 60}ms`;
                child.classList.add("visible");
              });
            } else {
              el.classList.add("visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}
