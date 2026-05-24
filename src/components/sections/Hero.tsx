import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TRUST_METRICS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-brand-navy flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Gold accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
        {/* Text Content */}
        <div className="lg:py-32">
          <SectionLabel light className="text-brand-gold">
            Trusted Legal Counsel
          </SectionLabel>

          {/* Thin gold rule */}
          <div className="w-12 h-px bg-brand-gold mb-8" aria-hidden="true" />

          <h1 className="font-serif text-h1 md:text-display font-semibold text-white leading-tight mb-6">
            Strategic Legal Guidance{" "}
            <span className="text-white/80">for What Matters Most.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            We help individuals, businesses, and growing companies navigate complex
            legal matters — with clarity, precision, and counsel you can trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
            <Button href="/contact" variant="gold" size="lg" showArrow>
              Book a Consultation
            </Button>
            <Button href="/practice-areas" variant="ghost" size="lg"
              className="text-white/80 hover:text-white border-white/20 hover:border-white/40 hover:no-underline hover:bg-white/10">
              Explore Our Services
            </Button>
          </div>

          <p className="text-xs text-white/35">
            Confidential. No obligation. Typically replied to within 24 hours.
          </p>

          {/* Trust Metrics */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {TRUST_METRICS.map((metric, i) => (
              <div key={i}>
                <p className="font-serif text-3xl font-semibold text-brand-gold mb-1">
                  {metric.value}
                </p>
                <p className="text-xs text-white/50 uppercase tracking-wide">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — decorative element */}
        <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
          <div className="relative w-full max-w-md aspect-[3/4]">
            {/* Editorial frame */}
            <div className="absolute inset-0 border border-white/10 rounded-sm" />
            <div className="absolute inset-4 border border-brand-gold/20 rounded-sm" />
            {/* Large decorative quote mark */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <span className="font-serif text-8xl text-brand-gold/20 leading-none mb-4">&ldquo;</span>
              <p className="font-serif text-xl text-white/60 italic leading-relaxed">
                We don&apos;t measure success by hours billed. We measure it by problems solved.
              </p>
              <div className="mt-8 w-8 h-px bg-brand-gold/40" />
              <p className="mt-4 text-xs text-white/30 tracking-widest uppercase">Meridian Law</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
