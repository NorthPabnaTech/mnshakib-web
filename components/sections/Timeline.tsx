import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiences } from "@/lib/content/experiences";

export function Timeline() {
  return (
    <section className="py-20">
      <Container>
        <SectionLabel>Career Timeline</SectionLabel>

        <div className="relative pl-8 mt-8">
          {/* Vertical rule */}
          <span className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-line-soft to-transparent" />

          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pb-10 grid grid-cols-1 md:grid-cols-[170px_1fr] gap-2 md:gap-10"
            >
              {/* Dot marker */}
              <span className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-bg border border-accent" />

              {/* Date column */}
              <div className="font-mono text-xs text-text-dim uppercase tracking-[0.14em] pt-1">
                {exp.isCurrent && <span className="text-accent">●</span>}{" "}
                {exp.startDate}
                {exp.endDate && ` — ${exp.endDate}`}
              </div>

              {/* Content column */}
              <div>
                <h4 className="font-serif text-xl font-medium tracking-tight leading-tight mb-1">
                  {exp.role}
                </h4>
                <div className="font-mono text-xs text-accent uppercase tracking-[0.13em] mb-3 flex flex-wrap items-center gap-2">
                  {exp.company}
                  {exp.location && (
                    <span className="text-text-dim text-[10px]">· {exp.location}</span>
                  )}
                </div>
                <p className="text-text-mute text-[15px] leading-relaxed mb-3">
                  {exp.description}
                </p>
                {exp.bullets && (
                  <ul className="list-none p-0">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-text-mute text-sm leading-relaxed pl-5 relative py-1"
                      >
                        <span className="absolute left-0 text-accent-soft font-mono">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
