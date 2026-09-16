# firdavs.dev

Personal portfolio and product showcase for Firdavs Mutalipov — full-stack
developer in Seoul. Built with React, TypeScript, Vite, and Tailwind.

## Running locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type-check, then produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run type-check` | TypeScript, no emit |
| `npm run lint` | ESLint, zero warnings tolerated |
| `npm run deploy` | Build and reload nginx |

## Design system

Colour, typography, and theme logic live in `src/design/`:

- `tokens.ts` — the light and dark palettes. The single source of colour truth;
  `tailwind.config.ts` imports it. Every text/background pair is asserted
  against WCAG AA in `tokens.test.ts`.
- `typography.ts` — display font per locale. Fraunces carries no Korean
  glyphs, so Korean uses Noto Serif KR.
- `contrast.ts` — WCAG AA contrast validation. Colours are validated against
  it in `tokens.test.ts`.
- `theme.ts` — theme resolution, kept DOM-free so it survives prerendering.

Colours reach components as Tailwind utilities backed by CSS variables:
`bg-surface`, `text-ink`, `text-muted`, `text-accent`, `border-line`.

## Languages

Three locales: English, Korean, Uzbek. Uzbek is written in Latin script and
shares the English font stack.

## Documentation

- Design spec: `docs/superpowers/specs/2026-09-16-portfolio-redesign-design.md`
- Implementation plans: `docs/superpowers/plans/`
