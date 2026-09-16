/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import type { ReactNode } from "react";
import { PROJECTS } from "../data";
import type { Project } from "../types";

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBackToWork() {
  navigateTo("/");
  setTimeout(() => {
    const el = document.getElementById("work");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, 100);
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h3 className="meta-label text-[11px] tracking-[0.14em] border-b pb-2" style={{ borderColor: "var(--border-color)" }}>
      {children}
    </h3>
  );
}

interface ProseRowProps {
  label: string;
  children: ReactNode;
}

function ProseRow({ label, children }: ProseRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
      <div className="md:col-span-4">
        <SectionLabel>{label}</SectionLabel>
      </div>
      <div className="md:col-span-8">
        <div className="body-text text-[15px] md:text-[16px] leading-relaxed space-y-4">{children}</div>
      </div>
    </div>
  );
}

const SCREEN_ALTS: Record<string, string[]> = {
  harmoniq: [
    "HarmonIQ discovery interface showing mood-based music recommendations",
    "HarmonIQ interface — recommendation view",
    "HarmonIQ interface — discovery preferences and controls",
  ],
  "hotel-website": [
    "Hotel website — home page presenting the property",
    "Hotel website — about and rooms presentation",
    "Hotel website — booking information and flow",
  ],
};

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

  const isConcept = project.type === "CONCEPT";
  const screenshots = project.screenshots ?? (project.image ? [project.image] : []);
  const screenAlts = SCREEN_ALTS[project.slug] ?? ["Project interface"];
  const heroAlt = screenAlts[0] ?? `${project.title} interface`;

  const intro =
    project.slug === "harmoniq"
      ? "Music discovery, designed around personal direction."
      : project.slug === "hotel-website"
        ? "Hospitality presentation, focused on clarity."
        : undefined;

  const nextProject = project.nextSlug
    ? PROJECTS.find((p) => p.slug === project.nextSlug)
    : undefined;

  // — Concept pages stay clearly separate from real work —
  if (isConcept) {
    return (
      <div className="min-h-[60vh] bg-[var(--bg-primary)] px-4 md:px-8 py-24 max-w-7xl mx-auto">
        <button
          type="button"
          onClick={goBackToWork}
          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium mb-10 hover:underline underline-offset-4"
          style={{ color: "var(--text-secondary)" }}
        >
          ← Back to work
        </button>
        <p className="eyebrow mb-4">CONCEPT · SPECULATIVE DESIGN · {project.category}</p>
        <h1 className="section-heading text-3xl md:text-4xl">{project.title}</h1>
        <p className="body-text max-w-[32rem] leading-relaxed mt-6">{project.description}</p>
        <p className="meta-label mt-6">Speculative — concept exploration, not a commissioned project</p>
      </div>
    );
  }

  const stack = project.technologies.length > 0 ? project.technologies : null;

  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Header spacing for fixed Header */}
      <div className="h-[72px] md:h-[80px]" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Back */}
        <button
          type="button"
          onClick={goBackToWork}
          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium hover:underline underline-offset-4 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          ← Back to work
        </button>

        {/* Hero header */}
        <div className="mt-8 md:mt-12 max-w-4xl space-y-6">
          <p className="eyebrow">
            REAL PROJECT · {project.category.toUpperCase()}
            {project.year ? ` · ${project.year.toUpperCase()}` : ""}
          </p>
          <h1
            className="font-sans font-bold tracking-tighter leading-[0.95] text-[2.5rem] sm:text-[3.2rem] md:text-[4.4rem]"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h1>
          {intro && (
            <p
              className="font-serif text-[1.5rem] md:text-[2.1rem] leading-[0.95] tracking-tight font-light"
              style={{ color: "var(--text-primary)" }}
            >
              {intro}
            </p>
          )}
        </div>

        {/* Hero image */}
        {screenshots[0] && (
          <div
            className="mt-10 md:mt-14 relative overflow-hidden border rounded-[4px] bg-[var(--bg-neutral-50)]"
            style={{ borderColor: "var(--border-color)" }}
          >
            <img
              src={screenshots[0]}
              alt={heroAlt}
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* PROJECT OVERVIEW */}
        {project.overview && (
          <div className="mt-14 md:mt-20">
            <ProseRow label="PROJECT OVERVIEW">
              <p>{project.overview}</p>
            </ProseRow>
          </div>
        )}

        {/* ROLE / STACK / YEAR — restrained metadata */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <SectionLabel>ROLE / STACK / YEAR</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="meta-label !text-[10px] !tracking-[0.12em]">Role</p>
                <p className="text-[14px] font-sans font-medium" style={{ color: "var(--text-primary)" }}>
                  {project.role ?? "Design & Development"}
                </p>
              </div>
              <div className="space-y-2">
                <p className="meta-label !text-[10px] !tracking-[0.12em]">Year</p>
                <p className="text-[14px] font-sans" style={{ color: "var(--text-primary)" }}>
                  {project.year ?? "2026"}
                </p>
              </div>
              {project.status && (
                <div className="space-y-2">
                  <p className="meta-label !text-[10px] !tracking-[0.12em]">Status</p>
                  <p className="text-[14px] font-sans" style={{ color: "var(--text-primary)" }}>
                    {project.status}
                  </p>
                </div>
              )}
            </div>
            {stack && (
              <div className="mt-8 space-y-2">
                <p className="meta-label !text-[10px] !tracking-[0.12em]">Stack</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {stack.map((tech) => (
                    <li key={tech} className="font-mono text-[12px] tracking-wide" style={{ color: "var(--text-secondary)" }}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* THE PROBLEM / IDEA */}
        {project.challenge && (
          <div className="mt-14 md:mt-20">
            <ProseRow label="THE PROBLEM / IDEA">
              <p>{project.challenge}</p>
            </ProseRow>
          </div>
        )}

        {/* APPROACH */}
        {project.approach && (
          <div className="mt-14 md:mt-20">
            <ProseRow label="APPROACH">
              <p>{project.approach}</p>
            </ProseRow>
          </div>
        )}

        {/* DESIGN DIRECTION — HarmonIQ */}
        {project.designDirection && (
          <div className="mt-14 md:mt-20">
            <ProseRow label="DESIGN DIRECTION">
              <p>{project.designDirection}</p>
            </ProseRow>
          </div>
        )}

        {/* TECHNICAL IMPLEMENTATION */}
        {project.development && (
          <div className="mt-14 md:mt-20">
            <ProseRow label="TECHNICAL IMPLEMENTATION">
              <p>{project.development}</p>
            </ProseRow>
          </div>
        )}

        {/* RECOMMENDATION SYSTEM — HarmonIQ */}
        {project.recommendation && (
          <div className="mt-14 md:mt-20">
            <ProseRow label="RECOMMENDATION SYSTEM">
              <p>{project.recommendation}</p>
            </ProseRow>
          </div>
        )}

        {/* SELECTED WORK / SCREENS */}
        {screenshots.length > 1 && (
          <div className="mt-16 md:mt-24 space-y-10 md:space-y-16">
            <div className="max-w-3xl">
              <SectionLabel>SELECTED WORK / SCREENS</SectionLabel>
            </div>
            {screenshots.slice(1).map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative overflow-hidden border rounded-[4px] bg-[var(--bg-neutral-50)]"
                style={{ borderColor: "var(--border-color)" }}
              >
                <img
                  src={src}
                  alt={screenAlts[i + 1] ?? `${project.title} — screen view ${i + 2}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* REFLECTION / STATUS */}
        {project.outcome && (
          <div className="mt-16 md:mt-24">
            <ProseRow label="REFLECTION / STATUS">
              <p>{project.outcome}</p>
            </ProseRow>
          </div>
        )}

        {/* NEXT PROJECT */}
        <div className="mt-16 md:mt-24 pt-10 md:pt-12 border-t" style={{ borderColor: "var(--border-color)" }}>
          {nextProject ? (
            <button
              type="button"
              onClick={() => navigateTo(`/work/${nextProject.slug}`)}
              className="group w-full text-left"
            >
              <p className="meta-label mb-3">NEXT PROJECT</p>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="font-sans font-bold tracking-tighter leading-none text-[1.8rem] md:text-[2.6rem]" style={{ color: "var(--text-primary)" }}>
                    {nextProject.title}
                  </h2>
                  <p className="meta-label !text-[11px]">
                    {nextProject.type} · {nextProject.category}
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium underline underline-offset-4 decoration-[var(--border-color)] group-hover:decoration-[var(--text-primary)] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  Next case study <span aria-hidden>→</span>
                </span>
              </div>
            </button>
          ) : (
            <button
              type="button"
              onClick={goBackToWork}
              className="group w-full text-left"
            >
              <p className="meta-label mb-3">MORE WORK</p>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-sans font-bold tracking-tighter leading-none text-[1.8rem] md:text-[2.6rem]" style={{ color: "var(--text-primary)" }}>
                  Explore the full selection
                </h2>
                <span
                  className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium underline underline-offset-4 decoration-[var(--border-color)] group-hover:decoration-[var(--text-primary)] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  Back to work <span aria-hidden>→</span>
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}