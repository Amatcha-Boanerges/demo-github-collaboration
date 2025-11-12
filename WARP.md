# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page project for Luzhaven Yango Partner, built with:
- **Next.js 15.5.2** with App Router architecture
- **React 19** (latest version)
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** for styling
- **ESLint** with Next.js configuration

The project is a single-page landing application targeting Yango drivers in Ghana, designed with a marketing funnel structure.

## Common Commands

### Development
```bash
npm run dev       # Start development server at http://localhost:3000
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint on the codebase
```

### Testing CI Locally
The project uses GitHub Actions CI that runs on Node 18.x and 20.x. To replicate CI:
```bash
npm ci            # Clean install dependencies (as in CI)
npm run lint      # Lint check
npm run build     # Production build check
```

## Architecture

### App Router Structure
- **`src/app/`**: Next.js App Router directory
  - `layout.tsx`: Root layout with metadata (SEO-optimized for Yango partner recruitment)
  - `page.tsx`: Home page that composes all landing page sections
  - `globals.css`: Global styles with CSS variables and Tailwind imports

### Component Organization
- **`src/components/`**: All page components are modular and imported into `page.tsx`
  - Landing page follows a marketing funnel pattern: Hero → Problem → Benefits → SocialProof → CTAForm → Footer
  - Each section is a separate component for maintainability
  - Components use Tailwind utility classes exclusively

### Styling System
- **Tailwind v4** with custom theme extensions:
  - Brand colors: `luzhaven-red` (#F50101) and `luzhaven-dark` (#44090A)
  - Custom font: Poppins (loaded via Google Fonts in globals.css)
  - Responsive design using Tailwind breakpoints (sm, md, lg, etc.)
- CSS variables defined in `globals.css` for theming consistency
- No CSS modules or styled-components used

### TypeScript Configuration
- Path alias `@/*` maps to `src/*` for clean imports (e.g., `import Hero from '@/components/Hero'`)
- Strict mode enabled - all code must be type-safe
- Target: ES2017 for modern browser compatibility

## Development Guidelines

### Component Development
- Use functional components with TypeScript
- Import images via `next/image` for optimization
- All components are server components by default (Next.js 15 App Router)
- Use `'use client'` directive only when client-side interactivity is required

### Styling Approach
- Use Tailwind utility classes inline in components
- Reference custom colors: `text-luzhaven-red`, `bg-luzhaven-dark`
- Follow mobile-first responsive design (sm:, md:, lg: breakpoints)

### Image Handling
- Static images go in `/public` directory
- Use `next/image` component with `alt` attributes for SEO
- For background images, use `fill` prop with `object-cover`

### SEO and Metadata
- Metadata is defined in `src/app/layout.tsx`
- When adding new routes, define metadata per-route using Next.js metadata API
- OpenGraph tags are configured for social sharing

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on:
- Branches: `main`, `develop`, `feature/hero-section`
- Node versions: 18.x and 20.x
- Steps: Install → Lint → Build

All pull requests must pass CI checks before merging.

## Important Notes

- The project uses **npm** as the package manager (not yarn or pnpm)
- ESLint config uses the flat config format (`eslint.config.mjs`)
- Next.js config is in TypeScript (`next.config.ts`)
- Project name in package.json is `luzhaven-yango-next` but repository is `demo-github-collaboration`
