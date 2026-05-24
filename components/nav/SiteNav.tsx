"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#ventures", label: "NVT Plus" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // IntersectionObserver — highlight nav item for the section in view
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "practice",
      "experience",
      "work",
      "ventures",
      "contact",
    ];
    const observers: IntersectionObserver[] = [];

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observers.push(observer);
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (hash: string) => {
    setIsOpen(false);
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-12 py-5 backdrop-blur-xl bg-bg/75 border-b border-line-soft">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="font-serif text-lg font-medium tracking-tight z-50"
        >
          Nazmus<span className="text-accent">.</span>Shakib
          <span className="ml-2 font-mono text-[10px] text-text-dim uppercase tracking-[0.15em]">
            MCIM · SFP
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-9 items-center">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={cn(
                    "relative text-sm transition-colors py-1",
                    isActive ? "text-accent" : "text-text-mute hover:text-text",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                  )}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className={cn(
                "px-5 py-2 border rounded-full text-xs inline-flex items-center gap-1 transition-colors",
                activeSection === "contact"
                  ? "border-accent text-accent"
                  : "border-line hover:border-accent hover:text-accent",
              )}
            >
              Let&apos;s Talk <span>→</span>
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span
            className={cn(
              "w-6 h-[1.5px] bg-text absolute transition-all duration-300 ease-in-out",
              isOpen ? "rotate-45 bg-accent" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "w-6 h-[1.5px] bg-text absolute transition-all duration-300 ease-in-out",
              isOpen ? "opacity-0" : "",
            )}
          />
          <span
            className={cn(
              "w-6 h-[1.5px] bg-text absolute transition-all duration-300 ease-in-out",
              isOpen ? "-rotate-45 bg-accent" : "translate-y-1.5",
            )}
          />
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-bg/98 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center px-10 transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-6 font-serif text-3xl tracking-tight max-w-sm">
          {NAV_ITEMS.map((item, idx) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li
                key={item.href}
                className={cn(
                  "transition-all duration-500 transform",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0",
                )}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={cn(
                    "hover:text-accent transition-colors flex items-baseline gap-4 py-2",
                    isActive ? "text-accent" : "text-text",
                  )}
                >
                  <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
                    0{idx + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            );
          })}
          <li
            className={cn(
              "transition-all duration-500 transform pt-6 border-t border-line-soft",
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
            )}
            style={{ transitionDelay: `${NAV_ITEMS.length * 60}ms` }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg hover:bg-text hover:text-white rounded-full font-medium text-sm transition-all duration-300"
            >
              Let&apos;s Talk <span>→</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
