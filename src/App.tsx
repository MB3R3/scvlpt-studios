/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Header from "./components/Header";
import Hero from "./components/Hero";
import DreamWebsiteDo from "./components/DreamWebsiteDo";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Accessibility: Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Accessible fallback: Disable all 3D tilt, parallax, translations, simple 300ms opacity fade
      const allHeaders = document.querySelectorAll("h2");
      allHeaders.forEach((heading) => {
        gsap.fromTo(heading, 
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 0.3, 
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      const allElements = document.querySelectorAll('[id*="card"], [id*="item"], [id*="row"], section');
      allElements.forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 0.3, 
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
      return;
    }

    // 2. Initialize Lenis Smooth Scroll Engine
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth expo decay mirroring cubic-bezier(0.65, 0, 0.35, 1)
      infinite: false,
    });

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Bind Lenis animation frame requests directly to GSAP Ticker
    const gsapTickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTickerCallback);
    gsap.ticker.lagSmoothing(0);

    // 3. Hero Entrance Animations on Load
    const heroLeftChildren = document.querySelectorAll("#hero-left-col > *");
    const heroRightMockup = document.querySelector("#browser-mockup");

    if (heroLeftChildren.length > 0) {
      gsap.fromTo(heroLeftChildren,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out", // cubic-bezier(0.16, 1, 0.3, 1) equivalent
          stagger: 0.07, // 70ms stagger
          delay: 0.1,
        }
      );
    }

    if (heroRightMockup) {
      gsap.fromTo(heroRightMockup,
        { opacity: 0, scale: 0.96, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
          delay: 0.3,
        }
      );
    }

    // 4. Scroll-Triggered Headlines & Typography Reveals
    const splitNode = (node: Node, wordSpans: HTMLSpanElement[]) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        if (!text.trim()) return;

        const words = text.split(/(\s+)/);
        const fragment = document.createDocumentFragment();

        words.forEach((word) => {
          if (word.trim() === "") {
            fragment.appendChild(document.createTextNode(word));
          } else {
            const outerSpan = document.createElement("span");
            outerSpan.className = "reveal-word-outer";
            const innerSpan = document.createElement("span");
            innerSpan.className = "headline-reveal-span";
            innerSpan.textContent = word;
            outerSpan.appendChild(innerSpan);
            fragment.appendChild(outerSpan);
            wordSpans.push(innerSpan);
          }
        });

        node.parentNode?.replaceChild(fragment, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (el.classList.contains("headline-reveal-span") || el.classList.contains("reveal-word-outer")) {
          return;
        }
        const children = Array.from(node.childNodes);
        children.forEach((child) => splitNode(child, wordSpans));
      }
    };

    const originalHeaders: { el: HTMLHeadingElement; html: string }[] = [];
    const allHeaders = document.querySelectorAll("h2");
    allHeaders.forEach((heading) => {
      if (!heading.textContent || !heading.textContent.trim()) return;

      // Prevent redundant splitting if already done
      if (heading.querySelector(".reveal-word-outer")) return;

      originalHeaders.push({ el: heading, html: heading.innerHTML });

      const wordSpans: HTMLSpanElement[] = [];
      const children = Array.from(heading.childNodes);
      children.forEach((child) => splitNode(child, wordSpans));

      if (wordSpans.length === 0) return;

      gsap.fromTo(wordSpans,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.05, // 50ms typography line-by-line / word-by-word stagger
          scrollTrigger: {
            trigger: heading,
            start: "top 85%", // Fire forward when entering view
            toggleActions: "play none none none",
          }
        }
      );
    });

    // 5. Scroll-Triggered Layout Reveals — current sections (Work + About + Services)
    const sectionsToAnimate = [
      {
        trigger: "#work",
        targets: "#work [id^='work-project-']",
      },
      {
        trigger: "#about-section",
        targets: "#about-section #about-intro > *, #about-section #about-capabilities > div > div",
      },
      {
        trigger: "#services-section",
        targets: "#services-section [id^='service-row-']",
      },
    ];

    const triggers: ScrollTrigger[] = [];

    sectionsToAnimate.forEach((sec) => {
      const triggerEl = document.querySelector(sec.trigger);
      if (!triggerEl) return;

      const elements = triggerEl.querySelectorAll(sec.targets);
      if (elements.length === 0) return;

      const st = ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 82%", // exactly 15–20% of target entering viewport
        onEnter: () => {
          gsap.fromTo(elements,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8, // 800ms
              ease: "power4.out", // cubic-bezier(0.16, 1, 0.3, 1) equivalent
              stagger: 0.08, // 80ms stagger
            }
          );
        },
        once: true,
      });
      triggers.push(st);
    });

    // Clean up function
    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTickerCallback);
      triggers.forEach(t => t.kill());
      originalHeaders.forEach(({ el, html }) => {
        el.innerHTML = html;
      });
    };
  }, []);

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] font-sans antialiased selection:bg-black selection:text-white" id="root-app-container">
      {/* Header */}
      <Header />

      {/* Main */}
      <main id="main-content-flow">
        <Hero />
        <DreamWebsiteDo />
        <AboutSection />
        <ServicesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
