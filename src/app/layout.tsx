import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meridianlaw.com"),
  title: {
    default: "Meridian Law — Trusted Legal Counsel",
    template: "%s · Meridian Law",
  },
  description:
    "Meridian Law provides trusted legal counsel for individuals, businesses, and startups. Strategic guidance. Practical results. Book a confidential consultation.",
  keywords: ["law firm", "legal services", "corporate lawyer", "litigation", "real estate law", "business lawyer", "legal consultation"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Meridian Law",
    title: "Meridian Law — Trusted Legal Counsel",
    description: "Strategic legal guidance for individuals, businesses, and growing companies.",
  },
  robots: { index: true, follow: true },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
