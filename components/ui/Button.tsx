import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "text";

interface ButtonProps {
  variant?: ButtonVariant;
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg hover:bg-text hover:-translate-y-px px-7 py-3.5 rounded-full font-medium",
  ghost:
    "border border-line text-text hover:border-accent hover:text-accent px-7 py-3.5 rounded-full",
  text:
    "font-mono text-xs tracking-[0.15em] uppercase text-text-mute hover:text-accent",
};

export function Button({
  variant = "primary",
  href,
  children,
  external = false,
  className,
}: ButtonProps) {
  const cls = cn(
    "inline-flex items-center gap-2 text-sm transition-all duration-300",
    variantStyles[variant],
    className
  );

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
