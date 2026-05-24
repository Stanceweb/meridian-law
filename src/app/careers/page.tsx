import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Meridian Law. We're looking for attorneys and legal professionals who want to do exceptional work and build something that lasts.",
};

const benefits = [
  { title: "Substantive Work from Day One", body: "You won't spend your first two years on document review. Our team is lean by design — which means real responsibility, real client contact, and real ownership of matters from the start." },
  { title: "Direct Client Relationships", body: "We don't put junior attorneys in a backroom. You'll know the clients you're helping and they'll know you. That's how great legal work actually gets done." },
  { title: "A Culture of Honest Feedback", body: "We tell clients the truth and we tell each other the truth. If something isn't working, we say so. If something is excellent, we say that too. No politics. No managed-up culture." },
];

const openings: { title: string; area: string; location: string; type: string }[] = [
  // Intentionally empty — shows the "always interested" fallback
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Careers" }]}
        label="Join the Team"
        title="Build Your Practice at Meridian."
        subtitle="We're looking for attorneys and professionals who want to do exceptional work — and build something that lasts."
      />

      {/* Why Join */}
      <section className="bg-surface-light py-section" aria-labelledby="why-join-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="why-join-heading" className="font-serif text-h2 font-semibold text-text-primary text-center mb-12">
            Why Meridian?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-surface-border rounded-sm p-8 shadow-card">
                <CheckCircle className="h-6 w-6 text-brand-gold mb-4" aria-hidden="true" />
                <h3 className="font-sans font-semibold text-text-primary mb-3">{benefit.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-surface-mid py-section" aria-labelledby="openings-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="openings-heading" className="font-serif text-h3 font-semibold text-text-primary mb-8">
            Open Positions
          </h2>
          {openings.length > 0 ? (
            <ul className="space-y-4" role="list">
              {openings.map((role) => (
                <li key={role.title} className="bg-white border border-surface-border rounded-sm p-6 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-text-primary">{role.title}</p>
                    <p className="text-sm text-text-secondary">{role.area} · {role.location} · {role.type}</p>
                  </div>
                  <a href="/contact" className="text-sm font-medium text-brand-gold hover:text-brand-gold-dark transition-colors whitespace-nowrap">
                    View & Apply →
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-white border border-surface-border rounded-sm p-10 text-center shadow-card">
              <p className="font-serif text-xl text-text-primary mb-3">
                No open positions listed right now.
              </p>
              <p className="text-text-secondary mb-6 max-w-md mx-auto leading-relaxed">
                We&apos;re always interested in hearing from exceptional attorneys. If you&apos;re
                looking for a firm where your work will matter, send us your details.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white rounded font-medium text-sm hover:bg-brand-navy-mid transition-colors"
              >
                Submit Your CV →
              </a>
            </div>
          )}
        </div>
      </section>

      <CTASection
        label="Join Meridian"
        headline="Exceptional attorneys doing exceptional work."
        body="If that describes you — or where you want to be — we'd like to hear from you."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
