import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";

export function AboutNarrative() {
  const { about } = site;

  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          {/* Narrative column */}
          <div>
            {about.narrative.map((block, i) =>
              block.type === "pullquote" ? (
                <blockquote
                  key={i}
                  className="font-serif italic font-light text-2xl leading-snug text-accent border-l border-accent pl-6 my-8"
                >
                  &ldquo;{block.text}&rdquo;
                </blockquote>
              ) : (
                <p
                  key={i}
                  className="text-[17px] leading-relaxed text-text mb-5 last:text-text-mute last:text-base"
                >
                  {block.text}
                </p>
              )
            )}
          </div>

          {/* Stats sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-0">
              {about.stats.map((s, i) => (
                <div
                  key={i}
                  className="border border-line-soft p-7 lg:mb-3 bg-bg-elev hover:border-accent-soft transition-colors"
                >
                  <div className="font-serif text-4xl font-normal text-accent leading-none tracking-tight">
                    {s.number}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-mute mt-3">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {about.currentRoles.length > 0 && (
              <div className="mt-8 pt-6 border-t border-line-soft">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim mb-4">
                  Current Roles
                </div>
                {about.currentRoles.map((r, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-dotted border-line-soft last:border-b-0 text-[15px] gap-1 sm:gap-4"
                  >
                    <span className="text-text">{r.role}</span>
                    <span className="text-text-mute font-mono text-[13px]">{r.org}</span>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </Container>
    </section>
  );
}
