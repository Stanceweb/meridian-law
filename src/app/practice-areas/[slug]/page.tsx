import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { AttorneyCard } from "@/components/cards/AttorneyCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { PRACTICE_AREAS, ATTORNEYS, INSIGHTS, FIRM } from "@/lib/constants";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.title,
    description: `Experienced ${area.title.toLowerCase()} attorneys at Meridian Law. ${area.shortDescription} Book a confidential consultation.`,
  };
}

const areaDetails: Record<string, {
  whoItIsFor: string[];
  whatWeHandle: string[];
  approach: string;
}> = {
  "corporate-commercial-law": {
    whoItIsFor: ["Founders scaling their companies", "Boards navigating governance matters", "Companies in M&A discussions", "Businesses requiring commercial contract review"],
    whatWeHandle: ["Shareholder agreements and equity structures", "Mergers, acquisitions, and divestitures", "Commercial contracts and vendor agreements", "Corporate governance and board advisory", "Joint ventures and strategic partnerships", "Regulatory compliance and corporate restructuring"],
    approach: "We don't just draft documents — we understand the commercial context behind every transaction. Our corporate attorneys have advised on deals ranging from early-stage equity rounds to nine-figure acquisitions. We move when you need to move.",
  },
  "real-estate-law": {
    whoItIsFor: ["Property buyers and sellers", "Commercial landlords and tenants", "Real estate developers", "Investors and REITs"],
    whatWeHandle: ["Property acquisitions and dispositions", "Commercial and residential leasing", "Development and construction agreements", "Title disputes and encumbrances", "Zoning and land use matters", "Real estate finance and mortgage transactions"],
    approach: "Real estate matters move fast and the stakes are high. Our attorneys combine legal precision with a deep understanding of the real estate market to get transactions closed — and disputes resolved — efficiently.",
  },
  "litigation-dispute-resolution": {
    whoItIsFor: ["Businesses facing commercial disputes", "Individuals seeking redress", "Companies defending claims", "Parties seeking arbitration or mediation"],
    whatWeHandle: ["Commercial contract disputes", "Employment and workplace litigation", "Real estate disputes", "Partnership and shareholder disputes", "Arbitration and mediation", "Appellate advocacy"],
    approach: "Litigation is a last resort — but when it's necessary, you need a team with real courtroom experience. Marcus Okafor and our litigation group have tried cases across federal and state courts, and consistently find ways to turn complexity into advantage.",
  },
  "family-law": {
    whoItIsFor: ["Individuals navigating divorce", "Parents in custody disputes", "Families pursuing adoption", "Couples planning prenuptial agreements"],
    whatWeHandle: ["Divorce and legal separation", "Child custody and visitation", "Child and spousal support", "Property division", "Adoption proceedings", "Prenuptial and postnuptial agreements"],
    approach: "Family law matters are among the most emotionally demanding situations our clients face. We bring clarity and structure to difficult processes — handling every legal element so you can focus on what matters most.",
  },
  "employment-law": {
    whoItIsFor: ["Employers managing workforce issues", "Employees facing workplace violations", "HR teams navigating compliance", "Executives in transition"],
    whatWeHandle: ["Wrongful termination claims", "Discrimination and harassment", "Employment contracts and severance", "Wage and hour compliance", "Non-compete and confidentiality agreements", "HR policy audits"],
    approach: "Employment law requires nuance. We represent both employers and employees — which means we understand both sides of every dispute. That perspective makes our counsel materially better.",
  },
  "intellectual-property": {
    whoItIsFor: ["Startups protecting core IP", "Established brands managing trademarks", "Creators and inventors", "Companies licensing technology"],
    whatWeHandle: ["Trademark registration and enforcement", "Patent counsel and prosecution", "Copyright protection", "Trade secret matters", "IP licensing agreements", "IP due diligence for transactions"],
    approach: "Your IP is often your most valuable asset. We help clients identify, protect, and monetize their intellectual property — and aggressively defend it when others attempt to infringe.",
  },
  "immigration-law": {
    whoItIsFor: ["International founders building US companies", "Individuals and families seeking visas", "Employers sponsoring international talent", "Corporations managing global mobility"],
    whatWeHandle: ["O-1, EB-1, and EB-2 visas", "H-1B and L-1 work visas", "Green card applications", "Family-based immigration", "DACA and asylum matters", "I-9 compliance audits"],
    approach: "Immigration law is unforgiving of errors and slow on timelines. Elena Vasquez and our immigration team move with urgency, track every deadline, and communicate proactively so you're never left wondering where things stand.",
  },
  "tax-advisory": {
    whoItIsFor: ["High-net-worth individuals", "Business owners and founders", "Companies with cross-border operations", "Trustees and estate executors"],
    whatWeHandle: ["Individual and corporate tax planning", "International tax structuring", "Tax dispute resolution", "Trust and estate tax advice", "Transaction tax due diligence", "State and local tax compliance"],
    approach: "Tax strategy is not a once-a-year conversation. We work alongside clients throughout the year to structure transactions, minimize liabilities, and avoid the surprises that come from reactive planning.",
  },
  "banking-finance": {
    whoItIsFor: ["Banks and financial institutions", "Private equity and credit funds", "Borrowers in complex transactions", "Fintech companies navigating regulation"],
    whatWeHandle: ["Syndicated and bilateral lending", "Asset-based financing", "Regulatory compliance and licensing", "Structured finance and securitization", "Fintech product counsel", "Workout and restructuring"],
    approach: "Banking and finance transactions require both legal precision and commercial judgment. Our team has advised on hundreds of credit facilities, fund structures, and regulatory matters — bringing the experience that complex deals demand.",
  },
  "startup-business-advisory": {
    whoItIsFor: ["Founders at formation stage", "Startups raising venture capital", "Accelerator and incubator participants", "Founders navigating co-founder disputes"],
    whatWeHandle: ["Company formation and structure", "Seed and Series A/B documentation", "SAFE notes and convertible instruments", "Equity compensation and options plans", "Founder agreements and vesting", "Exit planning and M&A"],
    approach: "We've helped hundreds of founders go from idea to funded company. We speak the language of the startup ecosystem — we understand cap tables, term sheets, and investor dynamics — and we give straight answers, not hedged legal opinions.",
  },
};

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const details = areaDetails[slug] ?? {
    whoItIsFor: ["Individuals and businesses requiring expert legal counsel"],
    whatWeHandle: ["Full range of matters within this practice area"],
    approach: "Our attorneys bring deep expertise and direct partner access to every matter we handle.",
  };

  const relatedAttorneys = ATTORNEYS.filter((a) =>
    a.practiceAreas.some((pa) =>
      pa.toLowerCase().replace(/[^a-z0-9]/g, "-").includes(slug.split("-")[0])
    )
  ).slice(0, 3);

  const relatedInsights = INSIGHTS.filter((i) =>
    i.category.toLowerCase().replace(/[^a-z]/g, "").includes(slug.split("-")[0].toLowerCase().replace(/[^a-z]/g, ""))
  ).slice(0, 2);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Practice Areas", href: "/practice-areas" }, { label: area.title }]}
        label="Practice Area"
        title={area.title}
        subtitle={area.shortDescription}
      />

      {/* Main Content + Sidebar */}
      <section className="bg-surface-light py-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Who It's For */}
              <div>
                <h2 className="font-sans text-h3 font-semibold text-text-primary mb-5">
                  Who This Is For
                </h2>
                <ul className="space-y-3" role="list">
                  {details.whoItIsFor.map((item) => (
                    <li key={item} className="flex gap-3 text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Handle */}
              <div>
                <h2 className="font-sans text-h3 font-semibold text-text-primary mb-5">
                  What We Handle
                </h2>
                <ul className="space-y-3" role="list">
                  {details.whatWeHandle.map((item) => (
                    <li key={item} className="flex gap-3 text-text-secondary">
                      <span className="text-brand-gold font-semibold shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div className="border-l-2 border-brand-gold pl-8">
                <h2 className="font-sans text-h4 font-semibold text-text-primary mb-3">
                  Our Approach
                </h2>
                <p className="text-text-secondary leading-relaxed">{details.approach}</p>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-1" aria-label="Consultation sidebar">
              <div className="sticky top-24 bg-white border border-surface-border rounded-sm p-8 shadow-card">
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-2">
                  Speak With a {area.title} Attorney
                </h3>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  Schedule a confidential consultation with no obligation.
                  We typically respond within one business day.
                </p>
                <Button href="/contact" variant="gold" className="w-full justify-center mb-4" showArrow>
                  Book a Consultation
                </Button>
                <a
                  href={`tel:${FIRM.phone.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-surface-border rounded text-sm text-text-secondary hover:border-brand-gold hover:text-brand-navy transition-colors"
                  aria-label={`Call ${FIRM.name}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {FIRM.phone}
                </a>
                <div className="mt-6 pt-6 border-t border-surface-border text-xs text-text-muted leading-relaxed">
                  <p className="font-medium text-text-primary mb-1">★★★★★ Trusted by 400+ clients</p>
                  <p>Across 12 practice areas and 20+ years of practice.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Attorneys */}
      {relatedAttorneys.length > 0 && (
        <section className="bg-surface-mid py-section" aria-labelledby="related-attorneys-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 id="related-attorneys-heading" className="font-serif text-h3 font-semibold text-text-primary mb-8">
              Attorneys in {area.title}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {relatedAttorneys.map((attorney) => (
                <li key={attorney.slug}>
                  <AttorneyCard
                    slug={attorney.slug}
                    name={attorney.name}
                    title={attorney.title}
                    practiceAreas={attorney.practiceAreas}
                    location={attorney.location}
                    bio={attorney.bio}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="bg-surface-light py-section" aria-labelledby="related-insights-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 id="related-insights-heading" className="font-serif text-h3 font-semibold text-text-primary">
                Related Insights
              </h2>
              <Link
                href="/insights"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold hover:text-brand-gold-dark transition-colors group"
              >
                All Insights
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {relatedInsights.map((insight) => (
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
      )}

      <CTASection
        headline={`Ready to discuss your ${area.title.toLowerCase()} matter?`}
        body="Our attorneys are available for a confidential, obligation-free consultation."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
