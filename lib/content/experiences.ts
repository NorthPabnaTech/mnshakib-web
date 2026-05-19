import type { Experience } from "@/lib/types";

/**
 * Career timeline shown on /experience and the home teaser.
 * Order in this array = display order. Newest at the top.
 */
export const experiences: Experience[] = [
  {
    id: "torontocreatives",
    role: "Product Strategy Lead",
    company: "TorontoCreatives.com",
    location: "Toronto, Canada",
    startDate: "2024",
    endDate: "Present",
    isCurrent: true,
    description:
      "Leading product and brand strategy for a Canadian creative-technology studio serving B2B SaaS clients and Canadian SMEs entering international markets.",
  },
  {
    id: "upscalebd",
    role: "Founder & Managing Director",
    company: "UpscaleBD Ltd.",
    location: "Dhaka, Bangladesh",
    startDate: "2021",
    endDate: "Present",
    isCurrent: true,
    description:
      "Founded and lead a technology and consulting firm shipping enterprise SaaS to NGOs, manufacturing groups, and growing brands across South Asia.",
    bullets: [
      "Built a product suite of 12+ B2B SaaS products including HRx, Somriddhi LMS, Pathfinder, FieldX, and CalibraX",
      "Client engagements with ActionAid Bangladesh, BSRM, Coats Bangladesh, Ha-Meem Group, EDOTCO, Sheba Platform, Prime Bank, and others",
      "Established a 14-person team across product, engineering, design, and consulting",
    ],
  },
  {
    id: "maac",
    role: "Chief Strategy & Marketing Officer",
    company: "Market Access Analytics & Consulting (MAAC)",
    location: "Remote",
    startDate: "2020",
    endDate: "Present",
    isCurrent: true,
    description:
      "Senior leadership across strategy, marketing, and platform development. Co-led the launch of CalibraX (gamified business simulation) and supported the Upscale ecosystem buildout.",
  },
  {
    id: "pmaspire",
    role: "Consultant — Advertising & Sales Promotions",
    company: "PMaspire",
    location: "Singapore",
    startDate: "2022",
    endDate: "Present",
    isCurrent: true,
    description:
      "Senior consulting for a project management education platform serving aspirants in 100+ countries — brand, GTM, and growth strategy.",
  },
  {
    id: "iub",
    role: "Adjunct Lecturer · Marketing Strategy",
    company: "Independent University, Bangladesh (IUB)",
    location: "Dhaka, Bangladesh",
    startDate: "2016",
    endDate: "Present",
    isCurrent: true,
    description:
      "Teaching MBA and undergraduate courses on marketing strategy, brand management, and entrepreneurship. A practitioner-led perspective on theory.",
  },
  {
    id: "market-access",
    role: "Chief Business Development Officer",
    company: "Market Access Group",
    location: "Dhaka, Bangladesh",
    startDate: "2018",
    endDate: "2020",
    description:
      "Led business development, partnerships, and new-market entry strategy for one of Bangladesh's leading retail consulting and analytics groups.",
  },
  {
    id: "bay",
    role: "Chief Marketing Officer",
    company: "Bay Developments Ltd.",
    location: "Dhaka, Bangladesh",
    startDate: "2016",
    endDate: "2018",
    description:
      "Headed marketing strategy for a leading real-estate developer — brand positioning, lead generation systems, and project-level marketing campaigns for residential and commercial portfolios.",
  },
  {
    id: "rancon",
    role: "Senior Marketing Manager",
    company: "RANCON Holdings Ltd.",
    location: "Dhaka, Bangladesh",
    startDate: "2013",
    endDate: "2016",
    description:
      "Senior brand and marketing leadership across automotive (Mercedes-Benz, Mitsubishi), distribution, and consumer goods portfolios within one of Bangladesh's largest conglomerates.",
  },
  {
    id: "siam-cement",
    role: "Brand & Marketing Manager",
    company: "Siam City Cement (Holcim Group)",
    location: "Dhaka, Bangladesh",
    startDate: "2011",
    endDate: "2013",
    description:
      "Early-career brand management at a multinational cement major — campaign strategy, trade marketing, and B2B brand positioning across construction and infrastructure segments.",
  },
];
