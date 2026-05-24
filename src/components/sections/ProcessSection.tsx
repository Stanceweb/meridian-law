import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    body: "We begin with a confidential conversation to understand your situation, your goals, and your timeline — with no obligation and no judgment.",
  },
  {
    number: "02",
    title: "Strategy & Scoping",
    body: "We develop a clear legal strategy and provide an honest assessment of risks, costs, and expected outcomes before any engagement begins.",
  },
  {
    number: "03",
    title: "Execution",
    body: "Your dedicated attorney leads every step — negotiations, filings, hearings, or transactions — with precision and direct communication throughout.",
  },
  {
    number: "04",
    title: "Resolution & Beyond",
    body: "We see matters through to completion and remain available as your legal needs evolve. Most clients work with us for years, not just once.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="bg-brand-navy py-section"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel light>How We Work</SectionLabel>
          <h2
            id="process-heading"
            className="font-serif text-h2 font-semibold text-white mb-5"
          >
            A Clear Process for Complex Situations.
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            We believe the best legal counsel is also the most transparent.
            Here is what working with us looks like.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-px bg-brand-gold/20 -translate-y-1/2 z-0"
                  style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }}
                  aria-hidden="true"
                />
              )}

              <div className="relative">
                <span className="block font-serif text-4xl font-semibold text-brand-gold/40 mb-4 leading-none">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
