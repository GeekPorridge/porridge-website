# GeekPorridge — Personal Portfolio

A personal portfolio website built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **next-intl** for full internationalization (en/zh). Showcases selected works, engineering philosophy, and a contact form with server-side validation.

<p align="center">
  <a href="README.md">🇨🇳中文</a>
</p>

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (React 19, App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion) |
| i18n | next-intl (en / zh) |
| Validation | Joi (server-side contact form) |
| HTTP | SWR (client data fetching) |
| Icons | Lucide React |
| Linting | Biome (format + lint) |
| Testing | Vitest |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Biome check |
| `pnpm format` | Biome format |
| `pnpm lint:fix` | Biome check with auto-fix |
| `pnpm test` | Run Vitest tests |
| `pnpm test:watch` | Run Vitest in watch mode |
| `pnpm test:ui` | Run Vitest with UI |

## Project Structure

```
porridge-website/
├── app/
│   ├── [locale]/               # Route group (en, zh)
│   │   ├── contact/            # Contact page
│   │   ├── portfolio/          # Portfolio page
│   │   ├── error.tsx           # Error boundary
│   │   ├── layout.tsx          # Locale layout (header + footer)
│   │   ├── loading.tsx         # Loading skeleton
│   │   └── page.tsx            # Home page
│   ├── api/contact/route.ts    # Contact form API
│   ├── components/             # Shared UI components
│   ├── motions/               # Animation-specific components
│   ├── fonts.ts               # Google Fonts config
│   ├── globals.css            # Tailwind CSS + theme tokens
│   ├── layout.tsx             # Root layout
│   ├── not-found.tsx          # 404 page
│   └── types/                 # Shared TypeScript types
├── i18n/                      # Internationalization config
├── lib/                       # Utility functions and tests
├── messages/                  # Translation JSON files
└── public/                    # Static assets
```

## Features

- **Bilingual** — Full English / Chinese internationalization with next-intl
- **Performance** — Turbopack dev, streaming, and optimized images
- **Responsive** — Mobile-first layout with bento grid portfolio
- **Dark Mode** — CSS theme toggle with localStorage persistence
- **Contact Form** — Joi-validated API route with interest chips
- **SEO** — Dynamic Open Graph / Twitter metadata per locale
- **Animations** — Scroll-triggered entrance animations via Motion

## Deployment

```bash
pnpm build
```

The static output is in `.next/`. Deploy to any Node.js hosting (Vercel, Railway, etc.).

## License

MIT — feel free to use this as a template for your own portfolio.
