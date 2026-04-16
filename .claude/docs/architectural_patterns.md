# Architectural Patterns

## Component Architecture

**Single-file colocation** — all page sections live in `src/App.tsx` as named function components with no separate files. Components are declared in render order: `Navbar`, `Hero`, `Services`, `Mission`, `Booking`, `Footer`, then composed in a root `App`.

There is no router, no lazy loading, and no code splitting. Adding new sections means adding a new function component in `src/App.tsx` and rendering it inside `App`.

## Animation Convention

All animations use `motion/react` (Framer Motion v12). Two distinct patterns are used:

**Entrance animations** (run once on page load) — `src/App.tsx:43-50`
```
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```
Stagger delay is applied via `transition.delay` incremented by `0.2s` per element within a section.

**Scroll-triggered animations** (run once when element enters viewport) — `src/App.tsx:127-148`
```
initial={{ ... }}
whileInView={{ ... }}
viewport={{ once: true }}
```
Used for cards, progress bars, and off-screen elements. Always set `viewport={{ once: true }}` to avoid re-triggering.

**Hover interactions** use `whileHover` (`y: -5` lift) or Tailwind's `hover:` utilities — prefer `whileHover` for motion-based transforms, Tailwind for color/shadow.

## Styling Patterns

**Design tokens** are defined once in `src/index.css:4-15` using Tailwind 4's `@theme` directive. All brand values (`brand-primary`, `brand-accent`, etc.) come from there — do not hardcode hex values in components.

**Font utilities** follow a semantic role pattern:
- `font-headline` — section titles, nav links, buttons
- `font-body` — body copy, descriptions
- `font-label` — eyebrow labels, form labels, badges

**Eyebrow labels** (section pre-headers) follow a consistent pattern — `src/App.tsx:117`:
```jsx
<span className="text-sm font-label tracking-[0.3em] text-brand-accent uppercase font-bold mb-4 block">
  Section Name
</span>
```

**Section layout shell** — every section uses the same wrapper pattern:
```jsx
<section className="py-32 px-6 bg-[brand-surface | brand-surface-low | white]">
  <div className="max-w-7xl mx-auto">
    {/* content */}
  </div>
</section>
```
Sections alternate between `bg-white` and `bg-brand-surface-low` for visual separation.

**Decorative blur orbs** — used in Hero and Booking for ambient glow (`src/App.tsx:87-88`):
```jsx
<div className="absolute -z-0 top-1/4 -right-20 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
```

## Data Pattern for Repeated UI

Arrays of objects are defined at the top of a component, then `.map()`'d into JSX — `src/App.tsx:94-110`. This is the preferred pattern for cards, feature lists, etc. rather than repeating JSX blocks.

## Form Inputs

All form fields in `Booking` (`src/App.tsx:216-278`) are uncontrolled — no `useState`, no `onChange`. If form submission logic is added, introduce controlled state or a form library (React Hook Form recommended) at that point.

## Environment / Build

`GEMINI_API_KEY` is injected at build time via `vite.config.ts:11` using `define`. It is available as `process.env.GEMINI_API_KEY` in client-side code. Do not add other secrets via this mechanism — they will be bundled into the client JS.

The `@` path alias resolves to the project root (`vite.config.ts:14`), so imports can use `@/src/...`.
