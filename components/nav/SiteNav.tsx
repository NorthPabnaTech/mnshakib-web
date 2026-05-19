"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/ventures", label: "Ventures" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Force scroll to top on page reload / mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-12 py-5 backdrop-blur-xl bg-bg/75 border-b border-line-soft">
        <Link href="/" className="font-serif text-lg font-medium tracking-tight z-50">
          Nazmus<span className="text-accent">.</span>Shakib
          <span className="ml-2 font-mono text-[10px] text-text-dim uppercase tracking-[0.15em]">
            MCIM · SFP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-9 items-center">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm transition-colors py-1",
                    isActive ? "text-accent" : "text-text-mute hover:text-text"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="px-5 py-2 border border-line rounded-full text-xs hover:border-accent hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              Let&apos;s Talk <span>→</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Toggle (Hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span
            className={cn(
              "w-6 h-[1.5px] bg-text absolute transition-all duration-300 ease-in-out",
              isOpen ? "rotate-45 bg-accent" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "w-6 h-[1.5px] bg-text absolute transition-all duration-300 ease-in-out",
              isOpen ? "opacity-0" : ""
            )}
          />
          <span
            className={cn(
              "w-6 h-[1.5px] bg-text absolute transition-all duration-300 ease-in-out",
              isOpen ? "-rotate-45 bg-accent" : "translate-y-1.5"
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
            : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6 font-serif text-3xl tracking-tight max-w-sm">
          {NAV_ITEMS.map((item, idx) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li
                key={item.href}
                className={cn(
                  "transition-all duration-500 transform",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                )}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-accent transition-colors flex items-baseline gap-4 py-2",
                    isActive ? "text-accent" : "text-text"
                  )}
                >
                  <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
                    0{idx + 1}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li
            className={cn(
              "transition-all duration-500 transform pt-6 border-t border-line-soft",
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            )}
            style={{ transitionDelay: `${NAV_ITEMS.length * 60}ms` }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg hover:bg-text hover:text-white rounded-full font-medium text-sm transition-all duration-300"
            >
              Let&apos;s Talk <span>→</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
