import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface AttorneyCardProps {
  slug: string;
  name: string;
  title: string;
  practiceAreas: string[];
  location: string;
  bio: string;
  className?: string;
}

export function AttorneyCard({
  slug, name, title, practiceAreas, location, bio, className,
}: AttorneyCardProps) {
  return (
    <article
      className={cn(
        "group bg-white border border-surface-border rounded-sm shadow-card",
        "hover:shadow-hover hover:border-brand-gold transition-all duration-200",
        className
      )}
    >
      {/* Photo placeholder — editorial gray with initials */}
      <div className="aspect-[4/3] bg-surface-mid overflow-hidden rounded-t-sm relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-serif text-5xl font-semibold text-text-muted/50"
            aria-hidden="true"
          >
            {name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        {/* Gold bottom accent on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="font-sans text-lg font-semibold text-text-primary leading-snug mb-1">
            {name}
          </h3>
          <p className="text-sm text-text-secondary">{title}</p>
        </div>

        {/* Practice area badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {practiceAreas.slice(0, 2).map((area) => (
            <Badge key={area} label={area} variant="practice" />
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-text-muted mb-4">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {location}
        </div>

        {/* Bio excerpt */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-2">
          {bio}
        </p>

        {/* CTA */}
        <Link
          href={`/attorneys/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:text-brand-gold transition-colors group/link"
          aria-label={`View ${name}'s profile`}
        >
          View Profile
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
