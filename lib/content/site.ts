import type { SiteContent } from "@/lib/types";

/**
 * Site-level content: hero, about narrative, contact info, social links.
 * Edit anything here and the change shows up site-wide on next save.
 */
export const site: SiteContent = {
  hero: {
    eyebrow: "Strategy · Marketing · AI Ventures",
    headlineParts: [
      { type: "text", value: "Strategy " },
      { type: "ital", value: "&" },
      { type: "text", value: " marketing " },
      { type: "ital", value: "leadership" },
      { type: "text", value: ", across " },
      { type: "ital", value: "two continents" },
      { type: "text", value: "." },
    ],
    lead: "A decade-plus building B2B SaaS, retail, and AI ventures — from Dhaka boardrooms to Toronto's strategy table. Founder of UpscaleBD. Chief Strategy & Marketing Officer at MAAC.",
    location: "Toronto · Dhaka",
    availability: "Q2 — Q3 2026",
    isAvailable: true,
    credentials: ["MCIM", "SFP", "Copenhagen Business School", "10+ Years"],
  },

  about: {
    eyebrow: "01 · About",
    titleParts: [
      { type: "text", value: "Built on the ground " },
      { type: "ital", value: "in Dhaka" },
      { type: "text", value: ". Sharpened " },
      { type: "ital", value: "in Copenhagen" },
      { type: "text", value: ". Operating " },
      { type: "ital", value: "from Toronto" },
      { type: "text", value: "." },
    ],
    intro:
      "Three markets. One operating principle: strategy is only as good as the team that can ship it.",
    narrative: [
      {
        type: "paragraph",
        text: "I founded UpscaleBD Ltd. — a Dhaka-based technology and consulting firm shipping enterprise SaaS and AI products to NGOs, manufacturers, and growing brands across South Asia. Today, alongside that, I serve as Chief Strategy & Marketing Officer at MAAC and lead product strategy at TorontoCreatives.com.",
      },
      {
        type: "pullquote",
        text: "Strategy is only useful if it survives contact with the people who have to execute it. I work where strategy and execution actually meet — the messy middle where most decks die and real products get built.",
      },
      {
        type: "paragraph",
        text: "My career has moved across cement, real estate, automotive, retail consulting, ed-tech, and most recently applied AI — for clients ranging from ActionAid Bangladesh and BSRM to Coats, Ha-Meem Group, and Canadian SMEs entering global markets. I've co-built CalibraX and Upscale, taught marketing strategy as an adjunct at Independent University Bangladesh, and consulted across Bangladesh, the GCC, and increasingly Canada.",
      },
      {
        type: "paragraph",
        text: "Trained at Copenhagen Business School, chartered with CIM (UK), and a working belief that good consulting looks more like co-founding than slide-making.",
      },
    ],
    stats: [
      { number: "10+", label: "Years in Strategy & Marketing" },
      { number: "12+", label: "SaaS Products Built or Launched" },
      { number: "3", label: "Markets · Bangladesh · Denmark · Canada" },
    ],
    currentRoles: [
      { role: "Founder & MD", org: "UpscaleBD Ltd." },
      { role: "CSMO", org: "MAAC" },
      { role: "Product Strategy Lead", org: "TorontoCreatives" },
      { role: "Consultant", org: "PMaspire Singapore" },
      { role: "Adjunct Lecturer", org: "Independent Univ. BD" },
    ],
  },

  contact: {
    email: "mnshakib@upscalebd.com",
    location: "Toronto, Canada · Dhaka, Bangladesh",
    availability: "Q2 — Q3 2026",
    responseTime: "Usually within 48 hours",
    linkedIn: "https://ca.linkedin.com/in/mdshakib",
  },

  social: [
    { label: "LinkedIn", url: "https://ca.linkedin.com/in/mdshakib" },
    { label: "UpscaleBD", url: "https://upscalebd.com" },
  ],
};
