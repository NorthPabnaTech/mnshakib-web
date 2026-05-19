import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Timeline } from "@/components/sections/Timeline";
import { Credentials } from "@/components/sections/Credentials";

export const metadata: Metadata = {
  title: "Experience — Nazmus Shakib",
  description:
    "Fifteen years across cement, automotive, real estate, retail consulting, and SaaS. Plus education and certifications.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="03 · Experience"
        title={[
          { type: "text", value: "A career across " },
          {
            type: "ital",
            value: "strategy, marketing, and venture-building",
          },
          { type: "text", value: "." },
        ]}
        subtitle="From senior marketing roles in industrial conglomerates to founding a tech firm — fifteen years of operating leadership across cement, automotive, real estate, retail consulting, and SaaS."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Experience" }]}
      />
      <Timeline />
      <Credentials />
    </>
  );
}
