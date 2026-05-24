import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "practice" | "gold" | "subtle";
  className?: string;
}

const variants = {
  practice: "bg-surface-mid text-brand-navy border border-surface-border",
  gold:     "bg-brand-gold/10 text-brand-navy border border-brand-gold/30",
  subtle:   "bg-surface-mid text-text-secondary border border-surface-border",
};

export function Badge({ label, variant = "practice", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
