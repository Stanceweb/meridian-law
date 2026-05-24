import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { InsightCard } from "@/components/cards/InsightCard";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ATTORNEYS, INSIGHTS } from "@/lib/constants";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return ATTORNEYS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const attorney = ATTORNEYS.find((a) => a.slug === slug);
  if (!attorney) return {};
  return {
    title: `${attorney.name}, ${attorney.title}`,
    description: `${attorney.name} is a ${attorney.title} at Meridian Law, specializing in ${attorney.practiceAreas.join(" and ")}. ${attorney.bio}`,
  };
}

export default async function AttorneyProfilePage({ params }: Props) {
  const { slug } = await params;
  const attorney = ATTORNEYS.find((a) => a.slug === slug);
  if (!attorney) notFound();

  const relatedInsights = INSIGHTS.filter((i) => i.authorSlug === attorney.slug);

  return (
    <>
      {/* Profile Hero */}
      <section className="bg-surface-light pt-[72px]" aria-label="Attorney profile header">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-text-muted flex-wrap" role="list">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/attorneys" className="hover:text-brand-gold transition-colors">Attorneys</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-text-secondary" aria-current="page">{attorney.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] bg-surface-mid rounded-sm overflow-hidden relative border border-surface-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-8xl font-semibold text-text-muted/30" aria-hidden="true">
                    {attorney.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold" aria-hidden="true" />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-3">
              <Badge label={attorney.title} variant="gold" className="mb-4" />

              <h1 className="font-serif text-h1 font-semibold text-text-primary mb-4 leading-tight">
                {attorney.name}
              </h1>

              {/* Practice Areas */}
              <div className="flex flex-wrap gap-2 mb-6">
                {attorney.practiceAreas.map((area) => (
                  <Badge key={area} label={area} variant="practice" />
                ))}
              </div>

              {/* Meta */}
              <div className="space-y-2 mb-8 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-gold shrink-0" aria-hidden="true" />
                  {attorney.location}
                </div>
                {attorney.languages && (
                  <div className="flex items-center gap-2">
                    <span className="text-brand-gold font-semibold" aria-hidden="true">Lang:</span>
                    {attorney.languages.join(", ")}
                  </div>
                )}
                <div>
                  <span className="text-brand-gold font-semibold">Bar: </span>
                  {attorney.barAdmissions.join(" · ")}
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="gold" showArrow>
                  Schedule a Consultation
                </Button>
                <a
                  href={`mailto:${attorney.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-surface-border rounded text-sm text-text-secondary hover:border-brand-gold hover:text-brand-navy transition-colors"
                  aria-label={`Email ${attorney.name}`}
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {attorney.email}
                </a>
              </div>
              <div className="mt-3">
                <a
                  href={`tel:${attorney.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-gold transition-colors"
                  aria-label={`Call ${attorney.name} at ${attorney.phone}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {attorney.phone} (direct)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography + Details */}
      <section className="bg-white py-section" aria-labelledby="bio-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 id="bio-heading" className="font-serif text-h3 font-semibold text-text-primary mb-5">
                  About {attorney.name.split(" ")[0]}
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {attorney.bio}
                </p>
              </div>

              {/* Representative Matters */}
              <div>
                <h2 className="font-sans font-semibold text-text-primary mb-5">
                  Representative Matters
                </h2>
                <ul className="space-y-3" role="list">
                  {attorney.matters.map((matter) => (
                    <li key={matter} className="flex gap-3 text-text-secondary">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed">{matter}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-text-muted italic">
                  Past results do not guarantee future outcomes. Each matter is unique.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-sans font-semibold text-text-primary mb-4">Education</h2>
                <ul className="space-y-2" role="list">
                  {attorney.education.map((edu) => (
                    <li key={edu.school} className="text-text-secondary">
                      <span className="font-medium text-text-primary">{edu.degree}</span>
                      {" — "}{edu.school} ({edu.year})
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bar Admissions */}
              <div>
                <h2 className="font-sans font-semibold text-text-primary mb-4">Bar Admissions</h2>
                <ul className="space-y-1" role="list">
                  {attorney.barAdmissions.map((bar) => (
                    <li key={bar} className="text-text-secondary text-sm">→ {bar}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1" aria-label="Contact sidebar">
              <div className="sticky top-24 bg-surface-light border border-surface-border rounded-sm p-8">
                <h3 className="font-serif text-lg font-semibold text-text-primary mb-2">
                  Schedule a Consultation with {attorney.name.split(" ")[0]}
                </h3>
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                  Confidential, obligation-free. Typically replied to within one business day.
                </p>
                <Button href="/contact" variant="gold" className="w-full justify-center" showArrow>
                  Book Now
                </Button>
                <div className="mt-5 space-y-2 text-sm">
                  <a href={`mailto:${attorney.email}`} className="flex items-center gap-2 text-text-secondary hover:text-brand-gold transition-colors">
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {attorney.email}
                  </a>
                  <a href={`tel:${attorney.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-text-secondary hover:text-brand-gold transition-colors">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" /> {attorney.phone}
                  </a>
                </div>
                <p className="mt-5 text-xs text-text-muted leading-relaxed">
                  Consultations are confidential. Contacting {attorney.name.split(" ")[0]} does not
                  create an attorney-client relationship.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Articles by this attorney */}
      {relatedInsights.length > 0 && (
        <section className="bg-surface-mid py-section" aria-labelledby="attorney-articles-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 id="attorney-articles-heading" className="font-serif text-h3 font-semibold text-text-primary mb-8">
              Articles by {attorney.name.split(" ")[0]}
            </h2>
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
        headline={`Ready to speak with ${attorney.name.split(" ")[0]}?`}
        body="Schedule a confidential consultation — no obligation, no pressure. Just honest legal counsel."
        primaryCTA={{ label: `Book a Consultation`, href: "/contact" }}
      />
    </>
  );
}
