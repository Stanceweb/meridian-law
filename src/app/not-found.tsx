import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Large 404 */}
        <p className="font-serif text-[8rem] font-semibold text-brand-gold/20 leading-none mb-6" aria-hidden="true">
          404
        </p>

        <h1 className="font-serif text-3xl font-semibold text-white mb-4">
          Page not found.
        </h1>
        <p className="text-white/60 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="gold" showArrow>
            Back to Homepage
          </Button>
          <Button href="/contact" variant="ghost"
            className="text-white/70 border-white/20 hover:text-white hover:border-white/40 hover:no-underline hover:bg-white/10">
            Contact Us
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-5">Helpful Links</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: "Our Attorneys",  href: "/attorneys" },
              { label: "Case Results",   href: "/case-results" },
              { label: "Insights",       href: "/insights" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
