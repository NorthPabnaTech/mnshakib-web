import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="py-10 border-t border-line-soft bg-bg-deep">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-text-dim uppercase tracking-[0.13em]">
          <div>© {new Date().getFullYear()} Nazmus Shakib · All rights reserved</div>
          <div className="flex gap-6">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                {s.label}
              </a>
            ))}
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
