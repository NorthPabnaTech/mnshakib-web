import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.1em] text-text-mute border border-line px-2.5 py-1 rounded-full inline-block",
        className,
      )}
    >
      {children}
    </span>
  );
}
