import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionLabel({ children, light = false, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold tracking-widest uppercase mb-4",
        light ? "text-brand-gold" : "text-brand-gold",
        className
      )}
    >
      {children}
    </p>
  );
}
