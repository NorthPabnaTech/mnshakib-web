"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skillCategories } from "@/lib/content/skills";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SkillsSection() {
  // First category ("Industry Knowledge") expanded by default
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    industry: true,
  });

  const [showAllSkills, setShowAllSkills] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    
      <Container>
        <SectionLabel>Skills</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-serif font-normal text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-tight mb-3 max-w-[600px]">
              Areas of <span className="ital">professional expertise</span>.
            </h2>
            <p className="text-base text-text-mute leading-relaxed max-w-[560px]">
              A breadth of skills across strategy, analytics, marketing, and
              technology — built over fifteen years and validated across
              industries.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="border-b border-line-soft">
          {skillCategories.map((category) => {
            const isExpanded = !!expandedCategories[category.id];
            const isShowingAll = !!showAllSkills[category.id];
            const hasManySkills = category.skills.length > 9;
            const displayedSkills = hasManySkills && !isShowingAll
              ? category.skills.slice(0, 9)
              : category.skills;

            return (
              <div key={category.id} className="border-t border-line-soft">
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full py-6 flex items-center justify-between text-left group select-none focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <span
                    className={cn(
                      "font-mono text-xs md:text-sm uppercase tracking-[0.25em] font-medium transition-colors duration-300",
                      isExpanded ? "text-accent" : "text-text-mute group-hover:text-accent"
                    )}
                  >
                    {category.label}
                  </span>
                  <div className="flex items-center gap-4 md:gap-6">
                    <span
                      className={cn(
                        "font-mono text-xs md:text-sm tracking-widest transition-colors duration-300",
                        isExpanded ? "text-text-mute" : "text-text-dim group-hover:text-text-mute"
                      )}
                    >
                      {String(category.skills.length).padStart(2, "0")}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 md:w-9 md:h-9 border flex items-center justify-center transition-all duration-300",
                        isExpanded
                          ? "border-accent text-accent bg-accent/5"
                          : "border-line text-text-dim group-hover:border-accent-soft group-hover:text-accent"
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-300",
                          isExpanded ? "rotate-180" : ""
                        )}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {displayedSkills.map((skill) => (
                          <span
                            key={skill.name}
                            className="group relative font-mono text-[11px] uppercase tracking-[0.1em] text-text-mute border border-accent/20 bg-bg-elev hover:border-accent hover:text-accent hover:bg-accent/5 px-3 py-1.5 transition-all duration-200 cursor-default select-none"
                          >
                            <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />
                            {skill.name}
                          </span>
                        ))}
                        {hasManySkills && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowAllSkills((prev) => ({
                                ...prev,
                                [category.id]: !isShowingAll,
                              }));
                            }}
                            className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent border border-accent hover:bg-accent/5 px-3 py-1.5 transition-all duration-200 select-none cursor-pointer focus:outline-none"
                          >
                            {isShowingAll ? "- SHOW LESS" : `+ SHOW ${category.skills.length - 9} MORE`}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
  );
}
