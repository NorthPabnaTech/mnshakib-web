import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 relative z-10",
        className
      )}
    >
      {children}
    </div>
  );
}
