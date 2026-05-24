import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Get Legal Help",
  description:
    "Contact Meridian Law. Use our secure form or call directly. Consultations are confidential and obligation-free. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        label="Get in Touch"
        title="Contact Meridian Law."
        subtitle="Use the form below or call us directly. We respond to all inquiries within one business day."
      />

      <section className="bg-surface-light py-section" aria-labelledby="contact-section-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="contact-section-heading" className="sr-only">Contact Form and Details</h2>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-semibold text-text-primary mb-8">
                Send Us Your Inquiry
              </h3>
              <ContactForm />
            </div>

            {/* Details — 2 cols */}
            <aside className="lg:col-span-2" aria-label="Contact information">
              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-4">
                    Prefer to Call?
                  </p>
                  <a
                    href={`tel:${FIRM.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-3 text-lg font-medium text-text-primary hover:text-brand-gold transition-colors"
                    aria-label={`Call Meridian Law at ${FIRM.phone}`}
                  >
                    <Phone className="h-5 w-5 text-brand-gold shrink-0" aria-hidden="true" />
                    {FIRM.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-4">
                    Email
                  </p>
                  <a
                    href={`mailto:${FIRM.email}`}
                    className="flex items-center gap-3 text-text-primary hover:text-brand-gold transition-colors"
                  >
                    <Mail className="h-5 w-5 text-brand-gold shrink-0" aria-hidden="true" />
                    {FIRM.email}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-4">
                    Hours
                  </p>
                  <div className="flex items-start gap-3 text-text-secondary">
                    <Clock className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p>{FIRM.hours}</p>
                      <p className="text-sm text-text-muted mt-1">
                        For urgent matters, call our direct line.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Offices */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-4">
                    Our Offices
                  </p>
                  <div className="space-y-4">
                    {[
                      { city: "New York (Main)", address: "123 Park Avenue, Suite 1400", state: "New York, NY 10017" },
                      { city: "Los Angeles", address: "456 Wilshire Blvd, Suite 800", state: "Los Angeles, CA 90036" },
                    ].map((office) => (
                      <div key={office.city} className="flex items-start gap-3 text-text-secondary text-sm">
                        <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="font-medium text-text-primary">{office.city}</p>
                          <p>{office.address}</p>
                          <p>{office.state}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response promise */}
                <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-sm p-5">
                  <p className="text-sm font-medium text-text-primary mb-1">
                    ⏱ Response within one business day
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    For urgent matters, call us directly at{" "}
                    <a href="tel:+12125550100" className="text-brand-gold font-medium">
                      {FIRM.phone}
                    </a>.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Office Locations Strip */}
      <section className="bg-brand-navy py-14" aria-labelledby="locations-strip-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-8 text-center">
            Our Offices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                city: "New York",
                tag: "Main Office",
                address: "123 Park Avenue, Suite 1400",
                state: "New York, NY 10017",
                phone: "+1 (212) 555-0100",
                mapsUrl: "https://maps.google.com/?q=123+Park+Avenue+New+York+NY+10017",
              },
              {
                city: "Los Angeles",
                tag: "",
                address: "456 Wilshire Blvd, Suite 800",
                state: "Los Angeles, CA 90036",
                phone: "+1 (310) 555-0200",
                mapsUrl: "https://maps.google.com/?q=456+Wilshire+Blvd+Los+Angeles+CA+90036",
              },
            ].map((office) => (
              <div key={office.city} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-serif text-lg font-semibold text-white">{office.city}</p>
                    {office.tag && (
                      <span className="text-xs text-brand-gold/60 border border-brand-gold/20 px-2 py-0.5 rounded-full">
                        {office.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {office.address}<br />{office.state}
                  </p>
                  <div className="mt-3 flex flex-col gap-1">
                    <a
                      href={`tel:${office.phone.replace(/\D/g, "")}`}
                      className="text-sm text-brand-gold hover:text-brand-gold-dark transition-colors"
                    >
                      {office.phone}
                    </a>
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/40 hover:text-white/70 transition-colors"
                      aria-label={`Get directions to ${office.city} office`}
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
