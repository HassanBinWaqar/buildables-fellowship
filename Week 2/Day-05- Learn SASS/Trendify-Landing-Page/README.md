# Trendify — Landing Page (SASS Demo)

A modern, responsive landing page built with **SASS** showcasing real-world usage of **variables, mixins, functions, loops, partials (7–1 pattern), and theming**.

## ✨ Highlights
- 7–1 SASS architecture for scalability.
- Dark/Light mode via theme partials.
- Responsive grid with mixins.
- Utility classes generated via loops and functions.
- Reusable components (buttons, cards, navbar, footer).
- Precompiled `css/main.css` included (no build step required to preview).

## 📂 Structure
```
scss/
  abstracts/   # variables, mixins, functions
  base/        # reset, typography, utilities
  components/  # buttons, cards, navbar, footer
  layout/      # header, grid, sections
  themes/      # light & dark
  vendors/     # third-party (placeholder)
  main.scss    # entry
css/
  main.css     # compiled CSS (prebuilt)
index.html
README.md
```

## 🚀 Run Locally
Just open `index.html` in your browser. The page will use `css/main.css` which is already included.

## 🛠️ Recompile SASS (optional)
If you want to change styles and recompile:

```bash
# Install SASS (if not installed)
npm install -g sass

# From the project root
sass scss/main.scss css/main.css --style=compressed --no-source-map --watch
```

## 🧪 What to Review (for Leads)
- Consistent design tokens in `scss/abstracts/_variables.scss`
- Mixins for responsive design & buttons in `scss/abstracts/_mixins.scss`
- Function & loops for utilities in `scss/abstracts/_functions.scss` and `scss/base/_utilities.scss`
- Theming in `scss/themes/_light.scss` and `scss/themes/_dark.scss`
- Componentization in `scss/components/*`

## 📸 Suggested Enhancements
- Add more sections (testimonials, newsletter, FAQ).
- Extract a color system (HSL with computed shades).
- Add CSS logical properties for RTL support.

---

Built for **Week 02 (Day 5): Learn SASS** to demonstrate professional, production‑minded styling practices.
