import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactDetails } from "@/components/sections/ContactDetails";

export const metadata: Metadata = {
  title: "Contact — Nazmus Shakib",
  description:
    "Get in touch about advisory, venture-build, and fractional product leadership engagements.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="06 · Get in Touch"
        title={[
          { type: "text", value: "Have a " },
          { type: "ital", value: "hard problem" },
          { type: "text", value: " worth solving?" },
        ]}
        subtitle="I take on a small number of engagements each quarter — venture-build collaborations, fractional product leadership, and senior advisory work."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactDetails />
    </>
  );
}
