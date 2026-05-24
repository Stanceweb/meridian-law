import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AttorneyPreview } from "@/components/sections/AttorneyPreview";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Our Firm",
  description:
    "Meridian Law was founded on the belief that exceptional legal counsel should be honest, accessible, and genuinely invested in client outcomes.",
};

const philosophy = [
  {
    heading: "Why We Were Founded",
    body: "Meridian Law was built in response to a gap we saw too often: clients being passed through law firm structures, never quite knowing who was responsible for their matter or when they'd hear back. We built a different model — one where the attorney you meet is the attorney who leads your case.",
  },
  {
    heading: "What Client-First Actually Means",
    body: "It means we respond within one business day. It means we tell you when a matter is outside our expertise instead of billing for it. It means our retainer letters are plain English, not engineered to obscure. And it means we treat your urgency as our own — because it is.",
  },
  {
    heading: "How We Approach Difficult Situations",
    body: "Difficult situations require honest counsel, not reassurance. When the answer is complicated, we say so. When the risk is real, we name it. When you have a strong position, we'll tell you that too — and build a strategy around it.",
  },
];

export default function AboutFirmPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "About" }, { label: "Our Firm" }]}
        label="About the Firm"
        title="More Than Legal Advice — A Long-Term Legal Partnership."
        subtitle="Founded on the belief that exceptional legal counsel should be honest, accessible, and genuinely invested in client outcomes."
      />

      {/* Philosophy Section */}
      <section className="bg-brand-navy py-section" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Pull Quote */}
            <div>
              <h2 id="philosophy-heading" className="sr-only">Our Philosophy</h2>
              <blockquote className="border-l-2 border-brand-gold pl-8">
                <p className="font-serif text-3xl md:text-4xl text-white font-semibold leading-tight">
                  &ldquo;We don&apos;t measure success by hours billed. We measure it by problems solved.&rdquo;
                </p>
                <footer className="mt-8 text-sm text-white/40">
                  — Meridian Law, Founded 2005
                </footer>
              </blockquote>
            </div>

            {/* Philosophy Points */}
            <div className="space-y-8">
              {philosophy.map((item) => (
                <div key={item.heading}>
                  <h3 className="font-sans text-base font-semibold text-white mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="bg-surface-mid py-section" aria-labelledby="metrics-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="metrics-heading" className="font-serif text-h3 font-semibold text-text-primary text-center mb-12">
            Two Decades of Practice.
          </h2>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2005",  label: "Year Founded" },
              { value: "20+",   label: "Years in Practice" },
              { value: "400+",  label: "Matters Handled" },
              { value: "12",    label: "Practice Areas" },
            ].map((metric) => (
              <div key={metric.label}>
                <dt className="font-serif text-4xl font-semibold text-brand-gold mb-2">
                  {metric.value}
                </dt>
                <dd className="text-sm text-text-secondary">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-surface-light py-section" aria-labelledby="offices-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="offices-heading" className="font-serif text-h3 font-semibold text-text-primary mb-10 text-center">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { city: "New York", address: "123 Park Avenue, Suite 1400", state: "NY 10017", phone: "+1 (212) 555-0100", primary: true },
              { city: "Los Angeles", address: "456 Wilshire Blvd, Suite 800", state: "CA 90036", phone: "+1 (310) 555-0200", primary: false },
            ].map((office) => (
              <div
                key={office.city}
                className="bg-white border border-surface-border rounded-sm p-8 shadow-card"
              >
                {office.primary && (
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-wide mb-3 block">
                    Main Office
                  </span>
                )}
                <p className="font-serif text-xl font-semibold text-text-primary mb-3">{office.city}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {office.address}<br />{office.state}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\D/g, "")}`}
                  className="text-sm text-brand-gold hover:text-brand-gold-dark transition-colors font-medium"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AttorneyPreview />

      <CTASection />
    </>
  );
}
