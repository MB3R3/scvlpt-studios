/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { PROJECTS } from "../data";
import type { Project } from "../types";

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h3 className="meta-label text-[11px] tracking-[0.14em] border-b pb-2" style={{ borderColor: "var(--border-color)" }}>
      {children}
    </h3>
  );
}

export default function ProjectPage({ slug }: { slug: string }) {
  const project: Project | undefined = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 md:px-8 py-24 bg-[var(--bg-primary)]">
        <p className="eyebrow mb-4">NOT FOUND</p>
        <h1 className="section-heading text-2xl mb-6">Project not found.</h1>
        <button
          type="button"
          onClick={() => navigateTo("/")}
          className="text-[13px] font-sans font-medium underline underline-offset-4"
          style={{ color: "var(--text-primary)" }}
        >
          ← Back to work
        </button>
      </div>
    );
  }

  const isHarmonIQ = project.slug === "harmoniq";
  const isHotel = project.slug === "hotel-website";
  const screenshots = project.screenshots ?? (project.image ? [project.image] : []);

  // HarmonIQ and Hotel are REAL with case studies; KAIRO/AURA should not have case studies
  const isConceptPlaceholder = project.type === "CONCEPT";

  if (isConceptPlaceholder) {
    return (
      <div className="min-h-[60vh] bg-[var(--bg-primary)] px-4 md:px-8 py-24 max-w-7xl mx-auto">
        <button
          type="button"
          onClick={() => navigateTo("/#work")}
          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium mb-10 hover:underline underline-offset-4"
          style={{ color: "var(--text-secondary)" }}
        >
          ← Back to work
        </button>
        <p className="eyebrow mb-4">CONCEPT · {project.category}</p>
        <h1 className="section-heading text-3xl md:text-4xl">{project.title}</h1>
        <p className="body-text max-w-[32rem] leading-relaxed mt-6">{project.description}</p>
        <p className="meta-label mt-6">Speculative — concept</p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Header spacing for fixed Header */}
      <div className="h-[72px] md:h-[80px]" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Back */}
        <button
          type="button"
          onClick={() => {
            navigateTo("/");
            // after navigation, scroll to work
            setTimeout(() => {
              const el = document.getElementById("work");
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }, 100);
          }}
          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium hover:underline underline-offset-4 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          ← Back to work
        </button>

        {/* Hero header */}
        <div className="mt-8 md:mt-10 max-w-4xl space-y-6">
          <p className="eyebrow">REAL PROJECT · {project.category.toUpperCase()}</p>
          <h1 className="font-sans font-bold tracking-tighter leading-none text-[2.5rem] sm:text-[3.2rem] md:text-[4rem]" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h1>
          {isHarmonIQ && (
            <p className="font-serif text-[1.6rem] md:text-[2.2rem] leading-[0.95] tracking-tight font-light" style={{ color: "var(--text-primary)" }}>
              Music discovery,<br /> designed around personal direction.
            </p>
          )}
          {isHotel && (
            <p className="font-serif text-[1.4rem] md:text-[1.9rem] leading-[0.95] tracking-tight font-light" style={{ color: "var(--text-primary)" }}>
              Hospitality presentation,<br /> focused on clarity.
            </p>
          )}
        </div>

        {/* Hero screenshot */}
        {screenshots[0] && (
          <div className="mt-10 md:mt-12 relative overflow-hidden border rounded-[4px] bg-[var(--bg-neutral-50)]" style={{ borderColor: "var(--border-color)" }}>
            <img
              src={screenshots[0]}
              alt={isHarmonIQ ? "HarmonIQ discovery dashboard showing mood-based music recommendations" : "Hotel website — hospitality presentation"}
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Metadata grid — Overview / Role / Year / Technology */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Overview */}
          <div className="md:col-span-7 space-y-4">
            <SectionLabel>OVERVIEW</SectionLabel>
            <p className="body-text text-[15px] leading-relaxed">
              {project.overview ?? project.description}
            </p>
          </div>

          {/* Meta */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-2">
              <SectionLabel>ROLE</SectionLabel>
              <p className="text-[14px] font-sans font-medium" style={{ color: "var(--text-primary)" }}>
                {project.role ?? "Design & Development"}
              </p>
            </div>
            <div className="space-y-2">
              <SectionLabel>YEAR</SectionLabel>
              <p className="text-[14px] font-sans" style={{ color: "var(--text-primary)" }}>
                {project.year ?? "2026"}
              </p>
            </div>
            <div className="space-y-2">
              <SectionLabel>TECHNOLOGY</SectionLabel>
              <ul className="space-y-1">
                {project.technologies.map((tech) => (
                  <li key={tech} className="font-mono text-[12px] tracking-wide" style={{ color: "var(--text-secondary)" }}>
                    {tech}
                  </li>
                ))}
                {project.technologies.length === 0 && (
                  <li className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>
                    — Not specified
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional screenshots */}
        {screenshots.length > 1 && (
          <div className="mt-14 md:mt-20 space-y-8 md:space-y-10">
            {screenshots.slice(1).map((src, i) => (
              <div key={i} className="relative overflow-hidden border rounded-[4px] bg-[var(--bg-neutral-50)]" style={{ borderColor: "var(--border-color)" }}>
                <img
                  src={src}
                  alt={isHarmonIQ ? `HarmonIQ interface — view ${i + 2}` : `Hotel website — view ${i + 2}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* HarmonIQ sections */}
        {isHarmonIQ && (
          <div className="mt-16 md:mt-20 space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <SectionLabel>DESIGN DIRECTION</SectionLabel>
              </div>
              <div className="md:col-span-8">
                <p className="body-text text-[15px] leading-relaxed">
                  {project.designDirection}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <SectionLabel>DEVELOPMENT</SectionLabel>
              </div>
              <div className="md:col-span-8">
                <p className="body-text text-[15px] leading-relaxed">
                  {project.development}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <SectionLabel>RECOMMENDATION EXPERIENCE</SectionLabel>
              </div>
              <div className="md:col-span-8">
                <p className="body-text text-[15px] leading-relaxed">
                  {project.recommendation}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <SectionLabel>TECHNOLOGY</SectionLabel>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-1">
                  {project.technologies.map((t) => (
                    <li key={t} className="font-mono text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Hotel specific — honest wording */}
        {isHotel && (
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <SectionLabel>NOTES</SectionLabel>
            </div>
            <div className="md:col-span-8">
              <p className="body-text text-[15px] leading-relaxed">
                A hospitality-focused website centered on presentation, navigation, and a booking-oriented user experience. No hotel name, client, or business outcome is fabricated — the work is shown as a real, client-style hospitality presentation.
              </p>
            </div>
          </div>
        )}

        {/* Back to work */}
        <div className="mt-16 md:mt-20 pt-8 border-t" style={{ borderColor: "var(--border-color)" }}>
          <button
            type="button"
            onClick={() => {
              navigateTo("/");
              setTimeout(() => {
                const el = document.getElementById("work");
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium hover:underline underline-offset-4"
            style={{ color: "var(--text-secondary)" }}
          >
            ← Back to selected work
          </button>
        </div>
      </div>
    </div>
  );
}
