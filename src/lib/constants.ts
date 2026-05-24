export const FIRM = {
  name: "Meridian Law",
  tagline: "Clarity in complex matters.",
  phone: "+1 (212) 555-0100",
  email: "hello@meridianlaw.com",
  address: {
    street: "123 Park Avenue, Suite 1400",
    city: "New York",
    state: "NY",
    zip: "10017",
  },
  hours: "Monday – Friday, 9:00am – 6:00pm EST",
  social: {
    linkedin: "https://linkedin.com/company/meridian-law",
    twitter: "https://twitter.com/meridianlaw",
  },
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Firm",  href: "/about/our-firm" },
      { label: "Careers",   href: "/careers" },
    ],
  },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: [
      { label: "Corporate & Commercial Law",   href: "/practice-areas/corporate-commercial-law" },
      { label: "Real Estate Law",              href: "/practice-areas/real-estate-law" },
      { label: "Litigation & Dispute Resolution", href: "/practice-areas/litigation-dispute-resolution" },
      { label: "Family Law",                   href: "/practice-areas/family-law" },
      { label: "Employment Law",               href: "/practice-areas/employment-law" },
      { label: "Intellectual Property",        href: "/practice-areas/intellectual-property" },
      { label: "Immigration Law",              href: "/practice-areas/immigration-law" },
      { label: "Tax Advisory",                 href: "/practice-areas/tax-advisory" },
      { label: "Banking & Finance",            href: "/practice-areas/banking-finance" },
      { label: "Startup & Business Advisory",  href: "/practice-areas/startup-business-advisory" },
    ],
  },
  { label: "Attorneys",  href: "/attorneys" },
  { label: "Insights",   href: "/insights" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
];

export const PRACTICE_AREAS = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    icon: "Building2",
    shortDescription: "Contracts, M&A, corporate governance, and commercial strategy for businesses at every stage.",
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    icon: "Home",
    shortDescription: "Acquisitions, leases, development, and property dispute resolution handled with precision.",
  },
  {
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    icon: "Scale",
    shortDescription: "Skilled courtroom advocacy and strategic dispute management — from arbitration to full trial.",
  },
  {
    slug: "family-law",
    title: "Family Law",
    icon: "Heart",
    shortDescription: "Sensitive, practical guidance through divorce, custody, adoption, and family transitions.",
  },
  {
    slug: "employment-law",
    title: "Employment Law",
    icon: "Briefcase",
    shortDescription: "Protecting the rights of employers and employees across all workplace legal matters.",
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    icon: "Lightbulb",
    shortDescription: "Protecting your ideas, trademarks, patents, and creative work in a competitive world.",
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    icon: "Globe",
    shortDescription: "Navigating complex immigration processes for individuals, families, and global businesses.",
  },
  {
    slug: "tax-advisory",
    title: "Tax Advisory",
    icon: "BarChart2",
    shortDescription: "Strategic tax counsel for individuals, businesses, and cross-border transactions.",
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    icon: "Landmark",
    shortDescription: "Sophisticated transactional and regulatory counsel for lenders, borrowers, and investors.",
  },
  {
    slug: "startup-business-advisory",
    title: "Startup & Business Advisory",
    icon: "Rocket",
    shortDescription: "Founder-focused legal support: from incorporation to funding rounds and beyond.",
  },
];

export const ATTORNEYS = [
  {
    slug: "sarah-m-chen",
    name: "Sarah M. Chen",
    title: "Partner",
    practiceAreas: ["Corporate & Commercial Law", "Real Estate Law"],
    location: "New York, NY",
    bio: "Sarah advises businesses on their most consequential transactions — from early-stage equity structures to nine-figure acquisitions. With 15 years in practice, she brings commercial depth to every matter she leads.",
    email: "sarah.chen@meridianlaw.com",
    phone: "+1 (212) 555-0110",
    education: [
      { degree: "J.D.", school: "Columbia Law School", year: 2005 },
      { degree: "B.A., Economics", school: "University of Michigan", year: 2002 },
    ],
    barAdmissions: ["New York (2006)", "District of Columbia (2009)"],
    languages: ["English", "Mandarin"],
    matters: [
      "Lead counsel on $85M acquisition of regional manufacturing group",
      "Advised Series B fintech company through preferred stock restructuring",
      "Negotiated 6-year commercial lease for 40,000 sq ft NYC headquarters",
      "Structured joint venture for international real estate development fund",
    ],
    photo: "/images/attorneys/sarah-chen.jpg",
  },
  {
    slug: "marcus-okafor",
    name: "Marcus Okafor",
    title: "Partner",
    practiceAreas: ["Litigation & Dispute Resolution", "Employment Law"],
    location: "New York, NY",
    bio: "Marcus is a trial attorney with a record of success in complex commercial disputes and employment litigation. He is known for his precision in the courtroom and his ability to turn complicated facts into clear, compelling arguments.",
    email: "marcus.okafor@meridianlaw.com",
    phone: "+1 (212) 555-0120",
    education: [
      { degree: "J.D.", school: "Yale Law School", year: 2007 },
      { degree: "B.S., Political Science", school: "Howard University", year: 2004 },
    ],
    barAdmissions: ["New York (2008)", "New Jersey (2010)"],
    languages: ["English"],
    matters: [
      "Won $6.8M arbitration award in employment discrimination matter",
      "Successfully defended regional bank in multi-party commercial fraud litigation",
      "Obtained full dismissal of criminal charges in high-profile white-collar investigation",
      "Represented employee class in landmark workplace harassment settlement",
    ],
    photo: "/images/attorneys/marcus-okafor.jpg",
  },
  {
    slug: "elena-vasquez",
    name: "Elena Vasquez",
    title: "Senior Associate",
    practiceAreas: ["Immigration Law", "Startup & Business Advisory"],
    location: "Los Angeles, CA",
    bio: "Elena combines deep immigration expertise with a genuine understanding of the startup ecosystem. She advises founders, investors, and international companies on visas, business formation, and cross-border legal strategy.",
    email: "elena.vasquez@meridianlaw.com",
    phone: "+1 (310) 555-0130",
    education: [
      { degree: "J.D.", school: "UCLA School of Law", year: 2012 },
      { degree: "B.A., International Relations", school: "USC", year: 2009 },
    ],
    barAdmissions: ["California (2013)"],
    languages: ["English", "Spanish"],
    matters: [
      "Secured O-1 visas for 40+ international tech founders",
      "Advised 12-country corporate restructuring with immigration implications",
      "Guided Series A company through international employee relocation program",
    ],
    photo: "/images/attorneys/elena-vasquez.jpg",
  },
];

