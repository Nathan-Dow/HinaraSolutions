# Hinara Solutions Website

Agency landing page targeting Philippine MSMEs, built with React + Vite. Bootstrapped via Google AI Studio; designed for Cloud Run deployment.

## Tech Stack

| Layer | Tool |
|-------|------|
| UI | React 19, TypeScript 5.8 |
| Build | Vite 6 + `@vitejs/plugin-react` |
| Styling | Tailwind CSS 4 (Vite plugin, no config file) |
| Animation | `motion/react` (Framer Motion v12) |
| Icons | `lucide-react` |
| AI | `@google/genai` (Gemini) |
| Backend | Express 4 (optional, not yet wired) |

## Project Structure

```
src/
  App.tsx        # All page sections as colocated components
  main.tsx       # React entry point
  index.css      # Tailwind import + @theme design tokens
index.html       # Vite HTML entry
vite.config.ts   # Build config, path alias @/, env injection
.env.example     # Required env vars
```

No `components/`, `pages/`, or `hooks/` directories — everything lives in `src/App.tsx`.

## Commands

```bash
npm run dev      # Dev server → http://localhost:3000
npm run build    # Production build → dist/
npm run preview  # Serve dist/ locally
npm run lint     # TypeScript type-check (tsc --noEmit)
npm run clean    # rm -rf dist
```

## Environment Variables

See `.env.example`. Vite injects `GEMINI_API_KEY` at build time via `vite.config.ts:11`.

| Variable | Purpose |
|----------|---------|
| `GEMINI_API_KEY` | Google Gemini AI API |
| `APP_URL` | Deployment URL (injected by Cloud Run) |

## Design Tokens

All tokens defined in `src/index.css:4-15` via Tailwind's `@theme` directive — no separate config file.

- Colors: `brand-primary` (#a0ffc3), `brand-accent` (#22c55e), `brand-dark` (#0f172a)
- Fonts: `font-headline` (Space Grotesk), `font-body` (Manrope), `font-label` (Inter)

## Known TypeScript Gotchas

- **React 19 refs**: `useRef<HTMLElement>(null)` returns `RefObject<HTMLElement | null>`. Any function that accepts a ref must be typed `RefObject<HTMLElement | null>`, not `RefObject<HTMLElement>`.
- **Framer Motion `viewport`**: The `viewport` prop does not accept a `delay` field — put animation delays in the `transition` prop instead.
- **EmailJS env vars** (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) are not yet documented in `.env.example` — add them before deploying the contact form.

## Additional Documentation

Check these when relevant:

- [`.claude/docs/architectural_patterns.md`](.claude/docs/architectural_patterns.md) — Component structure, animation conventions, styling patterns, and design decisions
- [`docs/progress.md`](docs/progress.md) — Session-by-session work log
