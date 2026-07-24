"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Rise-and-fade reveal for browsers without scroll-driven animations
// (notably iOS Safari). Browsers that support animation-timeline use the
// pure-CSS version in globals.css instead; this observer never activates there.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof CSS !== "undefined" &&
      CSS.supports("animation-timeline: view()")
    )
      return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("reveal-ready");
    const sections = document.querySelectorAll("main section");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
