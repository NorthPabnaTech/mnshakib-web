import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutNarrative } from "@/components/sections/AboutNarrative";
import { Testimonials } from "@/components/sections/Testimonials";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About — Nazmus Shakib",
  description:
    "Dhaka, Copenhagen, Toronto — three markets, one operating principle. Founder of UpscaleBD, CSMO at MAAC.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={site.about.eyebrow}
        title={site.about.titleParts}
        subtitle={site.about.intro}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutNarrative />
      <Testimonials />
    </>
  );
}
