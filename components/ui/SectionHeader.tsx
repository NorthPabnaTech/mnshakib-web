import type { HeadlinePart } from "@/lib/types";
import { Container } from "./Container";
import { SectionLabel, Headline } from "./SectionLabel";

interface SectionHeaderProps {
  eyebrow: string;
  title: HeadlinePart[];
  subtitle?: string;
}

/**
 * In-page section header for the single-scroll layout.
 * Replaces PageHero for all sections (no breadcrumb needed).
 */
export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="pt-28 pb-14 fade-in">
      <Container>
        <SectionLabel>{eyebrow}</SectionLabel>
        <Headline
          parts={title}
          className="text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight max-w-[900px] mb-6"
        />
        {subtitle && (
          <p className="text-lg text-text-mute leading-relaxed max-w-[680px]">{subtitle}</p>
        )}
      </Container>
    </div>
  );
}
