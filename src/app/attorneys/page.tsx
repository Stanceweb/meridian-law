import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AttorneyCard } from "@/components/cards/AttorneyCard";
import { CTASection } from "@/components/sections/CTASection";
import { ATTORNEYS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Attorneys",
  description:
    "Meet the attorneys at Meridian Law — experienced practitioners who bring direct partner access and deep expertise to every matter.",
};

export default function AttorneysPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Attorneys" }]}
        label="Our Team"
        title="Our Attorneys."
        subtitle="Each attorney at Meridian brings deep expertise, direct client access, and a genuine commitment to outcomes — not just process."
      />

      <section className="bg-surface-light py-section" aria-labelledby="attorneys-grid-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="attorneys-grid-heading" className="sr-only">Attorney Directory</h2>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {ATTORNEYS.map((attorney) => (
              <li key={attorney.slug}>
                <AttorneyCard
                  slug={attorney.slug}
                  name={attorney.name}
                  title={attorney.title}
                  practiceAreas={attorney.practiceAreas}
                  location={attorney.location}
                  bio={attorney.bio}
                  photo={attorney.photo}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        headline="Not sure who to contact?"
        body="Tell us about your matter and we'll connect you with the right attorney for your specific situation."
        primaryCTA={{ label: "Describe Your Matter", href: "/contact" }}
      />
    </>
  );
}
