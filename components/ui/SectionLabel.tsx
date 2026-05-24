import type { HeadlinePart } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Mono section label with leading rule.
 * Example: "01 · About"
 */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono text-[11px] uppercase text-accent tracking-[0.3em] mb-6 flex items-center gap-4",
        className,
      )}
    >
      <span className="w-6 h-px bg-accent" />
      {children}
    </div>
  );
}

/**
 * Renders an array of HeadlineParts, splitting "text" vs "ital" segments
 * so we can italicize/gold specific words in a serif headline.
 *
 * <Headline parts={[{type:"text", value:"Strategy "}, {type:"ital", value:"leadership"}]} />
 */
export function Headline({
  parts,
  className,
}: {
  parts: HeadlinePart[];
  className?: string;
}) {
  return (
    <h1 className={cn("font-serif font-normal", className)}>
      {parts.map((p, i) =>
        p.type === "ital" ? (
          <span key={i} className="ital">
            {p.value}
          </span>
        ) : (
          <span key={i}>{p.value}</span>
        ),
      )}
    </h1>
  );
}
