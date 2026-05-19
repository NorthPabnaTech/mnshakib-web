import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsList } from "@/components/sections/ProjectsList";

export const metadata: Metadata = {
  title: "Selected Work — Nazmus Shakib",
  description:
    "Recent engagements through UpscaleBD and direct consulting — ActionAid, Ha-Meem, Coats, Prime Bank, and more.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="04 · Selected Work"
        title={[
          { type: "text", value: "Recent " },
          { type: "ital", value: "engagements" },
          { type: "text", value: "." },
        ]}
        subtitle="A sample of work delivered through UpscaleBD and direct engagements over the last 18 months. Detailed case studies available on request."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Work" }]}
      />
      <ProjectsList />
    </>
  );
}
