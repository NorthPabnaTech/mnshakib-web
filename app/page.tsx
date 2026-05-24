import { AboutNarrative } from "@/components/sections/AboutNarrative";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { Credentials } from "@/components/sections/Credentials";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { ProjectsList } from "@/components/sections/ProjectsList";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TeaserGrid } from "@/components/sections/TeaserGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Timeline } from "@/components/sections/Timeline";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section id="hero">
        <HomeHero />
      </section>

      {/* ── Overview / Teaser ── */}
      <TeaserGrid />

      {/* ── About ── */}
      <section id="about" className="scroll-section">
        <SectionHeader
          eyebrow="01 · About"
          title={[
            { type: "text", value: "The " },
            { type: "ital", value: "background" },
            { type: "text", value: "." },
          ]}
          subtitle="Dhaka → Copenhagen → Toronto. The career arc, operating principles, and why I work the way I work."
        />
        <AboutNarrative />
        <Testimonials />
      </section>

      {/* ── Practice ── */}
      <section
        id="practice"
        className="scroll-section border-t border-line-soft"
      >
        <SectionHeader
          eyebrow="02 · Practice"
          title={[
            { type: "text", value: "Six practices. " },
            { type: "ital", value: "One operating principle." },
          ]}
          subtitle="Whether the brief is a $50M enterprise rollout or a two-founder pre-seed, the work moves the same way: clarify the bet, build the smallest thing that proves it, then scale what works."
        />
        <ServicesGrid />
      </section>

      {/* ── Experience ── */}
      <section
        id="experience"
        className="scroll-section border-t border-line-soft"
      >
        <SectionHeader
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
        />
        <Timeline />
        <Credentials />
      </section>

      {/* ── Work ── */}
      <section id="work" className="scroll-section border-t border-line-soft">
        <SectionHeader
          eyebrow="04 · Selected Work"
          title={[
            { type: "text", value: "Recent " },
            { type: "ital", value: "engagements" },
            { type: "text", value: "." },
          ]}
          subtitle="A sample of work delivered through UpscaleBD and direct engagements over the last 18 months. Detailed case studies available on request."
        />
        <ProjectsList />
      </section>

      {/* ── Expertise ── */}
      <section
        id="expertise"
        className="scroll-section border-t border-line-soft"
      >
        <SectionHeader
          eyebrow="05 · Expertise"
          title={[
            { type: "text", value: "Core areas of " },
            { type: "ital", value: "expertise" },
            { type: "text", value: "." },
          ]}
          subtitle="Areas where companies and pros trust."
        />
        <ExpertiseGrid />
      </section>

      {/* ── Ventures ── */}
      <section
        id="ventures"
        className="scroll-section border-t border-line-soft"
      >
        <SectionHeader
          eyebrow="06 · NVP +"
          title={[
            { type: "text", value: "The " },
            { type: "ital", value: "UpscaleBD" },
            { type: "text", value: " product family." },
          ]}
          subtitle="A suite of B2B SaaS and applied-AI products built in-house through UpscaleBD Ltd., serving enterprises across South Asia, the Middle East, and increasingly North America."
        />
        <ProductsGrid />
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="scroll-section border-t border-line-soft"
      >
        <SectionHeader
          eyebrow="07 · Get in Touch"
          title={[
            { type: "text", value: "Have a " },
            { type: "ital", value: "hard problem" },
            { type: "text", value: " worth solving?" },
          ]}
          subtitle="I take on a small number of engagements each quarter — venture-build collaborations, fractional product leadership, and senior advisory work."
        />
        <ContactDetails />
      </section>
    </>
  );
}
