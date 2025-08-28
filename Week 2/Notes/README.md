
# 📝 Notes — CSS Grid & Flexbox (Pro)

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Intermediate-blue?style=for-the-badge)
![Focus](https://img.shields.io/badge/Focus-Layouts-orange?style=for-the-badge)

---

## 🎨 Philosophy

- **Grid →** Best for **macro layouts** (page-level regions).
- **Flexbox →** Best for **micro layouts** (component-level alignment).
- Always follow a **mobile-first** approach using `min-width` breakpoints.
- Use **CSS variables** to maintain **consistent themes, spacing, and typography**.

---

## 🧩 Design Tokens

```css
:root {
  --bg: #0b0f14;
  --surface: #0f172a;
  --muted: #08101a;
  --text: #e5e7eb;
  --sub: #9ca3af;
  --accent: #3b82f6;
  --accent-2: #22c55e;

  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;

  /* Radius, shadows & fonts */
  --radius: 12px;
  --shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  --maxw: 1200px;
  --font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
````

> 🎯 **Tip:** Keep your tokens in a central place for **scalable theming**.

---

## 🏗️ Quick Grid Patterns

### 1️⃣ Simple Responsive Columns

```css
.grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
```

---

### 2️⃣ Named Areas for Page Shells

```css
.shell {
  display: grid;
  grid-template-areas:
    "hdr"
    "main"
    "ftr";
}

@media (min-width: 900px) {
  .shell {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "hdr  hdr"
      "main aside"
      "ftr  ftr";
  }
}
```

---

## 📌 Flexbox Cheatsheet

### 1️⃣ Main & Cross-Axis Alignment

```css
.container {
  display: flex;
  justify-content: center; /* main axis */
  align-items: center;     /* cross axis */
}
```

---

### 2️⃣ Wrapping Cards with Equal Gaps

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.card {
  flex: 1 1 clamp(220px, 26%, 360px);
}
```

---

## ♿ Accessibility & Best Practices

* **Skip Link:**

  ```html
  <a class="skip" href="#main">Skip to content</a>
  ```
* **Use Landmarks:** `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
* Maintain **logical tab order**.
* Provide **visible focus states**.
* Use **semantic headings** for better SEO & accessibility.
* Test using:

  * 📱 **Small screens**
  * ⌨️ **Keyboard-only navigation**
  * 🎧 **Screen readers**

---

## 🛠️ Debugging Tips

### 1️⃣ Visualize the Grid

```css
* {
  outline: 1px solid rgba(255, 255, 255, 0.02); /* dev only */
}
```

---

### 2️⃣ Prevent Layout Collapse

```css
.grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

---

## 🚀 Next Steps

* Combine **Grid** for page shells + **Flexbox** for components in **one project**.
* Optimize images for performance.
* Run a **Lighthouse audit** to check:

  * ✅ Accessibility
  * ✅ Performance
  * ✅ Best Practices
  * ✅ SEO

---

> **“Design for the user first, code for the browser second.”**
> — *Every Frontend Dev Ever* 😎

---

## 📚 References

* [📘 CSS Grid Guide — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [📘 Flexbox Guide — MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
* [🎨 CSS Variables — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* [🔥 Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [🔥 Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

