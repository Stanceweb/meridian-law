import { AttorneyCard } from "@/components/cards/AttorneyCard";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ATTORNEYS } from "@/lib/constants";

export function AttorneyPreview() {
  return (
    <section className="bg-surface-light py-section" aria-labelledby="attorneys-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          {/* Left — Heading */}
          <div>
            <SectionLabel>Our Attorneys</SectionLabel>
            <h2
              id="attorneys-heading"
              className="font-serif text-h2 font-semibold text-text-primary leading-tight"
            >
              Led by Practitioners,<br />
              <span className="text-text-secondary">Not Just Advisors.</span>
            </h2>
          </div>

          {/* Right — Description + CTA */}
          <div className="lg:max-w-sm">
            <p className="text-text-secondary mb-6 leading-relaxed">
              Every matter at Meridian is led by an experienced attorney who is
              invested in the outcome — not just the process.
            </p>
            <Button href="/attorneys" variant="secondary" showArrow>
              Meet Our Full Team
            </Button>
          </div>
        </div>

        {/* Attorney Cards */}
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
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
