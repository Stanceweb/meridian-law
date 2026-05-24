import { SectionLabel } from "@/components/ui/SectionLabel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Meridian handled our acquisition from term sheet to closing with a level of rigor and responsiveness I hadn't experienced before. They understood the deal, the stakes, and our industry — and it showed in every interaction.",
    name: "James R.",
    role: "Founder & CEO",
    context: "Series B Technology Company",
    area: "Corporate & Commercial Law",
    featured: true,
  },
  {
    quote: "I didn't know what to do after my accident. They walked me through everything and got me a result far better than I expected. I always felt like they genuinely cared.",
    name: "Maria S.",
    role: "Individual Client",
    context: "New York",
    area: "Litigation",
    featured: false,
  },
  {
    quote: "Elena made our immigration process feel manageable. She was on top of every deadline, explained everything clearly, and got our team's visas sorted without a single issue.",
    name: "David K.",
    role: "CEO",
    context: "International Startup",
    area: "Immigration Law",
    featured: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const supporting = testimonials.filter((t) => !t.featured);

  return (
    <section className="bg-surface-light py-section" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Client Perspectives</SectionLabel>
          <h2
            id="testimonials-heading"
            className="font-serif text-h2 font-semibold text-text-primary"
          >
            What Clients Say.
          </h2>
        </div>

        {/* Featured Testimonial */}
        {featured && (
          <div className="bg-white border border-surface-border rounded-sm p-10 md:p-14 shadow-card mb-6">
            <span
              className="block font-serif text-8xl text-brand-gold/20 leading-none mb-4 -mt-4"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote>
              <p className="font-serif text-xl md:text-2xl text-text-primary italic leading-relaxed mb-8 max-w-3xl">
                &ldquo;{featured.quote}&rdquo;
              </p>
              <footer className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div>
                  <p className="font-semibold text-text-primary">{featured.name}</p>
                  <p className="text-sm text-text-secondary">{featured.role} · {featured.context}</p>
                  <p className="text-xs text-text-muted mt-0.5">{featured.area} Matter</p>
                </div>
                <div className="sm:ml-auto">
                  <Stars />
                </div>
              </footer>
            </blockquote>
          </div>
        )}

        {/* Supporting Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {supporting.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-surface-border rounded-sm p-8 shadow-card"
            >
              <Stars />
              <blockquote className="mt-4">
                <p className="text-text-secondary leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-semibold text-sm text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role} · {t.context}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="flex items-center justify-center gap-3 text-sm text-text-secondary">
          <Stars />
          <span className="font-semibold text-text-primary">4.9 / 5</span>
          <span className="text-text-muted">·</span>
          <span>84 Google Reviews</span>
          <a
            href="#"
            className="text-brand-gold hover:text-brand-gold-dark font-medium transition-colors"
          >
            See all reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
