export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-mute border border-line px-2.5 py-1 rounded-full inline-block">
      {children}
    </span>
  );
}
