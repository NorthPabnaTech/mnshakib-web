import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content/site";

export function ContactDetails() {
  const { contact } = site;

  const rows = [
    { label: "Location", value: contact.location },
    { label: "Email", value: contact.email, link: `mailto:${contact.email}` },
    { label: "Booking", value: "30-min intro · by request" },
    { label: "Availability", value: contact.availability },
    { label: "Response time", value: contact.responseTime },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
          {/* Copy column */}
          <div>
            <p className="text-[17px] text-text-mute leading-relaxed mb-6">
              The best way to reach me is by email. Include a one-paragraph description of what
              you&apos;re working on and what kind of help you need — a clear brief saves us both
              a meeting.
            </p>
            <p className="text-[17px] text-text-mute leading-relaxed mb-10">
              For senior advisory engagements, I prefer a 30-minute intro call before any formal
              proposal.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" href={`mailto:${contact.email}`} external>
                {contact.email} <span>→</span>
              </Button>
              <Button variant="ghost" href={contact.linkedIn} external>
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Details column */}
          <div>
            {rows.map((row, i) => (
              <div
                key={i}
                className="py-4 border-t border-line-soft last:border-b last:border-line-soft"
              >
                <div className="font-mono text-[11px] text-text-dim uppercase tracking-[0.18em] mb-1.5">
                  {row.label}
                </div>
                <div className="text-base">
                  {row.link ? (
                    <a href={row.link} className="hover:text-accent transition-colors">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
