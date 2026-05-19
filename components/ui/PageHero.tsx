import type { HeadlinePart } from "@/lib/types";
import { Container } from "./Container";
import { Headline, SectionLabel } from "./SectionLabel";
import { Breadcrumb } from "@/components/nav/Breadcrumb";

interface PageHeroProps {
  eyebrow: string;
  title: HeadlinePart[] | string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
}

/**
 * Reusable hero header for all subpages.
 * Renders: breadcrumb · mono eyebrow · serif headline · subtitle.
 */
export function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="pt-44 pb-16 border-b border-line-soft fade-in">
      <Container>
        <Breadcrumb items={breadcrumb} />
        <SectionLabel>{eyebrow}</SectionLabel>
        {typeof title === "string" ? (
          <h1 className="font-serif font-normal text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight max-w-[900px] mb-6">
            {title}
          </h1>
        ) : (
          <Headline
            parts={title}
            className="text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight max-w-[900px] mb-6"
          />
        )}
        {subtitle && (
          <p className="text-lg text-text-mute leading-relaxed max-w-[680px]">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
