# Day 2 — CSS Fundamentals (Selectors, Box Model, Flexbox, Typography)

## Overview
Day 2 consolidates the core CSS ideas I’ll use every day: selectors & specificity, the box model, flexible layouts, and fluid typography. I practiced with four mini exercises and shipped a small component library project.

## Table of Contents
- [Key Concepts](#key-concepts)
- [How CSS Applies](#how-css-applies)
- [Selectors & Specificity Cheatsheet](#selectors--specificity-cheatsheet)
- [Box Model Cheatsheet](#box-model-cheatsheet)
- [Flexbox Quick Guide](#flexbox-quick-guide)
- [Fluid Typography](#fluid-typography)
- [Common Pitfalls](#common-pitfalls)
- [My Notes & Snippets](#my-notes--snippets)
- [References](#references)
- [Reflection](#reflection)
- [Changelog](#changelog)

## Key Concepts
- **Cascade & Specificity:** Order matters; more specific rules win. Later rules of equal specificity override earlier ones.
- **Separation of Concerns:** Write semantic HTML, keep presentation in CSS.
- **Reusability:** Variables, utility classes, and consistent scales for spacing/typography.

## How CSS Applies
1. **Inline** (`style=""`) — quick demos only.
2. **Internal** (`<style>`) — single-file prototypes.
3. **External** (`.css` file + `<link>`) — production-ready (preferred).

## Selectors & Specificity Cheatsheet
- Type: `h1` (0,0,0,1)
- Class/attr/pseudo-class: `.card`, `[data-x]`, `:hover` (0,0,1,0)
- ID: `#hero` (0,1,0,0)
- Inline style: (1,0,0,0)
- `!important` beats normal flow (use sparingly).

**Tips:** Prefer classes. Avoid deep descendant chains like `.a .b .c h2`.

## Box Model Cheatsheet
- **Content ➜ Padding ➜ Border ➜ Margin**.
- Use `* { box-sizing: border-box; }` so width includes padding & border.
- **Margin collapse** happens vertically between blocks; padding/border prevent it.

## Flexbox Quick Guide
- Parent: `display: flex;`
- Axis: `flex-direction: row|column`
- Spacing: `gap`, `justify-content`, `align-items`
- Growth: `flex: 1` to fill available space.

## Fluid Typography
- Use relative units: `rem`, `%`.
- Scale headings with `clamp(min, pref, max)`.
- Keep `line-height` readable (`1.4–1.7` for body).

## Common Pitfalls
- Overusing IDs in CSS.
- Magic numbers for spacing — define a scale (8px multiples).
- Hiding content with `display:none` without considering accessibility.
- Forgetting responsive breakpoints / mobile-first approach.

## My Notes & Snippets
```css
/* Reset + box sizing */
*{ box-sizing:border-box } html,body{ margin:0 }

/* Container utility */
.container{ width:min(1100px, 92%); margin-inline:auto; }

/* Button starter */
.btn{
  display:inline-block; padding:.6rem .9rem; border-radius:.6rem;
  background:#111; color:#fff; text-decoration:none;
}
.btn:is(:hover,:focus){ background:#3b82f6; }

/* Fluid type */
h1{ font-size:clamp(1.8rem, 1.2rem + 2vw, 3rem); }
