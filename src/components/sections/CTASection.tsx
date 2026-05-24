import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FIRM } from "@/lib/constants";

interface CTASectionProps {
  label?: string;
  headline?: string;
  body?: string;
  primaryCTA?: { label: string; href: string };
  microCopy?: string;
}

export function CTASection({
  label = "Ready to Begin?",
  headline = "Let's discuss your matter — confidentially and without obligation.",
  body = "Whether you're facing an urgent legal situation or planning ahead, our attorneys are ready to listen and advise.",
  primaryCTA = { label: "Book a Consultation", href: "/contact" },
  microCopy = "Submitting an inquiry does not create an attorney-client relationship. Consultations are confidential.",
}: CTASectionProps) {
  return (
    <section
      className="bg-brand-navy py-section-lg"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <SectionLabel light>{label}</SectionLabel>

        <h2
          id="cta-heading"
          className="font-serif text-h2 font-semibold text-white mb-6 leading-tight"
        >
          {headline}
        </h2>

        <p className="text-lg text-white/65 mb-10 leading-relaxed max-w-2xl mx-auto">
          {body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
          <Button href={primaryCTA.href} variant="gold" size="lg" showArrow>
            {primaryCTA.label}
          </Button>
          <a
            href={`tel:${FIRM.phone.replace(/\D/g, "")}`}
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            aria-label={`Call us at ${FIRM.phone}`}
          >
            Or call us: {FIRM.phone}
          </a>
        </div>

        <p className="text-xs text-white/30 max-w-md mx-auto leading-relaxed">
          {microCopy}
        </p>
      </div>
    </section>
  );
}
