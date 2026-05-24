import { InsightCard } from "@/components/cards/InsightCard";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { INSIGHTS } from "@/lib/constants";

export function InsightsPreview() {
  return (
    <section className="bg-surface-mid py-section" aria-labelledby="insights-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <SectionLabel>Legal Insights</SectionLabel>
            <h2
              id="insights-heading"
              className="font-serif text-h2 font-semibold text-text-primary leading-tight"
            >
              Thinking That Helps You<br />
              <span className="text-text-secondary">Make Better Decisions.</span>
            </h2>
          </div>
          <Button href="/insights" variant="secondary" showArrow>
            View All Insights
          </Button>
        </div>

        {/* Cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {INSIGHTS.map((insight, index) => (
            <li key={insight.slug}>
              <InsightCard
                slug={insight.slug}
                title={insight.title}
                category={insight.category}
                author={insight.author}
                date={insight.date}
                readTime={insight.readTime}
                excerpt={insight.excerpt}
                featured={index === 0}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
