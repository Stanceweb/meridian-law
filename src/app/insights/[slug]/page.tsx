import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { INSIGHTS, ATTORNEYS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    authors: [{ name: insight.author }],
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  if (!insight) notFound();

  const author = ATTORNEYS.find((a) => a.slug === insight.authorSlug);

  return (
    <>
      {/* Article Header */}
      <section className="bg-surface-light pt-[72px] pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-12">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-gold transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
            All Insights
          </Link>

          <Badge label={insight.category} variant="gold" className="mb-6" />

          <h1 className="font-serif text-h1 font-semibold text-text-primary leading-tight mb-6">
            {insight.title}
          </h1>

          {/* Byline */}
          <div className="flex items-center gap-4 pt-6 border-t border-surface-border">
            {author && (
              <>
                <div className="w-10 h-10 rounded-full bg-surface-mid flex items-center justify-center shrink-0" aria-hidden="true">
                  <span className="font-serif text-sm font-semibold text-text-muted">
                    {author.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <Link
                    href={`/attorneys/${author.slug}`}
                    className="font-medium text-text-primary hover:text-brand-gold transition-colors text-sm"
                  >
                    {author.name}
                  </Link>
                  <p className="text-xs text-text-muted">
                    {author.title} · {formatDate(insight.date)} · {insight.readTime} read
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-section" aria-label="Article content">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose-content">
            <p className="text-xl text-text-secondary leading-relaxed mb-8 font-serif italic">
              {insight.excerpt}
            </p>

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Legal matters in this area require careful consideration of multiple factors,
                including the specific circumstances of your situation, applicable law in your
                jurisdiction, and your long-term goals. This article provides general educational
                information and should not be construed as legal advice specific to your matter.
              </p>
              <h2 className="font-serif text-2xl font-semibold text-text-primary mt-10 mb-4">
                Key Considerations
              </h2>
              <p>
                Before taking action on any legal matter, it is important to consult with a
                qualified attorney who can assess your specific situation. General information,
                while helpful for building context, cannot replace personalized legal counsel.
              </p>
              <p>
                The attorneys at Meridian Law regularly advise clients on matters within this
                practice area and are available for confidential consultations. We provide
                honest assessments — even when the answer is not what a client hopes to hear.
              </p>
              <h2 className="font-serif text-2xl font-semibold text-text-primary mt-10 mb-4">
                What This Means for You
              </h2>
              <p>
                Every situation is different. The right strategy depends on your specific facts,
                timeline, risk tolerance, and objectives. If you have questions about how these
                issues apply to your matter, we encourage you to reach out for a direct conversation.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-surface-light border border-surface-border rounded-sm">
              <p className="text-xs text-text-muted leading-relaxed">
                <strong className="text-text-secondary">Disclaimer:</strong> This article is
                provided for general informational purposes only and does not constitute legal
                advice. Reading this article does not create an attorney-client relationship.
                Please consult a qualified attorney regarding your specific legal matter.
              </p>
            </div>
          </div>

          {/* Author Bio */}
          {author && (
            <div className="mt-12 pt-8 border-t border-surface-border">
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
                About the Author
              </p>
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-surface-mid flex items-center justify-center shrink-0" aria-hidden="true">
                  <span className="font-serif text-lg font-semibold text-text-muted">
                    {author.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{author.name}</p>
                  <p className="text-sm text-text-secondary mb-3">{author.title} · {author.practiceAreas.join(", ")}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">{author.bio}</p>
                  <Link
                    href={`/attorneys/${author.slug}`}
                    className="text-sm text-brand-gold hover:text-brand-gold-dark font-medium transition-colors"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        headline={`Questions about ${insight.category}?`}
        body="Speak directly with one of our attorneys for honest, practical guidance on your specific situation."
        primaryCTA={{ label: "Speak With an Attorney", href: "/contact" }}
      />
    </>
  );
}
