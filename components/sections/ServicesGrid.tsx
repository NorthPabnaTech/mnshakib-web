import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { services } from "@/lib/content/services";

export function ServicesGrid() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid sm:grid-cols-2 gap-px bg-line-soft border border-line-soft">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="bg-bg hover:bg-bg-elev transition-colors duration-300 p-6 sm:p-10"
            >
              <div className="font-mono text-[11px] text-text-dim tracking-[0.2em] mb-7 flex items-center gap-3">
                <span className="w-7 h-7 border border-line rounded-full flex items-center justify-center text-accent font-serif italic text-sm">
                  {s.serial}
                </span>
                {String(i + 1).padStart(2, "0")} / PRACTICE
              </div>
              <h3 className="font-serif font-normal text-2xl tracking-tight leading-tight mb-3">
                {s.title}{" "}
                {s.italicTitle && (
                  <span className="italic text-accent-soft font-light">{s.italicTitle}</span>
                )}
              </h3>
              <p className="text-text-mute text-[15px] leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
