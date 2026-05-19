import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Headline } from "@/components/ui/SectionLabel";
import { site } from "@/lib/content/site";
import Image from "next/image";

export function HomeHero() {
  const { hero } = site;

  return (
    <section className="min-h-[auto] lg:min-h-screen flex items-center pt-28 sm:pt-36 pb-12 md:pb-20 fade-in">
      <Container>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: Copy + CTAs */}
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              {hero.eyebrow}
            </div>

            <Headline
              parts={hero.headlineParts}
              className="text-[clamp(3rem,6vw,5rem)] leading-[0.98] tracking-[-0.035em] mb-8"
            />

            <p className="text-lg text-text-mute leading-relaxed max-w-[480px] mb-10">
              {hero.lead}
            </p>

            <div className="flex gap-4 items-center flex-wrap">
              <Button variant="primary" href="/work">
                View selected work <span>→</span>
              </Button>
              <Button variant="ghost" href="/contact">
                Start a conversation
              </Button>
            </div>
          </div>

          {/* Right: Profile frame */}
          <div className="lg:max-w-[360px] lg:ml-auto w-full">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-bg-elev2 to-bg border border-line rounded overflow-hidden bg-accent-glow">
              <Image
                src="/images/MD Nazmus Shakib.png"
                alt="MD Nazmus Shakib"
                fill
                className="object-cover"
                priority
              />

              {/* Meta footer */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] text-text-mute uppercase tracking-[0.13em] z-10">
                <div>
                  <div>Based in</div>
                  <div className="text-text mt-1">{hero.location}</div>
                </div>
                <div className="text-right">
                  <div>
                    Available {hero.isAvailable && <span className="text-accent">●</span>}
                  </div>
                  <div className="text-text mt-1">{hero.availability}</div>
                </div>
              </div>
            </div>

            {/* Credentials strip */}
            <div className="mt-5 flex gap-4 flex-wrap font-mono text-[10px] text-text-dim uppercase tracking-[0.13em] justify-start md:justify-end">
              {hero.credentials.map((c) => (
                <span key={c} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
