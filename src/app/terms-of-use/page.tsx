import type { Metadata } from "next";
import Link from "next/link";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing your use of the Meridian Law website.`,
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "May 1, 2025";

export default function TermsOfUsePage() {
  return (
    <div className="bg-surface-light pt-[72px]">
      {/* Header */}
      <div className="bg-brand-navy py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/40" role="list">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white/60" aria-current="page">Terms of Use</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl font-semibold text-white mb-3">Terms of Use</h1>
          <p className="text-white/50 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-10">

          <p className="text-text-secondary leading-relaxed text-lg">
            Please read these Terms of Use (&ldquo;Terms&rdquo;) carefully before using the
            {" "}{FIRM.name} website. By accessing or using the site, you agree to be bound by
            these Terms. If you do not agree, please do not use the site.
          </p>

          <Section title="1. Acceptance of Terms">
            <p>
              These Terms constitute a legally binding agreement between you and {FIRM.name}.
              We reserve the right to modify these Terms at any time. Continued use of the site
              following notice of changes constitutes acceptance.
            </p>
          </Section>

          <Section title="2. No Legal Advice">
            <p>
              The content of this website is provided for general informational purposes only.
              It does not constitute legal advice, and should not be relied upon as such.
              No attorney-client relationship is formed by viewing or using this site.
            </p>
            <p>
              Legal matters are fact-specific. Always consult a qualified attorney regarding
              your particular situation before taking or refraining from any action.
            </p>
          </Section>

          <Section title="3. No Attorney-Client Relationship">
            <p>
              Submitting an inquiry through our contact form, sending an email, or calling our
              offices does not create an attorney-client relationship. Such a relationship
              is established only upon execution of a written engagement letter signed by
              an authorized attorney of {FIRM.name}.
            </p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content on this site — including text, graphics, logos, images, and code —
              is the property of {FIRM.name} or its content suppliers and is protected by
              applicable intellectual property laws.
            </p>
            <p>
              You may view and print pages for personal, non-commercial use only. Any other
              reproduction, distribution, modification, or transmission requires prior written
              consent from {FIRM.name}.
            </p>
          </Section>

          <Section title="5. Accuracy of Information">
            <p>
              While we strive to keep information current and accurate, we make no representations
              or warranties regarding the completeness, accuracy, or timeliness of any content.
              Laws change frequently; information on this site may not reflect the most recent
              legal developments.
            </p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              This site may contain links to external websites. {FIRM.name} does not endorse
              and is not responsible for the content, privacy practices, or accuracy of
              third-party sites. Links are provided for convenience only.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, {FIRM.name} and its attorneys, employees,
              and agents shall not be liable for any direct, indirect, incidental, special,
              or consequential damages arising from your use of, or inability to use, this site
              or its content.
            </p>
          </Section>

          <Section title="8. Attorney Advertising">
            <p>
              This website is attorney advertising. Prior results do not guarantee a similar
              outcome. The information on this site is for general informational purposes
              and does not constitute legal advice.
            </p>
            <p>
              {FIRM.name} is located in {FIRM.address.city}, {FIRM.address.state}.
              Principal office: {FIRM.address.street}, {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These Terms are governed by the laws of the State of New York, without regard
              to its conflict of law principles. Any disputes arising from these Terms shall
              be resolved in the state or federal courts located in New York County, New York.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>Questions about these Terms? Contact us:</p>
            <address className="not-italic text-text-secondary mt-3 space-y-1">
              <p><strong>{FIRM.name}</strong></p>
              <p>{FIRM.address.street}</p>
              <p>{FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}</p>
              <p><a href={`tel:${FIRM.phone.replace(/\D/g, "")}`} className="hover:text-brand-gold transition-colors">{FIRM.phone}</a></p>
              <p><a href={`mailto:${FIRM.email}`} className="hover:text-brand-gold transition-colors">{FIRM.email}</a></p>
            </address>
          </Section>
        </div>

        {/* Legal nav */}
        <div className="mt-16 pt-8 border-t border-surface-border flex flex-wrap gap-6 text-sm text-text-muted">
          <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-brand-gold transition-colors">Disclaimer</Link>
          <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-sans text-lg font-semibold text-text-primary mb-3">{title}</h2>
      <div className="text-text-secondary leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
