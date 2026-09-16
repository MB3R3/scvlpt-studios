/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const SERVICES = [
  {
    number: "01",
    title: "WEB DESIGN",
    description:
      "Interfaces designed around clarity, hierarchy, responsiveness, and the details that make digital products feel considered.",
    capabilities: ["UI Design", "Responsive Design", "Design Systems", "Interaction Design"],
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description:
      "Modern frontend and backend development focused on reliable functionality, clean architecture, and maintainable code.",
    capabilities: ["React", "TypeScript", "Python", "Django", "REST APIs"],
  },
  {
    number: "03",
    title: "DIGITAL PRODUCTS",
    description:
      "From early concepts to working products, I combine design thinking and engineering to build useful digital experiences.",
    capabilities: ["Product Interfaces", "API Integration", "Frontend Implementation", "Prototyping"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services-section"
      className="relative overflow-hidden bg-[var(--bg-primary)]"
      style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
    >
      <div className="absolute inset-0 hero-grid-pattern bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_45%_at_50%_0%,#000_50%,transparent_92%)] pointer-events-none opacity-[0.32]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl space-y-6 mb-14 md:mb-16" id="services-header">
          <p className="eyebrow">SERVICES</p>
          <h2 className="section-heading text-[1.9rem] sm:text-[2.4rem] md:text-[3rem] leading-[0.95] tracking-tighter">
            Designing thoughtful interfaces.
            <span className="block font-serif font-normal italic">Building the technology behind them.</span>
          </h2>
          <p className="body-text text-[14px] md:text-[15px] max-w-[32rem] leading-relaxed">
            From visual direction to full-stack implementation, I work across design and development to turn ideas into polished digital experiences.
          </p>
        </div>

        {/* Editorial service rows — 1px borders, generous whitespace */}
        <div className="border-t" style={{ borderColor: "var(--border-color)" }} id="services-list">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              id={`service-row-${service.number}`}
              className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 py-8 md:py-10 border-b"
              style={{ borderColor: "var(--border-color)" }}
            >
              {/* Number — 1–2 cols */}
              <div className="col-span-2 md:col-span-1 lg:col-span-1">
                <span className="meta-label text-[13px] tracking-[0.14em]" aria-hidden>
                  {service.number}
                </span>
              </div>

              {/* Title — 3–5 cols */}
              <div className="col-span-10 md:col-span-3 lg:col-span-3">
                <h3 className="font-sans font-bold tracking-tighter text-[1.05rem] md:text-[1.15rem] leading-none" style={{ color: "var(--text-primary)" }}>
                  {service.title}
                </h3>
              </div>

              {/* Description — 6–9 cols */}
              <div className="col-span-12 md:col-span-5 lg:col-span-4 md:col-start-1 lg:col-start-auto">
                <p className="body-text text-[13.5px] md:text-[14px] leading-relaxed max-w-[28rem]">
                  {service.description}
                </p>
              </div>

              {/* Capabilities — 10–12 cols */}
              <div className="col-span-12 md:col-span-3 lg:col-span-4">
                <ul className="space-y-1.5" aria-label={`${service.title} capabilities`}>
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="font-mono text-[11px] tracking-[0.08em] uppercase"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
