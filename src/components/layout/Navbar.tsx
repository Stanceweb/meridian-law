"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, FIRM } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-nav"
            : "bg-transparent"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded"
          >
            <span
              className={cn(
                "font-serif text-xl font-semibold tracking-tight transition-colors duration-300",
                scrolled ? "text-brand-navy" : "text-white"
              )}
            >
              Meridian Law
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded transition-colors duration-200",
                        scrolled
                          ? "text-text-primary hover:text-brand-gold"
                          : "text-white/90 hover:text-white"
                      )}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.label}
                      <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div
                      className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="bg-white border border-surface-border rounded shadow-hover py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-text-primary hover:text-brand-gold hover:bg-surface-light transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium rounded transition-colors duration-200",
                      scrolled
                        ? "text-text-primary hover:text-brand-gold"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="gold" size="sm" showArrow>
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded transition-colors duration-200",
              scrolled ? "text-brand-navy" : "text-white"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav Drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          menuOpen ? "visible" : "invisible"
        )}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-brand-navy/70 transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <nav
          className={cn(
            "absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-brand-navy",
            "flex flex-col overflow-y-auto transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="font-serif text-xl font-semibold text-white">Meridian Law</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white/70 hover:text-white"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-b border-white/10 space-y-3">
            <Button href="/contact" variant="gold" className="w-full justify-center" showArrow>
              Book a Consultation
            </Button>
            <a
              href={`tel:${FIRM.phone.replace(/\D/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 rounded text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {FIRM.phone}
            </a>
          </div>

          {/* Nav Links */}
          <ul className="flex-1 p-6 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-lg font-serif text-white/90 hover:text-brand-gold transition-colors border-b border-white/10"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="pl-4 py-2 space-y-1">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1.5 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-white/10 text-white/40 text-xs space-y-1">
            <p>{FIRM.address.street}</p>
            <p>{FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}</p>
            <p className="mt-2">{FIRM.hours}</p>
          </div>
        </nav>
      </div>

      {/* Mobile Sticky Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-brand-navy border-t border-white/10">
        <div className="flex">
          <a
            href={`tel:${FIRM.phone.replace(/\D/g, "")}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-white text-sm font-medium hover:bg-white/10 transition-colors border-r border-white/10"
            aria-label={`Call ${FIRM.name} at ${FIRM.phone}`}
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-4 text-brand-gold text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
