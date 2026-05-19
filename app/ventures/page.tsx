import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProductsGrid } from "@/components/sections/ProductsGrid";

export const metadata: Metadata = {
  title: "Ventures — Nazmus Shakib",
  description:
    "The UpscaleBD product family — HRx, Somriddhi, Pathfinder, FieldX, SalesX, manPowerX, CalibraX, RetailX, PMx.",
};

export default function VenturesPage() {
  return (
    <>
      <PageHero
        eyebrow="05 · Ventures & Products"
        title={[
          { type: "text", value: "The " },
          { type: "ital", value: "UpscaleBD" },
          { type: "text", value: " product family." },
        ]}
        subtitle="A suite of B2B SaaS and applied-AI products built in-house through UpscaleBD Ltd., serving enterprises across South Asia, the Middle East, and increasingly North America."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Ventures" }]}
      />
      <ProductsGrid />
    </>
  );
}
