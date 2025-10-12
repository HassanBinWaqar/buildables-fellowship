# CSS – Detailed Notes (Including Tailwind overview)

## 1. Box model & layout primitives
- Box model: content, padding, border, margin.
- `display` values: block, inline, inline-block, flex, grid.
- Flexbox properties: `display:flex; flex-direction; justify-content; align-items; gap; flex-wrap`.
- Grid: `grid-template-columns`, `grid-template-rows`, `grid-auto-flow`, `gap`.

## 2. Advanced selectors & organization
- Attribute selectors: `input[type="text"]`.
- Pseudo-classes (`:hover`, `:focus`) and pseudo-elements (`::before`, `::after`).
- CSS methodology: BEM, modular CSS, utility-first (Tailwind).

## 3. Responsive design
- Mobile-first approach: base styles then `@media (min-width: 640px) { ... }`.
- Use `clamp()` for responsive typography: `font-size: clamp(1rem, 2vw, 1.5rem)`.

## 4. Performance & critical CSS
- Inline critical CSS for above-the-fold content.
- Avoid heavy selectors and excessive repaint triggers (avoid `width` changes; prefer `transform`).

## 5. Tailwind CSS (overview & integration)
- Utility-first framework. Install via npm and configure `tailwind.config.js`.
- Use `@tailwind base; @tailwind components; @tailwind utilities;` in your CSS entry.
- Purge unused CSS in production using `content` option in config.
- Example tailwind class usage:
```html
<div class="max-w-md mx-auto p-4 bg-white shadow rounded">
  <h1 class="text-2xl font-semibold">Hello</h1>
</div>
```

## 6. Accessibility & color contrast
- Test contrast ratios (WCAG AA/AAA).
- Ensure focus states are visible: `:focus { outline: 3px solid ... }`.
