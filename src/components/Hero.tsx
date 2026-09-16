/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden flex items-center bg-[var(--bg-primary)]"
      id="hero-section"
      style={{ minHeight: "min(88vh, 860px)", paddingTop: "7.5rem", paddingBottom: "4rem" }}
    >
      {/* Subtle editorial grid — preserved from template, muted via var */}
      <div className="absolute inset-0 hero-grid-pattern bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_65%,transparent_100%)] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="max-w-[920px]">
          {/* Content col — id preserved for App.tsx GSAP entrance (stagger children) */}
          <div id="hero-left-col" className="space-y-8 md:space-y-10 text-left">

            {/* Eyebrow */}
            <p className="eyebrow inline-flex items-center gap-2" id="hero-eyebrow">
              <span className="w-6 h-px bg-[var(--border-color)] hidden sm:block" aria-hidden />
              WEB DEVELOPER • DIGITAL CREATIVE
            </p>

            {/* Display heading — typography-led, not uppercase */}
            <h1
              className="display-heading text-[2.5rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[5.75rem] font-sans font-bold tracking-tighter leading-[0.88]"
              id="hero-title"
              style={{ color: "var(--text-primary)" }}
            >
              I design and build
              <span className="block font-serif font-normal italic tracking-tight" style={{ color: "var(--text-primary)" }}>
                digital experiences.
              </span>
            </h1>

            {/* Supporting line + paragraph */}
            <div className="max-w-[42rem] space-y-4 pt-2" id="hero-copy">
              <p
                className="text-[15px] md:text-[17px] font-sans font-medium leading-relaxed"
                style={{ color: "var(--text-primary)" }}
              >
                Thoughtful UI, modern web technology, and attention to detail.
              </p>
              <p className="body-text text-[15px] md:text-[16px] leading-relaxed max-w-[36rem]">
                I create polished digital experiences that bring design and technology together — from full-stack products to thoughtful web interfaces.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2" id="hero-cta-group">
              <button
                type="button"
                onClick={() => handleScrollTo("work")}
                className="inline-flex items-center gap-2 px-7 py-[14px] text-[13px] font-sans font-semibold tracking-wide bg-[var(--accent)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)] border border-[var(--accent)] transition-colors cursor-pointer"
                id="hero-primary-cta"
                aria-label="View selected work"
              >
                View selected work
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>

            {/* Meta — subtle, personal, not agency */}
            <div
              className="flex items-center gap-3 pt-10 mt-2 border-t"
              style={{ borderColor: "var(--border-color)" }}
              id="hero-meta"
            >
              <span className="meta-label">Essien Mbereidem — 2026</span>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-color)" }} aria-hidden />
              <span className="meta-label">Available for new work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
