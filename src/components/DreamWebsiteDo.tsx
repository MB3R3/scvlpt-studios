/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS } from "../data";

export default function DreamWebsiteDo() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--bg-primary)]"
      id="work"
      style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
    >
      {/* Subtle grid — editorial */}
      <div className="absolute inset-0 hero-grid-pattern bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,#000_60%,transparent_95%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header — editorial, personal */}
        <div className="max-w-3xl space-y-6 mb-16 md:mb-20" id="work-header">
          <p className="eyebrow">SELECTED WORK</p>
          <h2 className="section-heading text-[1.9rem] sm:text-[2.4rem] md:text-[3rem] leading-[0.95] tracking-tighter">
            A selection of things I&apos;ve
            <span className="block font-serif font-normal italic">designed and built.</span>
          </h2>
          <p className="body-text text-[14px] md:text-[15px] max-w-[32rem] leading-relaxed">
            A mix of real products, client-style work, and exploratory concepts.
          </p>
        </div>

        {/* Projects — editorial stacked, not uniform grid */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24" id="work-projects">
          {PROJECTS.map((project, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            const isConcept = project.type === "CONCEPT";
            const isHarmonIQ = project.slug === "harmoniq";

            return (
              <article
                key={project.slug}
                id={`work-project-${project.slug}`}
                className="group"
              >
                {/* Large visual — placeholder editorial, no fake screenshot */}
                <div
                  className={`relative overflow-hidden border bg-[var(--bg-neutral-50)] ${
                    isHarmonIQ ? "aspect-[16/9] md:aspect-[16/8.5]" : "aspect-[16/9.5] md:aspect-[16/8]"
                  }`}
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {/* Image if available, otherwise typographic placeholder */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center">
                      {/* Monogram */}
                      <span
                        className="font-serif text-[4.5rem] md:text-[7rem] leading-none tracking-tighter select-none"
                        style={{ color: "var(--text-primary)", opacity: 0.08 }}
                        aria-hidden
                      >
                        {project.title.charAt(0)}
                      </span>
                      <span
                        className="mt-2 font-sans text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {project.title} — {project.category}
                      </span>
                      <span
                        className="mt-1 font-mono text-[10px] tracking-widest uppercase"
                        style={{ color: "var(--text-muted)", opacity: 0.6 }}
                      >
                        No preview yet
                      </span>
                    </div>
                  )}

                  {/* Top meta bar inside visual — subtle */}
                  <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 md:px-6 py-3 border-b bg-[var(--bg-card)]/80 backdrop-blur-sm" style={{ borderColor: "var(--border-color)" }}>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase font-semibold" style={{ color: "var(--text-muted)" }}>
                      {number} — {project.type}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase font-semibold hidden sm:inline" style={{ color: "var(--text-muted)" }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details — editorial, typography-led, restrained border */}
                <div className="pt-6 md:pt-8 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="font-sans font-bold tracking-tighter leading-none text-[1.5rem] md:text-[1.85rem]"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {project.title}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-semibold tracking-[0.12em] uppercase border ${isConcept ? "bg-transparent" : "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)]"}`}
                          style={isConcept ? { color: "var(--text-muted)", borderColor: "var(--border-color)", background: "var(--bg-card)" } : undefined}
                        >
                          {project.type}
                        </span>
                      </div>
                      <p className="meta-label !mt-1">
                        {project.category}
                      </p>
                    </div>

                    {/* Concept label — honest */}
                    {isConcept && (
                      <span
                        className="inline-flex items-center text-[11px] font-mono tracking-wide"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Speculative — concept
                      </span>
                    )}
                  </div>

                  <p className="body-text text-[14px] md:text-[15px] leading-relaxed max-w-[36rem]">
                    {project.description}
                  </p>

                  {/* Technologies — only for HarmonIQ (and any future with tech) */}
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

                  {/* Links — only if URLs exist, no invented links */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--text-primary)] transition-colors"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Live site <span aria-hidden>↗</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-medium underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--text-primary)] transition-colors"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          GitHub <span aria-hidden>↗</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Separator between projects — subtle, not brutalist */}
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
