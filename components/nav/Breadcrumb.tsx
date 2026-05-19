import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim mb-6 flex gap-3 items-center"
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-3">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-text-mute hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-accent" : "text-text-mute"}>{item.label}</span>
            )}
            {!isLast && <span>/</span>}
          </span>
        );
      })}
    </nav>
  );
}
