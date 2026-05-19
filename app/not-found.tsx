import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-20">
      <Container>
        <div className="text-center max-w-[600px] mx-auto">
          <div className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-6">
            404
          </div>
          <h1 className="font-serif font-normal text-[clamp(2.4rem,5vw,4rem)] leading-tight tracking-tight mb-6">
            Page not <span className="ital">found</span>.
          </h1>
          <p className="text-text-mute text-lg mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. Head back home or use the
            navigation above.
          </p>
          <Button variant="primary" href="/">
            Back to home <span>→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
