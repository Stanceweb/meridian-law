import Link from "next/link";
import {
  Building2, Home, Scale, Heart, Briefcase,
  Lightbulb, Globe, BarChart2, Landmark, Rocket, ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Building2, Home, Scale, Heart, Briefcase,
  Lightbulb, Globe, BarChart2, Landmark, Rocket,
};

interface PracticeAreaCardProps {
  icon: string;
  title: string;
  shortDescription: string;
  slug: string;
  className?: string;
}

export function PracticeAreaCard({
  icon, title, shortDescription, slug, className,
}: PracticeAreaCardProps) {
  const Icon = iconMap[icon] || Building2;

  return (
    <Link
      href={`/practice-areas/${slug}`}
      className={cn(
        "group block bg-white border border-surface-border rounded-sm p-7",
        "shadow-card hover:shadow-hover hover:border-brand-gold",
        "transition-all duration-200 focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2",
        className
      )}
      aria-label={`${title} — learn more`}
    >
      <div className="mb-5">
        <Icon
          className="h-7 w-7 text-text-secondary group-hover:text-brand-gold transition-colors duration-200"
          aria-hidden="true"
        />
      </div>

      <h3 className="font-sans text-base font-semibold text-text-primary mb-3 leading-snug">
        {title}
      </h3>

      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        {shortDescription}
      </p>

      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold uppercase tracking-wide">
        Learn more
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
