import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
  className?: string;
}

export function InsightCard({
  slug, title, category, author, date, readTime, excerpt, featured = false, className,
}: InsightCardProps) {
  return (
    <article
      className={cn(
        "group bg-white border border-surface-border rounded-sm shadow-card",
        "hover:shadow-hover hover:border-brand-gold transition-all duration-200",
        "flex flex-col",
        className
      )}
    >
      {/* Gold left border on hover */}
      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center justify-between mb-4">
          <Badge label={category} variant="gold" />
          <span className="text-xs text-text-muted">{readTime} read</span>
        </div>

        <h3
          className={cn(
            "font-serif font-semibold text-text-primary leading-snug mb-3",
            featured ? "text-xl md:text-2xl" : "text-lg"
          )}
        >
          <Link
            href={`/insights/${slug}`}
            className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:underline"
          >
            {title}
          </Link>
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
          {excerpt}
        </p>

        <footer className="flex items-center justify-between pt-5 border-t border-surface-border">
          <div>
            <p className="text-sm font-medium text-text-primary">{author}</p>
            <p className="text-xs text-text-muted">{formatDate(date)}</p>
          </div>
          <Link
            href={`/insights/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold hover:text-brand-gold-dark transition-colors group/link"
            aria-label={`Read article: ${title}`}
          >
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
          </Link>
        </footer>
      </div>
    </article>
  );
}
