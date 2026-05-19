import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content/site";

export function CtaStrip() {
  return (
    <section className="py-20 border-t border-b border-line-soft bg-gradient-to-b from-bg to-[#081222] text-center">
      <Container>
        <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-5 max-w-[720px] mx-auto">
          Have a <span className="ital">hard problem</span> worth solving?
        </h2>
        <p className="text-text-mute text-base max-w-[520px] mx-auto mb-8 leading-relaxed">
          I take on a small number of engagements each quarter — venture-build collaborations,
          fractional product leadership, and senior advisory work.
        </p>
        <div className="inline-flex gap-4 flex-wrap justify-center">
          <Button variant="primary" href={`mailto:${site.contact.email}`} external>
            {site.contact.email} <span>→</span>
          </Button>
          <Button variant="ghost" href={site.contact.linkedIn} external>
            LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}
