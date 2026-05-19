import { Container } from "@/components/ui/Container";
import { products } from "@/lib/content/products";

export function ProductsGrid() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => {
            const Component = p.url ? "a" : "div";
            const linkProps = p.url
              ? { href: p.url, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Component
                key={p.id}
                {...linkProps}
                className="group relative bg-bg-elev border border-line-soft hover:border-accent-soft hover:-translate-y-1 hover:bg-bg-elev2 transition-all duration-300 p-7 min-h-[240px] flex flex-col"
              >
                {/* Glow dot */}
                <span className="absolute top-4 right-4 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]" />

                <div className="font-serif font-medium text-2xl mb-1.5">{p.name}</div>
                <div className="font-mono text-[11px] text-accent uppercase tracking-[0.18em] mb-4">
                  {p.category}
                </div>
                <p className="text-sm text-text-mute leading-relaxed flex-grow">{p.description}</p>
                {p.url && (
                  <span className="mt-5 flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.15em] text-text-mute group-hover:text-accent transition-colors">
                    Visit Product <span>→</span>
                  </span>
                )}
              </Component>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
