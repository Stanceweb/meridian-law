import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CASE_RESULTS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function CaseResultsStrip() {
  return (
    <section className="bg-surface-mid py-section" aria-labelledby="results-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Representative Outcomes</SectionLabel>
            <h2
              id="results-heading"
              className="font-serif text-h3 font-semibold text-text-primary"
            >
              Results That Speak for Themselves.
            </h2>
          </div>
          <p className="text-xs text-text-muted max-w-xs leading-relaxed">
            Past results do not guarantee or predict future outcomes.
            Each legal matter is unique.
          </p>
        </div>

        {/* Results */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          role="list"
        >
          {CASE_RESULTS.map((result) => (
            <li
              key={result.id}
              className="bg-white border-t-2 border-t-brand-gold border border-surface-border rounded-sm p-6 shadow-card"
            >
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1">
                {result.category} · {result.year}
              </p>
              <p className="font-serif text-2xl font-semibold text-brand-gold mb-3 leading-tight">
                {result.outcome}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {result.description}
              </p>
              {result.attorneys && result.attorneys.length > 0 && (
                <p className="mt-4 text-xs text-text-muted">
                  {result.attorneys.join(" · ")}
                </p>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 flex justify-end">
          <Link
            href="/case-results"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-navy hover:text-brand-gold transition-colors group"
          >
            View All Case Results
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
