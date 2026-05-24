import { SectionLabel } from "@/components/ui/SectionLabel";

const differentiators = [
  {
    number: "01",
    title: "Direct Partner Access",
    body: "You work directly with the attorneys handling your matter — not passed to junior associates. The partner you meet is the partner who leads your case.",
  },
  {
    number: "02",
    title: "Honest, Upfront Counsel",
    body: "We tell you what you need to hear, not what you want to hear. No inflated timelines. No surprise billing. No vague assessments when you need clarity.",
  },
  {
    number: "03",
    title: "Industry Depth",
    body: "Our attorneys understand the sectors they serve — from real estate and technology to corporate M&A. That depth makes the advice materially better.",
  },
  {
    number: "04",
    title: "Responsive by Default",
    body: "Every client receives a response within one business day — without chasing. Your urgency is treated as our own, not queued for a convenient moment.",
  },
];

export function WhyUs() {
  return (
    <section
      className="bg-brand-navy py-section"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Heading + Pull Stat */}
          <div>
            <SectionLabel light>Why Clients Choose Us</SectionLabel>
            <h2
              id="why-us-heading"
              className="font-serif text-h2 font-semibold text-white mb-10 leading-tight"
            >
              Serious Counsel.<br />
              <span className="text-white/60">Practical Results.</span>
            </h2>

            {/* Large editorial quote */}
            <blockquote className="border-l-2 border-brand-gold pl-8">
              <p className="font-serif text-3xl md:text-4xl text-brand-gold leading-tight font-semibold">
                &ldquo;20 years of trusted practice.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-white/40 tracking-wide">
                Founded 2005 · New York
              </footer>
            </blockquote>
          </div>

          {/* Right — Differentiators */}
          <div className="space-y-10">
            {differentiators.map((item) => (
              <div key={item.number} className="flex gap-6">
                <div className="shrink-0">
                  <span className="font-serif text-2xl font-semibold text-brand-gold/40">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
