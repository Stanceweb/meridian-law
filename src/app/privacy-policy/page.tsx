import type { Metadata } from "next";
import Link from "next/link";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How Meridian Law collects, uses, and protects your personal information when you visit our website or contact us.`,
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "May 1, 2025";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-surface-light pt-[72px]">
      {/* Header */}
      <div className="bg-brand-navy py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/40" role="list">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white/60" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl font-semibold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none">

          <p className="text-text-secondary leading-relaxed text-lg mb-10">
            {FIRM.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard information
            when you visit our website or submit an inquiry.
          </p>

          <Section title="1. Information We Collect">
            <p>We may collect the following categories of personal information:</p>
            <ul>
              <li><strong>Contact information</strong> — name, email address, phone number, when you use our contact form or call us directly.</li>
              <li><strong>Matter information</strong> — a description of your legal matter and preferred contact method, provided voluntarily through our inquiry form.</li>
              <li><strong>Usage data</strong> — IP address, browser type, pages visited, and referring URL, collected automatically when you visit our site.</li>
              <li><strong>Cookies</strong> — small data files placed on your device for analytics and session management (see Section 5).</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to your inquiries and schedule consultations.</li>
              <li>Evaluate whether we can assist with your legal matter (conflicts check).</li>
              <li>Send administrative communications related to your request.</li>
              <li>Improve and analyze the performance of our website.</li>
              <li>Comply with legal and professional obligations.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties for
              marketing purposes.
            </p>
          </Section>

          <Section title="3. Attorney-Client Privilege">
            <p>
              Submitting a contact form or sending us an email <strong>does not</strong> create an
              attorney-client relationship. Privileged communications arise only after a formal
              engagement letter has been executed by both parties.
            </p>
            <p>
              Do not send confidential or time-sensitive information through this website.
            </p>
          </Section>

          <Section title="4. Information Sharing">
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service providers</strong> — third-party vendors who assist us in operating our website and communications (e.g., email delivery services), bound by confidentiality obligations.</li>
              <li><strong>Professional advisors</strong> — attorneys, accountants, or compliance consultants, under appropriate confidentiality agreements.</li>
              <li><strong>Law enforcement or regulators</strong> — when required by applicable law, court order, or professional conduct rules.</li>
            </ul>
          </Section>

          <Section title="5. Cookies and Analytics">
            <p>
              Our website uses Google Analytics to understand how visitors interact with our site.
              Google Analytics collects anonymized usage data. You can opt out of Google Analytics
              tracking by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
            <p>
              We use strictly necessary session cookies to ensure the site functions correctly.
              No persistent tracking cookies are set without your consent.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain inquiry records and communications for a minimum of seven (7) years
              in accordance with applicable professional conduct rules, unless a longer
              retention period is required by law.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, delete,
              or restrict processing of your personal data. To exercise any of these rights,
              please contact us at{" "}
              <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We implement reasonable administrative, technical, and physical security measures
              to protect your personal information. No method of transmission over the internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Links to Third-Party Sites">
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices of those sites and encourage you to review their policies.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the
              top reflects the most recent revision. Continued use of the site after changes
              constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <address className="not-italic text-text-secondary mt-3 space-y-1">
              <p><strong>{FIRM.name}</strong></p>
              <p>{FIRM.address.street}</p>
              <p>{FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}</p>
              <p><a href={`tel:${FIRM.phone.replace(/\D/g, "")}`}>{FIRM.phone}</a></p>
              <p><a href={`mailto:${FIRM.email}`}>{FIRM.email}</a></p>
            </address>
          </Section>
        </div>

        {/* Legal nav */}
        <div className="mt-16 pt-8 border-t border-surface-border flex flex-wrap gap-6 text-sm text-text-muted">
          <Link href="/terms-of-use" className="hover:text-brand-gold transition-colors">Terms of Use</Link>
          <Link href="/disclaimer" className="hover:text-brand-gold transition-colors">Disclaimer</Link>
          <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-sans text-lg font-semibold text-text-primary mb-3">{title}</h2>
      <div className="text-text-secondary leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
