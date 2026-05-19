import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "product-strategy",
    serial: "i",
    title: "Product Strategy",
    italicTitle: "& B2B SaaS",
    description:
      "Roadmap design, GTM positioning, pricing architecture, and product-market fit work for B2B SaaS teams. From zero-to-one MVPs to scaling enterprise platforms across new verticals.",
    tags: ["Roadmap", "Pricing", "PMF", "GTM"],
  },
  {
    id: "data-analytics",
    serial: "ii",
    title: "Data Analytics",
    italicTitle: "& Insight",
    description:
      "Building the analytics stack that actually gets used — event instrumentation, attribution modelling, cohort analysis, and the boardroom-ready KPI views leadership needs to make decisions.",
    tags: ["Analytics Strategy", "Attribution", "Dashboards", "KPI Design"],
  },
  {
    id: "consulting",
    serial: "iii",
    title: "Consulting",
    italicTitle: "& Advisory",
    description:
      "Senior advisory for enterprises, NGOs, and founders. Operating-model design, digital transformation roadmaps, procurement automation, and the kind of pragmatic consulting that gets implemented — not shelved.",
    tags: ["Digital Transformation", "Ops Strategy", "NGO Tech"],
  },
  {
    id: "startup-studio",
    serial: "iv",
    title: "Startup",
    italicTitle: "Studio",
    description:
      "Co-building ventures with founders — BRDs, financial models, MVP scoping, capital strategy, and hands-on early team support. Useful for first-time founders who need a sparring partner, not a slide deck.",
    tags: ["Founder Advisory", "MVP Scoping", "Fundraising"],
  },
  {
    id: "ai-product",
    serial: "v",
    title: "AI Product",
    italicTitle: "Development",
    description:
      "Applied AI for real business problems — not demos. Conversational systems, CV-sorting models, sales co-pilots, and AI-augmented workflows that ship into enterprise environments and survive Monday morning.",
    tags: ["Applied AI", "LLM Products", "RAG", "Agents"],
  },
  {
    id: "growth-brand",
    serial: "vi",
    title: "Growth",
    italicTitle: "& Brand",
    description:
      "Brand positioning, performance marketing, and growth strategy for B2B and DTC. The marketing side of the house that earns its seat at the product table.",
    tags: ["Brand Strategy", "Performance", "Positioning"],
  },
];
