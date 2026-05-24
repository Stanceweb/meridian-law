import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FIRM, PRACTICE_AREAS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl font-semibold text-white mb-2">Meridian Law</p>
            <p className="text-white/50 text-sm italic mb-6">{FIRM.tagline}</p>
            <div className="flex gap-4">
              <a
                href={FIRM.social.linkedin}
                aria-label="Meridian Law on LinkedIn"
                className="text-white/40 hover:text-brand-gold transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={FIRM.social.twitter}
                aria-label="Meridian Law on Twitter/X"
                className="text-white/40 hover:text-brand-gold transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Col 2 — Practice Areas */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Practice Areas
            </p>
            <ul className="space-y-2.5" role="list">
              {PRACTICE_AREAS.slice(0, 7).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/practice-areas"
                  className="text-sm text-brand-gold hover:text-brand-gold-dark transition-colors"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — The Firm */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              The Firm
            </p>
            <ul className="space-y-2.5" role="list">
              {[
                { label: "About Us",       href: "/about/our-firm" },
                { label: "Our Attorneys",  href: "/attorneys" },
                { label: "Case Results",   href: "/case-results" },
                { label: "Insights",       href: "/insights" },
                { label: "Careers",        href: "/careers" },
                { label: "Contact",        href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Contact
            </p>
            <ul className="space-y-4" role="list">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>{FIRM.address.street}<br />{FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}</span>
              </li>
              <li>
                <a
                  href={`tel:${FIRM.phone.replace(/\D/g, "")}`}
                  className="flex gap-3 text-sm text-white/60 hover:text-brand-gold transition-colors group"
                  aria-label={`Call us at ${FIRM.phone}`}
                >
                  <Phone className="h-4 w-4 text-brand-gold shrink-0" aria-hidden="true" />
                  {FIRM.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FIRM.email}`}
                  className="flex gap-3 text-sm text-white/60 hover:text-brand-gold transition-colors"
                >
                  <Mail className="h-4 w-4 text-brand-gold shrink-0" aria-hidden="true" />
                  {FIRM.email}
                </a>
              </li>
              <li className="text-sm text-white/40">{FIRM.hours}</li>
            </ul>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {year} Meridian Law. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use",   href: "/terms-of-use" },
              { label: "Disclaimer",     href: "/disclaimer" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-xs text-white/20">
              Attorney Advertising — New York
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
