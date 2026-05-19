import { Container } from "@/components/ui/Container";
import { projects } from "@/lib/content/projects";

export function ProjectsList() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`group grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1.3fr_1fr_1fr_auto] gap-4 md:gap-8 py-7 border-t border-line-soft items-center cursor-pointer transition-all hover:px-4 md:hover:px-5 ${
                i === projects.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-mono text-xs text-text-dim tracking-[0.12em]">
                {p.year}
              </span>
              <span className="font-serif font-normal text-xl tracking-tight transition-colors group-hover:text-accent">
                {p.title}
              </span>
              <span className="hidden md:block font-mono text-xs text-text-mute uppercase tracking-[0.1em]">
                {p.client}
              </span>
              <span className="hidden lg:block text-sm text-text">{p.category}</span>
              <span className="font-serif text-2xl text-text-dim transition-all group-hover:text-accent group-hover:translate-x-2">
                →
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
