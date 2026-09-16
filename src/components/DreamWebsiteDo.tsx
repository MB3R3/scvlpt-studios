/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PROJECTS } from "../data";
import type { Project } from "../types";

function ProjectVisual({ project, priority }: { project: Project; priority: boolean }) {
  const [failed, setFailed] = useState(false);
  const hasImage = !!project.image && !failed;

  // Alt text per project — meaningful, not generic
  const altMap: Record<string, string> = {
    harmoniq: "HarmonIQ music discovery interface",
    "hotel-website": "Hotel website — hospitality presentation",
    kairo: "KAIRO concept — contemporary fashion",
    aura: "AURA concept — luxury skincare",
  };
  const alt = altMap[project.slug] ?? `${project.title} project visual`;

  // Concept-specific placeholder direction
  const isKairo = project.slug === "kairo";
  const isAura = project.slug === "aura";
  const isHotel = project.slug === "hotel-website";

  if (hasImage) {
    return (
      <img
        src={project.image!}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] will-change-transform"
        style={{ objectPosition: "top center" }}
      />
    );
  }

  // Editorial placeholders — intentional, no fake screenshot
  if (isKairo) {
    return (
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 bg-[#F6F3EE] dark:bg-[var(--bg-neutral-50)]">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--text-muted)" }}>
            CONCEPT — 03
          </span>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: "var(--text-muted)" }}>
            Fashion / Web
          </span>
        </div>
        <div className="space-y-2">
          <p className="font-serif text-[2.8rem] md:text-[4.5rem] leading-none tracking-tighter" style={{ color: "var(--text-primary)" }}>
            KAIRO
          </p>
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase max-w-[28rem]" style={{ color: "var(--text-muted)" }}>
            Editorial typography — monochrome — whitespace
          </p>
        </div>
        <div className="h-px w-full" style={{ background: "var(--border-color)" }} aria-hidden />
      </div>
    );
  }

  if (isAura) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center bg-[#FDFAF6] dark:bg-[var(--bg-neutral-50)]">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase mb-6" style={{ color: "var(--text-muted)" }}>
          CONCEPT — 04 &nbsp;·&nbsp; Luxury Skincare / Web
        </span>
        <p className="font-serif text-[2.6rem] md:text-[4rem] leading-none tracking-[-0.04em] font-light" style={{ color: "var(--text-primary)" }}>
          AURA
        </p>
        <span className="mt-3 w-8 h-px" style={{ background: "var(--border-color)" }} aria-hidden />
        <p className="mt-4 font-sans text-[11px] tracking-[0.18em] uppercase max-w-[20rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Minimal — product — editorial storytelling
        </p>
      </div>
    );
  }

  if (isHotel) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center bg-[var(--bg-neutral-50)]">
        <span className="font-serif text-[1.4rem] md:text-[1.6rem] tracking-tighter" style={{ color: "var(--text-primary)", opacity: 0.85 }}>
          HOTEL WEBSITE
        </span>
        <span className="mt-2 font-mono text-[10px] tracking-[0.16em] uppercase" style={{ color: "var(--text-muted)" }}>
          REAL PROJECT &nbsp;·&nbsp; Hospitality / Web
        </span>
        <span className="mt-4 w-8 h-px" style={{ background: "var(--border-color)" }} aria-hidden />
      </div>
    );
  }

  // Fallback generic
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[var(--bg-neutral-50)]">
      <span className="font-serif text-[4.5rem] md:text-[7rem] leading-none tracking-tighter select-none" style={{ color: "var(--text-primary)", opacity: 0.08 }} aria-hidden>
        {project.title.charAt(0)}
      </span>
      <span className="mt-2 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--text-muted)" }}>
        {project.title} — {project.category}
      </span>
    </div>
  );
}

export default function DreamWebsiteDo() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--bg-primary)]"
      id="work"
      style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
    >
      <div className="absolute inset-0 hero-grid-pattern bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,#000_60%,transparent_95%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl space-y-6 mb-14 md:mb-16" id="work-header">
          <p className="eyebrow">SELECTED WORK</p>
          <h2 className="section-heading text-[1.9rem] sm:text-[2.4rem] md:text-[3rem] leading-[0.95] tracking-tighter">
            A selection of things I&apos;ve
            <span className="block font-serif font-normal italic">designed and built.</span>
          </h2>
          <p className="body-text text-[14px] md:text-[15px] max-w-[32rem] leading-relaxed">
            A mix of real products, client-style work, and exploratory concepts.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20 lg:space-y-24" id="work-projects">
          {PROJECTS.map((project, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            const isConcept = project.type === "CONCEPT";
            const isHarmonIQ = project.slug === "harmoniq";
            const priority = idx === 0; // HarmonIQ eager

            return (
              <article key={project.slug} id={`work-project-${project.slug}`} className="group">
                {/* Hierarchy: number / title / type / category — editorial, above image */}
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <span className="meta-label !text-[11px] tracking-[0.16em]">{number}</span>
                  <span className="w-px h-3 self-center" style={{ background: "var(--border-color)" }} aria-hidden />
                  <span className="meta-label !text-[11px]">{project.type} · {project.category}</span>
                  {isConcept && (
                    <span className="font-mono text-[10px] tracking-wide ml-1" style={{ color: "var(--text-muted)" }}>
                      — Speculative
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-sans font-bold tracking-tighter leading-none text-[1.65rem] md:text-[2.05rem]" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-semibold tracking-[0.12em] uppercase border ${isConcept ? "bg-transparent" : "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)]"}`}
                    style={isConcept ? { color: "var(--text-muted)", borderColor: "var(--border-color)", background: "var(--bg-card)" } : undefined}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Large visual — editorial, hover 1.02, no fake chrome */}
                <div
                  className={`relative overflow-hidden border bg-[var(--bg-neutral-50)] rounded-[4px] ${isHarmonIQ ? "aspect-[16/9] md:aspect-[16/8.2]" : "aspect-[16/10] md:aspect-[16/8]"}`}
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <ProjectVisual project={project} priority={priority} />
                </div>

                {/* Details below image — concise */}
                <div className="pt-6 md:pt-7 space-y-4 max-w-[42rem]">
                  <p className="body-text text-[14px] md:text-[15px] leading-relaxed">
                    {project.description}
                  </p>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1" aria-label={`Technologies used in ${project.title}`}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-1 text-[11px] font-mono tracking-wide border bg-[var(--bg-card)]"
                          style={{ color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* View Case Study — only for real projects with case studies */}
                  {(project.slug === "harmoniq" || project.slug === "hotel-website") && (
                    <div className="pt-1">
                      <a
                        href={`/work/${project.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, "", `/work/${project.slug}`);
                          window.dispatchEvent(new PopStateEvent("popstate"));
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--text-primary)] transition-colors"
                        style={{ color: "var(--text-primary)" }}
                      >
                        View Case Study <span aria-hidden>→</span>
                      </a>
                    </div>
                  )}

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--text-primary)] transition-colors" style={{ color: "var(--text-primary)" }}>
                          Live site <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--text-primary)] transition-colors" style={{ color: "var(--text-secondary)" }}>
                          GitHub <span aria-hidden>↗</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {idx < PROJECTS.length - 1 && (
                  <div className="mt-14 md:mt-16 h-px w-full" style={{ background: "var(--border-color)" }} aria-hidden />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
