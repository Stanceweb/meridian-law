import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  breadcrumbs?: Crumb[];
  label?: string;
  title: string;
  subtitle?: string;
  background?: "light" | "mid";
  children?: React.ReactNode;
}

export function PageHero({
  breadcrumbs,
  label,
  title,
  subtitle,
  background = "light",
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "pt-[72px]",
        background === "light" ? "bg-surface-light" : "bg-surface-mid"
      )}
      aria-label="Page header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-xs text-text-muted flex-wrap" role="list">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" aria-hidden="true" />
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-brand-gold transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-text-secondary" aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Label */}
        {label && (
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-4">
            {label}
          </p>
        )}

        {/* Title */}
        <h1 className="font-serif text-h1 font-semibold text-text-primary leading-tight mb-5 max-w-3xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
