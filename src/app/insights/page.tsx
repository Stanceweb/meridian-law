import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { InsightCard } from "@/components/cards/InsightCard";
import { CTASection } from "@/components/sections/CTASection";
import { INSIGHTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Legal Insights & Analysis",
  description:
    "Analysis, commentary, and practical legal guidance from Meridian Law attorneys — written for people who need to make decisions.",
};

export default function InsightsPage() {
  const [featured, ...rest] = INSIGHTS;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights" }]}
        label="Legal Insights"
        title="Thinking That Helps You Make Better Decisions."
        subtitle="Analysis, commentary, and practical guidance from Meridian Law attorneys — written for the people who need to act on it."
      />

      <section className="bg-surface-light py-section" aria-labelledby="insights-grid-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="insights-grid-heading" className="sr-only">All Insights</h2>

          {/* Featured Article */}
          {featured && (
            <div className="mb-10">
              <InsightCard
                slug={featured.slug}
                title={featured.title}
                category={featured.category}
                author={featured.author}
                date={featured.date}
                readTime={featured.readTime}
                excerpt={featured.excerpt}
                featured
              />
            </div>
          )}

          {/* Article Grid */}
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {rest.map((insight) => (
              <li key={insight.slug}>
                <InsightCard
                  slug={insight.slug}
                  title={insight.title}
                  category={insight.category}
                  author={insight.author}
                  date={insight.date}
                  readTime={insight.readTime}
                  excerpt={insight.excerpt}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-navy py-16" aria-labelledby="newsletter-heading">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <h2 id="newsletter-heading" className="font-serif text-2xl font-semibold text-white mb-2">
            Legal updates, directly in your inbox.
          </h2>
          <p className="text-white/60 text-sm mb-6">No spam. Unsubscribe anytime.</p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-gold text-brand-navy rounded font-semibold text-sm hover:bg-brand-gold-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <CTASection
        headline="A question about something you've read?"
        body="Our attorneys are available for a confidential conversation — no obligation, no pressure."
        primaryCTA={{ label: "Speak With an Attorney", href: "/contact" }}
      />
    </>
  );
}
