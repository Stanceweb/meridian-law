import { PracticeAreaCard } from "@/components/cards/PracticeAreaCard";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PRACTICE_AREAS } from "@/lib/constants";

export function PracticeAreasGrid() {
  return (
    <section className="bg-surface-light py-section" aria-labelledby="practice-areas-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>What We Do</SectionLabel>
          <h2
            id="practice-areas-heading"
            className="font-serif text-h2 font-semibold text-text-primary mb-5"
          >
            Legal Expertise Across Every Stage<br className="hidden md:block" /> of Your Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            From the formation of your business to the resolution of your most complex dispute —
            we have the depth you need.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5 mb-12"
          role="list"
        >
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

        {/* CTA */}
        <div className="text-center">
          <Button href="/practice-areas" variant="secondary" showArrow>
            View All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
}
