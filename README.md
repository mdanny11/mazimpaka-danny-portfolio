# Mazimpaka Danny — Portfolio

Premium personal portfolio for **Mazimpaka Danny**, a Software Engineer based in Kigali, Rwanda. Built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Lucide icons.

## Stack

- Next.js 16 with App Router and TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion (respects `prefers-reduced-motion`)
- next-themes (light/dark, stored in `localStorage` as `danny-theme`)
- Optional Resend contact delivery
- Optional live GitHub repository listing

## Setup

Prerequisites: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Brand assets

Place the official files here (already included if you used the supplied logo and portrait):

| File | Path | Usage |
| --- | --- | --- |
| Logo (`Nkusi M. Danny`) | `public/images/danny-logo.png` | Navbar, footer, loading state, hero |
| Portrait | `public/images/My_cutout_mazimpaka_danny.png` | Hero and About |

Replacement rules:

- Keep the logo’s aspect ratio, whitespace, and colors. Do not crop, stretch, recolor, or place it on a low-contrast background. The site always sits the logo on a white plate.
- Keep the portrait as the original vertical photograph. It is displayed with `object-fit: cover`, focused on face and suit, inside a navy frame with gold corner accents. Do not generate a replacement image.
- Site copy uses **Mazimpaka Danny**. The logo lockup continues to read **Nkusi M. Danny**.

Optional CV file:

1. Add a PDF such as `public/cv/mazimpaka-danny-cv.pdf`
2. Set `NEXT_PUBLIC_CV_URL=/cv/mazimpaka-danny-cv.pdf`

Until that variable is set, **Download CV** explains that the file is not configured. It will not fake a download.

## Environment variables

Copy `.env.example` to `.env.local` and fill in only real values.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, and robots |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public phone |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub login used by the repository section |
| `NEXT_PUBLIC_CV_URL` | Public CV URL or `/cv/...` path |
| `GITHUB_TOKEN` | Optional token to raise GitHub API rate limits |
| `RESEND_API_KEY` | Resend API key for the contact form |
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions |
| `CONTACT_FROM_EMAIL` | Verified Resend from address |

Contact details, GitHub metrics, project links, certificate files, CV files, and screenshots are **not invented**. Missing values render as configuration placeholders.

Project GitHub / live / docs URLs live in `src/lib/projects.ts` (`links`). Certificate file paths live in `src/lib/content.ts`.

## Contact form

`POST /api/contact` validates name, email, subject, and message, and ignores honeypot spam (`company_website`).

If Resend is not fully configured, the API returns **503** and the UI shows that email delivery is not configured. It does not display a fake success state.

## GitHub section

When `NEXT_PUBLIC_GITHUB_USERNAME` is set, `GET /api/github` loads public repositories from the GitHub API and shows name, description, language, stars, forks, topics, last updated, and the GitHub URL. Loading, empty, error, and unconfigured states are all handled. Statistics are never fabricated.

## Deployment

Vercel is the default path:

1. Push the repository
2. Import the project in Vercel
3. Set environment variables from `.env.example`
4. Deploy

Any Node host that can run `npm run build` and `npm start` also works. Set `NEXT_PUBLIC_SITE_URL` to the production origin.

## Project structure

- `src/lib/` — typed site, project, and content configuration
- `src/components/sections/` — page sections
- `src/app/projects/[slug]/` — case study routes
- `src/app/api/contact/` — contact form
- `src/app/api/github/` — GitHub proxy
