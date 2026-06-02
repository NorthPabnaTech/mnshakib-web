"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Marquee from "react-fast-marquee";

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
  const scrollTo = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
              A short introduction is below — but if you&apos;d rather skip
              straight to a particular area, here are the sections.
            </p>
          </div>
        </div>

        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
          className="pb-6"
        >
          {TEASERS.map((t) => (
            <a
              key={t.href}
              href={t.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(t.href);
              }}
              className="group block ml-6 w-[85vw] sm:w-[45vw] lg:w-[31.5vw] shrink-0 bg-bg-elev border border-line-soft hover:border-accent-soft hover:-translate-y-1 hover:bg-bg-elev2 transition-all duration-300 p-8 cursor-pointer relative"
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
        </Marquee>
      </Container>
    </section>
  );
}
