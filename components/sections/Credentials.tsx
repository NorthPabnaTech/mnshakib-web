import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { certifications } from "@/lib/content/certifications";
import { educations } from "@/lib/content/educations";
import Image from "next/image";

// Maps certification IDs → logo file paths in /public/images/institutes/
const CERT_LOGOS: Record<string, string> = {
  mcim: "/images/institutes/cim.jpg",
  sfp: "/images/institutes/smart_factory_institute_logo.jpg",
  cmc: "/images/institutes/cmc.jpg",
  "google-analytics": "/images/institutes/google-skill-shop-certificate.jpg",
  hubspot: "/images/institutes/Hubspot Academy.png",
  dmi: "/images/institutes/digigtal marketing institute.jpg",
  "pm-foundations": "/images/institutes/PMaspire.png",
  "blue-ocean": "/images/institutes/INSEAD Online.jpg",
};

export function Credentials() {
  return (
    <section className="py-20 border-t border-line-soft bg-gradient-to-b from-bg to-[#081222]">
      <Container>
        <SectionLabel>04 · Education & Credentials</SectionLabel>
        <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-tight mb-4 max-w-[700px]">
          Trained <span className="ital">where strategy is taught well</span>.
        </h2>
        <p className="text-base text-text-mute leading-relaxed mb-12 max-w-[580px]">
          A combination of formal business education and ongoing professional
          certifications.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Education column */}
          <div>
            <h3 className="font-serif font-normal text-xl mb-6 pb-3 border-b border-line-soft flex items-center gap-3">
              Education
              <span className="font-mono text-[11px] text-accent tracking-[0.18em] px-2 py-0.5 border border-accent-soft rounded-full">
                {String(educations.length).padStart(2, "0")} ENTRIES
              </span>
            </h3>
            {educations.map((e) => (
              <div
                key={e.id}
                className="py-5 border-b border-line-soft last:border-b-0"
              >
                <div className="font-mono text-[11px] text-accent tracking-[0.14em] mb-2">
                  {e.years}
                </div>
                <div className="font-serif text-base font-medium mb-1 leading-snug">
                  {e.degree}
                </div>
                <div className="text-text-mute text-sm mb-1.5">{e.school}</div>
                {e.detail && (
                  <div className="text-text-dim text-[13px] italic">
                    {e.detail}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications column */}
          <div>
            <h3 className="font-serif font-normal text-xl mb-6 pb-3 border-b border-line-soft flex items-center gap-3">
              Certifications
              <span className="font-mono text-[11px] text-accent tracking-[0.18em] px-2 py-0.5 border border-accent-soft rounded-full">
                {String(certifications.length).padStart(2, "0")} ACTIVE
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((c) => {
                const logoSrc = CERT_LOGOS[c.id];
                return (
                  <div
                    key={c.id}
                    className="relative p-5 bg-bg-elev border border-line-soft hover:border-accent-soft hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4 group"
                  >
                    {/* Logo container */}
                    <div className="size-14 flex-shrink-0 bg-transparent rounded flex items-center justify-center overflow-hidden group-hover:border-accent/30 transition-all duration-300">
                      {logoSrc ? (
                        <Image
                          src={logoSrc}
                          alt={c.issuer}
                          width={70}
                          height={56}
                          className="object-contain w-full h-full"
                          unoptimized
                        />
                      ) : (
                        /* Fallback: gold checkmark */
                        <span className="text-accent text-lg font-mono">✓</span>
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-grow min-w-0">
                      <div className="text-sm font-medium leading-snug text-text group-hover:text-accent transition-colors duration-300">
                        {c.name}
                      </div>
                      <div className="font-mono text-[10px] text-text-mute uppercase tracking-[0.1em] mt-1.5 leading-normal">
                        {c.issuer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
