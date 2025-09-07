
# Day 1 — Tailwind CSS Notes

## Overview
- Utility-first approach: small, composable classes.
- Mobile-first responsive design: use `sm:`, `md:`, `lg:` prefixes.

## Key takeaways
1. Build a type scale and color tokens to keep UI consistent.
2. Use utility composition; extract repeated patterns with `@apply` in production builds.

## Example production snippet
```css
/* styles.css */
.btn-primary {
  @apply bg-indigo-600 text-white px-4 py-2 rounded-md shadow;
}
```
