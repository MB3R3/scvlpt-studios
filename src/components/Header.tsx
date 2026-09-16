/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { gsap } from "gsap";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return "dark";
      if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = window.document.body;
    if (theme === "dark") {
      root.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const menuTimeline = useRef<gsap.core.Timeline | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Smooth scroll helper — also handles navigation from /work/* pages
  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // If on a project page, navigate back to main portfolio first
    const isProject = typeof window !== "undefined" && window.location.pathname.startsWith("/work/");
    if (isProject) {
      if (id === "home") {
        window.history.pushState({}, "", "/");
        window.dispatchEvent(new PopStateEvent("popstate"));
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const targetId = id === "contact" ? "app-footer" : id;
      // Navigate to home then scroll to section
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 150);
      return;
    }

    // Allow the overlay to slide up smoothly before starting the scroll sequence
    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      // Contact maps to footer
      const targetId = id === "contact" ? "app-footer" : id;
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // height of sticky header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 450);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Mobile Menu Animations Setup
  useEffect(() => {
    // Reset/clear pre-existing timeline
    if (menuTimeline.current) {
      menuTimeline.current.kill();
    }

    const tl = gsap.timeline({ paused: true });

    // Initial state setup for overlay and nested list elements
    gsap.set(overlayRef.current, { 
      yPercent: -100, 
      opacity: 0,
      visibility: "hidden"
    });
    gsap.set(linksRef.current, { y: 40, opacity: 0 });

    tl.to(overlayRef.current, {
      yPercent: 0,
      opacity: 1,
      visibility: "visible",
      duration: 0.5,
      ease: "power3.out"
    })
    .to(linksRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.45,
      stagger: {
        each: 0.08,
        from: "end" // Stagger from bottom to top as requested
      },
      ease: "power2.out"
    }, "-=0.25");

    menuTimeline.current = tl;

    return () => {
      if (menuTimeline.current) {
        menuTimeline.current.kill();
      }
    };
  }, []);

  // Trigger GSAP timeline when state updates
  useEffect(() => {
    if (menuTimeline.current && overlayRef.current) {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
        overlayRef.current.style.pointerEvents = "auto";
        menuTimeline.current.play();
      } else {
        document.body.style.overflow = "";
        overlayRef.current.style.pointerEvents = "none";
        menuTimeline.current.reverse();
      }
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Work", id: "work" },
    { label: "About", id: "about-section" },
    { label: "Services", id: "services-section" },
    { label: "Contact", id: "contact" },
  ];

  const mobileNavLinks = [
    { label: "HOME", id: "home" },
    { label: "WORK", id: "work" },
    { label: "ABOUT", id: "about-section" },
    { label: "SERVICES", id: "services-section" },
    { label: "CONTACT", id: "contact" },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-card)]/90 backdrop-blur-md border-b border-[var(--border-color)] py-3"
            : "bg-transparent py-5"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Left: Navigation links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6" id="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-xs font-mono uppercase tracking-widest font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color)] focus-visible:ring-offset-2"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Center: Brand Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} id="header-logo">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-none border bg-[var(--text-primary)] p-0.5" style={{ borderColor: "var(--text-primary)" }}>
              <div className="w-full h-full bg-[var(--bg-card)] rounded-none flex items-center justify-center">
                <span className="text-[10px] font-sans font-black uppercase" style={{ color: "var(--text-primary)" }}>EM</span>
              </div>
            </div>
            <span className="text-lg font-sans font-black tracking-tighter uppercase" style={{ color: "var(--text-primary)" }}>Essien Mbereidem</span>
          </div>

          {/* Right: CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4" id="desktop-header-cta">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-none border bg-[var(--bg-card)] hover:bg-[var(--bg-neutral-50)] transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color)] mr-1"
              style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              id="theme-toggle-desktop"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" aria-hidden />
              ) : (
                <Sun className="w-4 h-4 text-orange-500 animate-pulse" aria-hidden />
              )}
            </button>

            <button
              onClick={() => handleScrollTo("work")}
              className="relative px-6 py-2.5 text-xs font-sans font-semibold uppercase tracking-widest rounded-none bg-[var(--accent)] text-[var(--bg-primary)] border border-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color)] focus-visible:ring-offset-2"
              id="header-cta-btn"
            >
              <span className="relative z-10 flex items-center gap-1">
                View Work
              </span>
            </button>
          </div>

          {/* Mobile elements (Hamburger Morphing Trigger) */}
          <div className="flex items-center gap-3 md:hidden" id="mobile-header-actions">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-none border flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color)] ${
                isMobileMenuOpen 
                  ? "bg-black border-neutral-800 text-neutral-400 hover:text-white"
                  : "bg-[var(--bg-card)] hover:bg-[var(--bg-neutral-50)]"
              }`}
              style={!isMobileMenuOpen ? { borderColor: "var(--border-color)", color: "var(--text-primary)" } : undefined}
              id="theme-toggle-mobile"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? (
                <Moon className="w-3.5 h-3.5" aria-hidden />
              ) : (
                <Sun className="w-3.5 h-3.5 text-orange-500 animate-pulse" aria-hidden />
              )}
            </button>
            
            {/* Morphing Hamburger Menu Trigger */}
            <button
              onClick={toggleMenu}
              className={`relative w-11 h-11 flex flex-col items-center justify-center border cursor-pointer focus:outline-none z-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color)] ${
                isMobileMenuOpen 
                  ? "bg-black text-white border-white hover:bg-neutral-900" 
                  : "bg-[var(--bg-card)] hover:bg-[var(--bg-neutral-50)]"
              }`}
              style={!isMobileMenuOpen ? { borderColor: "var(--border-color)", color: "var(--text-primary)" } : undefined}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              <div className="w-5 h-4 flex flex-col justify-between relative" id="hamburger-icon-lines">
                <span
                  className={`w-full h-0.5 transition-all duration-300 ease-out origin-center ${
                    isMobileMenuOpen ? "bg-white rotate-45 translate-y-[7px]" : "bg-black"
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? "bg-white opacity-0 scale-x-0" : "bg-black opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ease-out origin-center ${
                    isMobileMenuOpen ? "bg-white -rotate-45 -translate-y-[7px]" : "bg-black"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* GSAP Full-Screen Dark Overlay Menu (Mobile only) */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-35 bg-black text-white flex flex-col justify-between p-6 pt-24 md:hidden select-none"
        id="mobile-nav-overlay"
        style={{ visibility: "hidden" }}
      >
        {/* Large Navigation Links list */}
        <div className="flex flex-col space-y-2 mt-8 text-left" id="mobile-overlay-links">
          {mobileNavLinks.map((link, index) => (
            <button
              key={link.id}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
              onClick={() => handleScrollTo(link.id)}
              className="w-full flex items-baseline justify-between py-5 border-b border-neutral-900 text-left hover:text-purple-400 transition-colors group cursor-pointer"
              id={`mobile-nav-link-${link.id}`}
            >
              <span className="text-3xl font-sans font-black tracking-tighter uppercase">
                {link.label}
              </span>
              <span className="text-xs font-mono text-neutral-600 font-bold group-hover:text-purple-400 transition-colors">
                / 0{index + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Agency aesthetic accents at the bottom */}
        <div className="space-y-6 pb-6">
          <button
            onClick={() => handleScrollTo("work")}
            className="w-full py-4 rounded-none border-2 border-white bg-white text-black font-semibold text-xs uppercase tracking-widest text-center block cursor-pointer hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            id="mobile-nav-overlay-cta"
          >
            VIEW WORK ↗
          </button>
          
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-t border-neutral-900 pt-4">
            <span>WEB DEVELOPER • DIGITAL CREATIVE</span>
            <span>2026</span>
          </div>
        </div>
      </div>

      {/* Inquiry modal preserved for existing sections; header CTA now scrolls to Work */}
    </>
  );
}
