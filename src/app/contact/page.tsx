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

                {/* Disclaimer box */}
                <div className="bg-white border border-surface-border rounded-sm p-5">
                  <p className="text-xs text-text-muted leading-relaxed">
                    <strong className="text-text-secondary">Please note:</strong> Contacting us
                    does not create an attorney-client relationship. Please do not include
                    confidential information in your inquiry until an engagement agreement
                    is in place.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-surface-mid h-64 flex items-center justify-center" aria-label="Office location map">
        <div className="text-center text-text-muted">
          <MapPin className="h-8 w-8 mx-auto mb-2 text-brand-gold" aria-hidden="true" />
          <p className="text-sm">Map integration: embed Google Maps API here</p>
          <p className="text-xs mt-1">123 Park Avenue, Suite 1400, New York, NY 10017</p>
        </div>
      </section>
    </>
  );
}
