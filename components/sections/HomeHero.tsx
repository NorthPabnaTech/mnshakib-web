"use client";

import { Container } from "@/components/ui/Container";
import { Headline } from "@/components/ui/SectionLabel";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

function ScrollButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}) {
  const scrollTo = () => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollTo}
      className={cn(
        "inline-flex items-center gap-2 text-sm transition-all duration-300",
        variant === "primary"
          ? "bg-accent text-bg hover:bg-text hover:-translate-y-px px-7 py-3.5 rounded-full font-medium"
          : "border border-line text-text hover:border-accent hover:text-accent px-7 py-3.5 rounded-full",
      )}
    >
      {children}
    </button>
  );
}

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
              <ScrollButton variant="primary" href="#work">
                View selected work <span>→</span>
              </ScrollButton>
              <ScrollButton variant="ghost" href="#contact">
                Start a conversation
              </ScrollButton>
            </div>
          </div>

          {/* Right: Profile frame */}
          <div className="lg:max-w-[440px] lg:ml-auto w-full group relative">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-bg-elev2 to-bg border border-line rounded overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:border-accent/40 transition-all duration-500">
              <Image
                src="/images/Nazmus Shakib.png"
                alt="MD Nazmus Shakib"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                priority
              />

              {/* Bottom gradient fade for blending and text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/20 to-transparent opacity-90 z-10 pointer-events-none" />

              {/* Subtle color highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Meta footer */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] text-text-mute uppercase tracking-[0.13em] z-20">
                <div>
                  <div>Based in</div>
                  <div className="text-text mt-1">{hero.location}</div>
                </div>
                <div className="text-right">
                  <div>
                    Available{" "}
                    {hero.isAvailable && <span className="text-accent">●</span>}
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
