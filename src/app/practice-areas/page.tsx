import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PracticeAreaCard } from "@/components/cards/PracticeAreaCard";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Practice Areas · Legal Services",
  description:
    "Meridian Law offers expert legal services across 10 practice areas — from corporate law to family law, litigation, immigration, and startup advisory.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Practice Areas" }]}
        label="What We Do"
        title="Legal Services Tailored to Your Situation."
        subtitle="Whatever stage you're at — starting a business, managing a dispute, or protecting your future — we have the expertise to guide you."
      />

      {/* Client Focus Tabs */}
      <section className="bg-surface-mid border-b border-surface-border py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "For Individuals",
                areas: ["Family Law", "Immigration Law", "Litigation & Dispute Resolution"],
              },
              {
                label: "For Businesses",
                areas: ["Corporate & Commercial Law", "Employment Law", "Tax Advisory", "Banking & Finance"],
              },
              {
                label: "For Startups",
                areas: ["Startup & Business Advisory", "Intellectual Property", "Corporate & Commercial Law"],
              },
            ].map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-3">
                  {group.label}
                </p>
                <ul className="space-y-1.5" role="list">
                  {group.areas.map((area) => (
                    <li key={area} className="text-sm text-text-secondary">
                      → {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Practice Area Grid */}
      <section className="bg-surface-light py-section" aria-labelledby="all-areas-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="all-areas-heading" className="sr-only">All Practice Areas</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {PRACTICE_AREAS.map((area) => (
              <li key={area.slug}>
                <PracticeAreaCard
                  icon={area.icon}
                  title={area.title}
                  shortDescription={area.shortDescription}
                  slug={area.slug}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        headline="Not sure which area applies to your situation?"
        body="Our attorneys will help you identify the right path. Tell us about your matter and we'll connect you with the right person."
        primaryCTA={{ label: "Speak With an Attorney", href: "/contact" }}
      />
    </>
  );
}
