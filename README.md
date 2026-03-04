# majadly.github.io

Personal GitHub Pages user site, published at **https://salahmajadly.github.io**.

---

## File structure

```
majadly.github.io/
├── index.html                          ← Homepage / entry point
├── .nojekyll                           ← Disables Jekyll; enables plain static output
├── assets/
│   ├── styles.css                      ← Shared responsive styles
│   └── site.js                         ← Progressive-enhancement scripts (nav toggle, TOC highlight)
├── articles/
│   └── multiple-player-types.html      ← Article: Multiple Player Types
└── README.md
```

---

## GitHub Pages setup

1. Go to **Settings → Pages** in this repository.
2. Under **Source**, choose **Deploy from a branch**.
3. Select branch **`main`** (or `master`) and folder **`/ (root)`**.
4. Click **Save**.  GitHub will publish the site within a minute or two.

The `.nojekyll` file ensures GitHub Pages serves the static HTML files directly without
running them through the Jekyll processor.

---

## Adding new articles

1. Create a new HTML file inside the `articles/` directory, e.g. `articles/my-new-article.html`.
2. Copy the structure from `articles/multiple-player-types.html` as a starting template.
3. Update the `<title>`, `<meta name="description">`, breadcrumb, and article content.
4. Add a new `<article class="card">` entry in `index.html` pointing to the new file.
5. All asset paths in `articles/` must use `../assets/` (one level up).

## Adding new sections to an article

1. Add a new `<section class="article-section" id="my-section">` block inside the
   `<article class="article-body">` element.
2. Give the heading an `id` matching the section `id` (e.g. `id="my-section-heading"`).
3. Add a corresponding `<li><a href="#my-section">…</a></li>` entry in the `.toc ol`.
4. The sticky TOC sidebar will automatically highlight the active section as the reader scrolls.
