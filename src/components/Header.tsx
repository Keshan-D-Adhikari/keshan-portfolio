"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { id: "top", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Header({ ctaHref, ctaLabel }: { ctaHref: string; ctaLabel: string }) {
  const [active, setActive] = useState("top");

  // Highlight the nav item for whichever section is crossing the upper part of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const external = ctaHref.startsWith("http");

  return (
    <header className="sticky top-0 z-30 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="text-xl font-bold tracking-tight">
          keshan<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-border bg-surface/60 p-1.5 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`block rounded-full px-5 py-2 transition-colors ${
                  active === link.id ? "bg-accent-soft font-semibold text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={ctaHref}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          {...(ctaHref.endsWith(".pdf") ? { download: "" } : {})}
          className="rounded-full border border-accent/60 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
        >
          {ctaLabel}
        </a>
      </nav>
    </header>
  );
}
