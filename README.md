# Meridian Law — Premium Law Firm Website

A production-ready law firm website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Forms | react-hook-form + zod |
| Icons | Lucide React |
| Fonts | Cormorant Garamond + Inter (next/font) |
| Deployment | Vercel |

## Pages

- `/` — Homepage
- `/about/our-firm` — Firm philosophy
- `/practice-areas` — All 10 practice areas index
- `/practice-areas/[slug]` — Individual practice area
- `/attorneys` — Attorney directory
- `/attorneys/[slug]` — Attorney profile
- `/case-results` — Representative matters
- `/insights` — Blog index
- `/insights/[slug]` — Article page
- `/careers` — Careers
- `/contact` — Contact + form

## Getting Started

```bash
npm install
npm run dev
```

## Configuration

Update `src/lib/constants.ts` with real firm data.
Copy `.env.example` to `.env.local` and add `RESEND_API_KEY`.

## Brand Colors

- Deep Navy: `#0D1B2A`
- Warm Gold: `#C9A84C`
- Page Background: `#F8F6F2`
