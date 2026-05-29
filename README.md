<p align="center">
  <img src="public/favicon-96x96.png" width="80" alt="Billix Logo" />
</p>

<h1 align="center">Billix</h1>

<p align="center">
  <strong>AI Workspace for Chat, Automation & Integrations</strong>
</p>

<p align="center">
  Stop handling daily work. Start directing Billix.
</p>

<p align="center">
  <a href="https://billix.io">Website</a> &middot;
  <a href="https://billix.io/pricing">Pricing</a> &middot;
  <a href="https://billix.io/enterprise">Enterprise</a> &middot;
  <a href="https://billix.io/blogs">Blog</a> &middot;
  <a href="https://billix.io/contact">Contact</a>
</p>

---

## What is Billix?

Billix is an AI-powered workspace that unifies chat, automation, content creation, and **500+ integrations** into one seamless platform. Give plain-language instructions and let Billix execute real actions instantly — no setup, no tech skills required.

### Key Features

- **Setup-Free Automation** — No flow builders, triggers, or complex logic. Just describe what you want done.
- **Natural Language Control** — Multi-step workflows from simple instructions. No learning curve.
- **500+ Integrations** — Gmail, Slack, Notion, HubSpot, Salesforce, Stripe, GitHub, and hundreds more.
- **Real Execution** — Billix doesn't just suggest — it performs actual actions across your connected apps.
- **AI Chat & Content Creation** — Generate, edit, and refine content directly within your workspace.
- **Enterprise Ready** — Team collaboration, advanced security, and scalable infrastructure.

### Integrations

Billix connects with the tools you already use:

> Airtable · Calendar · Docs · Drive · Dropbox · GitHub · Gmail · HubSpot · Jotform · LinkedIn · Midjourney · Notion · Salesforce · Sheets · Slack · Stripe · X (Twitter) — and 500+ more

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| UI | React 19, [Tailwind CSS 4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com) |
| Animation | [GSAP](https://gsap.com), [Motion](https://motion.dev), [Lenis](https://lenis.darkroom.engineering) |
| Physics | [Matter.js](https://brm.io/matter-js) |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |
| Deployment | [Vercel](https://vercel.com) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- [pnpm](https://pnpm.io) (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/billix-landing-page.git
cd billix-landing-page

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_APP_URL=https://billix.io
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (legal)/            # Privacy, Terms, Security pages
│   ├── (pages)/            # Main pages (About, Pricing, etc.)
│   ├── layout.tsx          # Root layout with global metadata
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Search engine crawl rules
├── components/
│   ├── home/               # Home page sections
│   ├── about/              # About page components
│   ├── pricing/            # Pricing components
│   ├── enterprise/         # Enterprise components
│   ├── blogs/              # Blog components
│   ├── changelog/          # Changelog components
│   ├── contact/            # Contact form
│   ├── legal/              # Legal page content
│   └── ui/                 # Shared UI components
├── constants/              # App constants & configuration
├── icons/                  # Custom SVG icons
├── lib/                    # Utilities
├── providers/              # React context providers
├── public/                 # Static assets
└── types/                  # TypeScript type definitions
```

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, features, integrations, and CTA |
| About | `/about` | Company mission, values, and story |
| Pricing | `/pricing` | Plans, pricing tiers, and FAQ |
| Enterprise | `/enterprise` | Enterprise solutions and statistics |
| Blog | `/blogs` | Articles and updates |
| Changelog | `/changelog` | Product updates and releases |
| Contact | `/contact` | Contact form |
| Privacy Policy | `/privacy-policy` | Data & privacy practices |
| Terms of Service | `/terms-of-service` | Usage terms & conditions |
| Security Policy | `/security-policy` | Security practices & protections |

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_APP_URL` | Production URL (e.g., `https://billix.io`) | Yes |

---

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Set environment variables
4. Deploy

---

## License

Copyright &copy; 2025 Billix. All rights reserved.
