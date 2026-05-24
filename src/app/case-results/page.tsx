import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { CASE_RESULTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Results · Representative Matters",
  description:
    "A selection of representative matters handled by Meridian Law attorneys, including settlements, arbitration awards, and successful litigation outcomes.",
};

export default function CaseResultsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Case Results" }]}
        label="Representative Outcomes"
        title="Representative Matters."
        subtitle="The following matters represent a selection of work completed by Meridian Law attorneys. Results vary depending on the specific facts and legal context of each matter."
      >
        {/* Disclaimer banner */}
        <div className="mt-8 border border-brand-gold/30 bg-brand-gold/5 rounded-sm px-6 py-4 max-w-2xl">
          <p className="text-sm text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Important:</strong>{" "}
            Past results do not guarantee or predict future outcomes. Each legal matter is unique
            and depends on its specific facts and circumstances.
          </p>
        </div>
      </PageHero>

      {/* Results Grid */}
      <section className="bg-surface-light py-section" aria-labelledby="results-grid-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="results-grid-heading" className="sr-only">Case Results</h2>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            role="list"
          >
            {CASE_RESULTS.map((result) => (
              <li
                key={result.id}
                className="bg-white border-l-4 border-l-brand-gold border border-surface-border rounded-sm p-8 shadow-card"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                    {result.category}
                  </span>
                  <span className="text-xs text-text-muted">{result.year}</span>
                </div>
                <p className="font-serif text-3xl font-semibold text-brand-gold mb-4 leading-tight">
                  {result.outcome}
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {result.description}
                </p>
                {result.attorneys && result.attorneys.length > 0 && (
                  <p className="text-xs text-text-muted pt-4 border-t border-surface-border">
                    Lead Attorney: {result.attorneys.join(", ")}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-text-muted text-center max-w-lg mx-auto leading-relaxed">
            Past results do not guarantee future outcomes. The outcome of your matter will depend
            on its unique facts, circumstances, and applicable law.
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to discuss your matter?"
        body="Our attorneys will give you an honest assessment of your situation — no inflated promises, just practical counsel."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
