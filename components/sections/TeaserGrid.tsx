"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Teaser {
  num: string;
  href: string;
  title: string;
  italic: string;
  description: string;
  cta: string;
}

const TEASERS: Teaser[] = [
  {
    num: "01 · About",
    href: "#about",
    title: "The ",
    italic: "background",
    description:
      "Dhaka → Copenhagen → Toronto. The career arc, operating principles, and why I work the way I work.",
    cta: "Read more →",
  },
  {
    num: "02 · Practice",
    href: "#practice",
    title: "How ",
    italic: "I help",
    description:
      "Six practice areas: Product Strategy, Data Analytics, Consulting, Startup Studio, AI Product Development, and Growth.",
    cta: "View practices →",
  },
  {
    num: "03 · Experience",
    href: "#experience",
    title: "Career ",
    italic: "timeline",
    description:
      "Fifteen years across cement, automotive, real estate, retail consulting, and SaaS — plus education and certifications.",
    cta: "See the timeline →",
  },
  {
    num: "04 · Work",
    href: "#work",
    title: "Selected ",
    italic: "engagements",
    description:
      "Recent client work — ActionAid, Ha-Meem, Coats, Prime Bank, EDOTCO, and more.",
    cta: "View work →",
  },
  {
    num: "05 · Expertise",
    href: "#expertise",
    title: "Core areas of ",
    italic: "expertise",
    description:
      "Strategic focus areas across trade marketing, analytics, sales management, transformation, and tools.",
    cta: "View expertise →",
  },
  {
    num: "06 · Ventures",
    href: "#ventures",
    title: "UpscaleBD ",
    italic: "product family",
    description:
      "Nine B2B SaaS and AI products built in-house — HRx, Somriddhi, Pathfinder, FieldX, and more.",
    cta: "View ventures →",
  },
  {
    num: "07 · Contact",
    href: "#contact",
    title: "Get ",
    italic: "in touch",
    description:
      "For venture-build collaborations, fractional product leadership, and senior advisory engagements.",
    cta: "Start a conversation →",
  },
];

export function TeaserGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollTo = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const updateScrollState = () => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    // Calculate progress (0 to 100)
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);

    // Update button states
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollState);
      // Run once on mount / resize
      updateScrollState();
      window.addEventListener("resize", updateScrollState);
    }
    return () => {
      if (el) el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handlePrev = () => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 300;
    const gap = 24; // matches gap-6
    el.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  };

  const handleNext = () => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 300;
    const gap = 24; // matches gap-6
    el.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
  };

  return (
    <section className="py-24 border-b border-line-soft bg-bg/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionLabel>Explore</SectionLabel>
            <h2 className="font-serif font-normal text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight mb-4 max-w-[700px]">
              Five places to start<span className="text-accent">.</span>
            </h2>
            <p className="text-base text-text-mute leading-relaxed max-w-[580px]">
              A short introduction is below — but if you&apos;d rather skip straight to a particular
              area, here are the sections.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-line text-text hover:border-accent hover:text-accent bg-bg-elev/30 hover:bg-bg-elev"
                  : "border-line/30 text-text-dim/30 cursor-not-allowed"
              }`}
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-line text-text hover:border-accent hover:text-accent bg-bg-elev/30 hover:bg-bg-elev"
                  : "border-line/30 text-text-dim/30 cursor-not-allowed"
              }`}
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-6 px-0.5"
        >
          {TEASERS.map((t) => (
            <a
              key={t.href}
              href={t.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(t.href);
              }}
              className="group block w-[85vw] sm:w-[45vw] lg:w-[31.5vw] shrink-0 snap-start bg-bg-elev border border-line-soft hover:border-accent-soft hover:-translate-y-1 hover:bg-bg-elev2 transition-all duration-300 p-8 cursor-pointer relative"
            >
              {/* Gold light reflection on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t.num}
              </div>
              <h3 className="font-serif font-normal text-2xl tracking-tight leading-tight mb-4 text-text group-hover:text-accent transition-colors duration-300">
                {t.title}
                <span className="ital">{t.italic}</span>
              </h3>
              <p className="text-text-mute text-[15px] leading-relaxed mb-6 min-h-[72px]">
                {t.description}
              </p>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-text group-hover:text-accent transition-colors flex items-center gap-1.5">
                <span>{t.cta}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Progress Bar indicator */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-[2px] bg-line-soft flex-grow rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 bottom-0 left-0 bg-accent transition-all duration-150 rounded-full"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className="font-mono text-[10px] text-text-dim tracking-wider uppercase select-none">
            Slide Progress
          </div>
        </div>
      </Container>
    </section>
  );
}
