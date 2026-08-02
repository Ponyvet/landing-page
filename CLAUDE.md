# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing landing page for Ponyvet, a mobile veterinary service in San Salvador, Hidalgo, Mexico. Built with Astro, no client-side JS framework — content is server-rendered/static, interactivity is done with pure CSS (`:has()`, `:checked`) where possible. Site copy is in Spanish.

## Commands

Package manager is pnpm (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

```
pnpm install   # install dependencies
pnpm dev       # dev server at http://localhost:4321
pnpm build     # runs `astro check` then `astro build` -> dist/
pnpm preview   # serve the production build locally
```

There is no separate lint or test command. Prettier is configured (`.prettierrc`, with `prettier-plugin-astro`) but not wired to an npm script — run `pnpm exec prettier --write .` if formatting is needed. Always run `pnpm build` before considering a change done, since it type-checks `.astro` files via `astro check`.

## Architecture

**Single-page site.** `src/pages/index.astro` is the only page. It imports `src/data/company-info.json` once and passes slices of it down as props to a fixed sequence of section components (`Hero`, `HighlightsSection`, `ServiceCatalogSection`, `HowItWorksSection`, `BenefitsSection`, `CoverageSection`, `FinalCTA`), wrapped by `SiteHeader`/`SiteFooter` and `src/layouts/Layout.astro`.

**Content is data-driven.** All business copy — company description, service hours, coverage areas, the full service catalog, contact info, stats — lives in `src/data/company-info.json`, not hardcoded in components. When asked to update site text, phone numbers, coverage zones, or the service list, edit this JSON rather than the `.astro` files. Components read fields like `company.highlights`, `company.servicesCatalog`, `contact.whatsapp.link`, etc.

**Design system lives in `Layout.astro`.** All color, spacing, typography, radius, shadow, and motion tokens are global CSS custom properties defined once in `src/layouts/Layout.astro` (`--pv-teal-*`, `--pv-navy-*`, `--pv-gold-*` brand scale, plus semantic tokens like `--primary`, `--background`, `--border`, `--radius-*`, `--shadow-*`, `--text-*`, `--weight-*`). Every component styles itself with `<style>` blocks that reference these variables — there is no Tailwind/utility framework. New UI should reuse existing tokens rather than introducing new hardcoded values.

**`src/components/ui/` holds primitives** (`Button`, `Card`/`CardHeader`/`CardTitle`/`CardDescription`/`CardContent`, `Section`, `SectionTitle`, `Badge`, `Separator`, `IconCircle`, `IconRow`) analogous to a shadcn-style kit, but hand-rolled as Astro components with scoped `<style>` blocks (see `Button.astro`, `Section.astro`). `src/components/*.astro` (non-`ui`) are page-section components composed from those primitives plus data from `company-info.json`.

**Icons go through `src/components/Icon.astro`**, a typed wrapper around `@lucide/astro` icons with a fixed `icons` name→component map — add new icons there, not via ad-hoc `@lucide/astro` imports elsewhere. Brand icons (WhatsApp, Facebook) use `astro-icon`'s `simple-icons:*` set instead (see the `brandIcons` map in `Button.astro`).

**Import alias:** `@components/*` maps to `src/components/*` (configured in both `astro.config.mjs` and `tsconfig.json`). Use it instead of relative `../../components` paths.

**Interactivity without JS:** e.g. `ServiceCatalogSection.astro` implements a tabbed species filter using hidden radio inputs + CSS `:has()` selectors rather than a script — follow this pattern for similar UI state before reaching for client-side JavaScript.

**TypeScript:** `astro/tsconfigs/strict` is extended. Components typically type their props with a local `interface Props` (or an inline destructure with defaults) read from `Astro.props`.
