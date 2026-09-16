/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const isProject = typeof window !== "undefined" && window.location.pathname.startsWith("/work/");
    if (isProject) {
      if (id === "home" || id === "app-footer") {
        // app-footer on project page is current footer; for home, go to top of portfolio
        if (id === "home") {
          window.history.pushState({}, "", "/");
          window.dispatchEvent(new PopStateEvent("popstate"));
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        // CONTACT on project page already here
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
        return;
      }
      // Work/About/Services on project page → back to portfolio
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer id="app-footer" className="relative overflow-hidden bg-[var(--bg-primary)]" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="absolute inset-0 hero-grid-pattern bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_35%_at_50%_0%,#000_50%,transparent_88%)] pointer-events-none opacity-[0.28]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Contact CTA — editorial, prominent */}
        <div className="pt-16 md:pt-20 pb-12 md:pb-16" id="footer-contact">
          <p className="eyebrow mb-6">CONTACT</p>
          <h2 className="section-heading text-[2rem] sm:text-[2.8rem] md:text-[3.4rem] leading-[0.92] tracking-tighter max-w-3xl">
            Have something
            <span className="block font-serif font-normal italic">worth building?</span>
          </h2>
          <p className="body-text text-[14px] md:text-[15px] max-w-[32rem] leading-relaxed mt-6">
            I&apos;m open to interesting web, product, and digital experiences where thoughtful design and technology need to work together.
          </p>

          <a
            href="mailto:essienmbereidem@gmail.com"
            className="inline-flex items-center gap-3 mt-8 text-[1.15rem] sm:text-[1.4rem] md:text-[1.65rem] font-sans font-semibold tracking-tighter underline underline-offset-8 decoration-[1.5px] decoration-[var(--border-color)] hover:decoration-[var(--text-primary)] transition-colors break-all"
            style={{ color: "var(--text-primary)" }}
          >
            essienmbereidem@gmail.com
            <span aria-hidden className="text-[1rem]">↗</span>
          </a>
        </div>

        <div className="h-px w-full" style={{ background: "var(--border-color)" }} aria-hidden />

        {/* Footer identity + navigation */}
        <div className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Identity — EM */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 border bg-[var(--text-primary)] text-[var(--bg-primary)]" style={{ borderColor: "var(--text-primary)" }}>
                <span className="text-[10px] font-sans font-bold tracking-widest">EM</span>
              </div>
              <div className="leading-none">
                <p className="font-sans font-bold tracking-tight text-[13px]" style={{ color: "var(--text-primary)" }}>
                  Essien Mbereidem
                </p>
                <p className="meta-label !text-[10px] !tracking-[0.12em] mt-0.5">Web Developer & Digital Creative</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/mbereidem-essien-055b08234"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-8 h-8 border bg-[var(--bg-card)] hover:bg-[var(--bg-neutral-50)] transition-colors"
                style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/MB3R3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-8 h-8 border bg-[var(--bg-card)] hover:bg-[var(--bg-neutral-50)] transition-colors"
                style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <span className="meta-label ml-1 hidden sm:inline">LinkedIn · GitHub</span>
            </div>
          </div>

          {/* Navigation — HOME WORK ABOUT SERVICES CONTACT */}
          <nav className="md:col-span-4 md:col-start-7 lg:col-span-3 lg:col-start-9 space-y-4" aria-label="Footer navigation">
            <p className="meta-label">Navigation</p>
            <ul className="space-y-2.5">
              {[
                { label: "HOME", id: "home" },
                { label: "WORK", id: "work" },
                { label: "ABOUT", id: "about-section" },
                { label: "SERVICES", id: "services-section" },
                { label: "CONTACT", id: "app-footer" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="font-mono text-[11px] tracking-[0.14em] uppercase font-semibold hover:underline underline-offset-4 transition-colors text-left"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Metadata */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-6 border-t" style={{ borderColor: "var(--border-color)" }}>
          <span className="meta-label">Web Developer • Digital Creative</span>
          <span className="meta-label">© 2026 Essien Mbereidem</span>
        </div>
      </div>
    </footer>
  );
}
