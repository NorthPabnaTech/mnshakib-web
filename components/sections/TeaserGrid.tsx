import Link from "next/link";
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
    href: "/about",
    title: "The ",
    italic: "background",
    description:
      "Dhaka → Copenhagen → Toronto. The career arc, operating principles, and why I work the way I work.",
    cta: "Read more →",
  },
  {
    num: "02 · Practice",
    href: "/practice",
    title: "How ",
    italic: "I help",
    description:
      "Six practice areas: Product Strategy, Data Analytics, Consulting, Startup Studio, AI Product Development, and Growth.",
    cta: "View practices →",
  },
  {
    num: "03 · Experience",
    href: "/experience",
    title: "Career ",
    italic: "timeline",
    description:
      "Fifteen years across cement, automotive, real estate, retail consulting, and SaaS — plus education and certifications.",
    cta: "See the timeline →",
  },
  {
    num: "04 · Work",
    href: "/work",
    title: "Selected ",
    italic: "engagements",
    description:
      "Recent client work — ActionAid, Ha-Meem, Coats, Prime Bank, EDOTCO, and more.",
    cta: "View work →",
  },
  {
    num: "05 · Ventures",
    href: "/ventures",
    title: "UpscaleBD ",
    italic: "product family",
    description:
      "Nine B2B SaaS and AI products built in-house — HRx, Somriddhi, Pathfinder, FieldX, and more.",
    cta: "View ventures →",
  },
  {
    num: "06 · Contact",
    href: "/contact",
    title: "Get ",
    italic: "in touch",
    description:
      "For venture-build collaborations, fractional product leadership, and senior advisory engagements.",
    cta: "Start a conversation →",
  },
];

export function TeaserGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionLabel>Explore</SectionLabel>
        <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-tight mb-4 max-w-[700px]">
          Five places to start.
        </h2>
        <p className="text-base text-text-mute leading-relaxed mb-12 max-w-[580px]">
          A short introduction is below — but if you&apos;d rather skip straight to a particular
          area, here are the deeper pages.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {TEASERS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group block bg-bg-elev border border-line-soft hover:border-accent-soft hover:-translate-y-1 hover:bg-bg-elev2 transition-all duration-300 p-8"
            >
              <div className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-5">
                {t.num}
              </div>
              <h3 className="font-serif font-normal text-2xl tracking-tight leading-tight mb-3">
                {t.title}
                <span className="ital">{t.italic}</span>
              </h3>
              <p className="text-text-mute text-[15px] leading-relaxed mb-5">{t.description}</p>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text group-hover:text-accent transition-colors">
                {t.cta}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
