/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f8f9fa] border-t-4 border-black pt-16 pb-12 relative overflow-hidden" id="app-footer">
      
      {/* Background radial spotlight using optimized radial gradients */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none" 
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0) 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        {/* Top footer row: Brand & navigation list */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left" id="footer-top-row">
          
          {/* Logo Column (Spans 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleScrollToTop} id="footer-logo">
              <div className="relative flex items-center justify-center w-7 h-7 rounded-none bg-black p-0.5 border-2 border-black">
                <span className="text-[10px] font-sans font-black text-white uppercase">EM</span>
              </div>
              <span className="text-base font-sans font-black tracking-wider text-black uppercase">Essien Mbereidem</span>
            </div>
            
            <p className="text-neutral-500 text-xs font-sans font-semibold max-w-sm leading-relaxed">
              Web Developer & Digital Creative — I design and build digital experiences that combine thoughtful UI with modern web technology.
            </p>

            {/* Socials stack */}
            <div className="flex items-center gap-3 pt-2" id="footer-socials">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/mbereidem-essien-055b08234", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/MB3R3", label: "GitHub" },
              ].map((s, idx) => {
                const IconComp = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-none bg-white border-2 border-black text-black hover:bg-neutral-100 transition-colors"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation links (Spans 3 cols) */}
          <div className="md:col-span-3 space-y-4" id="footer-nav-col">
            <h4 className="text-xs font-mono font-black tracking-widest text-black uppercase">Explore</h4>
            <div className="flex flex-col gap-2.5 text-xs font-sans">
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-neutral-500 hover:text-black font-semibold transition-colors cursor-pointer text-left">
                Home
              </button>
              <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })} className="text-neutral-500 hover:text-black font-semibold transition-colors cursor-pointer text-left">
                Work
              </button>
              <button onClick={() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })} className="text-neutral-500 hover:text-black font-semibold transition-colors cursor-pointer text-left">
                About
              </button>
            </div>
          </div>

          {/* Contact Details (Spans 4 cols) */}
          <div className="md:col-span-4 space-y-4" id="footer-contact-col">
            <h4 className="text-xs font-mono font-black tracking-widest text-black uppercase">Contact</h4>
            <div className="space-y-3 text-xs text-neutral-500 font-semibold font-sans">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                <a href="mailto:essienmbereidem@gmail.com" className="hover:text-black transition-colors">
                  essienmbereidem@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="https://www.linkedin.com/in/mbereidem-essien-055b08234" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-xs">
                  linkedin.com/in/mbereidem-essien-055b08234 ↗
                </a>
                <a href="https://github.com/MB3R3" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-xs">
                  github.com/MB3R3 ↗
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500 font-bold" id="footer-bottom-row">
          
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Essien Mbereidem. All rights reserved.</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-white border-2 border-black text-black hover:bg-neutral-100 font-mono font-black uppercase transition-colors cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            id="scroll-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
