# HTML5: Concepts & Best Practices

## The Document Foundation
Every web page is built on a simple, required structure. The `<!DOCTYPE html>` declaration ensures browsers use modern standards mode.

```html
<!DOCTYPE html>
<html lang="en"> <!-- The `lang` attribute is crucial for accessibility -->
<head>
    <meta charset="UTF-8"> <!-- Defines character encoding for proper text rendering -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- The cornerstone of responsive design -->
    <title>Page Title | Site Name</title> <!-- Important for SEO, bookmarks, and browser history -->
</head>
<body>
    <!-- The visible content starts here -->
</body>
</html>


The Power of Semantic Elements
Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. This is a significant shift from the old days of generic <div> and <span> tags.

<header>: Represents introductory content, typically a group of navigational aids. It can be used for the global page header or within an <article>.

<nav>: Defines a major block of navigation links.

<main>: Specifies the primary, unique content of the document. There should be only one.

<article>: Encloses a self-contained composition that could be independently distributable (e.g., blog post, news story).

<section>: A thematic grouping of content, which typically deserves its own heading.

<aside>: Content tangentially related to the content around it, often represented as sidebars.

<footer>: Represents a footer for its nearest sectioning content.

Why It Matters: Semantic markup improves SEO by helping search engines understand your content. More importantly, it provides a built-in accessibility tree for screen readers, allowing users to navigate by landmarks (e.g., "jump to main content").



Crafting Accessible Forms
Forms are the primary way users interact with a site. A poorly built form is a barrier to entry.

The Label-Input Bond: The most critical rule. Every form field must be explicitly associated with a <label>.


<!-- ✅ Correct: The `for` and `id` attributes create an unbreakable connection. -->
<label for="user-email">Email Address</label>
<input type="email" id="user-email" name="email" required>

<!-- ❌ Incorrect: The label is visually nearby but functionally useless to assistive tech. -->
<label>Email:</label>
<input type="email">

Grouping Related Controls: Use <fieldset> and <legend> to create a logical group, especially for radio buttons and checkboxes. This provides crucial context.

<fieldset>
    <legend>Preferred Communication Method</legend> <!-- Describes the purpose of the group -->

    <input type="radio" id="com-email" name="communication" value="email">
    <label for="com-email">Email</label>

    <input type="radio" id="com-phone" name="communication" value="phone">
    <label for="com-phone">Phone</label>
</fieldset>

Essential Elements
Headings: Use <h1> through <h6> to create a logical document outline. Do not skip levels.

Images: The alt attribute is non-negotiable. It provides a text alternative if the image fails to load and is read aloud by screen readers. <img src="logo.png" alt="Buildables Company Logo">

Links: Use descriptive text for anchor tags. Avoid "click here."


