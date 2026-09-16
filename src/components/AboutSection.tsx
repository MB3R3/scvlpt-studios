/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const CAPABILITIES = [
  {
    label: "Web & Product",
    items: ["React", "TypeScript", "Python", "Django", "FastAPI", "REST APIs", "Responsive Web Development"],
  },
  {
    label: "Automation & Data",
    items: ["Web Scraping", "Browser Automation", "AI-assisted Automation", "Workflow Automation", "Data Engineering", "Data Processing"],
  },
  {
    label: "AI & Machine Learning",
    items: ["Machine Learning", "Data Analysis", "Recommendation Systems", "AI-powered Applications"],
  },
  {
    label: "Design",
    items: ["UI Design", "Responsive Design", "Design Systems", "Interaction Design", "Prototyping"],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative overflow-hidden bg-[var(--bg-primary)]"
      style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
    >
      {/* Subtle grid — consistent with Hero/Work */}
      <div className="absolute inset-0 hero-grid-pattern bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_92%)] pointer-events-none opacity-[0.35]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header — editorial */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="eyebrow mb-6">ABOUT</p>
          <h2 className="section-heading text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] leading-[0.95] tracking-tighter">
            I&apos;m Essien Mbereidem.
            <span className="block font-serif font-normal italic text-[1.45rem] sm:text-[1.7rem] md:text-[2rem] leading-[1.1] mt-2" style={{ color: "var(--text-secondary)" }}>
              A developer interested in where design, software, and useful digital products meet.
            </span>
          </h2>
        </div>

        {/* Main editorial grid — LEFT intro / RIGHT capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* LEFT — introductory copy */}
          <div className="lg:col-span-7 space-y-6" id="about-intro">
            <p className="body-text text-[15px] md:text-[16px] leading-relaxed max-w-[38rem]">
              My work sits between UI design and full-stack development. I enjoy taking an idea from structure and visual direction through to a working digital product — paying attention to both how an interface looks and how it behaves.
            </p>
            <p className="body-text text-[15px] md:text-[16px] leading-relaxed max-w-[38rem]">
              Beyond the interface, I build across software engineering, automation, APIs, data, and machine learning. With a background in engineering and a growing focus on software development, I bring a problem-solving mindset to the way I build — especially to digital products that feel considered, useful, and simple to interact with.
            </p>

            {/* Metadata line — below left copy on desktop, full width on mobile */}
            <div
              className="inline-flex items-center gap-2 pt-6 mt-2 border-t text-[11px] font-mono tracking-[0.14em] uppercase font-semibold"
              style={{ borderColor: "var(--border-color)", color: "var(--text-muted)" }}
            >
              <span>Nigeria</span>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-color)" }} aria-hidden />
              <span>Remote</span>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-color)" }} aria-hidden />
              <span>2026</span>
            </div>
          </div>

          {/* RIGHT — capabilities as editorial grouped lists */}
          <div className="lg:col-span-5" id="about-capabilities">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 pt-2">
              {CAPABILITIES.map((group) => (
                <div key={group.label} className="space-y-3">
                  <h3 className="meta-label border-b pb-2" style={{ borderColor: "var(--border-color)" }}>
                    {group.label}
                  </h3>
                  <ul className="space-y-1.5" aria-label={`${group.label} capabilities`}>
                    {group.items.map((item) => (
                      <li key={item} className="font-mono text-[12px] tracking-[0.04em]" style={{ color: "var(--text-secondary)" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}