export const CASE_RESULTS = [
  {
    id: "cr-001",
    category: "Corporate Law",
    year: 2024,
    outcome: "$85M Acquisition",
    description: "Lead counsel for acquirer in the purchase of a regional manufacturing group, including due diligence, SPA negotiation, and regulatory approvals.",
    attorneys: ["Sarah M. Chen"],
  },
  {
    id: "cr-002",
    category: "Employment Law",
    year: 2024,
    outcome: "$6.8M Arbitration Award",
    description: "Secured significant arbitration award for client in complex employment discrimination matter against a Fortune 500 company.",
    attorneys: ["Marcus Okafor"],
  },
  {
    id: "cr-003",
    category: "Litigation",
    year: 2023,
    outcome: "Full Dismissal",
    description: "Obtained dismissal of all criminal charges in a high-profile white-collar investigation, avoiding indictment for our client.",
    attorneys: ["Marcus Okafor"],
  },
  {
    id: "cr-004",
    category: "Intellectual Property",
    year: 2023,
    outcome: "Trademark Registration — 14 Countries",
    description: "Secured comprehensive trademark portfolio across 14 jurisdictions for a global consumer brand expanding into new markets.",
    attorneys: ["Sarah M. Chen"],
  },
  {
    id: "cr-005",
    category: "Real Estate",
    year: 2024,
    outcome: "$200M+ Portfolio Acquisition",
    description: "Advised buyer consortium on the acquisition of three commercial real estate portfolios across multiple jurisdictions.",
    attorneys: ["Sarah M. Chen"],
  },
];

export const INSIGHTS = [
  {
    slug: "what-founders-need-to-know-before-series-a",
    title: "What Founders Need to Know Before Raising a Series A Round",
    category: "Startup Advisory",
    author: "Sarah M. Chen",
    authorSlug: "sarah-m-chen",
    date: "2025-05-01",
    readTime: "8 min",
    excerpt: "The legal groundwork you lay before your Series A determines how smoothly the round closes — and what rights you retain after it does. Here is what every founder should have in place.",
  },
  {
    slug: "employer-obligations-remote-workforce",
    title: "Employer Obligations When Managing a Multi-State Remote Workforce",
    category: "Employment Law",
    author: "Marcus Okafor",
    authorSlug: "marcus-okafor",
    date: "2025-04-15",
    readTime: "6 min",
    excerpt: "When your employees work from different states, your obligations as an employer multiply. Payroll tax, local employment law, and benefit requirements all shift — here is what you need to know.",
  },
  {
    slug: "o1-visa-for-tech-founders",
    title: "The O-1 Visa: A Practical Guide for International Tech Founders",
    category: "Immigration Law",
    author: "Elena Vasquez",
    authorSlug: "elena-vasquez",
    date: "2025-03-22",
    readTime: "10 min",
    excerpt: "The O-1 visa is one of the most powerful tools for international founders building companies in the US. But the process is far more nuanced than most people realize.",
  },
];

export const TRUST_METRICS = [
  { value: "20+",  label: "Years of Practice" },
  { value: "400+", label: "Matters Resolved" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "12",   label: "Practice Areas" },
];

export const MATTER_TYPES = [
  "Corporate & Commercial Law",
  "Real Estate Law",
  "Litigation & Dispute Resolution",
  "Family Law",
  "Employment Law",
  "Intellectual Property",
  "Immigration Law",
  "Tax Advisory",
  "Banking & Finance",
  "Startup & Business Advisory",
  "Other",
];
