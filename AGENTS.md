# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 marketing site built with the App Router. Main code lives in `src/`.

- `src/app/`: routes, layouts, metadata, `sitemap.ts`, and `robots.ts`
- `src/components/`: feature folders such as `home/`, `layout/`, `contacto/`, `servicios/`, `productos/`, and `galeria/`
- `src/constants/`, `src/hooks/`, `src/lib/`, `src/types/`: shared config, hooks, utilities, and TypeScript models
- `public/`: static files served directly, including gallery images and video
- `src/assets/`: source image/video assets used during development
- `e2e/`: Playwright browser tests

Use the `@/` alias for imports from `src`, for example `@/components/home/HeroSection`.

## Build, Test, and Development Commands
- `npm run dev`: start the local dev server on `http://localhost:3000`
- `npm run build`: create a production build
- `npm run start`: serve the production build locally
- `npm run lint`: run ESLint with Next.js core-web-vitals and TypeScript rules
- `npm test`: run Vitest unit and component tests
- `npm run test:watch`: run Vitest in watch mode
- `npm run test:e2e`: run Playwright smoke tests
- `npm run test:e2e:headed`: run Playwright with a visible browser

## Coding Style & Naming Conventions
Use TypeScript with `strict` mode expectations. Follow the existing style: 2-space indentation, single quotes, semicolons, and concise Spanish-facing copy where applicable.

- Components and pages: PascalCase filenames, for example `FormularioContacto.tsx`
- Hooks and utilities: camelCase, for example `useScrollNavbar.ts`
- Route folders: lowercase, URL-oriented names such as `politica-de-privacidad`

Keep components focused by feature folder and prefer small reusable sections over large monoliths.

## Testing Guidelines
Vitest uses `jsdom` and loads files matching `src/**/*.test.{ts,tsx}`. Playwright uses `e2e/*.spec.ts` and starts the app on port `4173`.

Add or update tests when changing page rendering, navigation, or form behavior. No coverage gate is configured, so rely on targeted assertions around the affected flow.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commits, usually with `feat:` prefixes, for example `feat: update sitemap...`. Keep commits focused on one change.

PRs should include a clear summary, note affected routes or components, list test commands run, and attach screenshots or recordings for UI changes. Link the related issue when one exists.

## Security & Configuration Tips
Do not commit real secrets from `.env.local`. Use `.env.example` as the template for new variables and keep public-facing URLs, forms, and WhatsApp settings aligned with `src/constants/config.ts`.
