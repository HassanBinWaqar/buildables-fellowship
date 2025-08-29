# Day 2 — Responsive Website

## Philosophy
- **Mobile-first** with `@media (min-width: …)` breakpoints.
- Prefer **fluid** values (`clamp()`, `%`, `vw`) over hard pixels.
- Use **content-out** breakpoints (where layout breaks), not device sizes.
- Keep **layout (Grid)** separate from **components (Flexbox)**.

## Design Tokens (example)
```css
:root{
  --bg:#0b0f14; --surface:#0f172a; --text:#e5e7eb; --sub:#9ca3af;
  --accent:#3b82f6; --accent-2:#22c55e;
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-6:24px; --space-8:32px; --space-12:48px;
  --radius:14px; --shadow:0 12px 30px rgba(0,0,0,.28);
  --maxw:1200px;
  --font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --fs-1: clamp(0.875rem, 1vw, 1rem);
  --fs-2: clamp(1rem, 1.8vw, 1.25rem);
  --fs-3: clamp(1.25rem, 2.4vw, 1.625rem);
  --fs-4: clamp(1.5rem, 3vw, 2rem);
}
```

## Media Query Patterns
```css
/* Mobile-first */
.card { padding: var(--space-4); }
@media (min-width: 768px){ .card { display:grid; grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px){ .card { grid-template-columns: 2fr 1fr; } }
```

## Fluid Typography
```css
h1 { font-size: clamp(28px, 4vw, 56px); }
p  { font-size: clamp(14px, 1.2vw, 18px); }
```

## Container Queries (progressive enhancement)
```css
/* Works in modern browsers */
.card { container-type: inline-size; }
@container (min-width: 520px) {
  .card .meta { display:flex; gap: var(--space-3); }
}
```

## Accessibility Checklist
- Use **semantic landmarks**: `<header> <nav> <main> <footer>`.
- Provide a **skip link**.
- Ensure **focus states** are visible and contrast meets **WCAG AA**.
- Images: `alt` for meaning, empty `alt` for decorative.
- Test with **keyboard only** and small screens.

## Debugging
```css
/* visualize layout quickly — remove before production */
* { outline: 1px solid rgba(255,255,255,.02); }
```
