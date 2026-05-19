import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "Practice — Nazmus Shakib",
  description:
    "Six practice areas: Product Strategy, Data Analytics, Consulting, Startup Studio, AI Product Development, and Growth.",
};

export default function PracticePage() {
  return (
    <>
      <PageHero
        eyebrow="02 · Practice"
        title={[
          { type: "text", value: "Six practices. " },
          { type: "ital", value: "One operating principle." },
        ]}
        subtitle="Whether the brief is a $50M enterprise rollout or a two-founder pre-seed, the work moves the same way: clarify the bet, build the smallest thing that proves it, then scale what works."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Practice" }]}
      />
      <ServicesGrid />
    </>
  );
}
