import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { reviews } from "@/lib/content/reviews";

export function Testimonials() {
  return (
    <section className="py-20 border-t border-line-soft">
      <Container>
        <SectionLabel>Reviews</SectionLabel>
        <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-tight mb-4 max-w-[700px]">
          What people <span className="ital">have said</span>.
        </h2>
        <p className="text-base text-text-mute leading-relaxed mb-12 max-w-[580px]">
          Recommendations from former colleagues, clients, and senior leaders — drawn from
          LinkedIn and direct client engagements.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <article
              key={r.id}
              className="bg-bg-elev border border-line-soft hover:border-accent-soft hover:-translate-y-0.5 transition-all duration-300 p-9 flex flex-col"
            >
              <div className="font-serif italic text-accent text-6xl leading-[0.5] mb-2 opacity-50">
                &ldquo;
              </div>
              <p className="font-serif italic font-light text-base leading-relaxed mb-7 flex-grow">
                {r.body}
              </p>
              <div className="flex items-center gap-4 pt-5 border-t border-line-soft">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-soft to-accent flex items-center justify-center font-serif italic font-medium text-bg flex-shrink-0">
                  {r.authorInitials}
                </div>
                <div>
                  <div className="text-[15px] font-medium">{r.authorName}</div>
                  <div className="font-mono text-[10px] text-text-mute uppercase tracking-[0.13em] mt-1">
                    {r.authorRole}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
