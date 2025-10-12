# HTML – Detailed Notes

## 1. Document structure
- `<!doctype html>` — ensures standards mode.
- `<html lang="en">` + `<head>` + `<body>`.
- Meta tags: `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width,initial-scale=1">`.

## 2. Semantic HTML
- Use `<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>` for accessibility & SEO.
- Example layout:
```html
<header>...</header>
<nav>...</nav>
<main>
  <section>...</section>
</main>
<footer>...</footer>
```

## 3. Forms & Accessibility
- Label inputs: `<label for="email">Email</label><input id="email" />`.
- `aria-*` attributes for assistive tech.
- Use `role` for complex widgets (role="dialog", role="listbox").

## 4. Media & responsiveness
- Images: `<img src="" alt="description">` (always include alt).
- Responsive images: `srcset`, `<picture>`.
- Use `<video>` with captions and `aria` attributes.

## 5. Best practices
- Keep HTML semantic and minimal.
- Defer non-critical scripts: `<script defer src="...">`.
- Prefer progressive enhancement & server-rendered content for SEO.
