"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skillCategories } from "@/lib/content/skills";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Skills" },
    ...skillCategories.map((c) => ({ id: c.id, label: c.label })),
  ];

  const visibleCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  const totalSkills = skillCategories.reduce(
    (sum, c) => sum + c.skills.length,
    0
  );

  return (
    <section className="py-20 border-t border-line-soft">
      <Container>
        <SectionLabel>Skills</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-tight mb-3 max-w-[600px]">
              Areas of{" "}
              <span className="ital">professional expertise</span>.
            </h2>
            <p className="text-base text-text-mute leading-relaxed max-w-[560px]">
              A breadth of skills across strategy, analytics, marketing, and technology — built over
              fifteen years and validated across industries.
            </p>
          </div>
          <div className="font-mono text-[11px] text-accent tracking-[0.2em] border border-accent-soft px-3 py-1.5 self-start md:self-auto shrink-0">
            {String(totalSkills).padStart(2, "0")} SKILLS
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-line-soft pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "font-mono text-[10px] uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-200",
                activeTab === tab.id
                  ? "bg-accent text-bg border-accent"
                  : "border-line text-text-mute hover:border-accent-soft hover:text-accent bg-transparent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {visibleCategories.map((category) => (
            <div key={category.id}>
              {/* Category heading — only show in "all" view */}
              {activeTab === "all" && (
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {category.label}
                  </span>
                  <span className="flex-1 h-px bg-line-soft" />
                  <span className="font-mono text-[10px] text-text-dim tracking-wider">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>
              )}

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="group relative font-mono text-[11px] uppercase tracking-[0.1em] text-text-mute border border-accent/30 bg-bg-elev hover:border-accent hover:text-accent hover:bg-accent/5 px-3 py-1.5 transition-all duration-200 cursor-default select-none"
                  >
                    {/* subtle left accent bar on hover */}
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
