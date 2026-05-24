import type { Metadata } from "next";
import Link from "next/link";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Legal disclaimer for the Meridian Law website and its content.`,
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "May 1, 2025";

export default function DisclaimerPage() {
  return (
    <div className="bg-surface-light pt-[72px]">
      {/* Header */}
      <div className="bg-brand-navy py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/40" role="list">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white/60" aria-current="page">Disclaimer</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl font-semibold text-white mb-3">Disclaimer</h1>
          <p className="text-white/50 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-10">

          {/* Prominent attorney advertising notice */}
          <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-sm p-6">
            <p className="font-semibold text-text-primary mb-2">Attorney Advertising Notice</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              This website is attorney advertising. {FIRM.name} is a law firm.
              Prior results do not guarantee a similar outcome. The information contained
              on this website is for general informational purposes only and does not
              constitute legal advice.
            </p>
          </div>

          <Section title="No Legal Advice">
            <p>
              The content published on this website — including articles, practice area
              descriptions, case summaries, and other materials — is intended for general
              informational purposes only. It does not constitute legal advice and is not
              a substitute for consultation with a qualified attorney licensed in your jurisdiction.
            </p>
            <p>
              Legal questions are highly fact-specific. Do not act or refrain from acting
              on the basis of anything you read on this site without first consulting an attorney
              who can evaluate your specific circumstances.
            </p>
          </Section>

          <Section title="No Attorney-Client Relationship">
            <p>
              Your use of this website and any communication with {FIRM.name} via this
              website, email, or telephone does not create an attorney-client relationship.
              An attorney-client relationship is formed only when {FIRM.name} expressly
              agrees to represent you in writing through a signed engagement letter.
            </p>
            <p>
              Until a formal engagement letter is in place, any information you share with
              us is <strong>not</strong> protected by attorney-client privilege.
              Please do not send confidential information through this website.
            </p>
          </Section>

          <Section title="Past Results">
            <p>
              Case results and verdicts described on this website are provided for informational
              purposes only. <strong>Prior results do not guarantee a similar outcome.</strong>
              Every legal matter is unique; outcomes depend on the specific facts, applicable law,
              and the forum in which a matter is resolved.
            </p>
          </Section>

          <Section title="Jurisdictional Limitations">
            <p>
              The attorneys at {FIRM.name} are licensed to practice in specific jurisdictions.
              Nothing on this site constitutes an offer to represent clients in jurisdictions
              where our attorneys are not licensed or where the site would otherwise constitute
              unauthorized practice of law.
            </p>
          </Section>

          <Section title="Accuracy and Currency of Information">
            <p>
              We make reasonable efforts to ensure the accuracy of information on this site.
              However, laws change frequently and without notice. The information on this
              site may not reflect the most recent legal developments and may contain
              inaccuracies or errors. {FIRM.name} makes no representations or warranties,
              express or implied, regarding the accuracy, completeness, or timeliness of
              any content.
            </p>
          </Section>

          <Section title="Third-Party Content">
            <p>
              This site may reference or link to third-party websites, publications, or
              resources. {FIRM.name} is not responsible for the content, accuracy, or
              practices of any third-party site and does not endorse any linked content.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, {FIRM.name} disclaims
              all liability for any loss or damage, including consequential, indirect, or
              incidental damages, arising from reliance on or use of any information
              on this website.
            </p>
          </Section>

          <Section title="Questions">
            <p>
              If you have questions about this Disclaimer or the nature of our legal services,
              please contact us directly:
            </p>
            <address className="not-italic text-text-secondary mt-3 space-y-1">
              <p><strong>{FIRM.name}</strong></p>
              <p>{FIRM.address.street}</p>
              <p>{FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}</p>
              <p>
                <a href={`tel:${FIRM.phone.replace(/\D/g, "")}`} className="hover:text-brand-gold transition-colors">
                  {FIRM.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${FIRM.email}`} className="hover:text-brand-gold transition-colors">
                  {FIRM.email}
                </a>
              </p>
            </address>
          </Section>
        </div>

        {/* Legal nav */}
        <div className="mt-16 pt-8 border-t border-surface-border flex flex-wrap gap-6 text-sm text-text-muted">
          <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-use" className="hover:text-brand-gold transition-colors">Terms of Use</Link>
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
